import React from "react"
import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../components/Images/banner-home.jpg"
import Card from "../../components/Card/Card"

export default function Home() {
  return (
    <div>
      <Banner src={ImgBannerHome} title={"Chez vous, partout et ailleurs"}/>
      <Card />
    </div>
  )
}
