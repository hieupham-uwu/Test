import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Input from './components/Input';
import LoginPage from './components/HomePage/LoginPage';
import { publicRoutes } from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
    console.log(publicRoutes);
    return (
        <>
            <Router>
                {' '}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
