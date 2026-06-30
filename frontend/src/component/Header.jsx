import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Menu as MenuIcon, Bell, Settings} from 'lucide-react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import useAuth from '../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className='bg-white/80 backdrop-blur-xl px-6 pt-8'>
      <div className='flex items-center justify-between'>
        {/* left Section */}
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg text-slate-600'>
            <MenuIcon className='w-5 h-5'/>
          </button>
        </div>

        {/* right section */}
        <div className='flex items-center space-x-5'>
          {/* notification */}
          <button className='relative'>
            <Bell className='w-5 h-5'/>
          </button>

          {/* User Profil */}
          <Menu as="div" className="relative">
            <MenuButton className='flex items-center rounded-full'>
              <img 
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTm8MGuTAM2Drs7qweNLgjkliV5KD0Qwppw&s" 
                alt="User" 
                className='w-8 h-8 rounded-full' 
              />
            </MenuButton> 

            <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <MenuItem>
                {({ focus }) => (
                  <Link 
                    to="/profile" 
                    className={`block px-4 py-2 text-sm ${ focus ? 'bg-gray-100' : ''}`}
                  >
                    Your Profile
                  </Link>
                )}
              </MenuItem>

              <MenuItem>
                {({ focus }) => (
                  <Link
                    to="/settings"
                    className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : ''}`}
                  >
                    Settings
                  </Link>
                )}
              </MenuItem>

              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={handleLogout}
                    className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${
                      focus ? 'bg-gray-100' : ''
                    }`}
                  >
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        
      </div>
    </div>
  )
}
