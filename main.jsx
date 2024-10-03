import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import WorkLog from './pages/Log.jsx'
import WorkOrder from '../pages/Order.jsx'
import Calendar from './pages/Calendar.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/work-log", 
    element: <WorkLog />
  },
  {
    path: "/work-order", 
    element: <WorkOrder />
  },
  {
    path: "/calendar", 
    element:<Calendar />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)