import { createContext, useState, useEffect  } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState()

  

  const login = (email, password) => {
    console.log("login auth", {email, password})    

    const loggedUser = {
        id: "123",
        email
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))


    setUser(loggedUser)
}

  return (
    <AuthContext.Provider value={{authenticated: !!user, user,setUser, login}}>
      {children}
    </AuthContext.Provider>
  );
}
