import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const themesColors = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "black",
  "emerald",
  "corporate",
  "synthwave",
  "lofi",
  "fantasy",
  "luxury",
  "dracula"
]

function HeaderApp() {
  const [sidebar, setSidebar] =useState(false)
  const [theme, setTheme] =useState<string>(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || "") : "light")
  
  const handelSetTheme = (e?: string) => {
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
              <span className="btn btn-ghost btn-sm md:hidden" onClick={()=> setSidebar(value => !value)}>Blog App</span>
              {sidebar && <div onClick={()=> setSidebar(value => !value)} className='absolute top-0 left-0 h-screen w-screen z-10 bg-base-content/60 md:hidden'></div>}
              <div className={`flex flex-col md:[&>.btn]:btn-ghost [&>.btn]:w-3/4 md:[&>.btn]:w-auto gap-3 md:flex-row items-center absolute h-screen md:h-auto md:relative w-3/5 -translate-x-full duration-300 md:duration-0 md:translate-x-0 ${sidebar && 'translate-x-0'} md:w-auto z-10 top-0 left-0 bg-base-100 md:bg-base-100`}>
                  <Link className="btn btn-ghost text-xl" to='/'>Blog App</Link>
                  <Link className='btn btn-sm rounded-btn' to='/'>Home</Link>
                  <Link className='btn btn-sm rounded-btn' to='/blog'>Blog</Link>
                  <Link className='btn btn-sm rounded-btn' to='/blog/add'>Add blog</Link>
                  <Link className='btn btn-sm rounded-btn' to='/auth/login'>Login</Link>
                  <Link className='btn btn-sm rounded-btn' to='/auth/register'>Register</Link>
                  <Link className='btn btn-sm rounded-btn' to='/profile/1'>Profile</Link>
               </div>
            </div>
            <div className="gap-x-2">
              <a className='btn btn-ghost' target='_blank' href="https://github.com/m7md0a"><i className='bi bi-github text-xl'></i></a>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost"><i className="bi bi-paint-bucket text-2xl"></i></div>
                <ul tabIndex={0} className="dropdown-content dropdown-right mt-3 z-[1] p-2 shadow bg-base-100 rounded-box grid grid-cols-2 gap-4 w-[60vw] md:w-52 h-[54vh]">
                  {themesColors&& themesColors.map(e => {
                      return <li data-theme={e} onClick={()=> handelSetTheme(e)} className='btn bg-base-100 flex flex-col items-center' key={e}>
                        <span className='text-xs -mb-k1'>{e}</span>
                        <span>
                          <span className='badge badge-xs badge-primary'></span>
                          <span className='ms-2 badge badge-xs badge-secondary'></span>
                        </span>
                      </li>
                    })}
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <button className='btn btn-ghost px-2'>
                  <span>Mohamed</span>
                  <div tabIndex={0} className="avatar">
                    <div className="w-10 rounded-full">
                      <img alt="hello" src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                    </div>
                  </div>
                </button>
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