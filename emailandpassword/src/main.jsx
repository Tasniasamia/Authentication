import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Resister from './Components/Resister/Resister';
import Resister_bs from './Components/Resister_bootstrap/Resister_bs';
import Resister_bs2 from './Components/Resister_bs2/Resister_bs2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/Login",
        element:<Login></Login>,
      },{
        path:"/Resister",
        element:<Resister></Resister>
      },{
        path:"/resister_bs",
        element:<Resister_bs></Resister_bs>
      },{
        path:"/res-bs2",
        element:<Resister_bs2></Resister_bs2>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

