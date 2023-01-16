import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'
import "./sidebarButton.css"

export default function SidebarButton(p) {
    const location=useLocation();
    const isActive=location.pathname===p.to;
    const btnClass=isActive?"btn-body active":"btn-body"
  return (
    <Link to ={p.to}>
    <div className={btnClass}>
        <IconContext.Provider value={ {size: "24px",className: "btn-icon"}}>
        {p.icon}
        <p className='btn-title'>{p.title}</p>
   </IconContext.Provider> 
   </div>
    </Link>
  )
}
 