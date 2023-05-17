import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is main Layout</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;