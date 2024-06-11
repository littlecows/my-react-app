import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB"

/*
useContext() = React Hook that allows you to share values
between multiple levels of components wihtout passing props through each level

Provider component
1 import {createContext} from 'react'
2 export const MyContext = createContext()
3 <MyContext.Provider value={value}>
    <Child />
  </MyContext.Provider>

Consumer compenent
1 import React, {useContext} from 'react'
2 import {MyContext} from './ComponentA'
3 const value = useContext(MyContext)
*/
export const UserContext = createContext()

function ComponentA() {

    const [user, setUser] = useState("HEE MAA")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA