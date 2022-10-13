import ErrorCSS from "../Error/Error.module.css"
import { Link } from "react-router-dom"

function Collapse() {

  return (
    <div>
        <div>404</div>
        <div>Oups! La page que vous demandez n'existe pas.</div>
        <Link>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Collapse