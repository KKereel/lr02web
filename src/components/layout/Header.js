import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../../data/constants';

const Header = ({ menuOpen, setMenuOpen, selectedCategory, setSelectedCategory, setCurrentPage, totalItems, setShowCart, showCart }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechStore
            </h1>
          </div>
          
          <nav className="hidden lg:flex space-x-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition ${
                  selectedCategory === cat.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <cat.icon size={18} />
                <span>{cat.name}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 animate-fadeIn">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); setMenuOpen(false); }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition ${
                  selectedCategory === cat.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <cat.icon size={18} />
                <span>{cat.name}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;