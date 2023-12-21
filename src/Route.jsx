import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Blog from "./Blog";

const myCreatedRoute =  createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/blog",
                element : <Blog></Blog>
            }
        ]
    }
])

export default myCreatedRoute;