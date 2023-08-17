import { Navigate } from "react-router-dom"
import React, { lazy } from "react";
import Home from "../pages/homePage/Home"
import Login from "../pages/loginPage/Login";
import SignIn from "../components/AuthForm/SignIn/SignIn";
import Register from "../components/AuthForm/Register/Register";

const Blog = lazy(() => import("../pages/blogPage/Blog"))
const Project = lazy(() => import("../pages/projectPage/Project"))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const router = [
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "blog",
                element: withLoadingComponent(<Blog />)
            },
            {
                path: "project",
                element: withLoadingComponent(<Project />)
            },
        ]
    },
    {
        path: "/",
        element: <Login />,
        children: [
            {
                index: true,
                path: "login",
                element: <SignIn />,
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]

export default router;