import { Link } from 'react-router-dom'
import Logo from "../Images/logo.svg"
 
function Header() {
    return (
        <nav>
            <img src={Logo} alt="Logo de Kasa"/>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}

export default Header