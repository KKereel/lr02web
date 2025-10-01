import { Home, Smartphone, Laptop, Headphones } from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', name: 'Все товары', icon: Home },
  { id: 'smartphones', name: 'Смартфоны', icon: Smartphone },
  { id: 'laptops', name: 'Ноутбуки', icon: Laptop },
  { id: 'audio', name: 'Аудио', icon: Headphones },
];

export const SLIDES_DATA = [
  { title: 'Новинки 2025', subtitle: 'Последние модели техники', bg: 'from-blue-500 to-purple-600' },
  { title: 'Скидки до 30%', subtitle: 'На выбранные товары', bg: 'from-red-500 to-orange-600' },
  { title: 'Бесплатная доставка', subtitle: 'При заказе от 50000₽', bg: 'from-green-500 to-teal-600' },
];

export const CHAT_RESPONSES = [
  'Все товары в наличии! Доставка 1-3 дня.',
  'Могу помочь с выбором. Какая категория вас интересует?',
  'У нас действует гарантия 12 месяцев на всю технику.',
  'Принимаем оплату картой и наличными при получении.',
];