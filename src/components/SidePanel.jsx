import { faGithub, faYoutube, faTwitch, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faCodeBranch, faGear, faMagnifyingGlass, faPlay, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SidePanel = () => {

    const sidePanel = [
        {
          icon: faGithub,
          url: "http://github.com/petster"
        },
        {
          icon: faYoutube,
          url: "https://www.youtube.com/petstergaming"
        },
        {
          icon: faTwitter,
          url: "https://twitter.com/Petsterr"
        },
        {
          icon: faTwitch,
          url: "https://twitch.tv/petster"
        },
        {
          icon: faLinkedin,
          url: "https://linkedin.com/in/jasontpalmeri"
        },
        {
          icon: faInstagram,
          url: "https://www.instagram.com/petster12/"
        }
    ];

  return (
    <div className='vs-panel w-10 flex flex-col font-normal text-white text-2xl content-center items-center p-2 gap-1.5'>
            {sidePanel.map((da, index) =>
              <a target="_blank" href={da.url} className='text-zinc-400 hover:text-zinc-100 cursor-pointer p-1.5' key={index}><span className='sr-only'>{da.url}</span><FontAwesomeIcon icon={da.icon}/></a>
            )}
            <div className='flex flex-grow'></div>
            <div className='text-zinc-400 hover:text-zinc-100 cursor-pointer'>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className='text-zinc-400 hover:text-zinc-100 cursor-pointer'>
              <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
  )
}

export default SidePanel