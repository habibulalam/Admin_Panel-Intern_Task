import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/Error Page/ErrorPage.jsx';
import AllUsers from './Components/All Users/AllUsers.jsx';
import Products from './Components/Products/Products.jsx';
import SingleUser from './Components/Single User/SingleUser.jsx';
import SingleProduct from './Components/Single Product/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/singleUser/:userId",
        element: <SingleUser></SingleUser>,
      },
      {
        path: "/singleProduct/:productId",
        element: <SingleProduct></SingleProduct>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
