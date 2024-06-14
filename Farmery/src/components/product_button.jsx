import React, { useState } from 'react'

function Product_button() {
    const[check,rec]=useState(false);
    function clicked(){
        rec(!check)
    }
  return (
    <div>
      <button onMouseEnter={clicked} onMouseLeave={clicked} className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Products</button>
      {check &&
      <div onMouseLeave={clicked} className=' absolute right-[7vw] top-[9vh] h-[26vh] w-[60vw] shadow-xl bg-[#393e46] flex  '>
       <div className="h-[35vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">DAIRY & DELIGHTS</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">MILK & PRODUCTS</p> </a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">POULTRY</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">MEAT</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">OTHER</p></a>
          </div></div>
          
          <div className="h-[35vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">FRUITS & VEGETABLE</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">FRESH FRUITS</p> </a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">FRESH VEGETABLE</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">EXOTIC AND PREMIUM FRUITS</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">HERBS AND SPICES</p></a>
          </div></div>

          <div className="h-[35vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">GROCERIES</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">GRAINS</p> </a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">CEREALS</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">PULSES</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">DRYFRUITS & NUTS</p></a>
          </div></div>

      </div>}

    </div>
  )
}

export default Product_button