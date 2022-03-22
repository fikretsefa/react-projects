import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';


export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = React.useState(5);
    const incrementNumber = Number(incrementAmount) || 0;


    return (
        <>
            <span>{count}</span>
            <button aria-label="1 Azalt" onClick={() => dispatch(decrement())}>-</button>
            <button aria-label="1 Arttır" onClick={() => dispatch(increment())}>+</button>
            <div>
                <input
                    placeholder='Arttırılacak sayıyı girin'
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(incrementNumber))}>Ekle</button>
                <button onClick={() => dispatch(incrementAsync(incrementNumber))}>Asenkron Ekle</button>
            </div>
        </>
    );
}