import { faCopy, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faCodeBranch, faGear, faMagnifyingGlass, faPlay, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SidePanel = () => {

    const sidePanel = [
        {
          icon: faCopy,
          flip: false
        },
        {
          icon: faMagnifyingGlass,
          flip: true
        },
        {
          icon: faCodeBranch,
          flip: false
        },
        {
          icon: faPlay,
          flip: false
        },
        {
          icon: faTableCellsLarge,
          flip: false
        },
        {
          icon: faFolder,
          flip: false
        }
    ];

  return (
    <div className='vs-panel w-10 flex flex-col font-normal text-white text-2xl content-center items-center p-2 gap-1.5'>
            {sidePanel.map((da, index) =>
              <div className='text-zinc-400 hover:text-zinc-100 cursor-pointer p-1.5' key={index}><FontAwesomeIcon className={`${da.flip ? "fa-flip-horizontal" : ""}`} icon={da.icon}/></div>
            )}
            <div className='flex flex-grow'></div>
            <div className='text-zinc-400 hover:text-zinc-100'>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className='text-zinc-400 hover:text-zinc-100'>
              <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
  )
}

export default SidePanel