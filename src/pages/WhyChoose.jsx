import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhyBreadcrumb from '../WhyChoose/WhyBreadcrum'
import Working from '../components/Working'
import Clients from '../WhyChoose/Clients'
import Counter from '../components/Counter'
import Partner from '../components/Partner'

const WhyChoose = () => {
  return (
    <div>
        <Navbar/>
        <WhyBreadcrumb/>
        <Working/>
        <Clients/>
        <Counter/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default WhyChoose