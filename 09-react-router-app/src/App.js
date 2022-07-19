
import React from 'react';
import Nav from './pages/Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import ItemDetails from './pages/ItemDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" exact element={<Shop />} />
        <Route path="shop/:id" element={<ItemDetails />} />

      </Routes>
    </BrowserRouter>
  );
}


const Home = () => {
  return (<>
    <h1>Home Page</h1>
  </>)
}

