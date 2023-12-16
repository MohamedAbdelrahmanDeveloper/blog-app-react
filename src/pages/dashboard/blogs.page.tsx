import { Link } from "react-router-dom"

function BlogsDashboardPage() {
  return (
    <section>
        <div className="card bg-base-100 rounded-box">
            <div className="card-title flex flex-col md:flex-row justify-between items-center p-4">
                <h2 className="section-title my-4">Blogs</h2>
                <div className="join xs:join-vertical md:join-horizontal">
                    <div>
                        <div>
                        <input className="input input-bordered join-item" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="indicator w-full">
                        <button className="btn join-item w-full">Search</button>
                    </div>
                </div>
            </div>
            <div className='card-body px-4 md:px-6 overflow-x-scroll py-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Visits</th>
                            <th>Show</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        [2,54,8,3,4,5,7,78,9,996,974,4435,543].map(e => <tr key={e}> 
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-circle w-12 h-12">
                                            <img src="https://avatars.githubusercontent.com/u/54208900?v=4" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <Link to={`/profile/${e}`} className="font-bold">Mohamed Abdelrahman</Link>
                                        <div className="text-sm opacity-50">mohamed@mail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Lorem ipsum dolor sit amet
                                </td>
                                <td className="flex gap-1">
                                    <span className="badge badge-ghost badge-sm">react</span>
                                    <span className="badge badge-ghost badge-sm">next</span>
                                    <span className="badge badge-ghost badge-sm">typescript</span>
                                </td>
                                <td>
                                    <span className="text-base-content/80">205,454</span>
                                </td>
                                <td>
                                    <Link className="btn btn-sm" to={`/blog/${e}`} >View</Link>
                                </td>
                                <td className="flex gap-2">
                                    <button className="btn btn-warning btn-xs">Private</button>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default BlogsDashboardPage