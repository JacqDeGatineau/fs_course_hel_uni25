const Header = ({name}) => {
  console.log({name})
  return(
    <div>
      <h1> 
        {name}
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
    const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />

      <Content parts={course.parts} />

      <Total parts ={course.parts} />
    </div>
  )
}

export default App
