import "./index.scss"

type TerminalProps = {
  count: number
}

const Terminal = ({ count }: TerminalProps) => {
  return (
    <div class="terminal">
      <div class="header">
        <div class="header__red circle" />
        <div class="header__yellow circle" />
        <div class="header__green circle" />
        <span>never_ending_sorry -- -zsh </span>
      </div>
      <div class="content">
        <h1>$ Never Ending Sorry</h1>
        <span>console.log(total_sorry)</span>
        <span class="count">{">"} {count}</span>
      </div>
    </div>
  )
}

export default Terminal