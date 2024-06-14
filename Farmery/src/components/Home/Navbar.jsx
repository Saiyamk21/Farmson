import React, { useState,useEffect } from 'react'
import Product_button from './product_button';
import Services_button from './Services_button';
function Navbar() {

  const[check,rec]=useState(false);
  function clicked(){
      rec(!check);
  }
    
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className>
        
      <nav  className={scroll?'z-[4] h-[9vh] flex  justify-between p-5 fixed top-0 w-full bg-zinc-800  bg-opacity-100 ':' h-15 flex justify-between p-5 fixed top-0 w-full font-extrabold'} >
        <div className="align-middle">
            <img className=" relative px-1 h-28 size-[200px] opacity-100 -top-7" src='images/home/logo-2.png'></img>
        </div>
        <div className>
            <ul className='flex px-4 py-2 space-x-12 justify-center h-22 align-text-top'>
                <button onMouseEnter={clicked} onMouseLeave={clicked} className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Home</button>                <button className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>About</button>
                <Product_button check={check}/>
                <button onMouseEnter={clicked} onMouseLeave={clicked} className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Gallery</button>
                <Services_button check={check}/>
                <button onMouseEnter={clicked} onMouseLeave={clicked} className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Contact</button>
            </ul>
        </div>
      </nav>

    // </div>
  )
}

export default Navbar;
