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
import AllFoodItems from "./AllFoodItems";
import DetailsFoodCard from "./DetailsFoodCard";
import OrderFood from "./OrderFood";

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
                path : "/all food items",
                element : <AllFoodItems></AllFoodItems>
            },
            {
                path :  "/all food items/:id",
                element: <DetailsFoodCard></DetailsFoodCard>,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path : "order/:id",
                element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
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
                //loader: () => fetch('http://localhost:5000/foods'),
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