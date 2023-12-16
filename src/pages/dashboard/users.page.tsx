import { Link } from "react-router-dom"

function UsersPage() {
  return (
    <section>
        <div className="card bg-base-100 rounded-box">
            <div className="card-title flex flex-col md:flex-row justify-between items-center p-4">
                <h2 className="section-title my-4">Users</h2>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rule</th>
                            <th>Account</th>
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
                                        <div className="font-bold">Mohamed Abdelrahman</div>
                                        <div className="text-sm opacity-50">Egypt</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    mohamed@mail.com
                                </td>
                                <td className="flex gap-1">
                                    <span className="badge badge-sm">admin</span>
                                    <span className="badge badge-sm">writer</span>
                                    <span className="badge badge-sm">user</span>
                                </td>
                                <td>
                                    <Link className="btn btn-xs" to={`/profile/${e}`} >View</Link>
                                </td>
                                <td className="flex gap-2">
                                    <button className="btn btn-warning btn-xs">Mute</button>
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

export default UsersPage