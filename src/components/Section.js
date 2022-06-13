import React from 'react'
import Experiencia from './Experiencia'
import Estudios from './Estudios'
import RedesSociales from './RedesSociales'
import InformacionPersonal from './InformacionPersonal'
import MisDatos from './MisDatos'


const Section = () => {
  return (
    <ul>
    <InformacionPersonal />
    <MisDatos/>
    <Estudios />
    <Experiencia />
    <RedesSociales />
    </ul>
  )
}

export default Section