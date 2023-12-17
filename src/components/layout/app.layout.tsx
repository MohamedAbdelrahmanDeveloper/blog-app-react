import { Route, Routes } from "react-router-dom"
import FooterApp from "../Footer"
import HeaderApp from "../Header"

import { lazy } from "react"


const Home = lazy(() => import('../../pages/Home'));
const ProfilePage = lazy(() => import('../../pages/profile/profile.page'));
const LoginPage = lazy(() => import('../../pages/auth/login.page'));
const RegisterPage = lazy(() => import('../../pages/auth/register.page'));
const ArticlesPage = lazy(() => import("../../pages/blog/articles.page"))
const AddArticle = lazy(() => import("../../pages/blog/add.page"))
const EditArticle = lazy(() => import("../../pages/blog/edit.page"))
const ArticleIdPage = lazy(() => import("../../pages/blog/articleId.page"))
const NotFoundPage = lazy(() => import("../../pages/404/404"))

function AppLayout() {
  return (
    <main>
        <div className='sticky top-0 left-0 w-full z-30'>
            <HeaderApp />
        </div>
        <div className="min-h-[83vh] mx-4">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/profile/:id" element={<ProfilePage />}/>
                <Route path="/articles" element={<ArticlesPage />}/>
                <Route path="/articles/add" element={<AddArticle />}/>
                <Route path="/articles/edit/:id" element={<EditArticle />}/>
                <Route path="/articles/:id" element={<ArticleIdPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>           
        </div>
        <FooterApp />
    </main>
  )
}

export default AppLayout