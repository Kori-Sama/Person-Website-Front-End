import React, { lazy } from "react";
import Home from "../pages/homePage/Home"
import Login from "../pages/loginPage/Login";
import SignIn from "../components/AuthForm/SignIn";
import Register from "../components/AuthForm/Register";
import Layout from "../pages/Layout/Layout";

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
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
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
                // index: true,
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