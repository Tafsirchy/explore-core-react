
import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <MyPet></MyPet>
      <Person></Person>
      <MyPet1></MyPet1>
      <Person></Person>
      <MyPet2></MyPet2>

      <Sports></Sports>
      <Sports2></Sports2>

    </>
  )
}

function Person() {
  const name = "John Doe";
  const age = 30;
  return (
    <p>I am {name}. I am {age} years old </p>
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
