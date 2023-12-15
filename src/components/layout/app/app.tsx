import { Route, Routes } from "react-router-dom"
import FooterApp from "../Footer"
import HeaderApp from "../Header"
import BlogPage from "../../../pages/blog/blog.page"
import ProfilePage from "../../../pages/profile/profile.page"
import BlogIdPage from "../../../pages/blog/blogId.page"
import EditBlog from "../../../pages/blog/edit.page"
import AddBlog from "../../../pages/blog/add.page"
import NotFoundPage from "../../../pages/404/404"

function App() {
  return (
    <main>
        <div className='fixed top-0 left-0 w-full z-30'>
            <HeaderApp />
        </div>
        <div className="min-h-[83vh] mx-4 mt-24">
            <Routes>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/blog/add" element={<AddBlog />}/>
                <Route path="/blog/edit/:id" element={<EditBlog />}/>
                <Route path="/blog/:id" element={<BlogIdPage />}/>
                <Route path="/profile/:id" element={<ProfilePage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>           
        </div>
        <FooterApp />
    </main>
  )
}

export default App