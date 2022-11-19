import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import ControlPanel from '../pages/controlPanel';
import Login from '../pages/login';

const PrivateRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/painel' element={<ControlPanel />} />
            </Routes>
        </Router>
    )
}

export default PrivateRoutes;