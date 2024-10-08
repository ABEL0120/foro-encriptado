import { useEffect, useState } from 'react'
import { encriptedMessages } from '../utils/Encripted Message/encriptedMessage'

export const useFetchMessages = () => {
    const [messages,setMessages] = useState()

  const getMessages = async() => {
    const resp = await encriptedMessages()
    setMessages(resp.encryptedMessages)
  }  

  useEffect(() => {
    getMessages()
  },[])

  return {messages}
}