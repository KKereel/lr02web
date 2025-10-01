import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatMessage from '../chat/ChatMessage';

const ChatBot = ({ open, onToggle, messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white rounded-xl shadow-2xl w-80 h-96 flex flex-col animate-fadeIn">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">Чат-помощник</span>
            <button onClick={onToggle} className="hover:bg-blue-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Введите сообщение..."
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onToggle}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition hover:scale-110 animate-bounce"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;