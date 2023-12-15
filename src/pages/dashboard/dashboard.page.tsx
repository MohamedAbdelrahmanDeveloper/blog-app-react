function DashboardPage() {
    return (
        <section className="mx-2">
            <section className="flex flex-col md:flex-row gap-4">
                <div className="stats shadow w-full">
                    <div className="stat">
                        <div className="stat-figure text-2xl text-primary"><i className="bi bi-pen"></i></div>
                        <div className="stat-title">Blogs</div>
                        <div className="stat-value text-primary">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>
                </div>
                <div className="stats shadow w-full">
                    <div className="stat">
                        <div className="stat-figure text-2xl text-primary"><i className="bi bi-eye"></i></div>
                        <div className="stat-title">Read</div>
                        <div className="stat-value text-primary">1,568,848,200</div>
                        <div className="stat-desc">↗︎ 90 (14%)</div>
                    </div>
                </div>
                <div className="stats shadow w-full">
                    <div className="stat">
                        <div className="stat-figure text-2xl text-primary"><i className="bi bi-people"></i></div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-primary">500</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>
                </div>
                <div className="stats shadow w-full">
                    <div className="stat">
                        <div className="stat-figure text-2xl text-primary"><i className="bi bi-person-add"></i></div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value text-primary">1,200</div>
                        <div className="stat-desc">↘︎ 90 (0.5%)</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="overflow-x-auto">
                    <h2 className="section-title my-4">Users</h2>
                 <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        [2,54,8,3,4,5,7].map(e => <tr key={e}> 
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
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
                                    <span className="badge badge-ghost badge-sm">Front End</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}

export default DashboardPage