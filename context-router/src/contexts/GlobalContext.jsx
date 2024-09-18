import { createContext, useState } from "react";



export const GlobalContext = createContext()


export const GlobalContextProvider = ({children}) =>{
    let loggedUser = "Moon"

    const [users, setUsers]= useState([

        {
            id: Date.now(),
            name: "User01",
            email: "User01@email.com"
        },
        {
            id: Date.now() + 1,
            name: "User02",
            email: "User02@email.com"
        },
        {
            id: Date.now() + 2,
            name: "User03",
            email: "User03@email.com"
        },
    ])

    return(

        <GlobalContext.Provider value={{loggedUser, users, setUsers}}>
            {children}
        </GlobalContext.Provider>
    )
}