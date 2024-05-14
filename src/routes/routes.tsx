import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AddProduct from "../components/Dashboard/Product/AddProduct";

const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <App></App>,
        children: [

            {
                path: "additem",
                element: <AddProduct></AddProduct>
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