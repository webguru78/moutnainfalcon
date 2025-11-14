import React from 'react'
import Navbar from '../components/Navbar'
import HseBreadcrum from '../HseComponents/HseBreadcrum'
import Footer from '../components/Footer'
import HsePolicy from '../HseComponents/HsePolicy'
import ContactForm from "../OverviewComponents/ContactForm";

const Hec = () => {
  return (
    <div>
        <Navbar/>
        <HseBreadcrum/>
        <HsePolicy/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Hec