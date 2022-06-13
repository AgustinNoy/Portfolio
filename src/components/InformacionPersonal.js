import React from 'react'
import agustin2 from'../image/agustin2.jpg'

const InformacionPersonal = () => {
  return (
    <div className='ContenedorDosColumnas' id='InformacionPersonal'> 
    <div>
        <img className='FotoPortfolio'
            src={agustin2}
            alt="Foto del Portfolio"
        />

    </div>
    <div>
      <ul className='Lista'>
        <h2>Informacion Personal</h2>
        <p>Desde que sali del Bachillerato no sabia que carrera hacer, me gustaba la parte deportiva ya que me gustan los deportes.</p>
        <p>Me hubiera gustado hacer la carrera de profesor de educacion fisica pero era en montevideo y yo jugaba al futbol en Plaza Colonia</p>
        <p>Por lo tanto hable con Andres y me recomendo esa carrera, al principio estaba en dudas pero con el tiempo me fui dando cuenta que es una gran carrera</p>
        <p id='InformacionPersonal'>Te abre muchas puertas para lo que es el futuro</p>
      </ul>  
    </div>
    </div>
  )
}

export default InformacionPersonal;