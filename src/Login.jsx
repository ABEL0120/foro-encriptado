"use client";
import { useState } from 'react';
import '../src/index.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center" style={{backgroundImage:"url('/images/fondoapp.jpg')"}}>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="underline underline-offset-8 text-2xl font-bold mb-4 text-center">Iniciar Sesion</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@gmail.com"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-blue-200 border-b-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-blue-200 border-b-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="animate-pulse rounded-full w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Iniciar Sesion
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;