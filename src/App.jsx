import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { useAuth } from './Components/AuthContext/AuthContext';

function App() {
  const [urlLocation, setUrlLocation] = useState('');
  const currentLocation = useLocation();

  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    console.log(currentLocation.pathname);
    setUrlLocation(currentLocation.pathname);
  }, [currentLocation]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className='flex flex-col md:flex-row gap-4'>
        <Sidebar></Sidebar>

        <div className='h-screen max-w-full w-[90%] mx-auto overflow-y-scroll '>
          {
            urlLocation == "/"
              ? <div className='w-full h-screen flex flex-col justify-center items-center'>
                {user && <h1 className='text-2xl font-semibold text-custom-primary'>Hi, {user.name}</h1>}
                  <h1 className='text-3xl font-bold'>Welcome to Dashboard</h1>
                </div>
              : <Outlet></Outlet>
          }
        </div>
      </div>
    </>
  )
}

export default App
