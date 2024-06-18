import React from "react";
import { Carousel } from "@material-tailwind/react";

function Banner() {
  return (
    <div>
      <div className=" relative h-screen w-vw">
        <Carousel> 
          <div
          className="bg-cover h-5/6 hover:bg-fixed w-full bg-left-bottom bg-fixed  bg-[url('images/home/home1.jpg')]"
          >
          </div>

          <div
          className="bg-cover h-5/6 hover:bg-fixed w-full bg-left-bottom bg-fixed  bg-[url('images/home/home1.jpg')]"
          >
          </div>

          <div
          className="bg-cover h-5/6 hover:bg-fixed w-full bg-left-bottom bg-fixed  bg-[url('images/home/home1.jpg')]"
          >
          </div>
          </Carousel>
        <div className=" absolute top-2/3 w-full flex justify-around ">
          <div className=" flex-2">
            <h1 className="text-6xl text-cyan-50"> Lorem Ipsom</h1>
            <h1 className="text-2xl text-fuchsia-100">
              In the search of something incredible
            </h1>
          </div>

          <div>
            <button className="bg-black shadow-black shadow-sm opacity-80 font-extralight text-xl m-8 p-3 px-7 rounded-3xl text-white hover:bg-slate-600">
              Login/Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
