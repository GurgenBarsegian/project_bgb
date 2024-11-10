<<<<<<< HEAD
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
=======
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoriesPage from "./pages/ProductsByCategoriesPage";
import SingleProductPage from './pages/SingleProductPage';

>>>>>>> 19423685b903981b7d67fa2f5e2975103f3a9ecf



function App() {
<<<<<<< HEAD

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
=======
  return (
    <div>
      <Header />
      <main className="wrap">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/all_products" element={<AllProductsPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/products/:product_id' element={<SingleProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/categories/:id"
            element={<ProductsByCategoriesPage />}
          />
        </Routes>
      </main>
         <Footer />
>>>>>>> 19423685b903981b7d67fa2f5e2975103f3a9ecf
    </div>

  )
}

export default App;
