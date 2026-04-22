import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Crea telah sepenuhnya mengubah cara merek kami berinteraksi secara online. Fokus layanan pelanggan mereka tidak ada duanya.",
      author: "Sarah Jenkins",
      role: "Pendiri, Bloom Floral",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      content: "Konsistensi branding di Instagram dan YouTube membantu kami menumbuhkan jumlah pelanggan sebesar 40% hanya dalam dua bulan.",
      author: "Marcus Thorne",
      role: "CEO, TechPulse",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      content: "Pemikiran strategis yang luar biasa. Mereka tidak hanya memposting; mereka mengelola seluruh komunitas kami dengan hati dan profesionalisme.",
      author: "Elena Rodriguez",
      role: "Direktur Pemasaran, Aura",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-display">
            Dipercaya oleh Merek Modern
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/5 transition-all"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
