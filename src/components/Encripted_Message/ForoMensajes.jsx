import React, { useState, useEffect } from 'react'
import { ListaMensajes } from './listamensajes'
import { encriptedMessages } from '../../utils/Encripted Message/encriptedMessage';

export const ForoMensaje = ({ messages }) => {
    let mensajes = [
        { mensaje: "ola0" },
        { mensaje: "ola1" },
        { mensaje: "ola2" },
        { mensaje: "ola3" },
    ];



    useEffect(() => {
        const getMensajes = async () => {
            let res = await encriptedMessages();
            if (res.status) {
                console.log(res);
            } else {
                console.log(res);
            }
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoapp.jpg')" }}>
            <div className="w-full max-w-3xl bg-white bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg flex flex-col justify-between">
                <div className="p-4 h-96 overflow-y-auto space-y-4">
                    {mensajes.length > 0 ? (
                        mensajes.map((item) => (
                            <ListaMensajes
                                messages={item.mensaje}
                            />
                        ))
                    ) : (
                        <div className="p-3 rounded-lg bg-gray-300 text-black self-end max-w-xs ml-auto">
                        </div>
                    )}
                </div>

                <div className="w-full p-4 border-t border-gray-300 flex items-center bg-white bg-opacity-40 backdrop-blur-lg">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 text-gray-700 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Escribe la Secret Key"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
        //prueba commit
    )
}