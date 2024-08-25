import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//components
import Todo from './components/Todo'
import Header from './components/Header'


function App() {

  return (
    <>
      <Header />
      <Todo />
    </>
  )
}

export default App
