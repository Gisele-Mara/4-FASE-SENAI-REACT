import {createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import Balcao from "../pages/Balcao";




const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/balcao", element: <Balcao/>},



])

export default router;