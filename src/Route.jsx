import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Blog from "./Blog";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "./AddFood";
import MyAddedFoods from "./MyAddedFoods";
import UpdateFood from "./UpdateFood";

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
            },
            {
                path : "/add an item",
                element : <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path : "/my added items",
                element : <PrivateRoute><MyAddedFoods></MyAddedFoods></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path : "update an item/:id",
                element : <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
            },
            {
                path: "login",
                element : <Login></Login>
            },
            {
            path: "register",
            element : <Register></Register>
            },
        ]
    }
])

export default myCreatedRoute;