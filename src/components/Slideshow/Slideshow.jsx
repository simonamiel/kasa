import React from 'react'
import { useState } from "react" 
import { useParams } from "react-router-dom"
import SliderCSS from "../Slideshow/Slideshow.module.css"
import {DataLodgings} from '../../utils/DataLodgings'

function Slideshow({images}) {
  
  const [ current, setCurrent] = useState(0)
  const length = images.length

   const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  /*console.log(current)*/
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  /*console.log(current)*/

  
  return (
    <section className={SliderCSS.slider}>
      <div className={SliderCSS.leftArrow} onClick={prevSlide}>LEFT</div>
      <div className={SliderCSS.rightArrow} onClick={nextSlide}>RIGHT</div>
      <img src={images[current]} alt={images.title} className={SliderCSS.imgage} key={images.id}/>
    </section>
  )

}

export default Slideshow
