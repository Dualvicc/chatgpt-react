import React, { useState } from 'react';
import Input from 'react';

const PreviousChatsList = ({ previousChats, onChatSelect, onDeleteChat, onRenameChat }) => {
  const [renameInput, setRenameInput] = useState('');

  const handleRenameInputChange = (event) => {
    setRenameInput(event.target.value);
  };

  const handleRenameChat = (chat) => {
    onRenameChat(chat, renameInput);
    setRenameInput('');
  };

  return (
    <aside className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-2">Previous Chats</h2>
      <ul>
        {previousChats.map((chat, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center">
              <div className="flex-grow pr-4">
                <div>{chat.text}</div>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 rounded p-1 mr-2"
                  value={renameInput}
                  onChange={handleRenameInputChange}
                  placeholder="New name"
                />
                <button
                  className="text-gray-500 hover:text-red-500 focus:outline-none mr-2"
                  onClick={() => onDeleteChat(chat)}
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M14 6V18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6h2v11h4V6h2zM6 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1H6z"
                    />
                  </svg>
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  onClick={() => handleRenameChat(chat)}
                >
                  Rename
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PreviousChatsList;