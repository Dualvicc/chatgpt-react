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
    <main className="relative h-full w-full flex-1 overflow-auto transition-width">
      <div role="presentation" className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden">
          <div className="flex h-full flex-col items-center justify-between pb-64">
            <div className="flex h-full w-full pb-2 md:pb-[8vh]">
              <h1 className="text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">ChatGPT</h1>
            </div>
          </div>
        </div>
        <div className="w-full pt-2 md:pt-0 border-t md:border-t-0 gizmo:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:pl-2 gizmo:pl-0 gizmo:md:pl-0 md:w-[calc(100%-.5rem)] absolute bottom-0 left-0 md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
          <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
              <div className="flex w-full items-center">
                <div className="overflow-hidden gizmo:[&amp;:has(textarea:focus)]:border-token-border-xheavy gizmo:[&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-gray-900/50 gizmo:dark:border-token-border-heavy flex-grow relative border border-black/10 gizmo:border-token-border-heavy dark:text-white rounded-xl gizmo:rounded-2xl shadow-xs dark:shadow-xs dark:bg-gray-700 bg-white gizmo:dark:bg-gray-800 gizmo:shadow-[0_0_0_2px_rgba(255,255,255,0.95)] gizmo:dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
                  <textarea id="prompt-textarea" tabIndex="0" data-id="root" rows="1" placeholder="Send a message" className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 gizmo:md:py-3.5 gizmo:placeholder-black/50 gizmo:dark:placeholder-white/50 pl-3 md:pl-4" >
                  </textarea>
                  <button disabled="" className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 gizmo:dark:disabled:bg-white gizmo:disabled:bg-black gizmo:disabled:opacity-10 disabled:text-gray-400 enabled:bg-brand-purple gizmo:enabled:bg-black text-white gizmo:p-0.5 gizmo:border gizmo:border-black gizmo:rounded-lg gizmo:dark:border-white gizmo:dark:bg-white bottom-1.5 transition-colors disabled:opacity-40" data-testid="send-button">
                    <span className="" data-state="closed">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-sm m-1 md:m-0">
                        <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};


export default ChatGPT;