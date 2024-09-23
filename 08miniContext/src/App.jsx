import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
      <h1 className='text-3xl' >React</h1>
      <Login></Login>
      <Profile></Profile>
   </UserContextProvider>
  )
}

export default App
