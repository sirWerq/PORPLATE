import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProjectPage from './pages/ProjectsPage.jsx';
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path='projects' element={<ProjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
