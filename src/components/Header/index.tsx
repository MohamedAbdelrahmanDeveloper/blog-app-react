import { useState } from 'react'
import { Link } from 'react-router-dom'
import RightLinks from './RightLinks'

function HeaderApp() {
  const [sidebar, setSidebar] =useState(false)
  return (
    <div className="navbar mb-2 shadow-lg rounded-box relative container mx-auto bg-base-100">
            <div className="flex-1">
              <span className="btn btn-ghost btn-sm md:hidden" onClick={()=> setSidebar(value => !value)}>Blog App</span>
              {sidebar && <div onClick={()=> setSidebar(value => !value)} className='absolute top-0 left-0 h-screen w-screen z-10 bg-base-content/60 md:hidden'></div>}
              <div className={`flex flex-col md:[&>.btn]:btn-ghost [&>.btn]:w-3/4 md:[&>.btn]:w-auto gap-3 md:flex-row items-center absolute h-screen md:h-auto md:relative w-3/5 -translate-x-full duration-300 md:duration-0 md:translate-x-0 ${sidebar && 'translate-x-0'} md:w-auto z-10 top-0 left-0 bg-base-100 md:bg-base-100`}>
                  <Link className="btn btn-ghost text-xl" to='/'>Blog App</Link>
                  <Link className='btn btn-sm rounded-btn' to='/'>Home</Link>
                  <Link className='btn btn-sm rounded-btn' to='/blog'>Blog</Link>
                  <Link className='btn btn-sm rounded-btn' to='/blog/add'>Add blog</Link>
                  <Link className='btn btn-sm rounded-btn' to='/login'>Login</Link>
                  <Link className='btn btn-sm rounded-btn' to='/register'>Register</Link>
                  <Link className='btn btn-sm rounded-btn' to='/profile/1'>Profile</Link>
                  <Link className='btn btn-sm rounded-btn' to='/dashboard'>Dashboard</Link>
               </div>
            </div>
            <RightLinks />
          </div>
  )
}

export default HeaderApp