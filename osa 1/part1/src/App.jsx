const Header = ({course}) => {
  console.log({course})
  return(
    <div>
      <h1> 
        {course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      {props.parts.map((part, index) => 
      <Part key={index} part={part.name} exercise={part.exercise} />
      )}
    </div>
  )
}
const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <div>
      <p> 
        Number of exercises {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts ={parts} />
    </div>
  )
}

export default App
