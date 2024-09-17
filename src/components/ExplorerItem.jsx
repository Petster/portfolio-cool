import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

const ExplorerItem = ({icon, title, padding, color, link, url, outLink}) => {

  const [active, setActive] = useState(false);

  if(outLink) {
      return (
          <a href={url} target={"_blank"} className={({isActive}) => isActive ? setActive(true) : setActive(false)}>
              <div className={`font-normal text-sm p-0.5 hover:bg-zinc-700 cursor-pointer ${padding} ${active ? "bg-zinc-700" : ""}`}>
                  <FontAwesomeIcon className={color} icon={icon} /> {title}
              </div>
          </a>
      )
  }

  if(link) {
    return (
      <NavLink to={url} className={({isActive}) => isActive ? setActive(true) : setActive(false)}>
        <div className={`font-normal text-sm p-0.5 hover:bg-zinc-700 cursor-pointer ${padding} ${active ? "bg-zinc-700" : ""}`}>
          <FontAwesomeIcon className={color} icon={icon} /> {title}
        </div>
      </NavLink>
    )
  } else {
    return (
      <div className={`font-normal text-sm p-0.5 hover:bg-zinc-700 cursor-pointer ${padding} ${active ? "bg-zinc-700" : ""}`}>
        <FontAwesomeIcon className={color} icon={icon} /> {title}
      </div>
    )
  }
}

export default ExplorerItem