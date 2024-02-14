import React, { useReducer } from "react";
import { AuthAction } from "./LoginReducer";



interface LoginContextType{
    user: string
    dispatch: React.Dispatch<AuthAction>
}


const LoginContext = React.createContext<LoginContextType>({} as LoginContextType)


export default LoginContext