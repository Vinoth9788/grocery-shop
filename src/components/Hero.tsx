import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopNowClick: () => void;
}

export default function Hero({ onShopNowClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh Groceries
            <span className="block text-emerald-300">Delivered Daily</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Get the freshest ingredients, premium quality products, and daily essentials delivered right to your doorstep. Shop from our wide selection of organic produce and household items.
          </p>
          <button
            onClick={onShopNowClick}
            className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2 w-fit"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
