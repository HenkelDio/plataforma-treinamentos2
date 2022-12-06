import { createContext, useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [permission, setPermission] = useState("");

  const navigate = useNavigate()

  useEffect(()=>{
    const recoveredUser = JSON.parse(localStorage.getItem('user')); 

    if(recoveredUser){
        setUser(recoveredUser)
        setName(recoveredUser.name)
        setEmail(recoveredUser.email)
        setPermission(recoveredUser.permission)
        
    }

    setLoading(false)


  },[])

  const login = (id, email, password, name, permission) => {
    console.log("login auth", {email, name, permission})    

    const loggedUser = {
        id: id,
        email,
        name,
        permission
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    setEmail(email)
    setName(name)
    setUser(loggedUser)
    setPermission(permission)
}

const logoutUser = () =>{
  setUser(null)
  navigate("/");
  localStorage.removeItem('user');


}

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logoutUser, name, email, permission, setPermission}}>
      {children}
    </AuthContext.Provider>
  );
}
