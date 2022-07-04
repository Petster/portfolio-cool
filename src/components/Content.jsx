import React from 'react'
import LineHeight from './LineHeight'

const Content = ({children, lines}) => {
  return (
    <>
    <div className='w-20 flex h-full flex-col content-center items-center gap-1.5 pt-4'>
        <LineHeight lines={lines} />
    </div>
    <div className='p-4 pl-0 flex flex-grow text-white text-sm'>
        {children}
    </div>
    <div className='w-32 vs-editor hidden'>
        hey
    </div>
    </>
  )
}

export default Content