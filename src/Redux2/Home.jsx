import React,{useState} from 'react';
import Customer from '../Redux2/Customer';
import { addCustomer as addCustomer1 } from './slice/CustomerSlice';
import {useDispatch} from 'react-redux';

function Home() {
    const [input, setInput]=useState("");
    const dispatch=useDispatch();
    // const [customers,setCustomer]=useState([]);
    const addCustomer=()=>{
        if(input){
            dispatch(addCustomer1(input))
            // setCustomer((prev)=>[...prev,input]);

            setInput("");
            // console.log(customers)
        }
       

    }
   
   
  return (
   
    <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={addCustomer}>Add</button>

    <Customer/>
    </div>
  )
}

export default Home