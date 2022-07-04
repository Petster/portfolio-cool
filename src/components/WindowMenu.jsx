import { faSquare, faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faCubes, faEllipsisVertical, faMinus, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import vscode from '../img/vscode.png'

const WindowMenu = () => {

    const topMenu = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];
    const windowLayoutMenu = [faCubes, faEllipsisVertical, faWindowRestore, faWindowRestore, faWindowRestore];
    const windowMenu = [
    {
      icon: faX,
      background: 'hover:bg-red-500'
    },
    {
      icon: faSquare,
      background: 'hover:bg-zinc-700'
    },
    {
      icon: faMinus,
      background: 'hover:bg-zinc-700'
    },
    ];

    return (
    <div className='h-9 vs-top flex flex-row items-center p-2 pr-0'>
        <div>
        <img src={vscode} width={20} alt="vscode logo" />
        </div>
        <div className='flex flex-row flex-grow items-center p-2 pr-0 gap-1 font-medium text-zinc-400 text-xs'>
        <div className='flex flex-row'>
            {topMenu.map((da, index) =>
            <div className='hover:bg-zinc-700 p-1 px-2 rounded-md hover:text-zinc-200 cursor-pointer' key={index}>{da}</div>
            )}
        </div>
        <div className='justify-center text-center font-normal flex flex-grow'>
            <p>Portfolio.jsx - Jason Palmeri - Visual Studio Code</p>
        </div>
        <div className='flex content-center justify-center items-center'>
            {windowLayoutMenu.reverse().map((da, index) =>
                <div key={index} className='p-1 hover:bg-zinc-700 rounded-md'>
                <FontAwesomeIcon icon={da} />
                </div>
            )}
            {windowMenu.reverse().map((da, index) =>
                <div key={index} className={`${da.background} hover:text-zinc-100 p-4 w-12 text-center`}>
                <FontAwesomeIcon icon={da.icon} />
                </div>
            )}
        </div>
        </div>
    </div>
  )
}

export default WindowMenu