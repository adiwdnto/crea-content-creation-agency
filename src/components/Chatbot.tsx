import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headset, Send, X, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Halo! Saya asisten Crea. Ada yang bisa saya bantu terkait layanan paket konten kami?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ 
            role: m.role === 'user' ? 'user' : 'model', 
            parts: [{ text: m.content }] 
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `Anda adalah representatif layanan pelanggan yang sangat ramah dan profesional untuk 'Crea', sebuah agensi konten kreatif premium di Indonesia.
            Tugas Anda adalah membantu pengunjung memahami paket kami:
            - Starter (Rp 500.000/bulan): Cocok untuk UMKM, 3 platform, 12 konten.
            - Professional (Rp 1.000.000/bulan): 5 platform, 24 konten, manajemen komunitas, analitik.
            - Agency (Rp 2.500.000/bulan): Tanpa batas platform, posting harian, produksi video, Content Director khusus.
            
            Informasi tambahan:
            - Platform yang didukung: Instagram, Facebook, YouTube, TikTok, dan X.
            - Fokus kami: Branding, Informasi, dan Layanan Pelanggan.
            - Gaya bahasa: Sopan, profesional, kreatif, dan inspiratif. Gunakan Bahasa Indonesia yang baik dan benar namun tetap modern.`,
          temperature: 0.7,
        }
      });

      const assistantReply = response.text || "Maaf, saya sedang mengalami kendala teknis. Bisa ulangi pertanyaannya?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Maaf, silakan coba lagi nanti." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-purple-600 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Headset size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Layanan Crea</h3>
                  <p className="text-[10px] text-purple-200 uppercase tracking-widest font-bold">Selalu Siap Membantu</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50/50"
            >
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    m.role === 'user' 
                      ? "bg-purple-600 text-white rounded-tr-none" 
                      : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-purple-600">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-xs font-medium italic">Asisten sedang mengetik...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t border-gray-100 flex items-center gap-2"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-200"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-purple-600 text-white rounded-2xl shadow-xl shadow-purple-500/30 flex items-center justify-center relative group"
      >
        <Headset size={28} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </motion.button>
    </div>
  );
};

export default Chatbot;
