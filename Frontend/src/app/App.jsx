import { RouterProvider } from 'react-router-dom'
import router from './Routes'
import "./App.css"
import { useAuth } from '../feature/auth/hook/useAuth'
import { useEffect } from 'react'

function App() {

  const app = useAuth()
  useEffect(()=>{
    app.handlegetMe()

  },[])
  
  return <RouterProvider router={router} />
}

export default App
