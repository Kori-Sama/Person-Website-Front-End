import { useRoutes } from "react-router-dom"
import router from './router'
import { observer } from "mobx-react-lite";
// import AuthRoute from "./components/AuthForm/AuthRoute";

function App() {
  const outlet = useRoutes(router);

  return (
    <div className='App'>
      {outlet}
    </div>
  )
}

export default observer(App);
