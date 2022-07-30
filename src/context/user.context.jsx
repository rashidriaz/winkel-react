import {createContext, useEffect, useState} from "react";
import {AuthService} from "../services/database/auth/auth.service";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,
});

export const UserProvider = ({children})=>{
    const authService = new AuthService();

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    useEffect(()=>{
        return authService.onAuthStateChangeListener((user) => {
            setCurrentUser(user);
        });
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
