import { Link } from "react-router-dom"
import Logo from "../Images/logo.svg"
import HeaderCSS from "../Header/Header.module.css"

function Header() {
  return (
      <header className={HeaderCSS.header}>
        <img src={Logo} alt="Logo de Kasa" className={HeaderCSS.logo} />
        <nav className={HeaderCSS.nav}>
          <Link to="/" className={HeaderCSS.homeNav}>
            Accueil
          </Link>
          <Link to="/about" className={HeaderCSS.aboutNav}>
            A Propos
          </Link>
        </nav>
      </header>
  )
}

export default Header
