import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Pages/Home'
import CreateProfile from './Pages/CreateProfile'
import Authen from './Pages/Authen'
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
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
