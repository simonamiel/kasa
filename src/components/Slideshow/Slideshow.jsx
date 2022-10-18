import React from 'react'
import { useState } from "react" 
import SliderCSS from "../Slideshow/Slideshow.module.css"
import leftArrow from "../Images/left-arrow.svg"
import rightArrow from "../Images/right-arrow.svg"

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
    <section className={SliderCSS.container}>
      <div className={SliderCSS.slider}>
      <img src={images[current]} alt={images.title} className={SliderCSS.image} key={images.id}/>
      </div>
      <img src={leftArrow} className={images.length === 1 ? SliderCSS.leftArrowNone : SliderCSS.leftArrow} onClick={prevSlide}/>
      <div className={images.length === 1 ? SliderCSS.numbInfoNone : SliderCSS.numbInfo}>{current + 1}/{images.length}</div>
      <img src={rightArrow} className={images.length === 1 ? SliderCSS.rightArrowNone : SliderCSS.rightArrow} onClick={nextSlide}/>
    </section>
  )

}

export default Slideshow
