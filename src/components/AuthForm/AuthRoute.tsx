import { Navigate } from "react-router-dom";
import { getToken } from "../../utils";

export default function AuthRoute({ children }: { children: React.ReactNode }) {
    const isToken = getToken();
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}