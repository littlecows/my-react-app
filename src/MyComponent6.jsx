
/*
useRef() = "use Reference" Does not cause re-renders when its value changes.
when you want a component to "remember" some information,
but you don't want that information to trigger new renders.

1 Accessing/Interacting with DOM elements
2 Handling Focus, Animations, and Transitions
3 Managing Timers and Intervals
*/

import React, {useState, useEffect, useRef} from "react";

function MyComponent6() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)




    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""


    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
    }

    return(
        <div>
            <button onClick={handleClick1}>
            Click me1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
            Click me2!
            </button>
            <input ref={inputRef2}/>
        </div>
    )
}

export default MyComponent6