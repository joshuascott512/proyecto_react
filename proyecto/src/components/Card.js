import React from 'react'
import PropTypes from 'prop-types'

import'./cards.css'


function Card({title, imagenSource, text, icons}) {
  return (
    <div className='card text-center  animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src={imagenSource} alt='' className='card-img-top'/>
      </div>
      <div className='card-body '>
        <img src={icons} className='icons'/>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt laudantium labore earum excepturi totam nulla quisquam nobis. Dicta ullam assumenda impedit odio illum nulla perspiciatis ducimus provident iste id? '
          }
        </p>
      </div>
    </div>
  )
}

Card.propTypes ={
  title: PropTypes.string.isRequired,
  imagenSource: PropTypes.string.isRequired,
  text:PropTypes.string
}

export default Card 