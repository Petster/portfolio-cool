import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';

const TabLayout = ({title, url}) => {

  return (
    <NavLink to={url} className={({isActive}) => `cursor-pointer p-1.5 px-4 flex flex-row items-center ${isActive ? "vs-tabs-true text-orange-200" : "vs-tabs-false text-green-400"}`}>
        <p className={`mr-3`}>{title}</p>
        <FontAwesomeIcon className='text-zinc-300 z-50 text-xs p-1.5 rounded-md hover:bg-zinc-800' icon={faX} />
    </NavLink>
  )
}

export default TabLayout