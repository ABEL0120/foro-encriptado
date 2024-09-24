"use client";
import '../src/index.css';
function Login() {
    return (
        <div className="w-full h-full">
            <h1 className="text-6xl">LOGIN</h1>
            <input name="email" className='input bg-gray-400 text-black' placeholder='Correo'></input>
            <input name="password" className='input bg-gray-400 text-black' placeholder='Contraseña'></input>
            <button type='button' className='bg-black text-white'>Iniciar Sesion</button>
            <button type='button' className='bg-black text-white'>Registrarse</button>
        </div>
    );
}
export default Login;