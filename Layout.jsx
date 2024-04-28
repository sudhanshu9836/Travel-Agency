import React from 'react';
import Header from './src/Components/Header/header';
import Footer from './src/Components/Footer/footer';

import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;