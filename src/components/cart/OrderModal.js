import React, { useState } from 'react';
import { X } from 'lucide-react';

const OrderModal = ({ show, onClose, cart, totalPrice, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    house: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const deliveryCost = totalPrice >= 50000 ? 0 : 299;
  const finalTotal = totalPrice + deliveryCost;

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Введите имя';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Введите фамилию';
    }
    
    if (!formData.street.trim() || !/[а-яА-Яa-zA-Z]/.test(formData.street)) {
      newErrors.street = 'Введите корректное название улицы';
    }
    
    if (!formData.house.trim()) {
      newErrors.house = 'Введите номер дома';
    }
    
    if (formData.phone.replace(/\D/g, '').length !== 10) {
      newErrors.phone = 'Введите полный номер телефона';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    let formatted = '';
    
    if (digits.length > 0) {
      formatted = digits.slice(0, 3);
      if (digits.length > 3) {
        formatted += '-' + digits.slice(3, 6);
      }
      if (digits.length > 6) {
        formatted += '-' + digits.slice(6, 8);
      }
      if (digits.length > 8) {
        formatted += '-' + digits.slice(8, 10);
      }
    }
    
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onOrderComplete();
      setFormData({ firstName: '', lastName: '', street: '', house: '', phone: '' });
      setErrors({});
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-lg w-full p-6 animate-fadeIn max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">Оформление заказа</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Имя *</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              placeholder="Иван"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Фамилия *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              placeholder="Иванов"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Улица *</label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.street ? 'border-red-500' : ''
              }`}
              placeholder="Ленина"
            />
            {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Дом *</label>
            <input
              type="text"
              value={formData.house}
              onChange={(e) => setFormData({ ...formData, house: e.target.value })}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.house ? 'border-red-500' : ''
              }`}
              placeholder="15А"
            />
            {errors.house && <p className="text-red-500 text-sm mt-1">{errors.house}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Телефон *</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-lg text-gray-600">
                +7
              </span>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`flex-1 px-3 py-2 border rounded-r-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                placeholder="000-000-00-00"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Товары:</span>
            <span className="font-semibold">{totalPrice.toLocaleString()}₽</span>
          </div>
          <div className="flex justify-between">
            <span>Доставка:</span>
            <span className={`font-semibold ${deliveryCost === 0 ? 'text-green-600' : ''}`}>
              {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost}₽`}
            </span>
          </div>
          <div className="border-t pt-2 flex justify-between items-center">
            <span className="text-lg font-bold">Итого:</span>
            <span className="text-2xl font-bold text-blue-600">{finalTotal.toLocaleString()}₽</span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold"
        >
          Подтвердить заказ
        </button>
      </div>
    </div>
  );
};

export default OrderModal;