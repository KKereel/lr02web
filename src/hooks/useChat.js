import { useState } from 'react';
import { CHAT_RESPONSES } from '../data/constants';

const useChat = () => {
  const [messages, setMessages] = useState([{ text: 'Здравствуйте! Чем могу помочь?', sender: 'bot' }]);

  const sendMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    
    setTimeout(() => {
      const response = CHAT_RESPONSES[Math.floor(Math.random() * CHAT_RESPONSES.length)];
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);
  };

  return { messages, sendMessage };
};

export default useChat;