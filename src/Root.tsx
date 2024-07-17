import { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div className="relative bg-gray-50">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Root;
