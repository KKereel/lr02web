import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechStore</h3>
            <p className="text-gray-400">Ваш надежный магазин электроники и гаджетов</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400">Email: info@techstore.ru</p>
            <p className="text-gray-400">Тел: +7 (999) 123-45-67</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <p className="text-gray-400">О компании</p>
            <p className="text-gray-400">Доставка и оплата</p>
            <p className="text-gray-400">Гарантия</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 TechStore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;