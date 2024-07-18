import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './Root.tsx';
import Home from './Pages/HomePage.tsx';
import Adventure from './Pages/AdventurePage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import './index.css';
import LandingPage from './Pages/LandingPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    // {
    //     path: '/',
    //     element: <Root />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Home />,
    //         },
    //         {
    //             path: '/adventures',
    //             element: <Adventure />,
    //         },
    //         {
    //             path: 'coaching',
    //             element: <div>Coaching</div>,
    //         },

    //     ],
    // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
