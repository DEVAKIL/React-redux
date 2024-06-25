import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,reset,incrementByAmount} from './counterSlice';



function Counter() {
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch()

    const [incrementAmount,setIncrementAmount]=useState(0);
    const addValue=Number(incrementAmount) || 0;

    const resetAll=()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }
  return (
   <>
   <div style={{backgroundColor:"lightpink",padding:"20px"}}>
   <div>
   <input type="text"
    value={incrementAmount}
    onChange={(e)=>setIncrementAmount(e.target.value)} style={{width:"500px",height:"100px"}}/>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",justifyItems:"center"}}>
    <p style={{borderRadius:"40px",backgroundColor:"greenyellow",padding:"10px" ,height:"100px",border:"black" ,width:"300px"}}>{count}</p></div>
 
   <section>
      <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
   
   </section>
   
   <div>
    <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
    <button onClick={resetAll}>Reset</button>
   </div>
   </div>
   </>
  )
}

export default Counter