import React, { useState, useEffect} from "react";


function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("purple")


    useEffect( () => {
        document.title = `Count🐱‍🏍 ${count} ${color}`
    }, [count, color])

    function increment() {
        setCount(c => c + 1); 
    }
 
    function decrement() {
        setCount(c => c -1);
    }

    function reset() {
        setCount(c => c = 0)
    }

    function changeColor() {
        setColor(c => c === "purple" ? "red" : "purple")
    }

    return (<>
    <p onChange={setCount} style={{color}}>Count: {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={changeColor}>Color</button>
    </>)
}

export default MyComponent