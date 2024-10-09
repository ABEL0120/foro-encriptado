import { useAuthStore } from "../../utils/auth/auth";
import { useNavigate } from "react-router-dom";
import "./session.css"

function Session() {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (!user) {
        return <div><h1 className="text-2xl text-center">No estás logueado</h1></div>;
    }

    return (
        <div className="welcome-container">
            <h1 className="welcome-text text-2xl text-center"> ¡Bienvenido al foro!{user.name}</h1>
        </div>
    );
}

export default Session;
