import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../OverviewComponents/Breadcrum'
import Expert from '../components/Expert'
import Counter from '../components/Counter'
import Vision from '../components/Vision'
import About from '../components/About'
import Footer from '../components/Footer'

const CompanyPofile = () => {
  return (
    <div>
        <Navbar />
        <Breadcrumb/>
        <Expert/>
        <Counter/>
        <Vision/>
        <About/>
        <Footer/>
    </div>
  )
}

export default CompanyPofile