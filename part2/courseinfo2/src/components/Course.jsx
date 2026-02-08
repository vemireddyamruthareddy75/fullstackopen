import {useState} from 'react'
const Header =(props) =>{
  console.log(props)
  return (
    <>
     <h2>{props.course}</h2> 
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
const Content = ({parts}) => {
  console.log(parts)
return (
    <>
    {parts.map((part) => (
      <Part key={part.id} title={part.name} exercise={part.exercises} />
    ))}
     
    </>
  )
  
}
const Total = ({parts}) => {
  console.log(parts)
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <>
      <p> Total of {total} exercises</p>
    </>
  )
}
const Course = ({ course }) => {
  console.log(course)
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
export default Course