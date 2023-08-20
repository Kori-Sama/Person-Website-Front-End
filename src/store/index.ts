import LoginStore from "./login.Store";
import RegisterStore from "./register.Store";
import React from "react";

class RootStore {
    loginStore: LoginStore;
    registerStore: RegisterStore;
    constructor() {
        this.loginStore = new LoginStore();
        this.registerStore = new RegisterStore();
    }
}

// const rootStore = new RootStore();
// const context = React.createContext(rootStore);
// const useStore = React.useContext(context);

const useStore = new RootStore();

export { useStore }