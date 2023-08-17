interface LoginAPIReq {
    username: string;
    password: string;
}

interface LoginAPIRes {
    msg: string;
    token: string;
    code: number;
}