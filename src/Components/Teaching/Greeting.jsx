const Greeting = () => {

const greetingMessage = "Hello, I'm a React Component!"
const date = new Date()
  return (
    <div>
        <h1>{ greetingMessage }</h1>
        <p>Date: { date.toLocaleDateString() }</p>
    </div>
  )
}

export default Greeting