import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/',
                element: <Overview></Overview>
            }
        ]
    }
])

export default router;