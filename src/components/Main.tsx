import { useState } from "react";

const Main = () =>{
    
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

export default Main;