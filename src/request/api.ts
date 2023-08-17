import request from "./index"

export const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> => {
    return request.post("localhost:8080", params);
} 