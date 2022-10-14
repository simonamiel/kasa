import { useState } from "react"
import { Children } from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import Lodgings from "../../lodgings.json"
import SliderCSS from "../Slideshow/Slideshow.module.css"

function Slideshow(props) {
    
    /*const [lodgings] = useState(Lodgings)
    let { id } = useParams(props)*/

    const { children } = props

    const displayItems = Children.map(children, (child, index) =>(
        <div className={SliderCSS.carousselItems} key={index}>{child}</div>
    ))
  
  return (
    <div>
        <div className={SliderCSS.container}>
        <div className={SliderCSS.leftArrow}>Left</div>
        <div className={SliderCSS.displayFrame}>
            {displayItems}

        </div>
        <div className={SliderCSS.rightArrow}>right</div>
        </div>
    </div>
  )
}
/*Proptypes to define the type of props for props security*/
Slideshow.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  pictures: PropTypes.string,
  cover: PropTypes.string,
}

export default Slideshow
