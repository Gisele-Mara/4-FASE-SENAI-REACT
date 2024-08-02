import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Conteudo from './components/Conteudo'

function App() {
  let h = "Cort"
  console.log(`My name is ${h}`)
  return (
    <>
    <h1> Hello World!</h1>
    <Header/>
    <Conteudo/>
    </>
  )
}

export default App
