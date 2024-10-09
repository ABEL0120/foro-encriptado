import { useState } from 'react';
import Swal from 'sweetalert2';
import { useFetchMessages } from '../../custom-hooks/useFetchMessages';
import { desencriptarMensaje } from "../../utils/Encripted Message/encriptedMessage";

export const Foro = () => {
  const { messages } = useFetchMessages();
  const [lastId, setLastId] = useState();
  const [secretKeys, setSecretKeys] = useState({}); 

  const getLastMessage = () => {
    const length = messages?.length;
    const lastMessage = messages?.[length - 1];
    setLastId(lastMessage && lastMessage.id ? lastMessage.id : "");
    return lastMessage && lastMessage.id ? lastMessage.id : "";
  };

  const onSubmit = async (messageId) => {
    const data = { id: messageId, secret_key: secretKeys[messageId] };
    try {
      const res = await desencriptarMensaje(data);

      if (res.desencryptedMessage) {
        const findIndex = messages.findIndex(message => message.id === lastId);
        messages.splice(findIndex, 1);     
        
        Swal.fire({
          icon: 'success',
          title: 'Mensaje Desencriptado',
          html: `<div style="max-height: 150px; overflow-y: auto; text-align: left;">${res.desencryptedMessage}</div>`,
          width: 600, 
          confirmButtonText: 'Cerrar'
        });
      } else { 
        Swal.fire({
          icon: 'error',
          title: 'Clave Incorrecta',
          text: 'La clave secreta ingresada es incorrecta. Intenta nuevamente.',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSecretKeyChange = (e, messageId) => {
    setSecretKeys({ ...secretKeys, [messageId]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-6 space-y-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoapp2.jpg')" }}>
  
      {messages?.map((message) => (
        <div key={message.id} className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-4 ">
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{message.question}</h2>
          </div>  
          <div className="p-3 bg-gray-50 rounded-md shadow-inner max-h-32 overflow-y-auto">
            <p className="text-gray-700 break-all">{message.encryptedMessage}</p>
          </div>      
          <form onSubmit={(e) => { e.preventDefault(); onSubmit(message.id); }} className="mt-4">
            <div className="flex items-center">
              <input
                type="text"
                value={secretKeys[message.id] || ''}
                onChange={(e) => handleSecretKeyChange(e, message.id)}
                className="flex-1 px-4 py-2 text-gray-700 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingresa la clave secreta"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Ver Respuesta
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};
