import { useState } from 'react'

const Statistics = (props) => {
  console.log(props)
  const sum = props.good + props.neutral + props.bad
  const avrg = (props.good + props.neutral + props.bad) / Object.keys(props).length
  const pos = props.good / sum * 100
   
  console.log(sum)

  if (sum === 0) {
   return(
   <div>
      <p>No feedback given</p>
    </div>
   )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {sum}</p>
      <p>average {avrg}</p>
      <p>positive {pos}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = Statistics(good)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good +1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral +1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad +1)}>
        bad
      </button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

export default App