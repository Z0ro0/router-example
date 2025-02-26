import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  //함수가 아니라 컴포넌트임 대문자로 시작하니까
  const PrivateRoute = () => {
    return authenticate?<UserPage />:<Navigate to="/login" />
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  ); 
}

export default App;
