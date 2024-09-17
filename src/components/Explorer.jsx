import React, { useState } from 'react'
import { faReact, faGitAlt, faHtml5, faNodeJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleRight, faEllipsis, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import FolderLayout from './FolderLayout';
import ExplorerItem from './ExplorerItem';

const Explorer = () => {

    const [folderState, setFolderState] = useState(true);
    const explorerPanels = ['OUTLINE', 'TIMELINE', 'MYSQL'];
    const componentsFolder = ['Bottom', 'Content', 'Explorer', 'ExplorerItem', 'FolderLayout', 'Layout', 'SidePanel', 'SkillCard', 'TabLayout', 'Tabs', 'WindowMenu', 'WorkCard'];
    const contextFolder = ['LineNumberContext', 'WindowMenuContext'];
    const dataFolder = ['ContentData', 'skills', 'work'];
    const nodeModulesFolder = ['FontAwesome', 'Tailwind CSS', 'React', 'React-Dom', 'React-Router', 'Vite', 'PostCSS'];

    return (
      <div className='flex flex-grow flex-col select-none'>
        <div className='flex flex-row items-center justify-between pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-zinc-400'>
          <div><p className='text-xs'>EXPLORER</p></div>
          <div className='hover:bg-zinc-700 rounded-md px-0.5 py-0 cursor-pointer'><FontAwesomeIcon icon={faEllipsis} /></div>
        </div>
        <div className={`flex flex-col flex-grow h-96 overflow-y-auto`} id='explorer' style={{minWidth: '500px'}}>
          <div onClick={() => setFolderState(!folderState)} className='text-zinc-200 font-bold text-xs pl-1 py-0.5 cursor-pointer'>
            <FontAwesomeIcon className='pr-1' icon={folderState ? faAngleDown : faAngleRight} /> PORTFOLIO
          </div>
          <div className={`${folderState ? "" : "hidden"} text-zinc-200`}>
            <FolderLayout title='node_modules' color='text-green-400' initState={false} padding='pl-5'>
              {nodeModulesFolder.map((da, index) =>
                  <ExplorerItem key={index} title={`${da}`} icon={faFolder} color='text-cyan-500' padding='pl-12' />
              )}
            </FolderLayout>
            <FolderLayout title='src' color='text-green-400' initState={true} padding='pl-5'>
              <FolderLayout title='components' color='text-yellow-400' initState={false} padding='pl-7'>
                {componentsFolder.map((da, index) =>
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/components'} key={index} title={`${da}.jsx`} icon={faReact} color='text-cyan-500' padding='pl-12' />
                )}
              </FolderLayout>
              <FolderLayout title='context' color='text-yellow-400' initState={false} padding='pl-7'>
                {contextFolder.map((da, index) =>
                    <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/context'} key={index} title={`${da}.jsx`} icon={faReact} color='text-cyan-500' padding='pl-12' />
                )}
              </FolderLayout>
              <FolderLayout title='css' color='text-teal-400' initState={false} padding='pl-7'>
                <ExplorerItem title='global.css' outLink url={'https://github.com/Petster/vscode-portfolio/blob/main/src/css/global.css'} icon={faCss3} color='text-cyan-500' padding='pl-12' />
              </FolderLayout>
              <FolderLayout title='data' color='text-yellow-400' initState={false} padding='pl-7'>
                {dataFolder.map((da, index) =>
                    <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/data'} key={index} title={`${da}.jsx`} icon={faReact} color='text-cyan-500' padding='pl-12' />
                )}
              </FolderLayout>
              <FolderLayout title='img' color='text-teal-400' initState={false} padding='pl-7'>
                <FolderLayout title={'work_thumb'} color={'text-yellow-400'} initState={false} padding='pl-12'>
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="1.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="2.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="3.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="4.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="5.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="6.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="7.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="8.jpg" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="app.peterstergaming.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="atoa.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="bellevuework.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="my-first-site.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="provisio.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                  <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="soundsofsilence.png" icon={faImage} color="text-blue-300" padding="pl-20" />
                </FolderLayout>
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="2021_winter_dean_gpa.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="2022_fall_dean.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="2022_spring_dean.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="2023_spring_dean.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="myface_transparent.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="vscode.png" icon={faImage} color="text-blue-300" padding="pl-12" />
                <ExplorerItem outLink url={'https://github.com/Petster/vscode-portfolio/tree/main/src/img'} title="windowmenuextra.png" icon={faImage} color="text-blue-300" padding="pl-12" />
              </FolderLayout>
              <FolderLayout title='pages' color='text-orange-600' initState={true} padding='pl-7'>
                <ExplorerItem link url='/' title='Index.jsx' icon={faReact} color='text-cyan-300' padding='pl-12' />
                <ExplorerItem link url='/about' title='About.jsx' icon={faReact} color='text-cyan-300' padding='pl-12' />
                <ExplorerItem link url='portfolio' title='Portfolio.jsx' icon={faReact} color='text-cyan-300' padding='pl-12' />
                <ExplorerItem link url='connect' title='Connect.jsx' icon={faReact} color='text-cyan-300' padding='pl-12' />
              </FolderLayout>
              <ExplorerItem title='App.jsx' icon={faReact} color='text-cyan-300' padding='pl-10' />
              <ExplorerItem title='main.jsx' icon={faReact} color='text-cyan-300' padding='pl-10' />
            </FolderLayout>
            <ExplorerItem title='.gitattributes' icon={faGitAlt} color='text-orange-500' padding='pl-9' />
            <ExplorerItem title='.gitignore' icon={faGitAlt} color='text-orange-500' padding='pl-9' />
            <ExplorerItem title='index.html' icon={faHtml5} color='text-orange-500' padding='pl-9' />
            <ExplorerItem title='package-lock.json' icon={faNodeJs} color='text-lime-300' padding='pl-9' />
            <ExplorerItem title='package.json' icon={faNodeJs} color='text-lime-300' padding='pl-9' />
          </div>
          <div className={`flex ${folderState ? "flex-grow" : ""}`}></div>
          <div className='flex flex-col text-zinc-200 font-bold text-xs cursor-pointer'>
            {explorerPanels.map((da, index) =>
              <div key={index} className='border-t-2 py-0.5 pl-1 border-t-zinc-700'>
                <FontAwesomeIcon className='pr-1' icon={faAngleRight} /> {da}
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default Explorer