import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/Dashboard/Product/AddProduct";
import ManageProduct from "../pages/Dashboard/Product/ManageProduct";
import UpdateProduct from "../pages/Dashboard/Product/EditProduct";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    }
    , {
        path: '/dashboard',
        element: <App></App>,
        children: [

            {
                path: "additem",
                element: <AddProduct></AddProduct>
            },
            {
                path: "manageproduct",
                element: <ManageProduct />
            }, {
                path: "manageproduct/:id",
                element: <UpdateProduct></UpdateProduct>
            }

        ]
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router;