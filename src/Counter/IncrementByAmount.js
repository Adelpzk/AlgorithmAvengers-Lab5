import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterSlice'
//import styles from './Counter.module.css'

export default function IncrementByAmount() {

    const count = useSelector((state) =>
        state.counter.value)

    const dispatch = useDispatch()

    const [add, setAdd] = React.useState(0);

    return (
        <div>
            <div>
                <input onChange={(e) => setAdd(+e.target.value)} />
            </div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(add))}
                >
                    Increment By Amount
                </button>
            </div>
        </div>
    )
}