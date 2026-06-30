import React from 'react'
import Sidebar from '../../component/Sidebar'
import Header from '../../component/Header'


export default function dashboard() {
  return (
    <div className='min-h-screen bg-white  transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar/>
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header />
        </div>
      </div> 
    </div>
  )
}
