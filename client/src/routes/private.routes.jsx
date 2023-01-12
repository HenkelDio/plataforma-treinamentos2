import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ControlPanel from "../pages/controlPanel";
import Login from "../pages/login";
import CompanyPanel from "../pages/companyPanel/companyPanel";
import UserPanel from "../pages/userPanel";
import HomeLandingPage from "../pages/landingPage/home/HomeLandingPage";
import AboutPage from "../pages/landingPage/about/AboutPage";
import ContactPage from "../pages/landingPage/contact/ContactPage";
import TrainingsPage from "../pages/landingPage/trainings/Trainings";
import { AuthProvider } from "../contexts/AuthContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const PrivateRoutes = () => {

  const PrivateAdmin =({children}) =>{
    const { authenticated, loading, permission } = useContext(AuthContext);

    if(loading){
      return <div className="load">Carregando</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    };

    if(permission === 'admin'){
      return children;
    } else {
      return <Navigate to="/" />
    }
  }
  
  const PrivateCompany =({children}) =>{
    const { authenticated, loading, permission } = useContext(AuthContext);

    if(loading){
      return <div className="load">Carregando</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    };

    if(permission === 'company'){
      return children;
    } else {
      return <Navigate to="/" />
    }
  }

  const PrivateUser =({children}) =>{
    const { authenticated, loading, permission } = useContext(AuthContext);

    if(loading){
      return <div className="load">Carregando</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    };

    if(permission === 'user'){
      return children;
    } else {
      return <Navigate to="/" />
    }
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLandingPage />} />
          <Route path="/pages/sobre" element={<AboutPage />} />
          <Route path="/pages/contato" element={<ContactPage />} />
          <Route path="/pages/loja" element={<TrainingsPage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/painel" element={<PrivateAdmin><ControlPanel /></PrivateAdmin>} />
          <Route path="/painel-empresa" element={<PrivateCompany><CompanyPanel /></PrivateCompany>} />
          <Route path="/painel-usuario" element={<PrivateUser><UserPanel /></PrivateUser>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default PrivateRoutes;
