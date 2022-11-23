import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ControlPanel from "../pages/controlPanel";
import Login from "../pages/login";
import CompanyPanel from "../pages/companyPanel/companyPanel";
import UserPanel from "../pages/userPanel";
import { AuthProvider } from "../contexts/AuthContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext,useEffect } from "react";

const PrivateRoutes = () => {

  const Private =({children}) =>{
    const { authenticated, setUser } = useContext(AuthContext);

    useEffect(()=>{
      const recoveredUser = localStorage.getItem('user'); 
  
      if(recoveredUser){
          setUser(JSON.parse(recoveredUser))
      }
  
    },[])

    console.log(authenticated)

    return (authenticated ? children : <Navigate to="/" />);
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/painel" element={<Private><ControlPanel /></Private>} />
          <Route path="/painel-empresa" element={<Private><CompanyPanel /></Private>} />
          <Route path="/painel-usuario" element={<Private><UserPanel /></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default PrivateRoutes;
