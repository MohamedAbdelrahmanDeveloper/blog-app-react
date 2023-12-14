import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { AppWrapper } from './context/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import HeaderApp from './components/layout/Header';
import FooterApp from './components/layout/Footer';
import BlogPage from './pages/blog/blog.page';
import BlogIdPage from './pages/blog/blogId.page';
import ConditionalRoute from './auth/isUser';
import AddBlog from './pages/blog/add.page';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import EditBlog from './pages/blog/edit.page';
import ProfilePage from './pages/profile/profile.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <AppWrapper>
      <BrowserRouter>
        <div className='fixed top-0 left-0 w-full z-30'>
          <HeaderApp />
        </div>
        <main className='min-h-[83vh] mx-4 mt-24' >
          <div id='modal-root'></div>
          <Routes>
            <Route path="/" element={<ConditionalRoute condition={true} redirectTo='/blog'><Home /></ConditionalRoute>}/>
            <Route path="/blog" element={<BlogPage />}/>
            <Route path="/auth/login" element={<LoginPage />}/>
            <Route path="/auth/register" element={<RegisterPage />}/>
            {/* <Route path="/blog" element={<BlogPage />}/> */}
            <Route path="/blog/add" element={<AddBlog />}/>
            <Route path="/blog/edit/:id" element={<EditBlog />}/>
            <Route path="/blog/:id" element={<BlogIdPage />}/>
            <Route path="/profile/:id" element={<ProfilePage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </main>
      <FooterApp />
    </BrowserRouter>
    </AppWrapper>
);

