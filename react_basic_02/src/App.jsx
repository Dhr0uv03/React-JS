import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15) 

  // let counter = 15

   function addValue () {
   counter = counter + 1
   console.log("clicked" , counter);
   setCounter(counter)
    
  }

  function removeValue(){
    if (counter>0) {counter = counter - 1
    console.log("clicked" , counter);
    setCounter(counter)}
    else{
          console.error("value cannot be negative");
    }
  }
 
  return (
    <>
        <h1> Dhruv </h1>
        <h2>Counter value : {counter}</h2>

        <button onClick = {addValue}>Add Value {counter}</button>
        <br /><br />
        <button onClick = {removeValue}>Remove Button {counter}</button>
        <br />
        </>
  ) 
}

export default App       