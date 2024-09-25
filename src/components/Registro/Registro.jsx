"use client";
import { useForm } from "react-hook-form";
import { registrarse } from "../../utils/Register/register"
import '../../index.css';

function Registro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombre: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await registrarse(data);
            console.log('Registro exitoso:', res);
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            {...register("nombre", { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.nombre && <span className="text-red-500">Este campo es obligatorio</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.email && <span className="text-red-500">Este campo es obligatorio</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.password && <span className="text-red-500">Este campo es obligatorio</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registro;
