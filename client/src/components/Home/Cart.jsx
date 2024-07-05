import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import axios from 'axios';
import { useAuth } from '../../Auth';

function Cart() {
    const auth=useAuth();
    console.log(auth.authState);
    // useEffect(()=>{

    // },[])
    
  if(auth.authState==true){
   return (<div>
     <Navbar/>
        <div className=' bg-slate-900 h-[20vh] w-vw'>
        </div>
        <div className='h-[100vh] w-80'></div>
    </div>)
  }
  else{
    return(
      <h1>Please Login first</h1>
    )
  }
}

export default Cart;
