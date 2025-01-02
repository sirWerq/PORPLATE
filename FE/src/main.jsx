import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProjectPage from './pages/ProjectsPage.jsx';
import Layout from './Layout.jsx';
import DetailsProjectPage from './pages/DetailsProjectPage.jsx';
import TestingPage from './pages/Testing.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path='projects' element={<ProjectPage />} />
                    <Route
                        path='projects/:id'
                        element={<DetailsProjectPage />}
                    />
                    <Route path='test' element={<TestingPage />} />
                </Route>
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
