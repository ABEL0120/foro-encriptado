import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../Login/Login";
import Registro from "../Registro/Registro";
import Session from "../Session/Session";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import NavBar from "../NavBar/NavBar";
import { Foro } from "../Encripted_Message/Foro";
import { ForoMensaje } from "../Encripted_Message/ForoMensajes";
import { useAuthStore } from "../../utils/auth/auth";

const AppRouter = () => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    console.log("Session", user);
  }, [user]);

  const hideNavBar = ["/login", "/Registro"];
  const shouldHideNavBar = hideNavBar.includes(location.pathname.toLowerCase());

  return (
    <div>
    {!shouldHideNavBar && <NavBar/>}
    
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/Registro"
        element={
          <PublicRoute>
            <Registro />
          </PublicRoute>
        }
      />

      <Route
        path="/Foro"
        element={
          <PrivateRoute>
            <Foro />
          </PrivateRoute>
        }
      />
      <Route
        path="/Foro-Mensaje"
        element={
          <PrivateRoute>
            <ForoMensaje />
          </PrivateRoute>
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
      <Route
        path="/Enviar_Mensaje"
        element={
          <PrivateRoute>
            <Session />
          </PrivateRoute>
        }
      />
    </Routes>
    </div>
  );
};

export default AppRouter;
