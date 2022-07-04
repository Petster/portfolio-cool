import React from 'react'
import Explorer from './Explorer'
import SidePanel from './SidePanel'
import Tabs from './Tabs'
import WindowMenu from './WindowMenu'
import { useLocation } from 'react-router'
import LineHeight from './LineHeight'
import Content from './Content'

const Layout = ({children}) => {

    const location = useLocation();
    const { pathname } = location;
    let current = pathname.split("/");

    switch(current[1]) {
        case "":
            current = "Index";
            break;
        case "about":
            current = "About";
            break;
        case "portfolio":
            current = "Portfolio";
            break;
        case "connect":
            current = "Connect";
            break;
        default:
            current = "Hey"
            break;
    }

  return (
    <div className='min-h-screen flex flex-col select-none'>
      <WindowMenu />
      <div className='flex flex-row flex-grow'>
        <SidePanel />
        <div className='vs-explorer flex w-56'>
            <Explorer />
        </div>
        <div className='flex flex-col flex-grow'>
          <Tabs />
          <div className='flex flex-row flex-grow'>
            <div className='flex flex-col flex-grow'>
              <div className='flex flex-row content-center items-center h-5 vs-editor shadow-2xl'>
                <div className='text-xs text-white pl-4'>
                    <p>src &gt; pages &gt; {current}.jsx</p>
                </div>
              </div>
              <div id='editor' className='flex flex-grow overflow-y-scroll h-96 flex-row vs-editor'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-5 vs-bottom'>

      </div>
    </div>
  )
}

export default Layout