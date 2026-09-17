import { createBrowserRouter } from "react-router-dom"
import Login from "../feature/auth/pages/Login"
import Register from "../feature/auth/pages/Register"
import Dashboard from "../feature/chat/pages/Dashboard"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard/>
  },
  
])

export default router
