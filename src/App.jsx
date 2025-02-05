import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [urlLocation, setUrlLocation] = useState('');
  const currentLocation = useLocation();

  useEffect(() => {
    console.log(currentLocation.pathname);
    setUrlLocation(currentLocation.pathname);
  }, [currentLocation]);

  return (
    <>
      <div className='flex flex-col md:flex-row gap-4'>
        <Sidebar></Sidebar>

        <div className='h-screen max-w-full w-[90%] mx-auto overflow-y-scroll '>
          {
            urlLocation == "/"
              ? <div className='w-full h-screen flex justify-center items-center'><h1 className='text-3xl font-bold'>Welcome to Dashboard</h1></div>
              : <Outlet></Outlet>
          }
        </div>
      </div>
    </>
  )
}

export default App
