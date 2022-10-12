import BannerCSS from "../Banner/Banner.module.css"
import { useLocation } from "react-router-dom"

function Banner({src, title, alt}) {
  const url = useLocation()
  return (
    <section className={BannerCSS.banner}>
      <div className={BannerCSS.hero}>
          <img
            src={src}
            alt={alt}
            className={BannerCSS.img}
          />
          <h1 className={BannerCSS.title}>{title}</h1>
        
      </div>
    </section>
  )
}

export default Banner
