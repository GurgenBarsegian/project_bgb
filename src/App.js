import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import AllProductsPage from './pages/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';




function App() {
  return (
    <div >
  <Header/>
    <Routes>
  <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/products/all' element={<AllProductsPage/>}/>
        <Route path='/sales' element={<AllSalesPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
