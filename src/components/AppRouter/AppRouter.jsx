import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Registro from "../Registro/Registro";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
        </Routes>
    );
};

export default AppRouter;
