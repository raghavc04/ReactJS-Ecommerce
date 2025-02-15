import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import About from './Pages/About';
import Orders from './Pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/products/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;