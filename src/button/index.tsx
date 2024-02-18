import './index.scss'

type ButtonProps = {
  increaseCount: () => void
}

const Button = ({ increaseCount }: ButtonProps) => {
  return (
    <div class="keyboard">
      <button class="button" onClick={increaseCount}>
        <div class="button__content">
          <div class="button__icon">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="80px"
              height="80px"
              viewBox="0 0 80 80"
              style={{ "enable-background": "new 0 0 80 80"}} 
            >
              <g>
                <path
                  d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16
          S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98
          c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8
          s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72
          c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8
          h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <p class="button__text">Sorry</p>
        </div>
      </button>
      {/* <p class="credits">
        Thanks to{" "}
        <a href="https://twitter.com/pwign" class="credits__reference">
          Anh
        </a>
        {" "}for the inspiration
      </p> */}
    </div>
  )
}

export default Button