import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow"
import LodgingDetails from "../../components/LodgingDetails/LodgingDetails"
/*import DataLodgings from Data folder*/
import {DataLodgings} from "../../Data/DataLodgings"
import { useParams } from "react-router-dom"

export default function Lodgings() {
    let { id } = useParams ()
  const lodging = DataLodgings.getOneLodging(id)
    return (
        <div>
            <Slideshow key={lodging.pictures} images={lodging.pictures}/>
            <LodgingDetails key={lodging.title} details={lodging}/>
        </div>
    )
}