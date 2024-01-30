import { useEffect, useState } from "react";

function UseEffect() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    useEffect(() => {
        console.log("Counter 1")
    }, [count])
    return (
        <div>
            <h3>Counter 1 is {count} </h3>
            <h3>Counter 2 is {count1} </h3>
            <button onClick={() => setCount(count + 1)}>Counter 1</button>
            <button onClick={() => setCount1(count1 + 1)}>Counter 2</button>
        </div>
    );
}

export default UseEffect;