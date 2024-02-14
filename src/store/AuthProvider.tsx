import { Children, ReactNode, createContext, useReducer } from "react";

export const AuthContext = createContext<LoginContextType>(
  {} as LoginContextType
); //can stand on it own


interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const LoginReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return (action.username = "samuel");
  if (action.type === "LOGOUT") return "";
  return state;
};

interface LoginContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}


interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(LoginReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
