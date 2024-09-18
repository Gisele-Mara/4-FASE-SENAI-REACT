import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {

    const {loggedUser, users, setUsers} = useContext(GlobalContext)

    function createUser(){
        let newUser = {

            id: Date.now(),
            name: "Someone",
            email: "someonetoo@email.com"
        }
        setUsers([newUser,...users])

    }
  return (
    <div>
     <Navbar/>
      <h1>HOME</h1>
      <p>Hello, {loggedUser}</p>
      <div>
        {
            users.map((user) => (
                <div key={users.id}> 
                    <p>id:{user.id}</p>
                    <p>Name:{user.nome}</p>
                    <p>Email:{user.email}</p>


                </div>

            ))
        }


      </div>
    <button onClick={createUser}>Create User</button>
    </div>
  )
}

export default Home
