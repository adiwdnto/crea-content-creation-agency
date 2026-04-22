import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { plans } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PaymentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id === id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!plan) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen px-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
          >
            <CheckCircle size={48} />
          </motion.div>
          <h1 className="text-3xl font-black text-gray-900 mb-4 font-display">Pembayaran Berhasil!</h1>
          <p className="text-gray-600 text-center max-w-md mb-10">
            Terima kasih telah berlangganan Paket {plan.name}. Tim kami akan segera menghubungi Anda melalui email untuk langkah aktivasi selanjutnya.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={18} />
          Kembali
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-8 font-display">Konfirmasi Pembayaran</h1>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Ringkasan Pesanan</h3>
              <div className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500">Paket</span>
                <span className="font-bold">{plan.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500">Durasi</span>
                <span className="font-bold">1 Bulan</span>
              </div>
              <div className="flex justify-between py-4 mt-2">
                <span className="text-gray-900 font-bold">Total Pembayaran</span>
                <span className="text-purple-600 font-black text-xl">Rp {plan.price}</span>
              </div>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="p-2 bg-purple-600 text-white rounded-xl">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-purple-900">Virtual Account / Transfer</p>
                  <p className="text-xs text-purple-700 mt-1">Pembayaran otomatis diverifikasi dalam hitungan menit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl w-full">
              <h3 className="text-xl font-bold mb-8 text-center">Selesaikan Transaksi</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Pilih Bank</label>
                  <select className="w-full p-4 bg-gray-50 border-none rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-purple-200">
                    <option>Bank Mandiri (Virtual Account)</option>
                    <option>Bank BCA (Virtual Account)</option>
                    <option>Bank BNI (Virtual Account)</option>
                    <option>Bank BRI (Virtual Account)</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-xs text-gray-500 mb-1 text-center font-medium">Nomor Virtual Account</p>
                  <p className="text-2xl font-black text-gray-900 text-center tracking-widest">8801 0812 3456 78</p>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-5 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Memproses...
                    </>
                  ) : (
                    'Konfirmasi Bayar'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
