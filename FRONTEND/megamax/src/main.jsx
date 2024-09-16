import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx';
import './index.css';
import { LoginStatusProvider } from './components/context.jsx';
import './assets/css/font.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login/",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginStatusProvider>
      <RouterProvider router={router} />
    </LoginStatusProvider>
  </React.StrictMode>,

)
