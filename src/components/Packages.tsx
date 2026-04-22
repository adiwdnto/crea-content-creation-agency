import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { plans } from '@/types';

const Packages: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Harga & Paket
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 font-display">
            Paket Layanan yang Sesuai dengan Visi Anda
          </h2>
          <p className="text-lg text-gray-600">
            Keunggulan konten berbasis langganan. Tanpa biaya tersembunyi, hanya hasil kreatif murni.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={cn(
                "relative p-10 rounded-[2.5rem] border transition-all duration-500",
                plan.highlight 
                  ? "bg-gray-900 border-gray-800 shadow-2xl shadow-purple-500/20" 
                  : "bg-white border-gray-100 hover:border-purple-200"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Paling Populer
                </div>
              )}
              <div className="mb-10">
                <h3 className={cn("text-xl font-bold mb-2", plan.highlight ? "text-white" : "text-gray-900")}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-base font-bold", plan.highlight ? "text-purple-400" : "text-purple-600")}>Rp</span>
                  <span className={cn("text-3xl font-black tracking-tighter", plan.highlight ? "text-white" : "text-gray-900")}>
                    {plan.price}
                  </span>
                  <span className={cn("text-sm font-medium", plan.highlight ? "text-gray-400" : "text-gray-500")}>
                    /bulan
                  </span>
                </div>
                <p className={cn("mt-4 text-sm leading-relaxed", plan.highlight ? "text-gray-400" : "text-gray-600")}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((fb) => (
                  <li key={fb} className="flex items-start gap-4">
                    <div className={cn(
                      "mt-1 p-1 rounded-full",
                      plan.highlight ? "bg-purple-500/10 text-purple-500" : "bg-purple-50 text-purple-500"
                    )}>
                      <Check size={14} />
                    </div>
                    <span className={cn("text-sm font-medium", plan.highlight ? "text-gray-300" : "text-gray-700")}>
                      {fb}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => navigate(`/details/${plan.id}`)}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all text-sm",
                  plan.highlight 
                    ? "bg-purple-600 text-white hover:bg-purple-700" 
                    : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
                )}
              >
                Mulai dengan {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
