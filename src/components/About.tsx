import { Award, Leaf, Heart, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh & Organic',
      description: 'We source only the freshest organic produce from local farmers, ensuring top quality for your family.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every product goes through rigorous quality checks before reaching your doorstep.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Same-day delivery available for orders placed before noon. Your convenience is our priority.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our mission. We go the extra mile to ensure you love what you buy.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Angalamman Store
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for fresh, quality groceries delivered with care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh Produce"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Years Serving</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Bringing Freshness to Your Doorstep Since 1992
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Angalamman Store, we believe that everyone deserves access to fresh, high-quality groceries without the hassle of visiting multiple stores. Founded with a passion for healthy living and convenience, we've built lasting relationships with local farmers and trusted suppliers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence means every product is carefully selected, every delivery is handled with care, and every customer is treated like family. We're not just delivering groceries – we're delivering health, happiness, and peace of mind.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
