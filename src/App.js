import React, { useState, useEffect } from 'react';
import { PRODUCTS_DATA } from './data/products';
import ProductFilter from './utils/ProductFilter';
import useCart from './hooks/useCart';
import useChat from './hooks/useChat';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Breadcrumbs from './components/layout/Breadcrumbs';
import HeroCarousel from './components/ui/HeroCarousel';
import HomePage from './components/pages/HomePage';
import SearchBar from './components/products/SearchBar';
import ProductsGrid from './components/products/ProductsGrid';
import ProductModal from './components/products/ProductModal';
import QuickViewModal from './components/products/QuickViewModal';
import Pagination from './components/ui/Pagination';
import CartSidebar from './components/cart/CartSidebar';
import OrderModal from './components/cart/OrderModal';
import ChatBot from './components/ui/ChatBot';
import SuccessModal from './components/ui/SuccessModal.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHomePage, setIsHomePage] = useState(true); 

  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const { messages, sendMessage } = useChat();

  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.title = `${selectedProduct.name} - TechStore`;
    } else if (searchQuery) {
      document.title = `Поиск: "${searchQuery}" - TechStore`;
    } else if (isHomePage) {
      document.title = 'TechStore - Главная';
    } else if (selectedCategory === 'all') {
      document.title = 'Каталог - TechStore';
    } else {
      const categoryNames = {
        smartphones: 'Смартфоны',
        laptops: 'Ноутбуки',
        audio: 'Аудио'
      };
      document.title = `${categoryNames[selectedCategory] || 'Каталог'} - TechStore`;
    }
  }, [selectedProduct, searchQuery, isHomePage, selectedCategory]);

  const filteredProducts = ProductFilter.filter(PRODUCTS_DATA, selectedCategory, searchQuery);
  const totalPages = ProductFilter.getTotalPages(filteredProducts, itemsPerPage);
  const paginatedProducts = ProductFilter.paginate(filteredProducts, currentPage, itemsPerPage);

  const handleCheckout = () => {
    setShowCart(false);
    setShowOrderModal(true);
  };

  const handleOrderComplete = () => {
    clearCart();
    setShowOrderModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleGoToCatalog();
  };

  const handleGoToHome = () => {
    setIsHomePage(true);
    setSelectedCategory('all');
    setSelectedProduct(null);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleGoToCatalog = () => {
    setIsHomePage(false);
    setSelectedCategory('all');
    setCurrentPage(1);
  };

  const handleCategorySelect = (categoryId) => {
    setIsHomePage(false);
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translateY(${scrollY * 0.7}px)`,
        }}
      >
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)', filter: 'blur(70px)' }}></div>
        <div className="absolute top-[600px] left-1/4 w-[650px] h-[650px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)', filter: 'blur(75px)' }}></div>
        <div className="absolute top-[400px] right-1/3 w-[550px] h-[550px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, transparent 70%)', filter: 'blur(65px)' }}></div>
        <div className="absolute top-[900px] left-10 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)', filter: 'blur(70px)' }}></div>
        <div className="absolute top-[1200px] right-20 w-[620px] h-[620px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)', filter: 'blur(75px)' }}></div>
        <div className="absolute top-[800px] right-10 w-[580px] h-[580px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)', filter: 'blur(70px)' }}></div>
      </div>

      <div className="relative z-10">
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategorySelect}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
          setShowCart={setShowCart}
          showCart={showCart}
          onGoToHome={handleGoToHome}
        />

        <Breadcrumbs
          isHomePage={isHomePage}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategorySelect}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onGoToHome={handleGoToHome}
        />

        {isHomePage ? (
          <HomePage 
            onGoToCatalog={handleGoToCatalog} 
            onCategorySelect={handleCategorySelect} 
          />
        ) : (
          <>
            <HeroCarousel
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <main className="max-w-7xl mx-auto px-4 pb-12">
              <ProductsGrid
                products={paginatedProducts}
                onAddToCart={addToCart}
                onProductClick={setSelectedProduct}
                onQuickView={setQuickViewProduct}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </main>
          </>
        )}

        <Footer />
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
        onOpenFull={setSelectedProduct}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartSidebar
        show={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />

      <OrderModal
        show={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        cart={cart}
        totalPrice={totalPrice}
        onOrderComplete={handleOrderComplete}
      />

      <SuccessModal
        show={showSuccessModal}
        onClose={handleSuccessClose}
      />

      <ChatBot
        open={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        messages={messages}
        onSendMessage={sendMessage}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;