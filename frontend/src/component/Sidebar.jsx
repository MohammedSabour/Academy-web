import React from 'react'
import useAuth from '../hooks/useAuth';
import {Hexagon, Menu } from 'lucide-react';

export default function Sidebar() {
  const { user } = useAuth();
  console.log("Sidebar user:", user);
  return (
    <div className='transition duration-300 ease-in-out bg-slate-800 backdrop-blur-xl border-r border-slate-200/50 flex flex-col relative z-10 w-60'>
        
        {/* logo */}
        <div className='px-6 pt-8'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center justify-center'>
              <Hexagon  className='w-6 h-6 text-[#64ffda]'/> 
            </div>
            <div>
              <h1 className='text-xl font-bold text-white'>Nest Academy</h1>
            </div>
          </div>
        </div>

        {/* Menu navigation */}
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>


        </nav>

        <div className='p-4'>
          <div className='flex items-center space-x-3 p-3'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTm8MGuTAM2Drs7qweNLgjkliV5KD0Qwppw&s" 
              alt="User" 
              className='w-10 h-10 rounded-full ring-2 ring-blue-50O'
            />
              {/*User Profile */}
            <div className='flex-1 min-w-0'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-white/80 truncate'>
                  {user?.username}
                </p>

                <p className='text-xs text-slate-500'>
                  {user?.role}
                </p>

              </div>
            </div>
          </div>
        </div>


    </div>
  )  
}
