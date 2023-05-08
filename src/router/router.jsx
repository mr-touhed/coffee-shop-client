import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: "addnewcoffee",
                element: <AddCoffee/>
            },
            {
                path: "updateCoffee",
                element: <UpdateCoffee/>
            },
            {
                path: "*",
                element: <ErrorPage/>
            }
        ]
    }
])

export default router