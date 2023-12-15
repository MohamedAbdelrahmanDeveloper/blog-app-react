import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';

import { AppWrapper } from './context/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import ConditionalRoute from './auth/isUser';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import App from './components/layout/app/app';


const Home = lazy(() => import('./pages/Home'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback={<div>fkmkm</div>}>
    <AppWrapper>
      <BrowserRouter>
          <div id='modal-root'></div>
          <Routes>
            <Route path="/" element={<ConditionalRoute condition={true} redirectTo='/app/blog'><Home /></ConditionalRoute>}/>
            <Route path="/app/*" element={<App />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
    </BrowserRouter>
    </AppWrapper>
  </Suspense>
);

