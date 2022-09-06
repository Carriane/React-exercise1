/* Header Renders the name*/
const Header = (props) => {
  return (
    <div>
      <p>
        <h1>The course consists of {props.course}</h1>
      </p>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
        <h2>Part 1: {props.p} </h2>
        <h3>Exercise 1: {props.ex1} </h3>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
        <h2>Part 2: {props.p2}  </h2>
        <h3>Exercise 2: {props.ex2}</h3>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
        <h2>Part 3: {props.p3} </h2>
        <h3>Exercise 3: {props.ex3}</h3>
    </div>
  )
}
/* Content renders the parts and the number of exercises*/
const Content = () => {
  return (
    <div>
      <Part1  p1={App.part1} ex1={App.exercises1} />
      <Part2  p2={App.part2} ex2={App.exercises2} />
      <Part3  p3={App.part3} ex3={App.exercises3} />
    </div>
  )
}

/* Total renders the total number of exercises*/
const Total = (props) => {
  return (
    <div>
        <h3> {props.total} </h3>
    </div>
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
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
        <Header course={course} />
        <Content />
        <Total total={total} />
    </div>
  )
}

export default App