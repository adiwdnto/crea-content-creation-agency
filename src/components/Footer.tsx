import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-black tracking-tighter mb-8 block">
              CREA<span className="text-purple-600">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Membangun pengalaman digital premium untuk merek-merek visioner. Berbasis di pusat kreativitas.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-purple-600 mb-2">Layanan</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pembuatan Konten</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Strategi Branding</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Manajemen Sosial</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Analitik</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-purple-600 mb-2">Perusahaan</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tentang Kami</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Portofolio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Karir</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kontak</a>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-purple-600 mb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm">Dapatkan wawasan terbaru tentang strategi konten.</p>
            <div className="flex bg-white/10 rounded-full p-1 border border-white/10">
              <input 
                type="email" 
                placeholder="email@contoh.com" 
                className="bg-transparent border-none outline-none flex-1 px-4 text-sm text-white placeholder:text-gray-500"
              />
              <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-600 hover:text-white transition-all">
                Gabung
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-top border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest text-center md:text-left">
            © 2026 CREA CONTENT SERVICE. HAK CIPTA DILINDUNGI UNDANG-UNDANG.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Kebijakan Privasi</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
