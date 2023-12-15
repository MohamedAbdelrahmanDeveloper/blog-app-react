import { Link } from 'react-router-dom'
import DeleteModal from '../modals/DeleteModal'
type Props = {
    e: number,
    className?: string
}
function Blog({e, className}: Props) {
  return (
    <div className={`${className} card bg-base-100 shadow-xl relative`}>
        <figure><img src="https://images.pexels.com/photos/12756665/pexels-photo-12756665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="hello" /></figure>
          <div className="dropdown dropdown-end absolute top-0 end-1">
            <div tabIndex={e} role="button" className="btn btn-sm bg-opacity-70 ring-0 border-0 m-1"><i className="bi bi-three-dots-vertical"></i></div>
              <ul tabIndex={e} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={`/app/blog/edit/${e}`}>Edit {e}</Link></li>
                <li><DeleteModal /></li>
                <li><a>Report</a></li>
              </ul>
            </div>
        <div className="card-body p-4">
            <div className="flex space-x-3">
              <Link to={`/user/${e}`} >
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/54208900?v=4" alt='hello'/>
                  </div>
                </div>
              </Link>
              <div>
                <Link to={`/user/${e}`} >
                  <h2 className="text-base text-base-content/75">@mohamed</h2>
                </Link>
                <p className="text-base-content/50 text-xs">May, 9, 2023</p>
              </div>
            </div>
            <h2 className='card-title text-base-content/80'>
              <Link to={`/app/blog/${e}`} >Lorem ipsum dolor sit</Link>
            </h2>
            <p className='text-base-content/50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores</p>
            <div className="card-actions justify-end">
            <Link to={`/app/blog/${e}`} className="btn btn-sm btn-primary">read more..</Link>
            </div>
        </div>
    </div>
  )
}

export default Blog