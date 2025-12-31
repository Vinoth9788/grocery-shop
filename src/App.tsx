import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { ShoppingCart } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleShopNowClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const offset = 80;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    handleShopNowClick();
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className="min-h-screen">
        <Navbar />
        <Hero onShopNowClick={handleShopNowClick} />
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        <Products selectedCategory={selectedCategory} />
        <About />
        <Contact />
        <ScrollToTop />

        <footer className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-8 h-8" />
                  <span className="text-2xl font-bold">Angalamman Store</span>
                </div>
                <p className="text-emerald-100">
                  Your trusted partner for fresh, quality groceries delivered with care.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Categories</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li><a href="#products" className="hover:text-white transition-colors">Ingredients</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Beverages</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Biscuits</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Rice</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>28/4 V.O.C Street Sengurichi Ulundurpet (tk),</li>
                  <li>Kallakurichi, 606115.</li>
                  <li>9788965939</li>
                  <li>hello@freshmart.com</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-emerald-500 mt-8 pt-8 text-center text-emerald-100">
              <p>&copy; 1992 Angalamman Store. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
