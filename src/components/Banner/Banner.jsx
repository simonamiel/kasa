import ImgBanner from "../Images/banner-home.jpg"
import BannerCSS from "../Banner/Banner.module.css"

function Banner() {
  return (
      <section className={BannerCSS.banner}>
        <div className={BannerCSS.hero}>
            <img src={ImgBanner} alt="Image d'illustration d'une côte" className={BannerCSS.img} />
            <h1 className={BannerCSS.title}>Chez vous, partout et ailleurs</h1>
            
        </div>
      </section>
  )
}

export default Banner