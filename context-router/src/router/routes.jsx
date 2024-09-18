import {createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Something from "../pages/Something"



const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/contact", element: <Contact />},
    {path: "/something", element: <Something />},
    


])

export default router;