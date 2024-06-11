// Consumer compenent
// 1 import React, {useContext} from 'react'
// 2 import {MyContext} from './ComponentA'
// 3 const value = useContext(MyContext)

import React, {useContext} from "react"
import { UserContext } from "./ComponentA.jsx"

function ComponentD() {

    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD