import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-md w-full p-8 animate-fadeIn text-center" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle size={64} className="text-green-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Спасибо за заказ!</h2>
        <p className="text-gray-600 mb-8">Мы свяжемся с вами в ближайшее время для подтверждения заказа.</p>
        
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          Вернуться в каталог
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;