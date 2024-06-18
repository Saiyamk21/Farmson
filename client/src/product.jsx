import React from 'react'
import Navbar from './components/Navbar'
import Banner_2 from './components/Products/Banner_2'
import Category from './components/Products/Category'
import Top from './components/Products/Top'
import Top_card from './components/Products/top_card'

function Product() {
  return (
    <div>
      <Navbar/>
      <Banner_2/>
      <Category/>
      <Top/>
    {/* <Top_card/> */}

    </div>
  )
}

export default Product
