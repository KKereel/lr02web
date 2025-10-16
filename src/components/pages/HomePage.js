import React, { useState, useEffect } from 'react';
import { ShoppingBag, Truck, Shield, Star, ArrowRight } from 'lucide-react';

const HomePage = ({ onGoToCatalog, onCategorySelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      title: 'Добро пожаловать в TechStore', 
      subtitle: 'Лучшие гаджеты и техника 2025 года', 
      bg: 'from-blue-500 to-purple-600',
      emoji: '🎉'
    },
    { 
      title: 'Скидки до 30%', 
      subtitle: 'На выбранные товары только сегодня', 
      bg: 'from-red-500 to-orange-600',
      emoji: '🔥'
    },
    { 
      title: 'Бесплатная доставка', 
      subtitle: 'При заказе от 50000₽', 
      bg: 'from-green-500 to-teal-600',
      emoji: '🚚'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Carousel */}
      <div className="relative mb-12 overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-r ${slide.bg} flex items-center justify-center text-white`}>
                <div className="text-center px-4">
                  <div className="text-8xl mb-6 animate-bounce">{slide.emoji}</div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-2xl md:text-3xl opacity-90 mb-8">{slide.subtitle}</p>
                  <button
                    onClick={onGoToCatalog}
                    className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 flex items-center space-x-2 mx-auto"
                  >
                    <span>Перейти в каталог</span>
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8">Популярные категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onCategorySelect('smartphones')}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group"
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">📱</div>
            <h3 className="text-2xl font-bold text-center mb-2">Смартфоны</h3>
            <p className="text-gray-600 text-center">Последние модели от ведущих брендов</p>
            <div className="flex items-center justify-center mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              <span>Смотреть</span>
              <ArrowRight size={20} className="ml-2" />
            </div>
          </button>

          <button
            onClick={() => onCategorySelect('laptops')}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group"
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">💻</div>
            <h3 className="text-2xl font-bold text-center mb-2">Ноутбуки</h3>
            <p className="text-gray-600 text-center">Для работы, учебы и развлечений</p>
            <div className="flex items-center justify-center mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              <span>Смотреть</span>
              <ArrowRight size={20} className="ml-2" />
            </div>
          </button>

          <button
            onClick={() => onCategorySelect('audio')}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group"
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">🎧</div>
            <h3 className="text-2xl font-bold text-center mb-2">Аудио</h3>
            <p className="text-gray-600 text-center">Наушники и колонки премиум-класса</p>
            <div className="flex items-center justify-center mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              <span>Смотреть</span>
              <ArrowRight size={20} className="ml-2" />
            </div>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-10">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="text-blue-600" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Широкий выбор</h3>
            <p className="text-gray-600">Более 1000 товаров в наличии</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-green-600" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
            <p className="text-gray-600">Доставим за 1-3 дня</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-purple-600" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
            <p className="text-gray-600">12 месяцев гарантии</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-yellow-600" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Лучшие цены</h3>
            <p className="text-gray-600">Скидки до 30%</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Готовы сделать покупку?</h2>
        <p className="text-xl mb-8 opacity-90">Откройте для себя мир современных технологий</p>
        <button
          onClick={onGoToCatalog}
          className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 flex items-center space-x-3 mx-auto"
        >
          <ShoppingBag size={28} />
          <span>Начать покупки</span>
          <ArrowRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;