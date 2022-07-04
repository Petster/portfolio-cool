import React from 'react'
import TabLayout from './TabLayout'

const Tabs = () => {
    return (
        <div className='h-9 vs-tab-bg flex flex-row items-center'>
            <TabLayout title='Index.jsx' url='/' />
            <TabLayout title='About.jsx' url='/about' />
            <TabLayout title='Portfolio.jsx' url='/portfolio' />
            <TabLayout title='Connect.jsx' url='/connect' />
        </div>
    )
}

export default Tabs