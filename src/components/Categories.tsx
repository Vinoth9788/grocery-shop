import { categories } from '../data/products';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Browse Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our carefully organized product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl scale-105'
                  : 'bg-white hover:bg-emerald-50 text-gray-700 shadow-md hover:shadow-xl hover:scale-105'
              }`}
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className={`font-semibold text-sm md:text-base ${
                selectedCategory === category.id ? 'text-white' : 'text-gray-800 group-hover:text-emerald-600'
              }`}>
                {category.name}
              </h3>
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity ${
                selectedCategory === category.id ? 'opacity-100' : ''
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
