import React from 'react'
import agustin1 from'../image/agustin1.jpg';
import Curriculum from '../image/CURRICULUM AGUSTIN NOY.pdf';

const MisDatos = () => {
  return (
    <div className='ContenedorDosColumnas' >
        <div>
        <img className='FotoPortfolio'
            src={agustin1}
            alt="Foto del Portfolio"
        />

    </div>
    <div> 
      
      <ul className='Lista'>
        <h2>Mis Datos</h2>
        <p>Nombre: Agustin Noy Ibarra</p>
        <p>Fecha de Nacimiento: 15 de Mayo del 2001</p>
        <p>Estado Civil: Soltero</p>
        <p>Telefono: 097491935</p>
        <p>Mail: agustinnoyibarra10@gmail.com</p>
        <p>Localidad: Colonia del Sacramento, Uruguay</p>
        <button className='Botones' id='Formacion'>
          <a href={Curriculum} target="_blank" rel="noopener noreferrer" download="CURRICULUM AGUSTIN NOY.pdf"> 
          Descargar Curriculum 
          </a>
        </button>
      </ul>  
    </div>
    </div>
  )
 
}

export default MisDatos