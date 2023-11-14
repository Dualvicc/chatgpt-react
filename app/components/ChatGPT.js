'use client'

import React, { useState } from 'react';
import PreviousChatsList from './PreviousChatsList';

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [previousChats, setPreviousChats] = useState([]);

  const sendMessage = async () => {
    const userMessage = { text: input, user: 'user' };
    setMessages([...messages, userMessage]);
    setPreviousChats([...previousChats, userMessage]);

    try {
      // Resto del código para enviar mensaje y obtener respuesta de GPT
    } catch (error) {
      console.error('Error fetching GPT response:', error);
    }

    // Limpiar el campo de entrada después de enviar el mensaje
    setInput('');
  };

  const onChatSelect = (chat) => {
    setInput(chat.text);
  };

  return (
    <div className="flex h-screen">
      <PreviousChatsList
        previousChats={previousChats}
        onChatSelect={onChatSelect}
        onDeleteChat={(chat) => {
          // Implementa la lógica de eliminación de chat aquí
        }}
        onRenameChat={(chat, newName) => {
          // Implementa la lógica de renombrar chat aquí
        }}
      />
      <div className="flex flex-col flex-1 h-screen">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={message.user === 'user' ? 'text-right' : 'text-left'}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="p-4">
          {input && (
            <div className="mb-2 text-gray-500 text-right">
              <span className="font-bold">You:</span> {input}
            </div>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="mt-2 p-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;