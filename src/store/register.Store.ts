import { makeAutoObservable } from "mobx"
import { http, getToken, setToken } from "../utils/index"

class registerStore {

    token = getToken() || "";

    constructor() {
        makeAutoObservable(this);
    }

    getTokenAsync = async ({ username, password }: UserInfo) => {
        const res = await http.post("https://localhost:7144/UserInfo", { username, password })
        this.token = res.data;

        setToken(this.token);
    }
}

export default registerStore;