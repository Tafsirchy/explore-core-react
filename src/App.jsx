
import './App.css'
import ToDo from './ToDo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';


function App() {
  // const time = 50;

  const actors = ['Bappa Raj', 'Omar Sani', 'Salman Shah', 'Riaz', 'Jalil'];

  const singers = [
    { id: 1, name: 'A.R.Rahman', age: 50 },
    { id: 2, name: 'Atif Aslam', age: 40 },
    { id: 3, name: 'Arijit Singh', age: 35 },
  ];

  const books = [
    { id: 1, name: 'JavaScript', price: 500 },
    { id: 2, name: 'React', price: 300 },
    { id: 3, name: 'Node', price: 400 },
    { id: 4, name: 'MongoDB', price: 200 },
  ]

  return (
    <> 
      <h1>React Core Concept</h1>
      
      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}

      {/* {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      } */}

      <Library books={books}></Library>

      {/* <ToDo task="Learn React" isDone={true} time=""></ToDo>
      <ToDo task="Revised JS" 
            isDone={false} 
            time={time}></ToDo>
      <ToDo task="Take a shower" 
            isDone={true} 
            time={time}></ToDo> */}
      {/* <Person></Person>
      <Student></Student>
      <Developer name="Tafsir" tech="JS"></Developer>
      <Developer name="Sagor" tech="python"></Developer>
      <Developer name="Sakib" tech="C#"></Developer>
      <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="35000"></Device>
      <Device name="Watch" price="2000"></Device>
      <Salami event="Rojar Eid" taka="2000"></Salami>
      <Salami event="A+ Paichi" taka="2000"></Salami>
      <Salami event="A+ Paichi" ></Salami> */}

      {/* <Person></Person>
      <MyPet></MyPet>
      <Person></Person>
      <MyPet1></MyPet1>
      <Person></Person>
      <MyPet2></MyPet2>

      <Sports></Sports>
      <Sports2></Sports2> */}

    </>
  )
}

function Person() {
  const name = "John Doe";
  const age = 30;

  const personStyle = {
    color: "red",
    backgroundColor: "yellow",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
  }

  return (
    <p style={personStyle} >I am {name}. I am {age} years old </p>
  )
}

// const {name, tech} = {name: "Tafsir", age: 30, tech: "JS"}

function Developer({name, price}) {
  // console.log(props);
  return (
  <div style={{
        border: "2px solid saffron",
        borderRadius: "20px",
      }}>
    <h4>Developer: {name} </h4>
    <p>Technology: {price} </p>
  </div>
  )
}

function Salami({event, taka = "0"}) {
  const salamiStyle = {
    border: "2px solid green",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px"
  }
  return (
    <div style={salamiStyle}>
      <h2>Amar Salami Daw</h2>
      <h3>Salami For: {event} </h3>
      <p>Amount: {taka} </p>
    </div>
  )
}

function Device(props) {
  return(
    <div style={{
      border: "2px solid blue",
      borderRadius: "20px",
      margin: "20px",
    }}>
      <h2>Device: {props.name} </h2>
      <p>Price: {props.price} </p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Sports() { 
  return (
    <div>
      <h2>Cricket</h2>
      <p>Playing and losing</p>
      <ul>
        <li>T20</li>
        <li>ODI</li>
        <li>Test</li>
      </ul>
    </div>
  )
}

function Sports2() {
  return (
    <div>
      <h2>Football</h2>
      <p>Playing and losing</p>
      <ol>
        <li>World cup</li>
        <li>UEFA</li>
        <li>La liga</li>
      </ol>
    </div>
  )
}

function MyPet() {
  return(
    <div>
      <p>Cat</p>
    </div>
  )
}
function MyPet1() {
  return(
    <div>
      <p>Dog</p>
    </div>
  )
}
function MyPet2() {
  return(
    <div>
      <p>Puppy</p>
    </div>
  )
}
export default App
