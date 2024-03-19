import React from 'react'
import { Outlet } from 'react-router-dom';
import {Navbarss} from './Navbarss';
import { Provider } from 'react-redux';
import store from '../store/store';

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <Navbarss />
    <main>
        <Outlet />
    </main>
    
    </Provider>
   
    </>
    
  )
}

export default RootLayout