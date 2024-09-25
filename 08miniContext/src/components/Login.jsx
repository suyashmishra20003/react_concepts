import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'
function Login() {
  const [username, setUsername] = useState(0)
  const [password, setPassword] = useState(0)

  const { setUser } = useContext(UserContext)

  const methodSubmit = () => {
    setUser({ username, password })
  }
  return (
    <div>
      <h2>Login </h2>

      <div className="w-full">
        <input type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="username" id="" />

      </div>

      <hr />
      <br />
      <div className="w-full">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text" placeholder="password" id="" />

      </div>

      <button onClick={() => methodSubmit()} type="button">Submit</button>
    </div>
  )
}

export default Login