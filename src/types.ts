export interface Plan {
  id: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight: boolean;
  longDesc: string;
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '500.000',
    desc: 'Cocok untuk merek kecil yang baru memulai perjalanan digital mereka.',
    longDesc: 'Paket Starter dirancang khusus untuk UMKM dan kreator individu yang ingin membangun fondasi digital yang kuat. Kami fokus pada konsistensi posting dan interaksi dasar guna meningkatkan kesadaran merek Anda secara bertahap namun pasti.',
    features: [
      '3 Platform (IG, FB, X)',
      '12 Konten per Bulan',
      'Panduan Gaya Visual Dasar',
      'Laporan Kinerja Mingguan',
      'Dukungan Email Standar',
    ],
    highlight: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '1.000.000',
    desc: 'Percepat pertumbuhan Anda dengan strategi sosial berbasis data.',
    longDesc: 'Dapatkan hasil maksimal dengan paket Professional. Kami tidak hanya memposting konten, tetapi juga mengelola komunitas Anda secara aktif dan memberikan wawasan mendalam melalui dashboard analitik real-time untuk memastikan setiap rupiah yang Anda keluarkan memberikan dampak nyata.',
    features: [
      'Semua 5 Platform',
      '24 Konten per Bulan',
      'Paket Branding Lengkap',
      'Manajemen Komunitas Aktif',
      'Dashboard Analitik Real-time',
      'Dukungan Telepon Prioritas',
    ],
    highlight: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '2.500.000',
    desc: 'Pembuatan konten kelas enterprise untuk merek mapun.',
    longDesc: 'Pilihan utama bagi bisnis skala besar yang membutuhkan kehadiran digital yang dominan dan profesional. Paket Agency menawarkan dukungan penuh, mulai dari produksi video premium hingga direktur konten khusus yang akan menyusun strategi narasi merek Anda secara eksklusif.',
    features: [
      'Platform Tak Terbatas',
      'Posting Setiap Hari',
      'UGC + Produksi Video',
      'Content Director Khusus',
      'Corong Informasi Kustom',
      'Dukungan VIP 24/7',
    ],
    highlight: false,
  },
];
