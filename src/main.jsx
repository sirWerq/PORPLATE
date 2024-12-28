import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProjectPage from './components/ProjectsPage.jsx';
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/projects' element={<ProjectPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
);
