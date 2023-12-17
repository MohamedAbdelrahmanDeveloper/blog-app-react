import BarChart from "../../components/dashboard/BarChart"
import LineChart from "../../components/dashboard/LineChart"
import DoughnutChart from "../../components/dashboard/DoughnutChart"
import OneLineChart from "../../components/dashboard/OneLineChart"
import Stat from "../../components/dashboard/Stat"

function DashboardPage() {
    return (
        <section className="space-y-5">
            <section className="flex flex-col md:flex-row gap-4">
                <Stat icon={<i className="bi bi-pen"></i>} title="Articles" value="31k" desc="From January 1st to February 1st"  />
                <Stat icon={<i className="bi bi-eye"></i>} title="Read" value="1,568,848,200" desc="↗︎ 90 (14%)"  />
                <Stat icon={<i className="bi bi-people"></i>} title="Users" value="500" desc="↗︎ 40 (2%)"  />
                <Stat icon={<i className="bi bi-person-add"></i>} title="New Registers" value="1,200" desc="↘︎ 90 (0.5%)"  />
            </section>
            <section className="flex flex-col md:flex-row gap-4">
                <BarChart />
                <LineChart />
            </section>
            <section className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                    <OneLineChart title="WebSite Visits"/>
                    <OneLineChart title="WebSite Visits 2"/>
                </div>
                <DoughnutChart />
            </section>
        </section>
    )
}

export default DashboardPage