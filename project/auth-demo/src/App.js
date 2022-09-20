import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AuthFormPage from './pages/AuthFormPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/auth-form' element={<AuthFormPage />} />
      </Routes>
    </Layout>
  );
}
