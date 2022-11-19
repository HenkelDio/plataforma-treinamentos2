import Login from './pages/login';
import ControlPanel from './pages/controlPanel';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/painel" element={<ControlPanel/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;