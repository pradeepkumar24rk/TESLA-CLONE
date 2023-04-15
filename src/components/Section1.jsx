import React from 'react'
import './Section1.css'
// import imgs from './down-arrow.svg';
// import img from '../components/images/model-s.jpg'


const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg}) => {

  const style = {
    backgroundImg: `${props =>'url("/images/{backgroundImg}")'}`,
  }
  return (
    <div className='wrap' style={style}>
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="button">
          <div className="buttongrp">
            <button className='leftButton'>{leftBtnText}</button>
            {rightBtnText && 
                  <button className='rightButton'>{rightBtnText}</button>
            }
            
          </div>
          <div className="downarrow" >
              {/* <img src='/images/down-arrow.svg'/> */}
          </div>

      </div>

    </div>
  )
}

export default Section