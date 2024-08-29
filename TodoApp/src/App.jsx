import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//components
import Todo from './components/Todo'
import Header from './components/Header'
import TodoContextProvider from './context/Provider'



function App() {

  return (
    <TodoContextProvider>
      <Header />
      <Todo />
    </TodoContextProvider> 
  )
}

export default App
