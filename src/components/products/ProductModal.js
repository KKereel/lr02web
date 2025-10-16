import React, { useState } from 'react';
import { X, ShoppingCart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Шапка */}
      <div className="sticky top-0 bg-white border-b shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft size={24} />
              <span className="font-medium">Назад к каталогу</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Левая колонка - изображение */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 flex items-center justify-center sticky top-24 h-fit">
            <div className="text-9xl animate-fadeIn">{product.image}</div>
          </div>

          {/* Правая колонка - информация */}
          <div className="space-y-6">
            {/* Название и рейтинг */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating} из 5)</span>
                <span className="text-blue-600 cursor-pointer hover:underline">127 отзывов</span>
              </div>
            </div>

            {/* Цена */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-baseline space-x-4 mb-2">
                <span className="text-5xl font-bold text-blue-600">
                  {product.price.toLocaleString()}₽
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  {(product.price * 1.3).toLocaleString()}₽
                </span>
              </div>
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Скидка 30%
              </span>
            </div>

            {/* Количество */}
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">Количество:</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition text-xl font-semibold"
                >
                  -
                </button>
                <span className="w-12 text-center text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition text-xl font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Кнопка в корзину */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition text-xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <ShoppingCart size={28} />
              <span>Добавить в корзину</span>
            </button>

            {/* Преимущества */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Truck className="text-green-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Быстрая доставка</div>
                  <div className="text-xs text-gray-600">1-3 дня</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Shield className="text-blue-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Гарантия</div>
                  <div className="text-xs text-gray-600">12 месяцев</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <Star className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Качество</div>
                  <div className="text-xs text-gray-600">Оригинал</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Табы */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex space-x-6 border-b mb-6">
            <button
              onClick={() => setSelectedTab('description')}
              className={`pb-3 px-2 font-semibold transition ${
                selectedTab === 'description'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setSelectedTab('specs')}
              className={`pb-3 px-2 font-semibold transition ${
                selectedTab === 'specs'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setSelectedTab('reviews')}
              className={`pb-3 px-2 font-semibold transition ${
                selectedTab === 'reviews'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Отзывы (127)
            </button>
          </div>

          {/* Контент табов */}
          <div className="prose max-w-none">
            {selectedTab === 'description' && (
              <div className="space-y-4">
                <p className="text-lg text-gray-700">{product.description}</p>
                <p className="text-gray-600">
                  Этот товар представляет собой идеальное сочетание современных технологий и элегантного дизайна. 
                  Разработан с использованием передовых решений для обеспечения максимальной производительности 
                  и удобства использования.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-3">Основные преимущества:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Высокая производительность и надежность</li>
                  <li>Современный дизайн и качественные материалы</li>
                  <li>Длительный срок службы</li>
                  <li>Простота использования</li>
                  <li>Отличное соотношение цены и качества</li>
                </ul>
              </div>
            )}

            {selectedTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Бренд:</span>
                  <span className="font-semibold">{product.name.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Модель:</span>
                  <span className="font-semibold">{product.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Гарантия:</span>
                  <span className="font-semibold">12 месяцев</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Страна:</span>
                  <span className="font-semibold">США</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Вес:</span>
                  <span className="font-semibold">500 г</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-600">Цвет:</span>
                  <span className="font-semibold">Черный</span>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        П
                      </div>
                      <div>
                        <div className="font-semibold">Покупатель {review}</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">15 октября 2025</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Отличный товар! Полностью соответствует описанию. Доставка быстрая, 
                      упаковка качественная. Рекомендую к покупке!
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Рекомендуемые товары */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
                <div className="text-4xl mb-2 text-center">{product.image}</div>
                <h4 className="font-semibold text-sm mb-1 line-clamp-2">Похожий товар {item}</h4>
                <p className="text-blue-600 font-bold">{(product.price * 0.9).toLocaleString()}₽</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;