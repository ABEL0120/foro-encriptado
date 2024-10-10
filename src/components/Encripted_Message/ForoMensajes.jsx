import React, { useState } from 'react';
import { ListaMensajes } from './listamensajes';
import { encriptarMensaje } from '../../utils/Encripted Message/encriptedMessage';

export const ForoMensaje = () => {
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [claveSecreta, setClaveSecreta] = useState('');
    const [mensajes, setMensajes] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            question: pregunta,
            message: respuesta,
            secret: claveSecreta,
        };

        try {
            const response = await encriptarMensaje(data)

            if (response.status) {
                console.log("Mensaje enviado:", response.newMessage);
                setMensajes([...mensajes, { mensaje: pregunta }]); 
                setPregunta('');
                setRespuesta('');
                setClaveSecreta('');
            } else {
                console.error("Error al enviar el mensaje");
            }
        } catch (error) {
            console.error("Error en la conexión:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoapp.jpg')" }}>
            <div className="w-full max-w-3xl bg-white bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg flex flex-col justify-between">
                
                {/* Área de visualización de mensajes */}
                <div className="p-4 h-96 overflow-y-auto space-y-4">
                    {mensajes.length > 0 ? (
                        mensajes.map((item, index) => (
                            <ListaMensajes
                                key={index}
                                messages={item.mensaje}
                            />
                        ))
                    ) : (
                        <div className="p-3 rounded-lg bg-gray-300 text-black self-end max-w-xs ml-auto">
                            No hay mensajes
                        </div>
                    )}
                </div>
    
                <form onSubmit={handleSubmit} className="w-full p-4 border-t border-gray-300 bg-white bg-opacity-40 backdrop-blur-lg">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={pregunta}
                            onChange={(e) => setPregunta(e.target.value)}
                            className="flex-1 px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Pregunta"
                            required
                        />
    
                        <input
                            type="text"
                            value={respuesta}
                            onChange={(e) => setRespuesta(e.target.value)}
                            className="flex-1 px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Mensaje"
                            required
                        />
    
                        <input
                            type="password"
                            value={claveSecreta}
                            onChange={(e) => setClaveSecreta(e.target.value)}
                            className="flex-1 px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Clave Secreta"
                            required
                        />
                    </div>
    
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};
