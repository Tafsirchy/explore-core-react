
import './App.css'

function App() {
  

  return (
    <>
      <h1>React Core Concept</h1>
      <Person></Person>
      <Student></Student>
      <Developer name="Tafsir" tech="JS"></Developer>
      <Developer name="Sagor" tech="python"></Developer>
      <Developer name="Sakib" tech="C#"></Developer>
      <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="35000"></Device>
      <Device name="Watch" price="2000"></Device>
      <Salami event="Rojar Eid" taka="2000"></Salami>
      <Salami event="A+ Paichi" taka="2000"></Salami>
      <Salami event="A+ Paichi" ></Salami>

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

function Salami({event, taka = "1000"}) {
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
