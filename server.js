import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const whiteList = ["http://localhost:3000", "http://localhost:5173","https://notsorry.dooreplay.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
console.log("000")
console.log(process.env.MONGODB_URI,'mg')
const mongoUri = process.env.MONGODB_URI;

const client = new MongoClient(mongoUri);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB.");

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Express 서버 시작
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

run().catch(console.dir);

app.get("/count", async (req, res) => {
  try {
  const db = client.db(process.env.MONGODB_DB_NAME);
  const collection = db.collection("counts");
  const doc = await collection.findOne({ count: { $exists: true } });

  if (!doc) {
      res.status(404).send("Count not found");
      return;
    }
    res.send({ count: doc.count });
  } catch (err) {
    res.status(500).send("Error accessing database");
  }
});

app.post("/count/increment", async (req, res) => {
  try {
    const db = client.db(process.env.MONGODB_DB_NAME);
    const collection = db.collection("counts");

    await collection.updateOne(
      { count: { $exists: true } }, 
      { $set: { count: req.body.count } },
      { upsert: true }
    );
    
    res.status(200).json({ count: req.body.count });
  } catch (err) {
    res.status(500).send("Error accessing database");
  }
});
