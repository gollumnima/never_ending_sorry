import { useEffect, useState } from "preact/hooks";
import Button from './button/index.tsx'
import Terminal from "./terminal/index.tsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL

export function App() {
  const [count, setCount] = useState(0);
  const getCount = async () => {
    try {
      const response = await fetch(`${baseUrl}/count`)
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error(error)
    }
  }

  const increaseCount = async () => {
    try {
      const updatedCount = count + 1
      setCount(updatedCount)

      const response = await fetch(`${baseUrl}/count/increment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: updatedCount })  
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Failed to increase count:', error);
    }
  };  

  useEffect(() => {
    ;(()=> getCount())()
  }, [])

  return (
    <>
    <Terminal count={count} />
    <Button increaseCount={increaseCount} />
    </>
  );
}
