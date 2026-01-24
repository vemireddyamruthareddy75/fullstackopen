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
      <Part title={props.title1} exercise={props.ex1} />
      <Part title={props.title2} exercise={props.ex2} />
      <Part title={props.title3} exercise={props.ex3} />
    </>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <>
      <p> Number of exercises = {props.Number} </p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content  title1={part1 } ex1={exercises1 } 
        title2={part2} ex2={exercises2 }
        title3={part3} ex3={exercises3} />
      <Total Number ={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App

