import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15);
const addValue=()=>{
  // counter=counter+1;  counter will not update like this.
  console.log("Value Added");
  if(counter<20)
   {
    setCounter(counter+1)
   }
}

let removeValue=function()
{
  console.log("Value Removed");
  if(counter>0)
  {
     setCounter(counter-1);
  }
  
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2> Counter value :{counter}</h2>
      <button
        onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
