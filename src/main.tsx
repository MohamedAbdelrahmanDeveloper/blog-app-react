import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';

import { AppWrapper } from './context/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from './pages/Loading/loading.page';
import AppLayout from './components/layout/app.layout';
import DashboardLayout from './components/layout/dashboard.layout';


const NotFoundPage = lazy(() => import('./pages/404/404'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback={<LoadingPage />}>
    <AppWrapper>
      <BrowserRouter>
          <div id='modal-root'></div>
          <div>
            <Routes>
              {/* <Route path="/" element={<ConditionalRoute condition={true} redirectTo='/blog/blog'><Home /></ConditionalRoute>}/> */}
              <Route path="/*" element={<AppLayout />}/>
              <Route path="/dashboard/*" element={<DashboardLayout />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </div>
    </BrowserRouter>
    </AppWrapper>
  </Suspense>
);

