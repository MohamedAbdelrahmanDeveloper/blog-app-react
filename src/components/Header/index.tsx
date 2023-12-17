import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import RightLinks from './RightLinks'

function HeaderApp() {
  const [sidebar, setSidebar] =useState(false)
  return (
    <div className="navbar mb-2 shadow-lg rounded-box relative xl:container xl:mx-auto bg-base-100">
            <div className="flex-1">
              <span className="btn btn-ghost drawer-button lg:hidden" onClick={()=> setSidebar(value => !value)}>
                  <i className="bi bi-list text-2xl"></i>
              </span>
              <span className="xl:hidden font-bold text-xl ps-1" >Blog App</span>
              {sidebar && <div onClick={()=> setSidebar(value => !value)} className='absolute top-0 left-0 h-screen w-screen z-10 bg-base-content/60 xl:hidden'></div>}
              <div className={`flex flex-col xl:[&>.btn]:btn-ghost [&>.btn]:w-full px-4 xl:[&>.btn]:w-auto gap-3 xl:flex-row items-center absolute h-screen xl:h-auto xl:relative w-3/5 -translate-x-full duration-300 xl:duration-0 xl:translate-x-0 ${sidebar && 'translate-x-0'} xl:w-auto z-10 top-0 left-0 bg-base-100 xl:bg-base-100`}>
                  <NavLink className="btn btn-ghost text-xl" to='/'>Blog App</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/' end>Home</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/articles' end>Articles</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/articles/add' end>Add Article</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/login' end>Login</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/register' end>Register</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/profile/1' end>Profile</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/bla-bla' end>Not Found</NavLink>
                  <NavLink className='btn btn-md md:btn-sm rounded-btn' to='/dashboard' end>Dashboard</NavLink>
               </div>
            </div>
            <RightLinks />
          </div>
  )
}

export default HeaderApp