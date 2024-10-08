import React from 'react'

export const ListaMensajes = ({ messages }) => {
  return (
    <>
      <div className="p-3 rounded-lg bg-gray-300 text-black self-end max-w-xs ml-auto">
        {messages || ""}
      </div>
    </>
  )
}
