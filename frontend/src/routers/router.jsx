import{
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import KK from "../pages/KK";
import Chat from "../pages/Chat"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Singlepostpage from "../pages/Singlepostpage";
import FF from "../pages/FF";




const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/home",
                element: <Home/>
            },
            {
                index: true, // This makes KK the default page inside App
                element: <FF />
            },
            {
                path:"/chat",
                element:<Chat/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/Register",
                element:<Register/>
            },
           {
            path:"/post/:id",
            element:<Singlepostpage/>
           }
        ]
    },
]) 

export default router;