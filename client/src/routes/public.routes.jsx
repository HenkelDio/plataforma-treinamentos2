import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import Login from '../pages/login';

const PublicRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default PublicRoutes;