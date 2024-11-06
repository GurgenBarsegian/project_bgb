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
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import { useState } from 'react';
import { Context } from './context';



function App() {

    const [menuActive, setMenuActiv] = useState(false)
    const openMenu = () => setMenuActiv(true)
    const closeMenu = () => setMenuActiv(false)
  
  return (
    <div >
      <Context.Provider value={{openMenu, closeMenu, menuActive}}>     
      <Header/>
        <Routes>
      <Route path='/' element={<MainPage/>}/>
            <Route path='/categories' element={<CategoriesPage/>}/>
            <Route path='/all_products' element={<AllProductsPage/>}/>
            <Route path='/sales' element={<AllSalesPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/categories/:id' element={<ProductsByCategoriesPage/>}/>
          
      </Routes>
      <Footer/>
      </Context.Provider>
    </div>
  );
}

export default App;
