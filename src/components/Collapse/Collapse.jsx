import CollapseCSS from "../Collapse/Collapse.module.css"
import { useState } from "react"
import iconCollapse from "../Images/icon-collapse.svg"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className={CollapseCSS.collapse}>
      <div className={CollapseCSS.title} onClick={() => setIsOpen(false)} >
        {title}
        <img src={iconCollapse} className={CollapseCSS.iconOpen}/>
      </div>
      <div className={CollapseCSS.content}>{content}</div>
    </div>
    
  ) : (
    <div className={CollapseCSS.collapse}>
        <div className={CollapseCSS.title} onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className={CollapseCSS.icon}/>
      </div>
    </div>
  )
}

export default Collapse


/*
<div className={CollapseCSS.collapse `${active && "active"}`}>
      <div className={CollapseCSS.title} onClick={handletoggle}>
        {title}
        <span className={CollapseCSS.icon}>test</span>
      </div>
      <div className={CollapseCSS.content}>{content}</div>
    </div>
*/
