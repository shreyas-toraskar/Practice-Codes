import { useState } from "react";

function Count() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h3>Count is {count} </h3>
            <button onClick={() => setCount(count++)}>Click Me </button>
        </div>
    );
}

export default Count;