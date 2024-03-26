//@ts-nocheck
import { ReactElement, createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () =>{
    return useContext(UserContext);
}
export const UserContextProvider =  ({ children } : {children : ReactElement}) =>{
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    return(
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

