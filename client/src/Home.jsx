import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Home/Banner"; 
import Whyus from "./components/Home/Whyus";
import Deliver from "./components/Home/Deliver";
import Process from './components/Home/Process'
import Counter from "./components/Home/Counter";
import Review from "./components/Home/Review";
import Footer from "./components/Home/Footer";
function Home() {
  return (
    <div>
    <Banner/>
      <Navbar/>
      <Whyus />
      <Deliver/>      
      <Process/>
      <Counter/>
      <Review />
      <Footer/>

    </div>
  )
}

export default Home
