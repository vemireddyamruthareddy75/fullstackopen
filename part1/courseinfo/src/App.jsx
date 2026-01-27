const Header =(props) =>{
  console.log(props)
  return (
    <>
     <h1>COURSE : {props.course}</h1> 
    </>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.title} - {props.exercise}
      </p>
    </>
  )
}
const Content = (props) => {
  console.log(props)
return (
    <>
      <Part title={props.parts[0].name} exercise={props.parts[0].ex} />
      <Part title={props.parts[1].name} exercise={props.parts[1].ex} />
      <Part title={props.parts[2].name} exercise={props.parts[2].ex} />
     
    </>
  )
  
  
}
const Total = (props) => {
  console.log(props)
  return (
    <>
      <p> Number of exercises = {props.parts[0].ex+props.parts[1].ex+props.parts[2].ex} </p>
    </>
  )
}

  const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        ex: 10
      },
      {
        name: 'Using props to pass data',
        ex: 7
      },
      {
        name: 'State of a component',
        ex: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content  parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

