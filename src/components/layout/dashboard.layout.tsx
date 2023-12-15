import { Route, Routes } from "react-router-dom"

import { lazy } from "react"

const DashboardPage = lazy(() => import("../../pages/dashboard/dashboard.page"));
const NotFoundPage = lazy(() => import("../../pages/404/404"))

function DashboardLayout() {
  return (
    <main>
        sidebar
        <div className="min-h-[83vh] mx-4 mt-24">
            <Routes>
                <Route path="/" element={<DashboardPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>           
        </div>
        footer
    </main>
  )
}

export default DashboardLayout