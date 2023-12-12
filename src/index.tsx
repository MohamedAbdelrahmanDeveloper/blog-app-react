import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { AppWrapper } from './context/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import HeaderApp from './components/Layout/Header';
import FooterApp from './components/Layout/Footer';
import BlogPage from './pages/blog/blog.page';
import BlogIdPage from './pages/blog/blogId.page';
import ConditionalRoute from './auth/isUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <AppWrapper>
      <BrowserRouter>
        <div className='fixed top-0 left-0 w-full z-30'>
          <HeaderApp />
        </div>
        <main className='min-h-[83vh] mx-4 mt-24'>
          <Routes>
            <Route path="/" element={<ConditionalRoute condition={true} redirectTo='/blog'><Home /></ConditionalRoute>}/>
            <Route path="/blog" element={<BlogPage />}/>
            <Route path="/blog/:id" element={<BlogIdPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </main>
      <FooterApp />
    </BrowserRouter>
    </AppWrapper>
);

