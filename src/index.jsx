import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import Home from './pages/Home.js'
import CreateProfile from './pages/CreateProfile.jsx'
import Authen from './pages/Authen.jsx'
import Destination from './pages/Destination.js'
import Destination2 from './pages/Destination2.js'
import Destination3 from './pages/Destination3.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/authen',
        element: <Authen />,
    },
    {
        path: '/create',
        element: <CreateProfile />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/destination',
        element: <Destination />,
    },
    {
        path: '/destination2',
        element: <Destination2 />,
    },
    {
        path: '/destination3',
        element: <Destination3 />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
