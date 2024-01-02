import { useState } from "react";

function Counter() {

    console.log("rendered")
    const [number, setNumber] = useState(0)

    function handleClick(e) {
        e.stopPropagation();

        setNumber(number + 1);
        // setTimeout(() => {
        //    setNumber(number => number + 1);
        // }, 2000)

        console.log(number)
    }


    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>Count</button>
        </>
    )
}

export default Counter;