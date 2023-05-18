import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Others/Blogs/Blogs";
import AddToys from "../pages/Others/AddToys/AddToys";
import AllToys from "../pages/Others/AllToys/AllToys";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Registration/Login";
import NotFound from "../pages/Others/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addToy',
                element: <PrivateRoute>
                    <AddToys></AddToys>
                </PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allToys',
                element: <PrivateRoute>
                    <AllToys></AllToys>
                </PrivateRoute>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router;