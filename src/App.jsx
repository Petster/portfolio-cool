import React, { useState } from 'react'
import vscode from './img/vscode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCopy, faFolder, faSquare, faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch, faMagnifyingGlass, faTableCellsLarge, faPlay, faMinus, faGear, faCubes, faEllipsisVertical, faEllipsis, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  const topMenu = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

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

  const windowMenu = [
    {
      icon: faX,
      background: 'bg-red-500'
    },
    {
      icon: faSquare,
      background: 'bg-zinc-700'
    },
    {
      icon: faMinus,
      background: 'bg-zinc-700'
    },
  ];

  const explorerPanels = ['OUTLINE', 'TIMELINE', 'MYSQL'];

  const windowLayoutMenu = [faCubes, faEllipsisVertical, faWindowRestore, faWindowRestore, faWindowRestore];

  const [folderState, setFolderState] = useState(false);

  return (
    <div className='min-h-screen flex flex-col'>
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
              <p>Portfolio.js - Jason Palmeri - Visual Studio Code</p>
          </div>
          <div className='flex content-center justify-center items-center'>
              {windowLayoutMenu.reverse().map((da, index) =>
                <div key={index} className='p-1 hover:bg-zinc-700 rounded-md'>
                  <FontAwesomeIcon icon={da} />
                </div>
              )}
              {windowMenu.reverse().map((da, index) =>
                <div key={index} className={`hover:${da.background} hover:text-zinc-100 p-4 w-12 text-center`}>
                  <FontAwesomeIcon icon={da.icon} />
                </div>
              )}
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-grow'>
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
        <div className='vs-explorer flex w-56'>
            <div className='flex flex-grow flex-col'>
              <div className='flex flex-row items-center justify-between pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-zinc-400'>
                <div><p className='text-xs'>EXPLORER</p></div>
                <div className='hover:bg-zinc-700 rounded-md px-0.5'><FontAwesomeIcon icon={faEllipsis} /></div>
              </div>
              <div className='flex flex-col flex-grow p-1 pr-0 pt-0.5'>
                <div onClick={() => setFolderState(!folderState)} className='text-zinc-200 font-bold text-xs cursor-pointer'>
                  <FontAwesomeIcon className='pr-1' icon={folderState ? faAngleDown : faAngleRight} /> PORTFOLIO
                </div>
                <div className={`${folderState ? "" : "hidden"} text-zinc-200 ml-4`}>
                  folder stuff
                </div>
                <div className={`flex ${folderState ? "flex-grow" : ""}`}></div>
                <div className='flex flex-col text-zinc-200 font-bold text-xs cursor-pointer'>
                  {explorerPanels.map((da, index) =>
                    <div key={index} className='border-t-2 border-t-zinc-700'>
                      <FontAwesomeIcon className='pr-1' icon={faAngleRight} /> {da}
                    </div>
                  )}
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col flex-grow'>
          <div className='h-9 vs-tab-bg'>

          </div>
          <div className='flex flex-row flex-grow'>
            <div className='flex flex-col flex-grow'>
              <div className='h-5 vs-editor shadow-2xl border-b-2 border-b-black'>

              </div>
              <div className='flex flex-grow vs-editor'>

              </div>
            </div>
            <div className='w-32 vs-editor'>

            </div>
          </div>
        </div>
      </div>
      <div className='h-5 vs-bottom'>

      </div>
    </div>
  )
}

export default App