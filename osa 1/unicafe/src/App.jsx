import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr value={props.value}>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )  
} 

const Statistics = ({good, neutral, bad}) => {
  console.log({good, neutral, bad})
  const sum = good + neutral + bad 
  if (sum === 0) {
   return(
   <div>
      <p>No feedback given</p>
    </div>
   )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={good + neutral + bad} />
        <StatisticLine text="average" value ={((good + (bad * -1)) / sum).toFixed(2)} />
        <StatisticLine text="positive" value ={(good / sum * 100).toFixed(1) + "%"} /> 
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plus = () => setGood(good + 1)
  const minus = () => setBad(bad + 1)
  const meh = () => setNeutral(neutral + 1)

  const props = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

  const sum = Statistics(props)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={plus}>
        good
      </button>
      <button onClick={meh}>
        neutral
      </button>
      <button onClick={minus}>
        bad
      </button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

export default App
