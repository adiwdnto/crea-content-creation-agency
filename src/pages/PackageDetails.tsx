import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, CreditCard, ShieldCheck, Zap } from 'lucide-react';
import { plans } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Paket tidak ditemukan</h1>
          <button onClick={() => navigate('/')} className="text-purple-600 font-bold underline">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={18} />
          Kembali
        </motion.button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                Detail Paket
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-display">
                Paket {plan.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {plan.longDesc}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apa yang Anda dapatkan:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="mt-1 p-1 bg-purple-50 text-purple-600 rounded-full">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 p-8 rounded-[2.5rem] text-white sticky top-32 shadow-2xl shadow-purple-500/20"
            >
              <div className="mb-8">
                <p className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Total Biaya</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-purple-400 font-bold text-xl">Rp</span>
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/bulan</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <ShieldCheck size={18} className="text-green-400" />
                  <span>Pembayaran Aman</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Zap size={18} className="text-yellow-400" />
                  <span>Aktivasi Cepat</span>
                </div>
              </div>

              <button 
                onClick={() => navigate(`/payment/${plan.id}`)}
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <CreditCard size={20} />
                Lanjut ke Pembayaran
              </button>
              
              <p className="text-center text-gray-500 text-[10px] mt-6 leading-tight">
                Dengan melanjutkan, Anda menyetujui Syarat dan Ketentuan layanan Crea.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackageDetails;
