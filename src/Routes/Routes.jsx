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
import SingleToyDetails from "../pages/Others/SingleToyDetails/SingleToyDetails";
import MyToys from "../pages/Others/MyToys/MyToys";

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
                path: '/toy/:toyId',
                element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,

            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
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