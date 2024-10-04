import React from 'react'
import { ListaMensajes } from './listamensajes'

export const Foro = ({messages}) => {
  return (
    <div>
        <ListaMensajes/>
        <InputRespuesta/>
    </div>
  )
}
