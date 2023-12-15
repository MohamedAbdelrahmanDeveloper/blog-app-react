function DashboardPage() {
  return (
    <section>
        <section className="flex">
            <div className="w-2/4">
            </div>
            <div className="stats shadow w-full">
                <div className="stat place-items-center">
                    <div className="stat-title">Blogs</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Read</div>
                    <div className="stat-value">1,568,848,200</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">500</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (0.5%)</div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default DashboardPage