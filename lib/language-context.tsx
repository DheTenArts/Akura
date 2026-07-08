'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  id: {
    // Navbar
    'nav.features': 'Fitur',
    'nav.preview': 'Preview',
    'nav.benefit': 'Manfaat',
    'nav.pricing': 'Harga',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge': 'Segera Hadir — AKURA POS',
    'hero.title': 'Kelola Bisnis Lebih Mudah dengan',
    'hero.titleHighlight': 'AKURA POS',
    'hero.description': 'Sistem Point of Sale modern untuk membantu bisnis Anda mengelola transaksi, stok, laporan, dan pelanggan dalam satu platform.',
    'hero.cta': 'Gabung Early Access',
    'hero.features': 'Lihat Fitur',
    'hero.stats': ' bisnis telah bergabung dalam daftar tunggu',

    // Trusted By
    'trusted.title': 'Dipercaya oleh',
    'trusted.subtitle': 'Bisnis di Berbagai Industri',

    // Features
    'features.title': 'Semua yang Anda Butuhkan untuk Kelola Bisnis',
    'features.description': 'AKURA dilengkapi fitur lengkap untuk operasional bisnis yang efisien dan terorganisir.',
    'features.fast': 'Transaksi Cepat',
    'features.fastDesc': 'Kasir kilat, tidak perlu antri panjang.',
    'features.product': 'Manajemen Produk',
    'features.productDesc': 'Kelola katalog, harga, dan varian produk.',
    'features.stock': 'Manajemen Stok',
    'features.stockDesc': 'Pantau stok real-time, hindari kehabisan barang.',
    'features.report': 'Laporan & Analitik Real-Time',
    'features.reportDesc': 'Lihat penjualan, tren, plus ekspor data.',
    'features.branch': 'Multi-Cabang',
    'features.branchDesc': 'Semua cabang dikelola dari satu dashboard.',
    'features.qris': 'QRIS & Digital Payment',
    'features.qrisDesc': 'Terima pembayaran digital tanpa ribet.',
    'features.customer': 'Manajemen Pelanggan & Analitik',
    'features.customerDesc': 'Simpan data pelanggan dan pola belanja.',
    'features.staff': 'Role Staff & Admin',
    'features.staffDesc': 'Atur hak akses setiap karyawan.',
    'features.operational': 'Manajemen Biaya Operasional',
    'features.operationalDesc': 'Catat pengeluaran untuk laba-rugi akurat.',
    'features.closedBill': 'Manajemen Closed Bill',
    'features.closedBillDesc': 'Lacak pelanggan bayar nanti dengan mudah.',
    'features.stockAlert': 'Pengingat Stok Minimum',
    'features.stockAlertDesc': 'Notifikasi otomatis saat stok hampir habis.',

    // Preview
    'preview.title': 'Pantau Bisnis dalam Satu Dashboard',
    'preview.description': 'Lihat performa penjualan, stok produk, transaksi terbaru, dan laporan bisnis secara real-time.',
    'preview.revenue': 'Revenue chart & statistik penjualan',
    'preview.inventory': 'Status inventaris & stok produk',
    'preview.product': 'Produk terlaris secara otomatis',
    'preview.growth': 'Indikator pertumbuhan bulanan',

    // Benefits
    'benefits.title': 'Kenapa AKURA?',
    'benefits.subtitle': 'Dirancang khusus untuk UMKM, retail, restoran, café, dan minimarket di Indonesia.',
    'benefits.easy': 'Mudah Digunakan',
    'benefits.easyDesc': 'Antarmuka intuitif, siapapun bisa pakai tanpa training khusus.',
    'benefits.affordable': 'Harga Terjangkau',
    'benefits.affordableDesc': 'Paket fleksibel sesuai budget UMKM dan bisnis kecil.',
    'benefits.support': 'Support Lokal',
    'benefits.supportDesc': 'Tim support berbahasa Indonesia siap membantu Anda.',
    'benefits.cloud': 'Cloud-Based',
    'benefits.cloudDesc': 'Akses dari mana saja, data tersimpan aman di cloud.',
    'benefits.update': 'Update Gratis',
    'benefits.updateDesc': 'Fitur baru dan improvement tanpa biaya tambahan.',
    'benefits.secure': 'Aman & Terpercaya',
    'benefits.secureDesc': 'Enkripsi data dan backup otomatis untuk keamanan bisnis.',

    // AI Assistant
    'ai.badge': 'AKURA AI',
    'ai.title': 'Lebih Cerdas dengan',
    'ai.titleHighlight': 'AKURA AI',
    'ai.description': 'AKURA AI membantu menganalisis tren penjualan, memprediksi stok yang akan habis, dan memberikan rekomendasi bisnis secara otomatis.',
    'ai.prediction': 'Prediksi stok menipis',
    'ai.recommendation': 'Rekomendasi produk terlaris',
    'ai.insight': 'Insight penjualan otomatis',
    'ai.summary': 'Ringkasan laporan harian',

    // Pricing
    'pricing.title': 'Pilih Paket Sesuai Kebutuhan Bisnis',
    'pricing.subtitle': 'Harga final akan diumumkan saat peluncuran resmi.',
    'pricing.popular': 'Paling Popular',
    'pricing.comingSoon': 'Segara Hadir',
    'pricing.cta': 'Gabung Early Access',
    'pricing.basic': 'Basic',
    'pricing.basicTag': 'Untuk UMKM kecil',
    'pricing.pro': 'Pro',
    'pricing.proTag': 'Untuk bisnis berkembang',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterpriseTag': 'Untuk bisnis besar',
    'pricing.feature.branch1': '1 cabang',
    'pricing.feature.productMgmt': 'Manajemen produk',
    'pricing.feature.basicTrans': 'Transaksi dasar',
    'pricing.feature.simpleReport': 'Laporan sederhana',
    'pricing.feature.multiStaff': 'Multi staff',
    'pricing.feature.realtimeReport': 'Laporan real-time',
    'pricing.feature.qrisPayment': 'Pembayaran QRIS',
    'pricing.feature.salesAnalytics': 'Analitik penjualan',
    'pricing.feature.customerMgmt': 'Manajemen pelanggan',
    'pricing.feature.multiBranch': 'Multi cabang',
    'pricing.feature.customFeature': 'Kustom fitur',
    'pricing.feature.advancedAnalytics': 'Advanced analitik',
    'pricing.feature.prioritySupport': 'Dukungan prioritas',
    'pricing.feature.dedicatedOnboarding': 'Dedicated onboarding',

    // Early Access
    'early.title': 'Gabung Early Access',
    'early.subtitle': 'Jadilah pengguna pertama saat AKURA resmi diluncurkan.',
    'early.description': 'AKURA sedang dalam tahap pengembangan. Daftarkan email Anda sekarang untuk mendapatkan akses lebih awal, update fitur terbaru, dan penawaran eksklusif saat peluncuran.',
    'early.name': 'Nama Lengkap',
    'early.namePlaceholder': 'Masukkan nama lengkap',
    'early.email': 'Email',
    'early.emailPlaceholder': 'nama@email.com',
    'early.phone': 'Nomor WhatsApp',
    'early.phonePlaceholder': '08123456789',
    'early.business': 'Business Type',
    'early.businessPlaceholder': 'Pilih jenis bisnis',
    'early.location': 'Lokasi Bisnis',
    'early.locationPlaceholder': 'Kota/Kabupaten',
    'early.message': 'Pesan (Optional)',
    'early.messagePlaceholder': 'Ceritakan lebih lanjut tentang bisnis Anda',
    'early.submit': 'Daftar Sekarang',
    'early.submitting': 'Mengirim...',
    'early.successTitle': 'Terima kasih sudah mendaftar!',
    'early.successDesc': 'Kami akan menghubungi Anda melalui email/WhatsApp saat AKURA siap diluncurkan.',
    'early.backHome': 'Kembali ke Beranda',

    // Testimonials
    'testimonials.title': 'Apa Kata Mereka?',
    'testimonials.subtitle': 'Feedback dari bisnis yang sudah bergabung dalam daftar tunggu AKURA.',

    // FAQ
    'faq.title': 'Pertanyaan yang Sering Diajukan',
    'faq.umkm.question': 'Apakah AKURA cocok untuk UMKM?',
    'faq.umkm.answer': 'Tentu. AKURA dirancang khusus agar mudah digunakan oleh UMKM, retail, café, restoran, dan minimarket — tanpa perlu pengetahuan teknis.',
    'faq.available.question': 'Apakah AKURA sudah bisa digunakan sekarang?',
    'faq.available.answer': 'AKURA sedang dalam tahap pengembangan. Anda dapat mendaftar Early Access untuk menjadi pengguna pertama saat platform resmi diluncurkan.',
    'faq.qris.question': 'Apakah mendukung QRIS?',
    'faq.qris.answer': 'Ya. AKURA mendukung pembayaran QRIS dan metode pembayaran digital lainnya untuk mempermudah transaksi pelanggan Anda.',
    'faq.multiBranch.question': 'Apakah bisa digunakan untuk multi cabang?',
    'faq.multiBranch.answer': 'Bisa. Fitur multi-cabang memungkinkan Anda mengelola seluruh cabang bisnis dari satu dashboard terpusat.',
    'faq.mobile.question': 'Apakah tersedia aplikasi mobile?',
    'faq.mobile.answer': 'AKURA dirancang responsif dan dapat diakses dari berbagai perangkat. Aplikasi mobile khusus sedang dalam roadmap pengembangan kami.',
    'faq.earlyAccess.question': 'Bagaimana cara mendapatkan Early Access?',
    'faq.earlyAccess.answer': 'Cukup isi formulir Early Access di halaman ini dengan data bisnis Anda. Kami akan menghubungi Anda saat akses awal tersedia.',

    // Final CTA
    'cta.title': 'Siap Membawa Bisnis Anda ke Level Berikutnya?',
    'cta.description': 'Gabung Early Access AKURA sekarang dan jadilah bagian dari pengguna pertama saat platform resmi diluncurkan.',
    'cta.primary': 'Gabung Early Access',
    'cta.secondary': 'Lihat Preview Dashboard',

    // Footer
    'footer.description': 'Platform POS modern untuk membantu bisnis mengelola transaksi, stok, laporan, dan pelanggan dalam satu sistem.',
    'footer.product': 'Produk',
    'footer.company': 'Perusahaan',
    'footer.about': 'Tentang',
    'footer.contact': 'Kontak',
    'footer.copyright': '© 2026 AKURA. All rights reserved.',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.preview': 'Preview',
    'nav.benefit': 'Benefit',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge': 'Coming Soon — AKURA POS',
    'hero.title': 'Manage Your Business Easier with',
    'hero.titleHighlight': 'AKURA POS',
    'hero.description': 'Modern Point of Sale system to help your business manage transactions, inventory, reports, and customers in one platform.',
    'hero.cta': 'Join Early Access',
    'hero.features': 'See Features',
    'hero.stats': ' businesses have joined the waiting list',

    // Trusted By
    'trusted.title': 'Trusted by',
    'trusted.subtitle': 'Businesses Across Industries',

    // Features
    'features.title': 'Everything You Need to Manage Your Business',
    'features.description': 'AKURA comes with complete features for efficient and organized business operations.',
    'features.fast': 'Fast Transactions',
    'features.fastDesc': 'Lightning-fast cashier system, no more long queues.',

    'features.product': 'Product Management',
    'features.productDesc': 'Manage product catalogs, pricing, and variants.',

    'features.stock': 'Inventory Management',
    'features.stockDesc': 'Monitor stock levels in real-time and avoid stock shortages.',

    'features.report': 'Real-Time Reports & Analytics',
    'features.reportDesc': 'Track sales, trends, and export data easily.',
    'features.branch': 'Multi-Branch Management',
    'features.branchDesc': 'Manage all branches from a single dashboard.',
    'features.qris': 'QRIS & Digital Payments',
    'features.qrisDesc': 'Accept digital payments with ease.',
    'features.customer': 'Customer Management & Analytics',
    'features.customerDesc': 'Store customer data and analyze purchasing behavior.',
    'features.staff': 'Staff & Admin Roles',
    'features.staffDesc': 'Set access permissions for each employee.',
    'features.operational': 'Operational Expense Management',
    'features.operationalDesc': 'Record expenses for accurate profit and loss tracking.',
    'features.closedBill': 'Closed Bill Management',
    'features.closedBillDesc': 'Easily track customers who pay later.',
    'features.stockAlert': 'Low Stock Alerts',
    'features.stockAlertDesc': 'Receive automatic notifications when stock is running low.',

    // Preview
    'preview.title': 'Monitor Business in One Dashboard',
    'preview.description': 'View sales performance, product stock, recent transactions, and business reports in real-time.',
    'preview.revenue': 'Revenue chart & sales statistics',
    'preview.inventory': 'Inventory status & product stock',
    'preview.product': 'Best-selling products automatically',
    'preview.growth': 'Monthly growth indicators',

    // Benefits
    'benefits.title': 'Why AKURA?',
    'benefits.subtitle': 'Specially designed for SMEs, retail, restaurants, cafés, and minimarkets in Indonesia.',
    'benefits.easy': 'Easy to Use',
    'benefits.easyDesc': 'Intuitive interface, anyone can use without special training.',
    'benefits.affordable': 'Affordable Price',
    'benefits.affordableDesc': 'Flexible packages according to SME and small business budgets.',
    'benefits.support': 'Local Support',
    'benefits.supportDesc': 'Indonesian-speaking support team ready to help you.',
    'benefits.cloud': 'Cloud-Based',
    'benefits.cloudDesc': 'Access from anywhere, data stored securely in the cloud.',
    'benefits.update': 'Free Updates',
    'benefits.updateDesc': 'New features and improvements at no extra cost.',
    'benefits.secure': 'Safe & Trusted',
    'benefits.secureDesc': 'Data encryption and automatic backup for business security.',

    // AI Assistant
    'ai.badge': 'AKURA AI',
    'ai.title': 'Smarter with',
    'ai.titleHighlight': 'AKURA AI',
    'ai.description': 'AKURA AI helps analyze sales trends, predict low stock, and provide business recommendations automatically.',
    'ai.prediction': 'Low stock prediction',
    'ai.recommendation': 'Best-selling product recommendations',
    'ai.insight': 'Automatic sales insights',
    'ai.summary': 'Daily report summary',

    // Pricing
    'pricing.title': 'Choose a Plan That Fits Your Business',
    'pricing.subtitle': 'Final pricing will be announced at official launch.',
    'pricing.popular': 'Most Popular',
    'pricing.comingSoon': 'Coming Soon',
    'pricing.cta': 'Join Early Access',
    'pricing.basic': 'Basic',
    'pricing.basicTag': 'For small SMEs',
    'pricing.pro': 'Pro',
    'pricing.proTag': 'For growing businesses',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterpriseTag': 'For large businesses',
    'pricing.feature.branch1': '1 branch',
    'pricing.feature.productMgmt': 'Product management',
    'pricing.feature.basicTrans': 'Basic transactions',
    'pricing.feature.simpleReport': 'Simple reports',
    'pricing.feature.multiStaff': 'Multi staff',
    'pricing.feature.realtimeReport': 'Real-time reports',
    'pricing.feature.qrisPayment': 'QRIS payment',
    'pricing.feature.salesAnalytics': 'Sales analytics',
    'pricing.feature.customerMgmt': 'Customer management',
    'pricing.feature.multiBranch': 'Multi branch',
    'pricing.feature.customFeature': 'Custom feature',
    'pricing.feature.advancedAnalytics': 'Advanced analytics',
    'pricing.feature.prioritySupport': 'Priority support',
    'pricing.feature.dedicatedOnboarding': 'Dedicated onboarding',

    // Early Access
    'early.title': 'Join Early Access',
    'early.subtitle': 'Be the first user when AKURA is officially launched.',
    'early.description': 'AKURA is currently under development. Sign up with your email now to get early access, the latest feature updates, and exclusive offers at launch.',
    'early.name': 'Full Name',
    'early.namePlaceholder': 'Enter your full name',
    'early.email': 'Email',
    'early.emailPlaceholder': 'name@email.com',
    'early.phone': 'WhatsApp Number',
    'early.phonePlaceholder': '08123456789',
    'early.business': 'Business Type',
    'early.businessPlaceholder': 'Select business type',
    'early.location': 'Business Location',
    'early.locationPlaceholder': 'City/Regency',
    'early.message': 'Message (Optional)',
    'early.messagePlaceholder': 'Tell us more about your business',
    'early.submit': 'Register Now',
    'early.submitting': 'Submitting...',
    'early.successTitle': 'Thank you for registering!',
    'early.successDesc': 'We will contact you via email/WhatsApp when AKURA is ready to launch.',
    'early.backHome': 'Back to Home',

    // Testimonials
    'testimonials.title': 'What They Say?',
    'testimonials.subtitle': 'Feedback from businesses that have joined the AKURA waiting list.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.umkm.question': 'Is AKURA suitable for SMEs?',
    'faq.umkm.answer': 'Absolutely. AKURA is specifically designed to be easy to use for SMEs, retail, cafés, restaurants, and minimarkets — without requiring technical knowledge.',
    'faq.available.question': 'Is AKURA available now?',
    'faq.available.answer': 'AKURA is currently under development. You can sign up for Early Access to become one of the first users when the platform officially launches.',
    'faq.qris.question': 'Does it support QRIS?',
    'faq.qris.answer': 'Yes. AKURA supports QRIS payments and other digital payment methods to facilitate your customer transactions.',
    'faq.multiBranch.question': 'Can it be used for multiple branches?',
    'faq.multiBranch.answer': 'Yes. The multi-branch feature allows you to manage all your business branches from one centralized dashboard.',
    'faq.mobile.question': 'Is there a mobile app?',
    'faq.mobile.answer': 'AKURA is designed to be responsive and accessible from various devices. A dedicated mobile app is currently on our development roadmap.',
    'faq.earlyAccess.question': 'How do I get Early Access?',
    'faq.earlyAccess.answer': 'Simply fill out the Early Access form on this page with your business information. We will contact you when early access becomes available.',

    // Final CTA
    'cta.title': 'Ready to Take Your Business to the Next Level?',
    'cta.description': 'Join AKURA Early Access now and be part of the first users when the platform is officially launched.',
    'cta.primary': 'Join Early Access',
    'cta.secondary': 'View Dashboard Preview',

    // Footer
    'footer.description': 'Modern POS platform to help businesses manage transactions, inventory, reports, and customers in one system.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 AKURA. All rights reserved.',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
