import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube, Twitter, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
  const platforms = [
    { name: 'Instagram', icon: <Instagram />, color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: <Facebook />, color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: <Youtube />, color: 'hover:text-red-600' },
    { name: 'TikTok', icon: <Send />, color: 'hover:text-black' },
    { name: 'X (Twitter)', icon: <Twitter />, color: 'hover:text-blue-400' },
  ];

  const focusAreas = [
    {
      title: 'Branding',
      desc: 'Konsistensi di semua platform. Kami menciptakan identitas visual yang selaras dengan nilai-nilai inti Anda.',
    },
    {
      title: 'Informasi',
      desc: 'Mengubah data kompleks menjadi konten yang mudah dicerna dan menarik untuk mengedukasi audiens Anda.',
    },
    {
      title: 'Layanan Pelanggan',
      desc: 'Keterlibatan proaktif dan manajemen komunitas untuk memastikan pelanggan Anda merasa didengar dan dihargai.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Strategi Omnichannel
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Kami mengelola platformnya,<br />Anda fokus kembangkan bisnis.
            </h2>
            <div className="flex flex-wrap gap-8 mb-12">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={cn(
                    "flex items-center gap-2 text-gray-400 transition-colors duration-300",
                    p.color.replace('hover:text-pink-500', 'hover:text-purple-500').replace('hover:text-blue-600', 'hover:text-purple-600').replace('hover:text-red-600', 'hover:text-purple-700').replace('hover:text-blue-400', 'hover:text-purple-400')
                  )}
                >
                  {p.icon}
                  <span className="text-sm font-semibold">{p.name}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-500/10"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                alt="Proses Kreatif"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-64 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">5+</span>
                </div>
                <span className="text-sm font-bold text-gray-900 leading-tight">
                  Platform Utama <br />Didukung
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium italic">
                "Crea telah merevolusi strategi sosial kami."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
