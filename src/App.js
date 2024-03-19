import React from 'react';
import './App.css';
import { ProductList } from './componet/ProductList';
import  Dashboard  from './componet/Dashboard';
import  Cart  from './componet/Cart';
import RootLayout from './componet/RootLayout';
import './productlist.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <>
   <RouterProvider router={router} />
    </>
  );
}

export default App;
