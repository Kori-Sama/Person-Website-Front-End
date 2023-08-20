import { makeAutoObservable } from "mobx"
import { http, getToken, setToken } from "../utils/index"

class LoginStore {

    token = getToken() || "";
    status = 400;
    data = "";

    constructor() {
        makeAutoObservable(this);
    }

    getTokenAsync = async ({ username, password }: UserInfo) => {
        const res = await http.post("https://localhost:7144/UserInfo/login", { username, password })

        if (res.status === 1001 || res.status === 1002) {
            this.status = res.status
            this.data = res.data
        }

        if (res.status === 1000) {
            this.status = res.status
            this.token = res.data;
            setToken(this.token);
        }

    }
}

export default LoginStore;