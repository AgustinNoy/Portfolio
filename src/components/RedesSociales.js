import React from 'react'
import fotoFacebook from '../image/facebook.png'
import fotoInstagram from '../image/instagram.png'
const RedesSociales = () => {
  return (
    <div className='Contenedor' id='RedesSociales'>
      <div className='UnaLinea'>
        <a href='https://www.facebook.com/AgustinNoy/' target='_blank'>
        <img className='Logo'
            src={fotoFacebook}
            alt="Logo Facebook "
        />
        </a>  
        <a href='https://www.instagram.com/Agustin_Noy/' target='_blank'>
        <img className='Logo'
            src={fotoInstagram}
            alt="Logo Instagram "
        />
      
        </a>  
      </div>
    </div>
  )
}

export default RedesSociales;