import { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div className="relative">
            {/* <Navbar /> */}
            <main className="isolate">
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
