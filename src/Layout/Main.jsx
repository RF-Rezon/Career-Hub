import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav/>
            <div className='max-w-7xl mx-auto'><Outlet/></div>
        </div>
    );
};

export default Main;