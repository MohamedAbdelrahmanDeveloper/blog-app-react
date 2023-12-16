import BarChart from "./BarChart"
import LineChart from "./LineChart"
import DoughnutChart from "./DoughnutChart"
import OneLineChart from "./OneLineChart"

function DashboardPage() {
    return (
        <section className="space-y-5">
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
            <section className="flex flex-col md:flex-row gap-4">
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                        <BarChart />
                    </div>
                </div>
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                       <LineChart />
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row gap-4">
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                        <OneLineChart />
                    </div>
                </div>
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                        <DoughnutChart />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default DashboardPage