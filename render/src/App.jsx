import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Login from './pages/Login'

function App() {

  const [page, setPage] = useState (<Home/>)



  return (
    <>

    <nav>
      <button onClick={() =>  setPage(<Home/>)}> Home</button>
      <button onClick={() => setPage(<Login/>)}>Login</button>
      <button onClick={() =>  setPage(<Faq/>)}>FAQ</button>

    </nav>

    {page}
  
   
    </>
  )
}

export default App
