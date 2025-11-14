import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CeoBreadcrum from '../CeoComponents/CeoBreadcrum'
import CeOMessage from '../CeoComponents/CeoMessage'
import Working from "../components/Working";
import ContactForm from '../OverviewComponents/ContactForm'

const Ceo = () => {
  return (
    <div>
        <Navbar/>
        <CeoBreadcrum/>
        <CeOMessage/>
         <Working />
         <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Ceo