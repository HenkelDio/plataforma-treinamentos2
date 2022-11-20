import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useContext();

    const login = (email, password) => {
        console.log("auth:", {email, password})

        const loggedUser = {
            id: "123",
            email
        }
        
        localStorage.setItem('user', JSON.stringify(loggedUser))
        setUser(loggedUser)

        console.log(user)
    }

    const logout = () => {
        console.log("logout")
        setUser(null);
        navigate("/")
    }
    
    return(
        <AuthContext.Provider value={{auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}