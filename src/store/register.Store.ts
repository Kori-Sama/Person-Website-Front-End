import { makeAutoObservable } from "mobx"
import { http, getToken, setToken } from "../utils/index"

class RegisterStore {

    token = getToken() || "";
    status = 400;
    data = "";

    constructor() {
        makeAutoObservable(this);
    }

    getTokenAsync = async ({ username, password }: UserInfo) => {
        const res = await http.post("https://localhost:7144/UserInfo/register", { username, password })

        if (res.status === 2001) {
            this.status = res.status
            this.data = res.data
        }

        if (res.status === 2000) {
            this.status = res.status
            this.token = res.data;
            setToken(this.token);
        }
    }
}

export default RegisterStore;