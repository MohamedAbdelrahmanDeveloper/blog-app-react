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
  
function RightLinks() {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || "") : "light")

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
  )
}

export default RightLinks