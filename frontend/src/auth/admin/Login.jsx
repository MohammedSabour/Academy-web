import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        await login(username, password);
        navigate('/admin/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        setError(
          error.response?.data?.detail ||
          'Invalid username or password.'
        );
      }
  };

  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-32'>
      
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className='mt-8 text-center w-auto mx-auto h-10'>Welcome</h1>
        <p className='text-center text-sm tracking-tight'> Please login to your dashboard.</p>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleLogin} className='space-y-4'>
          {error && (
            <div className="rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-3">
              {error}
            </div>
          )}
          <div className='mt-2'>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/50 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          <div className='mt-2'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/50 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
            />
          </div>
          <div>
            <button 
              type="submit" 
              className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
