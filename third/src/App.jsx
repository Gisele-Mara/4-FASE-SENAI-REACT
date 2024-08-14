import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function clickButton(){
    setCount(count + 1)
    
    
  }
  return (
    <>
      <h1> HEY </h1>
      <button onClick={clickButton}> Click </button>
      <p>{count}</p>
      <img src="src/assets/leaves-svgrepo-com (1).svg"/>
    </>
  )
}

export default App
