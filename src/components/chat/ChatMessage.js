import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${
        message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'
      }`}>
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;