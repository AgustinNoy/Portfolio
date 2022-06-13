import React from 'react'
import fotoFormacion from '../image/libros.jpg';
import fotoFormacion1 from '../image/laboral.jpg';
const Estudios = () => {
  return (
    <div className='ContenedorDosColumnas' id='Estudios'> 
      <div>
        <img className='FotoFormacion'
            src={fotoFormacion}
            alt="Foto del Portfolio"
        />

        <img className='FotoFormacion1'
            src={fotoFormacion1}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
          <h2>Estudios</h2>
        <ul>
            <h5></h5>
            <li>Ciclo Básico- Liceo Juan Luis Perrou, Colonia del Sacramento, Uruguay </li>
            <li>Bachillerato Biologico, Liceo Juan Luis Perrou, Colonia del Sacramento, Uruguay</li>
        </ul>    
        <ul>
            <h5>Programación</h5>
            <li>Estudiante en carrera Analista Programador </li>
            <li>CTC-ORT Colonia cursando Año 2022 3er Semestre</li>
         
        </ul> 
        <ul>
            <h5>Cursos Relizados </h5>
            <li>Actualizacion Basica de Windows, Mundo Informatico 2019</li>
        </ul> 
        <ul>
            <h5>
                Ingles
            </h5>
            <li>Teens-High-Basic Course, Alianza Cultural </li>
        </ul>
      </ul>  
    </div>
  )
}

export default Estudios;
