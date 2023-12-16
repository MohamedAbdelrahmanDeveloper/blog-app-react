import { Link, Route, Routes } from "react-router-dom"

import { lazy } from "react"
import HeaderDashboard from "../dashboard/Header.dashboard";

const DashboardPage = lazy(() => import("../../pages/dashboard/dashboard.page"));
const UsersPage = lazy(() => import("../../pages/dashboard/users.page"));
const BlogsDashboardPage = lazy(() => import("../../pages/dashboard/blogs.page"));
const NotFoundPage = lazy(() => import("../../pages/404/404"))

function DashboardLayout() {
  return (
    <main className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200 relative">
                <div className='sticky -top-1 left-0 w-full z-30'>
                    <HeaderDashboard />
                </div>
                <div className="mx-2 md:mx-4">
                    <Routes>
                        <Route path="/" element={<DashboardPage />}/>
                        <Route path="/users" element={<UsersPage />}/>
                        <Route path="/blogs" element={<BlogsDashboardPage />}/>
                        <Route path="*" element={<NotFoundPage />}/>
                    </Routes>
                </div>
            </div> 
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content space-y-2">
                    <li>
                        <Link to="/" className="text-xl font-bold btn btn-ghost justify-start">
                            Blog App
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-lg">
                            <i className="bi bi-window-dash"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users" className="text-lg">
                            <i className="bi bi-people"></i>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/blogs" className="text-lg">
                            <i className="bi bi-journal"></i>
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
    </main>
  )
}

export default DashboardLayout