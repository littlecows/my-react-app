/*
useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
This component re-renders
This component mounts
This state of a value

useEffect(function, [dependensies])

1. useEffect(() => {}) Runs after every re-render
2. useEffect(() => {}, []) Runs only on mount
3. useEffect(() => {}, [value]) Runs on mount + when value changes

USES
1 Event Listeners
2 DOM manipulation
3 Subscriptions (real-time updates)
4 Fetching Data from an API
5 Clean up when a component unmounts
*/

import React, {useState, useEffect} from "react";

function MyComponent5() {

    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState("green")

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`

    //     return () => {
    //         // Some cleanup code
    //     }
    // }, [count, color])

    // function addCount() {
    //     setCount(c => c + 1)
    // }

    // function subtractCount() {
    //     setCount(c => c - 1)
    // }

    // function changeColor() {
    //     setColor(c => c === "green" ? "red" : "green")
    // }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event listener remove") 
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div>
            {/* <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button> */}
            <p>Window Width: {width}px </p>
            <p>Window Height: {height}px </p>
        </div>
    )
}

export default MyComponent5