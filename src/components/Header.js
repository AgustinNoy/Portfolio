import React from 'react'

const Header = () => {
  return (
    <div className='Header' >
        <div>
            <a className='Titulo' href='#InformacionPersonal'><h1>Agustin Noy</h1></a>
        </div>
        <div>
    
        </div>
        <div className='UnaLinea'>
          <h4 className='Botones'><a href='#InformacionPersonal'>Informacion Personal</a></h4>
          <h4 className='Botones'><a href='#Estudios'>Estudios</a></h4>
          <h4 className='Botones'><a href='#Experiencia'>Experiencia</a></h4>
          <h4 className='Botones'><a href='#RedesSociales'>Redes Sociales</a></h4>
        </div>
        
    </div>
  )
}

export default Header;