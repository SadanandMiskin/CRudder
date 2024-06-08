import { useState } from 'react'
import './App.css'
import tasksDisplay from '../hooks/TaskDisplay'


async function App() {

  const tasks = await tasksDisplay()

  return (
    <>
      
    </>
  )
}

export default App
