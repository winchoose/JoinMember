import { Routes, Route } from 'react-router-dom';
import Home from '../page/home'
import Join from '../page/join'
import Login from '../page/login'
import Member from '../page/member'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/member" element={<Member />} />
        </Routes>
    );
}; export default AppRoutes;