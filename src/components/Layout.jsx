import React from 'react'
import Explorer from './Explorer'
import SidePanel from './SidePanel'
import Tabs from './Tabs'
import WindowMenu from './WindowMenu'
import { useLocation } from 'react-router'
import Bottom from './Bottom'

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
      <>
        <h1 className={'text-black md:hidden'}>This site doesn't support mobile browsing currently</h1>
            <div className='hidden md:flex min-h-screen flex-col select-none overflow-y-hidden'>
              <WindowMenu />
              <div className='flex flex-row flex-grow'>
                <SidePanel />
                <div className='vs-explorer flex w-64'>
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
                      <div id='editor' className='flex flex-grow overflow-y-scroll h-96 flex-col vs-editor'>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Bottom />
            </div>
      </>
  )
}

export default Layout