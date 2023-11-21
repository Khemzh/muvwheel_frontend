import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.js'
import Destination from './pages/Destination.js'
import Destination2 from './pages/Destination2.js'
import Destination3 from './pages/Destination3.js'
import Paid from './pages/Paid.js'
import PaidSuccess from './pages/PaidSuccess.js'
import ShowPath from './pages/ShowPath.js'
import Travel from './pages/Travel.js'
import CreateProfile from './pages/CreateProfile.js'
import Signin from './pages/Signin.js'
import Signup from './pages/Signup.js'
import Confirmotp from './pages/Confirmotp.js'
import User from './pages/User.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Authen from './pages/Authen.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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
    {
        path: '/paid',
        element: <Paid />,
    },
    {
        path: '/paidsuccess',
        element: <PaidSuccess />,
    },
    {
        path: '/showpath',
        element: <ShowPath />,
    },
    {
        path: '/create',
        element: <CreateProfile />
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/confirmotp',
        element: <Confirmotp />
    },
    {
        path: '/user',
        element: <User />
    },
    {
        path: '/travel',
        element: <Travel />,
    },
    // {
    //     path: '/auth',
    //     element: <Authen />,
    // },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

// localStorage.setItem('user', "S3cXt9L86OT1Ii1Vhc4zQ0kixZx2")
// localStorage.setItem('firebase_token', "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0OWU0N2ZiZGQ0ZWUyNDE0Nzk2ZDhlMDhjZWY2YjU1ZDA3MDRlNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXV2d2hlZWwiLCJhdWQiOiJtdXZ3aGVlbCIsImF1dGhfdGltZSI6MTY5OTgxODc2MiwidXNlcl9pZCI6IlMzY1h0OUw4Nk9UMUlpMVZoYzR6UTBraXhaeDIiLCJzdWIiOiJTM2NYdDlMODZPVDFJaTFWaGM0elEwa2l4WngyIiwiaWF0IjoxNjk5ODE4NzYyLCJleHAiOjE2OTk4MjIzNjIsInBob25lX251bWJlciI6Iis2NjgwMDIyNTM1MyIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzY2ODAwMjI1MzUzIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGhvbmUifX0.TxDg-unjrzw2I-om6MIiciDRy_0UUIQub_k72afPTSQ0iLdPGSWQE4Ri6N7vFhZbQhz58_SGHcbKn6Rk8E-NiV5wW78bbKL2OssAVKMKQLAwhbdsVCMgYRVjV12nm7TlwMOs3-hh7jyNKFyfMxirkGiwx0SjMwlhCBNlCtEYSU5IBkE88pgHBMP22Tk0vjad5kJq6ZrdrYWgoy6-mjdl47djRIjZz5SjEu_bSTBx0j41syafpuiY8I_J5kiZ35WiN5qZWIO7qAFVnAisRsf2UoC5EjXuWO8morL1Q5UdsCjxM4geXeQr80l4n0k51eHimlzD_3OOFk5FBraKTdeF8A")