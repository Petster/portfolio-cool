import React from 'react'
import vscode from './img/vscode.png'

const App = () => {

  const topMenu = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='h-9 vs-top flex flex-row items-center p-2'>
        <div>
          <img src={vscode} width={20} alt="vscode logo" />
        </div>
        <div className='ml-1.5 flex flex-row items-center p-2 gap-2.5 font-medium text-zinc-400 text-xs'>
          {topMenu.map((da, index) =>
            <div className='hover:bg-zinc-700 p-1 rounded-md hover:text-zinc-200 cursor-pointer' key={index}>{da}</div>
          )}
        </div>
      </div>
      <div className='flex flex-row flex-grow'>
        <div className='vs-panel w-10'>

        </div>
        <div className='vs-explorer w-56'>

        </div>
        <div className='flex flex-col flex-grow'>
          <div className='h-9 vs-tab-bg'>

          </div>
          <div className='flex flex-row flex-grow bg-green-400'>
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