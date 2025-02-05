import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex gap-4'>
        <Sidebar></Sidebar>
        <div className='h-screen w-full border border-black overflow-y-scroll'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default App
