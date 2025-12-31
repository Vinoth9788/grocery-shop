import { useState, useEffect } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { products, Product } from '../data/products';

interface ProductsProps {
  selectedCategory: string;
}

export default function Products({ selectedCategory }: ProductsProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (selectedCategory === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(p => p.category === selectedCategory));
      }
      setIsAnimating(false);
    }, 200);
  }, [selectedCategory]);

  const handleAddToCart = (productName: string) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Fresh Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality products at great prices, delivered fresh to your door
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-200 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  4.5
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">
                      ₹{product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">{product.unit}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
