import { useEffect, useState } from "react"

export default function Counter({ quantity, changeQuantity, id }) {

    const [count, setCount] = useState(quantity)

    function increment() {
        if (count < 10) {
            setCount(count + 1)

        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        changeQuantity(id, count)
    }, [count])

    return (
        <div>

            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>

        </div>
    )

}