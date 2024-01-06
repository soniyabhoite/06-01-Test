import React from 'react'
import { increment,decrement,reset } from './actions'
import {useDispatch,useSelector} from 'react-redux'

const ReduxCounter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>count:{count}</h1>
        <button  onClick={()=>dispatch(increment())}>Increment</button>
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br/>

        <button onClick={()=>dispatch(reset())}>Reset</button>
      
    </div>
  )
}

export default ReduxCounter
