import { Route, Routes } from "react-router-dom"
import FooterApp from "../Footer"
import HeaderApp from "../Header"

import { lazy } from "react"


const Home = lazy(() => import('../../pages/Home'));
const ProfilePage = lazy(() => import('../../pages/profile/profile.page'));
const LoginPage = lazy(() => import('../../pages/auth/login.page'));
const RegisterPage = lazy(() => import('../../pages/auth/register.page'));
const BlogPage = lazy(() => import("../../pages/blog/blog.page"))
const AddBlog = lazy(() => import("../../pages/blog/add.page"))
const EditBlog = lazy(() => import("../../pages/blog/edit.page"))
const BlogIdPage = lazy(() => import("../../pages/blog/blogId.page"))
const NotFoundPage = lazy(() => import("../../pages/404/404"))

function AppLayout() {
  return (
    <main>
        <div className='fixed top-0 left-0 w-full z-30'>
            <HeaderApp />
        </div>
        <div className="min-h-[83vh] mx-4 mt-24">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/profile/:id" element={<ProfilePage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/blog/add" element={<AddBlog />}/>
                <Route path="/blog/edit/:id" element={<EditBlog />}/>
                <Route path="/blog/:id" element={<BlogIdPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>           
        </div>
        <FooterApp />
    </main>
  )
}

export default AppLayout