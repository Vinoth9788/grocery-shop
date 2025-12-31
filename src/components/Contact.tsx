import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedName(formData.name);
    setShowModal(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // 🔹 AUTO CLOSE MODAL
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <Info icon={<MapPin />} title="Address" text="28/4 V.O.C Street, Sengurichi, Kallakurichi, 606115" />
                  <Info icon={<Phone />} title="Phone" text="9788965939" />
                  <Info icon={<Mail />} title="Email" text="hello@freshmart.com" />
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Store Hours</h3>
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-semibold">6:00 AM - 9:00 PM</span>
                </div>
              </div>

              {/* 🗺️ GOOGLE MAP */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <iframe
  title="Store Location"
  src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1767007326673!5m2!1sen!2sin!6m8!1m7!1sZ5nxJGrh5Vk4D_IdKiSt-g!2m2!1d11.71338479984219!2d79.33438725821055!3f198.36683251420646!4f-12.533835064629116!5f0.7820865974627469"
  className="w-full h-64 md:h-80 border-0 rounded-2xl"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
              </motion.div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SUCCESS MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-1 transition"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>

              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank you, {submittedName}! 🎉
              </h3>

              <p className="text-gray-600">
                Your message has been sent successfully.
                We’ll get back to you very soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* 🔹 Helper Components */

function Info({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function Input({ label, name, type = 'text', value, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
      />
    </div>
  );
}
