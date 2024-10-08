import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useFetchMessages } from '../../custom-hooks/useFetchMessages';
import { desencriptarMensaje } from "../../utils/Encripted Message/encriptedMessage";

export const Foro = () => {
  const { messages } = useFetchMessages();
  const [lastId, setLastId] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      secret_key: '',
    },
  });

  const getLastMessage = () => {
    const length = messages?.length
    const lastMessage = messages?.[length - 1]
    setLastId(lastMessage && lastMessage.id ? lastMessage.id : "");
    return lastMessage && lastMessage.id ? lastMessage.id : ""
  };

  const onSubmit = async (data) => {
    try {
      data.id = getLastMessage()
      const res = await desencriptarMensaje(data);
      console.log('mensaje:', res);

      //nava aqui pon la alerta --------------------------------------------------------------------
      if (res.desencryptedMessage) {
        const findIndex = messages.findIndex(message => message.id === lastId)
        messages.splice(findIndex, 1)
        console.log("este es tu mensaje precioso tocate el toto mientras lo lees", res.desencryptedMessage)
      } else {
        console.log("menudo pendejo, no es la secret key baboso naco idiota, no vales pa pura mera verga hijo de puta")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('/images/fondoapp2.jpg')" }}>
      <div className="w-full max-w-3xl bg-white bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg flex flex-col justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="p-4 h-96 overflow-y-auto space-y-4">
            {messages?.map((message) => (
              <div key={message.id}>
                <div className="p-3 rounded-lg bg-gray-300 text-black ml-auto w-1/2 break-words">
                  <span className='font-bold'>{message.question}?</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-300 text-black self-end ml-auto break-words mt-1">
                  <p className='text-clip h-full' key={message.id}>{message.encryptedMessage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full p-4 border-t border-gray-300 flex items-center bg-white bg-opacity-40 backdrop-blur-lg">
            <input
              name="secret_key"
              type="text"
              className="flex-1 px-4 py-2 text-gray-700 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe la Secret Key"
              {...register("secret_key", { required: true })}
            />
            {errors.secret_key && <span className="text-red-500">Este campo es obligatorio</span>}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    //prueba commit
  )
}