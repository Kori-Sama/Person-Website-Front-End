import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1 style={{ fontSize: 100 }}>HomePage</h1>
            <Outlet />
        </div>
    )
}

export default Home;