import React from 'react'

import Adress from './adress/Adress'
import Choose from './choose/Choose'
import Footer from './footer/Footer'
import Form from './form/Form'

import Header from './header/Header'
import InfoAbout from './InfoAbout'
import Models from './production/Models'
import Tecnology from './texnology/Tecnology'

const Full = () => {
  return (
    <div>
        <Header/>
        <InfoAbout/>
        <Models/>
        <Tecnology/>
       <Choose/>
        <Adress/>
        <Form/>
        <Footer/>
        <br />
    </div>
  )
}

export default Full