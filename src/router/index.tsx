import { Navigate } from "react-router-dom"
import Home from "../pages/homePage/Home"
import React, { lazy } from "react";

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
        element: <Navigate to="/" />
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
            }
        ]
    }
]

export default router;