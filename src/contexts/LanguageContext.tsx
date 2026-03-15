import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "id" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { id: "Tentang", en: "About" },
  "nav.industries": { id: "Industri", en: "Industries" },
  "nav.products": { id: "Produk", en: "Products" },
  "nav.services": { id: "Layanan", en: "Services" },
  "nav.certifications": { id: "Sertifikasi", en: "Certifications" },
  "nav.contact": { id: "Kontak", en: "Contact" },
  "nav.cta": { id: "Hubungi Kami", en: "Contact Us" },

  // Hero
  "hero.label": { id: "Water Treatment Chemicals", en: "Water Treatment Chemicals" },
  "hero.h1.line1": { id: "Solusi Kimia", en: "Chemical Solutions" },
  "hero.h1.line2": { id: "Pengolahan Air", en: "for Water Treatment" },
  "hero.h1.line3": { id: "Industri", en: "Industries" },
  "hero.desc": {
    id: "Produsen dan distributor bahan kimia spesialti untuk sistem pengolahan air & air limbah sejak 1998.",
    en: "Manufacturer and distributor of specialty chemicals for water & wastewater treatment systems since 1998.",
  },
  "hero.cta1": { id: "Konsultasi Tim Kami", en: "Consult Our Team" },
  "hero.cta2": { id: "Lihat Solusi", en: "View Solutions" },

  // BrandIntro
  "about.label": { id: "Tentang Kami", en: "About Us" },
  "about.h2.line1": { id: "Mitra industri", en: "Industry partner" },
  "about.h2.line2": { id: "dalam kimia", en: "in water treatment" },
  "about.h2.line3": { id: "pengolahan air", en: "chemicals" },
  "about.p1": {
    id: "PT. Poly Arrad Pusaka beroperasi dengan merek dagang <strong>ARRAD Chemicals</strong>. Berdiri sejak 1998, perusahaan ini berfokus pada formulasi, produksi, dan distribusi bahan kimia spesialti untuk pengolahan air dan air limbah.",
    en: "PT. Poly Arrad Pusaka operates under the brand <strong>ARRAD Chemicals</strong>. Established in 1998, the company focuses on formulation, production, and distribution of specialty chemicals for water and wastewater treatment.",
  },
  "about.p2": {
    id: "Dengan fasilitas manufaktur dan laboratorium di Surabaya, kami melayani kebutuhan sektor industri, komersial, dan utilitas di seluruh Indonesia.",
    en: "With manufacturing facilities and laboratories in Surabaya, we serve the needs of industrial, commercial, and utility sectors across Indonesia.",
  },
  "about.stat1": { id: "Tahun Beroperasi", en: "Years Operating" },
  "about.stat2": { id: "Lini Produk", en: "Product Lines" },
  "about.stat3": { id: "Proyek Terlayani", en: "Projects Served" },
  "about.stat4": { id: "Klien Aktif", en: "Active Clients" },

  // WhyArrad
  "why.label": { id: "Keunggulan", en: "Our Edge" },
  "why.h2": { id: "Mengapa", en: "Why" },
  "why.subtitle": {
    id: "Empat pilar keunggulan yang menjadikan kami mitra terpercaya dalam pengolahan air industri.",
    en: "Four pillars of excellence that make us a trusted partner in industrial water treatment.",
  },
  "why.1.title": { id: "Technical Expertise", en: "Technical Expertise" },
  "why.1.desc": {
    id: "Tim ahli kimia dan insinyur berpengalaman yang memahami setiap aspek sistem pengolahan air industri secara mendalam.",
    en: "Experienced chemists and engineers who deeply understand every aspect of industrial water treatment systems.",
  },
  "why.2.title": { id: "Customized Programs", en: "Customized Programs" },
  "why.2.desc": {
    id: "Program treatment yang dirancang khusus berdasarkan analisis kondisi dan kebutuhan spesifik setiap sistem klien.",
    en: "Treatment programs specifically designed based on analysis of each client's system conditions and needs.",
  },
  "why.3.title": { id: "Quality Assurance", en: "Quality Assurance" },
  "why.3.desc": {
    id: "Produk spesialti bermutu tinggi dengan quality control ketat dari laboratorium hingga aplikasi di lapangan.",
    en: "High-quality specialty products with strict quality control from laboratory to field application.",
  },
  "why.4.title": { id: "On-site Support", en: "On-site Support" },
  "why.4.desc": {
    id: "Dukungan teknis langsung di lokasi — dari survei awal, implementasi program, hingga evaluasi berkelanjutan.",
    en: "Direct on-site technical support — from initial survey, program implementation, to ongoing evaluation.",
  },

  // Industries
  "ind.label": { id: "Industri", en: "Industries" },
  "ind.h2.pre": { id: "Melayani berbagai", en: "Serving various" },
  "ind.h2.highlight": { id: "sektor industri", en: "industry sectors" },
  "ind.subtitle": {
    id: "Solusi kimia pengolahan air kami dipercaya oleh beragam industri di seluruh Indonesia.",
    en: "Our water treatment chemical solutions are trusted by various industries across Indonesia.",
  },
  "ind.power": { id: "Pembangkit Listrik", en: "Power Plants" },
  "ind.power.desc": { id: "Cooling water, boiler feed water, dan waste water treatment.", en: "Cooling water, boiler feed water, and waste water treatment." },
  "ind.hotel": { id: "Hotel & Gedung", en: "Hotels & Buildings" },
  "ind.hotel.desc": { id: "Sistem HVAC, kolam renang, dan pengolahan air bersih.", en: "HVAC systems, swimming pools, and clean water treatment." },
  "ind.pulp": { id: "Pulp & Kertas", en: "Pulp & Paper" },
  "ind.pulp.desc": { id: "Proses bleaching, recovery boiler, dan effluent treatment.", en: "Bleaching process, recovery boiler, and effluent treatment." },
  "ind.food": { id: "Industri Makanan", en: "Food Industry" },
  "ind.food.desc": { id: "Water purification, steam boiler, dan limbah organik.", en: "Water purification, steam boiler, and organic waste." },
  "ind.chem": { id: "Industri Kimia", en: "Chemical Industry" },
  "ind.chem.desc": { id: "Process water, cooling system, dan waste treatment.", en: "Process water, cooling system, and waste treatment." },
  "ind.fert": { id: "Industri Pupuk", en: "Fertilizer Industry" },
  "ind.fert.desc": { id: "Demineralization, cooling water, dan waste water.", en: "Demineralization, cooling water, and waste water." },
  "ind.elec": { id: "Industri Elektronik", en: "Electronics Industry" },
  "ind.elec.desc": { id: "Ultra-pure water dan precision cleaning system.", en: "Ultra-pure water and precision cleaning system." },
  "ind.rubber": { id: "Karet & Ban", en: "Rubber & Tires" },
  "ind.rubber.desc": { id: "Proses vulkanisasi, cooling, dan effluent treatment.", en: "Vulcanization process, cooling, and effluent treatment." },
  "ind.trusted": { id: "Dipercaya oleh", en: "Trusted by" },
  "ind.partners": { id: "Mitra Industri Terkemuka", en: "Leading Industry Partners" },

  // Products
  "prod.label": { id: "Produk", en: "Products" },
  "prod.h2.pre": { id: "Kategori", en: "Featured" },
  "prod.h2.highlight": { id: "produk unggulan", en: "product categories" },
  "prod.subtitle": {
    id: "Tujuh lini produk kimia spesialti untuk memenuhi setiap kebutuhan pengolahan air industri Anda.",
    en: "Seven specialty chemical product lines to meet every need of your industrial water treatment.",
  },
  "prod.influent": { id: "Kimia pengolahan air baku untuk sistem klarifikasi, pelunakan, desalinasi, dan reverse osmosis.", en: "Raw water treatment chemicals for clarification, softening, desalination, and reverse osmosis systems." },
  "prod.effluent": { id: "Solusi treatment air buangan untuk klarifikasi dan proses dewatering lumpur.", en: "Wastewater treatment solutions for clarification and sludge dewatering processes." },
  "prod.boiler": { id: "Kimia perawatan boiler untuk tekanan rendah, menengah, dan tinggi.", en: "Boiler treatment chemicals for low, medium, and high pressure." },
  "prod.cooling": { id: "Inhibitor korosi, kerak, dan kontrol mikrobiologi untuk sistem pendingin.", en: "Corrosion inhibitors, scale inhibitors, and microbiological control for cooling systems." },
  "prod.ro": { id: "Treatment lengkap untuk membran RO air laut maupun air payau.", en: "Complete treatment for seawater and brackish water RO membranes." },
  "prod.waste": { id: "Kimia pengolahan air limbah untuk berbagai jenis industri.", en: "Wastewater treatment chemicals for various types of industries." },
  "prod.commodity": { id: "Perdagangan komoditas pendukung operasional industri.", en: "Commodity trading supporting industrial operations." },

  // Services
  "svc.label": { id: "Layanan Teknis", en: "Technical Services" },
  "svc.h2.pre": { id: "Layanan teknis", en: "Value-added" },
  "svc.h2.highlight": { id: "bernilai tambah", en: "technical services" },
  "svc.perf.title": { id: "Performance Monitoring", en: "Performance Monitoring" },
  "svc.perf.desc": {
    id: "Pemantauan performa sistem pengolahan air secara berkala untuk memastikan setiap parameter berjalan optimal.",
    en: "Regular monitoring of water treatment system performance to ensure every parameter runs optimally.",
  },
  "svc.qc.title": { id: "Quality Control System", en: "Quality Control System" },
  "svc.qc.desc": {
    id: "Pengendalian mutu terintegrasi dari laboratorium hingga lapangan dengan pengujian rutin dan analisis sampel.",
    en: "Integrated quality control from laboratory to field with routine testing and sample analysis.",
  },
  "svc.report.title": { id: "Reporting", en: "Reporting" },
  "svc.report.desc": {
    id: "Laporan teknis komprehensif — data performa, tren analisis, dan rekomendasi dalam format profesional.",
    en: "Comprehensive technical reports — performance data, analysis trends, and recommendations in professional format.",
  },
  "svc.train.title": { id: "Training", en: "Training" },
  "svc.train.desc": {
    id: "Pelatihan bagi operator dan tim teknis klien. Transfer pengetahuan praktis tentang penanganan kimia.",
    en: "Training for operators and client technical teams. Practical knowledge transfer on chemical handling.",
  },

  // Treatment Activities
  "treat.label": { id: "Aktivitas Treatment", en: "Treatment Activities" },
  "treat.h2.pre": { id: "Implementasi", en: "Implementation" },
  "treat.h2.highlight": { id: "di lapangan", en: "in the field" },
  "treat.lab.title": { id: "Analisis Laboratorium", en: "Laboratory Analysis" },
  "treat.lab.desc": { id: "Pengujian sampel air dan bahan kimia untuk memastikan kualitas treatment sesuai standar.", en: "Testing water and chemical samples to ensure treatment quality meets standards." },
  "treat.dosing.title": { id: "Dosing & Chemical Handling", en: "Dosing & Chemical Handling" },
  "treat.dosing.desc": { id: "Implementasi sistem dosing dan penanganan kimia yang aman dan efisien di lapangan.", en: "Implementation of safe and efficient dosing systems and chemical handling in the field." },
  "treat.site.title": { id: "Site Support", en: "Site Support" },
  "treat.site.desc": { id: "Pendampingan teknis langsung di lokasi untuk commissioning, troubleshooting, dan optimasi.", en: "Direct on-site technical assistance for commissioning, troubleshooting, and optimization." },
  "treat.maint.title": { id: "Perawatan Sistem", en: "System Maintenance" },
  "treat.maint.desc": { id: "Maintenance berkala pada peralatan treatment untuk menjaga performa dan umur pakai.", en: "Regular maintenance on treatment equipment to maintain performance and lifespan." },
  "treat.supply.title": { id: "Logistik & Supply", en: "Logistics & Supply" },
  "treat.supply.desc": { id: "Pengelolaan rantai pasok kimia dari gudang hingga titik penggunaan dengan tepat waktu.", en: "Chemical supply chain management from warehouse to point of use on time." },
  "treat.optim.title": { id: "Optimasi Proses", en: "Process Optimization" },
  "treat.optim.desc": { id: "Evaluasi dan peningkatan berkelanjutan terhadap efisiensi sistem pengolahan air.", en: "Continuous evaluation and improvement of water treatment system efficiency." },

  // Vision/Mission
  "vm.vision.label": { id: "Visi", en: "Vision" },
  "vm.vision.text": {
    id: "Menjadi perusahaan kimia pengolahan air terdepan di Indonesia yang diakui secara internasional atas inovasi, kualitas, dan keandalan layanan.",
    en: "To become the leading water treatment chemical company in Indonesia, internationally recognized for innovation, quality, and service reliability.",
  },
  "vm.mission.label": { id: "Misi", en: "Mission" },
  "vm.m1": { id: "Mengembangkan dan menerapkan teknologi terkini dalam formulasi kimia pengolahan air.", en: "Develop and apply the latest technology in water treatment chemical formulation." },
  "vm.m2": { id: "Menyediakan tim ahli berpengalaman yang siap memberikan solusi terbaik di lapangan.", en: "Provide experienced expert teams ready to deliver the best solutions in the field." },
  "vm.m3": { id: "Mendorong inovasi melalui riset dan pengembangan yang berkelanjutan.", en: "Drive innovation through continuous research and development." },
  "vm.m4": { id: "Menjaga standar mutu tertinggi dalam setiap produk dan layanan.", en: "Maintain the highest quality standards in every product and service." },
  "vm.m5": { id: "Berkomitmen pada praktik bisnis yang bertanggung jawab terhadap lingkungan.", en: "Committed to environmentally responsible business practices." },

  // Certifications
  "cert.label": { id: "Sertifikasi", en: "Certifications" },
  "cert.h2.pre": { id: "Jaminan mutu &", en: "Quality assurance &" },
  "cert.h2.highlight": { id: "kepercayaan", en: "trust" },
  "cert.iso.desc": { id: "Sistem manajemen mutu terakreditasi untuk proses produksi dan layanan.", en: "Accredited quality management system for production processes and services." },
  "cert.kan.desc": { id: "Terakreditasi oleh Komite Akreditasi Nasional untuk jaminan mutu pengujian.", en: "Accredited by National Accreditation Committee for testing quality assurance." },
  "cert.nsf.desc": { id: "Sertifikasi internasional untuk produk yang memenuhi standar keamanan air.", en: "International certification for products meeting water safety standards." },
  "cert.halal.desc": { id: "Komitmen terhadap kepatuhan halal dalam proses produksi yang relevan.", en: "Commitment to halal compliance in relevant production processes." },

  // Facility
  "fac.label": { id: "Fasilitas Kami", en: "Our Facilities" },
  "fac.h2.pre": { id: "Fasilitas", en: "Production &" },
  "fac.h2.highlight": { id: "Produksi & Distribusi", en: "Distribution Facilities" },
  "fac.prod.label": { id: "Pabrik Produksi", en: "Production Plant" },
  "fac.prod.desc": { id: "Fasilitas manufaktur modern", en: "Modern manufacturing facility" },
  "fac.lab.label": { id: "Laboratorium QC", en: "QC Laboratory" },
  "fac.lab.desc": { id: "Pengujian mutu ketat", en: "Strict quality testing" },
  "fac.dist.label": { id: "Gudang & Distribusi", en: "Warehouse & Distribution" },
  "fac.dist.desc": { id: "Logistik terintegrasi", en: "Integrated logistics" },
  "fac.safety.label": { id: "Standar K3", en: "HSE Standards" },
  "fac.safety.desc": { id: "Keselamatan prioritas utama", en: "Safety as top priority" },

  // Location
  "loc.label": { id: "Lokasi Kami", en: "Our Location" },
  "loc.h2.pre": { id: "Kunjungi", en: "Visit" },
  "loc.h2.highlight": { id: "kantor kami", en: "our office" },
  "loc.address": { id: "Alamat", en: "Address" },
  "loc.phone": { id: "Telepon", en: "Phone" },
  "loc.hours.label": { id: "Jam Operasional", en: "Operating Hours" },
  "loc.hours.weekday": { id: "Senin – Jumat: 08:00 – 17:00 WIB", en: "Monday – Friday: 08:00 – 17:00 WIB" },
  "loc.hours.weekend": { id: "Sabtu – Minggu: Tutup", en: "Saturday – Sunday: Closed" },

  // Contact
  "contact.label": { id: "Hubungi Kami", en: "Contact Us" },
  "contact.h2.pre": { id: "Konsultasikan kebutuhan", en: "Discuss your" },
  "contact.h2.highlight": { id: "Anda", en: "needs" },
  "contact.subtitle": {
    id: "Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.",
    en: "Fill in the form below and our team will contact you within 1×24 business hours.",
  },
  "contact.name": { id: "Nama Lengkap", en: "Full Name" },
  "contact.name.ph": { id: "Nama Anda", en: "Your Name" },
  "contact.company": { id: "Perusahaan", en: "Company" },
  "contact.company.ph": { id: "Nama Perusahaan", en: "Company Name" },
  "contact.phone": { id: "Telepon", en: "Phone" },
  "contact.subject": { id: "Subjek", en: "Subject" },
  "contact.subject.ph": { id: "Topik pertanyaan Anda", en: "Your inquiry topic" },
  "contact.message": { id: "Pesan", en: "Message" },
  "contact.message.ph": { id: "Ceritakan kebutuhan pengolahan air Anda...", en: "Tell us about your water treatment needs..." },
  "contact.submit": { id: "Kirim Pesan", en: "Send Message" },
  "contact.sending": { id: "Mengirim...", en: "Sending..." },
  "contact.success": {
    id: "Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.",
    en: "Your message has been sent! Our team will contact you shortly.",
  },
  "contact.error": { id: "Gagal mengirim pesan. Silakan coba lagi.", en: "Failed to send message. Please try again." },
  "contact.name.err": { id: "Nama wajib diisi", en: "Name is required" },
  "contact.company.err": { id: "Perusahaan wajib diisi", en: "Company is required" },
  "contact.email.err": { id: "Format email tidak valid", en: "Invalid email format" },
  "contact.msg.err": { id: "Pesan wajib diisi", en: "Message is required" },

  // Footer
  "footer.desc": {
    id: "Produsen dan penyedia kimia spesialitas terdepan untuk pengolahan air dan air limbah di Indonesia sejak 1998.",
    en: "Leading manufacturer and provider of specialty chemicals for water and wastewater treatment in Indonesia since 1998.",
  },
  "footer.nav": { id: "Navigasi", en: "Navigation" },
  "footer.about": { id: "Tentang Kami", en: "About Us" },
  "footer.products": { id: "Produk", en: "Products" },
  "footer.services": { id: "Layanan Teknis", en: "Technical Services" },
  "footer.contact": { id: "Kontak", en: "Contact" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("arrad-lang") as Lang) || "id";
    }
    return "id";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("arrad-lang", l);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
