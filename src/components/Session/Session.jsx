import { useAuthStore } from "../../utils/auth/auth";
import { useNavigate } from "react-router-dom";

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
        <div>
            <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
                Cerrar Sesión
            </button>
            <h1 className="text-2xl text-center">Bienvenido {user.name}</h1>
        </div>
    );
}

export default Session;
