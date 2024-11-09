import {  createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

interface AuthState {
    isAuthenticated:boolean
}
interface AuthAction {
    type: "LOGIN"|"LOGOUT"
}


interface AuthContextType{
    state:AuthState,
    dispatch:Dispatch<AuthAction>
}


const AuthContext = createContext<AuthContextType| undefined>( undefined);

const initialState:AuthState = {
  isAuthenticated: false,
};

const authReducer = (state:AuthState, action:AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProider =({children}:{children:ReactNode})=>{

    const [state,dispatch] = useReducer(authReducer,initialState);

    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


// custom hook to use authContext

// Custom hook to use AuthContext with type checking
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };