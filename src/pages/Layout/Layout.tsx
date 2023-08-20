import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar";
import AuthRoute from "../../components/AuthForm/AuthRoute";

const Layout = () => {
    return (
        <div>
            <NavBar />

            <AuthRoute><Outlet /></AuthRoute>

        </div>
    )
}

export default Layout;