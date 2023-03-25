import React from 'react'
import Card from './Card'

import imagen1 from '../assets/digiimg1.jpg'
import imagen2 from '../assets/digiimg2.jpg'
import imagen3 from '../assets/digiimg3.jpg'
import  icon1 from '../assets/icons/user_groups_512px.png'
import icon2 from '../assets/icons/requisitos.png'
import icon3 from '../assets/icons/metodologia.png'

const cards = [
  {
    id: 1,
    title: 'DIRIGIDO A:',
    icons: icon1,
    imagen: imagen1,
    text: 'Programadores, ingenieros y cualquier profesional o entusiasta, que le interese conocer los conceptos de las tecnologías 4.0'

  },
  {
    id: 2,
    title: 'PRE-REQUISITOS',
    icons: icon2,
    imagen: imagen2,
    text: 'Conocimientos del S.O. Windows e Internet. Mente abierta para aprender los conceptos básicos y claves sobre tecnologías 4.0 aplicadas a las empresas'
  },
  {
    id:3,
    title: 'METODOLOGÍA',
    icons: icon3,
    imagen: imagen3,
    text:"Nuestros Bootcamp será orientado así:* 100% Virtual (opcional)* 80% práctico."
  }
]
function Cards() {
  return (
    <div className=' container d-flex justify-content-center align-items-center h-100  ' >

        <div className='row'>
          {
            cards.map(card => (
              <div className='col-md-3' key={card.id}>
                    <Card title={card.title} imagenSource={card.imagen} icons={card.icons} text={card
                    .text}/>
                </div>
            ))
          }
                
        </div>
    </div>
  )
}

export default Cards