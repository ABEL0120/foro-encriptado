import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from "../Login/Login";
import Registro from "../Registro/Registro";
import Session from "../Session/Session";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import { useAuthStore } from '../../utils/auth/auth';

const AppRouter = () => {
    const user = useAuthStore((state) => state.user);
    useEffect(() => {
        console.log("Session", user);
    }, [user]);
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login"
                element={
                    < PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route path="/Registro"
                element={
                    < PublicRoute>
                        <Registro />
                    </PublicRoute>
                }
            />
            <Route
                path="/Session"
                element={
                    <PrivateRoute>
                        <Session />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;
