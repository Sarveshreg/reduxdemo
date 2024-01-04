import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from './counterSlice'
import { useState } from 'react'

let Counter=()=> {
    let count=useSelector((state)=>state.counter.count);
    let dispatch=useDispatch;
    let [incrementAmount,setIncrementAmount]=useState(0);
    let addValue=Number(incrementAmount)||0;
    const resetAll=()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }
  return (
    <>
        <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)} />
            <div>
              <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
              <button onClick={resetAll}>Reset</button>
            </div>
    </>
  )
}

export default Counter;

