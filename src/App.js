import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  ); 
}

export default App;
