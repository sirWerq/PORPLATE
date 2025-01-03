import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProjectPage from './pages/FirstPortofolioTemplate/ProjectsPage.jsx';
import LayoutProduct from './pages/FirstPortofolioTemplate/LayoutProduct.jsx';
import DetailsProjectPage from './pages/FirstPortofolioTemplate/DetailsProjectPage.jsx';
import TestingPage from './pages/Testing.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import FirstProductTemplate from './pages/FirstPortofolioTemplate/FirstProductTemplate.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='subdomain' element={<LayoutProduct />}>
                    <Route index element={<FirstProductTemplate />} />
                    <Route
                        path='/subdomain/projects'
                        element={<ProjectPage />}
                    />
                    <Route
                        path='/subdomain/projects/:id'
                        element={<DetailsProjectPage />}
                    />
                    <Route path='test' element={<TestingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
