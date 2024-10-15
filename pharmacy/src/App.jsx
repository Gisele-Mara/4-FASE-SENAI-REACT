import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Senhas from './components/Senhas/Senhas'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainApp'>
        {/* < Header />
        < Body /> */}
        <Home />
        {/* <Senhas/> */}
      </div>
      
    </>
  )
}

export default App
