import { createBrowserRouter } from "react-router-dom"
import Roots from "../layouts/Roots"
import Home from "../pages/Home/Home"
import Service from "../pages/Service/Service";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/service",
                element: <PrivateRoute><Service></Service></PrivateRoute>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/data.json')

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element:<PrivateRoute><About></About></PrivateRoute>
            }
        ]
    }
])

export default routes;

