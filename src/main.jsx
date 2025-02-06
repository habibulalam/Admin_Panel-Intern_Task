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
import { ProductsProvider } from './Components/Product Context Api/ProductContext.jsx';
import AddProduct from './Components/Add Product/AddProduct.jsx';
import LogIn from './Components/Sing Up and Login/LogIn.jsx';
import SignUp from './Components/Sing Up and Login/SignUp.jsx';
import { AuthProvider } from './Components/AuthContext/AuthContext.jsx';

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
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductsProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ProductsProvider>
  </AuthProvider>
)
