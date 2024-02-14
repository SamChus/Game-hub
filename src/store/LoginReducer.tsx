

interface LoginAction {
    type: "LOGIN",
    username: string
}

interface LogoutAction {
    type: "LOGOUT",
}

export type AuthAction = LoginAction | LogoutAction 


const LoginReducer = (state: string, action: AuthAction): string => {
    if (action.type === "LOGIN") 
        return action.username = "samuel"
    if (action.type === "LOGOUT")
        return ""
    return state
}

export default LoginReducer;