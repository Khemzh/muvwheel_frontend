import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CreateProfile from './pages/CreateProfile'
import Home from './pages/Home'
import ShowPath from './pages/ShowPath'
import Authen from './pages/Authen'
import Popup from './pages/Popup'
import PaidSuccess from './pages/PaidSuccess'
import Paid  from './pages/Paid'
import Destination  from './pages/Destination'
import Destination3  from './pages/Destination3'
import Destination2  from './pages/Destination2'
import ChatHistory  from './pages/ChatHistory'
import Chat  from './pages/Chat'
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
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/ShowPath',
    element: <ShowPath />,
  },
  {
    path: '/Popup',
    element: <Popup />,
  },
  {
    path: '/PaidSuccess',
    element: <PaidSuccess />,
  },
  {
    path: '/Paid',
    element: <Paid />,
  },
  {
    path: '/Destination',
    element: <Destination />,
  },
  {
    path: '/Destination3',
    element: <Destination3 />,
  },
  {
    path: '/Destination2',
    element: <Destination2 />,
  },
  {
    path: '/ChatHistory',
    element: <ChatHistory />,
  },
  {
    path: '/Chat',
    element: <Chat />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
