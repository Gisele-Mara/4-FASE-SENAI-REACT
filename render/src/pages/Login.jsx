import React, { useState } from 'react'
import LoggedUser from '../components/LoggedUser'
import AdultArea from '../components/AdultArea'

function Login() {

  const [user, setUser] = useState(false)
  const [age, setAge] = useState(0)

  let login = "Login"
  let logout = "Logout"
  return (
    <div>

      <div className='renderContainer'>

        {user && <LoggedUser />}

        <button onClick={() => setUser(!user)}> {user ? logout : login} </button>
      </div>

      <div className='renderContainer'>

        <button onClick={() => setAge(age - 1)}> - </button>
        {age}
        <button onClick={() => setAge(age + 1)}> +</button>
        {age >= 18 && <AdultArea />}
      </div>
    </div>
  )
}

export default Login
