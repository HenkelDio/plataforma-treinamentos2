import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import ControlPanel from '../pages/controlPanel';
import Login from '../pages/login';
import CompanyPanel from '../pages/companyPanel/companyPanel';

const PrivateRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/painel' element={<ControlPanel />} />
                <Route path='/painel-empresa' element={<CompanyPanel />} />
            </Routes>
        </Router>
    )
}

export default PrivateRoutes;