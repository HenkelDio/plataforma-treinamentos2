import { createContext, useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  useEffect(()=>{
    const recoveredUser = JSON.parse(localStorage.getItem('user')); 

    if(recoveredUser){
        setUser(recoveredUser)
        setName(recoveredUser.name)
        setEmail(recoveredUser.email)
        
    }

    setLoading(false)


  },[])

  const login = (email, password, name) => {
    console.log("login auth", {email, password, name})    

    const loggedUser = {
        id: "123",
        email,
        name
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    setEmail(email)
    setName(name)
    setUser(loggedUser)
}

const logoutUser = () =>{
  setUser(null)
  navigate("/");
  if(!user){
    localStorage.removeItem('user');
    navigate("/");
  }

}

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logoutUser, name, email}}>
      {children}
    </AuthContext.Provider>
  );
}
