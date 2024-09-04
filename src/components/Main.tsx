import { useState } from "react";
import Count from "./Count.js";

const Main = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const subtract = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count
                count={count}
            />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

export default Main;