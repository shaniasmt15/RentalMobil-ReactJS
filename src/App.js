import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from  './pages/home';
import DetailMobil from './pages/detailMobil';
import CariMobil from './pages/cariMobil';
import NotFound from './pages/notFound';
import Mobil from './pages/mobil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='car'>
            <Route index element={<Mobil />} />
            <Route path='cariMobil' element={<CariMobil />} />
            <Route path=':id' element={<DetailMobil />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  ); 
} 


export default App;


