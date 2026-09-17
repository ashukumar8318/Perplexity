import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useChat } from '../hooks/useChat'
const Dashboard = () => {

    const { createSocket } = useChat()

    const {user} = useSelector(state => state.auth)

    console.log(user)

    useEffect(() => {
      const socket = createSocket()

      return () => {
        socket.disconnect()
      }
    }, [createSocket])
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
