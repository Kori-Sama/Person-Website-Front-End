import { makeAutoObservable } from "mobx"
import { http, getToken, setToken } from "../utils/index"

class LoginStore {

    token = getToken() || "";

    constructor() {
        makeAutoObservable(this);
    }

    getTokenAsync = async ({ username, password }: UserInfo) => {
        const res = await http.post("http://", { username, password })
        this.token = res.data;
        setToken(this.token);
    }
}

export default LoginStore;