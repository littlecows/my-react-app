/*
updater function = a function passed as an argument to setState() usually
ex. setYear(y => y + 1)
allow for safe updates based on the previous state
used with multiple state updates and asynchronous functions
good practice to use updater functions
*/

import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        // Use the CURRENT state to calculate the NEXT state.
        // set function do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        // setCount(count is 0 + 1)
        // setCount(count + 1)

        // setCount(count => count + 1)
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it wil call them in the same order.


        
        setCount(count + 1)
        // UPDATE
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    )

}

export default Counter