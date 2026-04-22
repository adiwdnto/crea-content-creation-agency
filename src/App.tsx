import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PackageDetails from './pages/PackageDetails';
import PaymentPage from './pages/PaymentPage';
import Chatbot from './components/Chatbot';

const LandingPage: React.FC = () => (
  <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Packages />
      <Testimonials />
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
              alt="Tim Kami" 
              className="w-full h-[600px] object-cover rounded-[3rem]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center p-6 text-center text-white font-bold leading-tight animate-spin-slow">
              PENGALAMAN 10+ TAHUN
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Tentang Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Kreativitas adalah mesin penghubung.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Di Crea, kami percaya bahwa konten yang hebat lebih dari sekadar visual dan kata-kata—ini tentang membangun hubungan yang langgeng antara merek dan orang-orang.
              </p>
              <p>
                Didirikan oleh kolektif seniman, strategis, dan ilmuwan data, kami telah membantu ratusan merek menemukan suara unik mereka di lanskap digital yang padat.
              </p>
              <p>
                Misi kami sederhana: membuat merek Anda mustahil untuk diabaikan. Kami menggabungkan bakat artistik dengan analitik yang ketat untuk memberikan hasil yang benar-benar berarti bagi bisnis Anda.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-gray-900 mb-2">500+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Klien di Seluruh Dunia</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900 mb-2">1M+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Konten Terkirim</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Chatbot />
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details/:id" element={<PackageDetails />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
};

export default App;
