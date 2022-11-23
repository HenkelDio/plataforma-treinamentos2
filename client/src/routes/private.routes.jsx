import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ControlPanel from "../pages/controlPanel";
import Login from "../pages/login";
import CompanyPanel from "../pages/companyPanel/companyPanel";
import UserPanel from "../pages/userPanel";

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<ControlPanel />} />
        <Route path="/painel-empresa" element={<CompanyPanel />} />
        <Route path="/painel-usuario" element={<UserPanel />} />
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
