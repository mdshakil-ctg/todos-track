import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "./ErrorElement";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        errorElement:<ErrorElement/>,
        children:[
            {
                path: 'index',
                element:<Home/>,

            }
        ]
    }
])