import React from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCustomer } from './slice/CustomerSlice';
function Customer() {
    const customer=useSelector((state)=>state.customers)
    const dispatch=useDispatch();
    const deleteContent=(id)=>{
        //create a Action for Delete
        dispatch(deleteCustomer(id))

    }
  return (
   <>
   <ul>
    {
        customer.map((e,i)=><li>{e}<button onClick={()=>deleteContent(i)}>Delete</button></li>)
    }
   </ul>
   </>
  )
}

export default Customer