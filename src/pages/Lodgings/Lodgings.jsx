import React from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'

import Slideshow from "../../components/Slideshow/Slideshow"
import LodgingsCSS from "../Lodgings/Lodgings.module.css"
import LodgingDetails from "../../components/LodgingDetails/LodgingDetails"
import Collapse from "../../components/Collapse/Collapse"
/*import DataLodgings from Data folder*/
import {DataLodgings} from "../../Data/DataLodgings"

export default function Lodgings() {
    let { id } = useParams ()
  const lodging = DataLodgings.getOneLodging(id)

    return (
        <div>
            <Slideshow key={lodging.pictures} images={lodging.pictures}/>
            <LodgingDetails key={lodging.title} details={lodging}/>
            <div className={LodgingsCSS.collapse}>
            <Collapse key={lodging.description} title="Description" content={lodging.description}/>
            <Collapse key={lodging.equipments} title="Equipments" content={lodging.equipments.map((infos, index) => (
                <div key={`${lodging.equipments}-${index}`}>{infos}</div>
            ))}/>
            </div>
        </div>
    )
}