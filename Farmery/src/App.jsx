import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Whyus from "./components/Whyus";
import Deliver from "./components/Deliver";
import Process from './components/Process'
import Counter from "./components/Counter";
import Review from "./components/Review";
import Footer from "./components/Footer";
function App() {
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
  );
}

export default App;
