import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow"
import {DataLodgings} from "../../Data/DataLodgings"
import { useParams } from "react-router-dom"

export default function Lodgings() {
    let { id } = useParams ()
  const lodging = DataLodgings.getOneLodging(id)
    return (
        <div>
            <Slideshow key={lodging.id} images={lodging.pictures}/>
        </div>
    )
}