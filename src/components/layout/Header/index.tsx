import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "retro"
]

function HeaderApp() {
  const [sidebar, setSidebar] =useState(false)
  const [theme, setTheme] =useState<string>(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || "") : "light")
  
  const toggleTheme = (e?: string) => {
    setTheme((value) => {
      if (e) {
        localStorage.setItem('theme', JSON.stringify(e))
        return e
      }
      if (value === 'light') {
        localStorage.setItem('theme', JSON.stringify("dark"))
        return 'dark'
      } else {
        localStorage.removeItem('theme')
        return 'light'
      }
    })
  }
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme' , theme)
  }, [theme])
  return (
    <div className="navbar mb-2 shadow-lg rounded-box relative container mx-auto bg-base-100">
            <div className="flex-1">
              <span className="btn btn-ghost btn-sm md:hidden" onClick={()=> setSidebar(value => !value)}>daisyUI</span>
              <span className="btn btn-ghost btn-sm">
                <label className="swap swap-rotate" >
                  <input type="checkbox" checked={theme !== 'light' ? true : false} onChange={()=> toggleTheme()}/>
                  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> 
                </label>
              </span>
              {sidebar && <div onClick={()=> setSidebar(value => !value)} className='absolute top-0 left-0 h-screen w-screen z-10 bg-base-content/60 md:hidden'></div>}
              <div className={`flex flex-col gap-3 md:flex-row items-center absolute h-screen md:h-auto md:relative w-3/5 -translate-x-full duration-300 md:duration-0 md:translate-x-0 ${sidebar && 'translate-x-0'} md:w-auto z-10 top-0 left-0 bg-base-100 md:bg-base-100`}>
                  <Link className="btn btn-ghost text-xl" to='/'>daisyUI</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>Home</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/blog'>Blog</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/blog/add'>Add blog</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/auth/login'>Login</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/auth/register'>Register</Link>
                  <Link className='btn btn-ghost btn-sm rounded-btn' to='/profile/1'>Profile</Link>
               </div>
            </div>

            <div className="flex-">
              <div className="dropdown dropdown-end ps-2">
                <div tabIndex={0} role="button" className="btn btn-ghost">Theme</div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                  {themes&& themes.map(e => {
                      return <li onClick={()=> toggleTheme(e)} className='btn bg-base-100' key={e}>{e}</li>
                    })}
                </ul>
              </div>
              <a className='btn btn-ghost' href="https://github.com/m7md0a"><i className='bi bi-github text-xl'></i></a>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="hello" src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">Mohamed</span>
                    <span className="text-info">@m7md0a</span>
                    <div className="card-actions">
                      <Link to={'/profile/1'} className="btn btn-primary btn-block">Profile</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default HeaderApp