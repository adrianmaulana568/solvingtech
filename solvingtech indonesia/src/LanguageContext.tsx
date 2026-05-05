import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Nav
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portofolio',
    'nav.blog': 'Blog',
    'nav.careers': 'Karir',
    'nav.contact': 'Hubungi Kami',
    'nav.contact_btn': 'Kontak',
    
    // Home Redesign
    'home.hero.title': 'Kickstart your Ideas Through Digital Product Development',
    'home.hero.desc': 'Tim pengembangan perangkat lunak kami siap membangun ide Anda dalam hitungan minggu.',
    'home.hero.cta': 'Beri tahu kami kebutuhan Anda',
    'home.stats.title': 'Kami adalah agensi perangkat lunak layanan lengkap yang berbasis di Karawang.',
    'home.stats.desc': 'Dengan pengetahuan & pengalaman luas kami di berbagai industri, kami dapat membantu mencapai tujuan Anda dengan cepat & efisien.',
    'home.stats.members': 'Anggota Tim',
    'home.stats.clients': 'Brand & Klien',
    'home.stats.projects': 'Proyek Berdampak',
    'home.services.title': 'Layanan Kami',
    'home.services.desc': 'Kami menyediakan paket lengkap, mulai dari desain produk hingga pengembangan perangkat lunak & deployment aplikasi.',
    'home.services.view_details': 'Lihat Detail',
    'home.testimonial.quote': 'SolvingTech adalah rumah bagi orang-orang pemberani dan berorientasi tim yang menawarkan lebih dari sekadar keterampilan teknis',
    'home.testimonial.name': 'Adrian Maulana Rahman',
    'home.testimonial.role': 'Co-Founder & CEO',
    'home.cta.title': 'Mari diskusikan proyek & bisnis Anda bersama kami!',
    'home.cta.desc': 'Estimasi gratis dalam 24 jam',
    'home.cta.button': 'HUBUNGI KAMI SEKARANG',

    // About Redesign
    'about.company.title': 'Mendorong Inovasi Melalui Teknologi',
    'about.company.desc': 'Kami membangun solusi digital yang membantu bisnis Anda tumbuh lebih cepat dan lebih efisien.',
    'about.intro.title': 'SolvingTech adalah perusahaan desain dan pengembangan produk digital',
    'about.intro.desc': 'Kami didorong oleh misi untuk membantu bisnis berkembang di era digital melalui solusi teknologi yang inovatif dan terukur.',
    'about.mission.title': 'Misi Kami',
    'about.mission.1': 'Teknologi Terfokus',
    'about.mission.2': 'Menyelesaikan Bisnis Nyata',
    'about.mission.3': 'Produk Digital Terarah',
    'about.mission.4': 'Memberikan ROI Kelas Dunia',
    'about.mission.5': 'Menghadapi Tantangan melalui Data',
    'about.culture.title': 'SolvingTech adalah rumah bagi orang-orang pemberani dan berorientasi tim',
    'about.culture.desc': 'Kami percaya bahwa kolaborasi adalah kunci keberhasilan. Di SolvingTech, kami membangun lingkungan di mana setiap individu didorong untuk bereksperimen, belajar, dan tumbuh bersama.',
    'about.cta.title': 'Siap mentransformasi bisnis Anda?',
    'about.cta.button': 'Hubungi Kami Sekarang',

    'career.badge': 'Karir di SolvingTech',
    'career.title': 'Bangun Masa Depan Teknologi Bersama Kami',
    'career.desc': 'Kami mencari individu berbakat yang ingin membuat dampak nyata melalui teknologi.',
    'career.no_vacancies': 'Mohon maaf, saat ini sedang belum ada lowongan tersedia.',
    'career.cta.notified': 'Dapatkan notifikasi saat ada posisi baru',
    'career.culture.title': 'Budaya di SolvingTech',
    'career.culture.desc': 'Kami mengutamakan kolaborasi, inovasi, dan keseimbangan hidup. Di sini, ide-ide Anda didengar dan dihargai.',
    'career.stat.sat': 'Kepuasan Anggota Tim',
    'career.stat.train': 'Sesi Pelatihan per Tahun',
    'career.remote.title': 'Kerja Fleksibel',
    'career.remote.desc': 'Kami mendukung sistem kerja remote dan fleksibel untuk hasil maksimal.',
    
    // Services
    'services.web': 'Web Development',
    'services.mobile': 'Mobile Development',
    'services.product': 'Product Design',
    'services.graphic': 'Branding Design',
    'services.web.desc': 'Membangun aplikasi web yang cepat dan skalabel menggunakan React & NodeJS. Siap untuk Microservices & DevOps.',
    'services.mobile.desc': 'Deploy aplikasi Android & iOS Anda, kami menciptakan aplikasi yang memukau & dioptimalkan melalui Native & React Native.',
    'services.product.desc': 'Visualisasikan ide Anda dengan membuat prototipe Minimum Viable Product dan validasi pasar Anda dengan cepat.',
    'services.graphic.desc': 'Ciptakan identitas visual yang kuat untuk brand Anda dengan desain grafis yang profesional.',
    'services.quote': '"Misi kami adalah memberdayakan bisnis Anda dengan teknologi mutakhir."',

    'blog.title': 'Blog & Wawasan',
    'blog.desc': 'Berbagi pengetahuan, tren terbaru, dan tips seputar dunia teknologi dan desain.',
    'blog.cats.all': 'Semua',
    'blog.cats.tech': 'Teknologi',
    'blog.cats.design': 'Desain',
    'blog.cats.business': 'Bisnis',
    'blog.badge': 'Wawasan Terbaru',
    'blog.cta': 'Berlangganan',
    'blog.readTime': 'Membaca 5 Menit',
    'blog.newsletter.title': 'Dapatkan Wawasan Langsung di Inbox Anda',
    'blog.newsletter.desc': 'Daftar ke newsletter kami untuk mendapatkan tips terbaru tentang teknologi dan pengembangan produk.',
    'blog.newsletter.placeholder': 'Alamat Email Anda',
    'blog.newsletter.cta': 'Daftar Sekarang',
    'blog.cats.insights': 'Wawasan',
    'blog.cats.agile': 'Agile',

    'port.badge': 'Eksplorasi Proyek',
    'port.title': 'Portofolio Kami',
    'port.desc': 'Lihat bagaimana kami membantu klien mencapai tujuan digital mereka.',
    'port.cats.all': 'Semua',
    'port.cats.web': 'Web',
    'port.cats.mobile': 'Mobile',
    'port.cats.design': 'Desain',
    'port.cats.ai': 'AI / ML',
    'port.item.cta': 'Lihat Detail Proyek',
    'port.footer.title': 'Siap untuk Membuat Proyek Besar?',
    'port.footer.desc': 'Kami siap membantu mewujudkan ide-ide cemerlang Anda menjadi kenyataan digital.',
    'port.footer.cta': 'Mulailah Sekarang',

    'career.process.title': 'Proses Perekrutan Kami',
    'career.process.desc': 'Tahapan transparan untuk menemukan talenta terbaik.',
    'career.process.1': 'Aplikasi Online',
    'career.process.1.desc': 'Kirimkan CV dan portofolio terbaik Anda melalui portal kami.',
    'career.process.2': 'Wawancara HR',
    'career.process.2.desc': 'Berdiskusi tentang pengalaman dan kesesuaian budaya kerja.',
    'career.process.3': 'Tes Teknis',
    'career.process.3.desc': 'Tunjukkan kemampuan teknis Anda melalui tantangan nyata.',
    'career.process.4': 'Wawancara Final',
    'career.process.4.desc': 'Pertemuan akhir dengan tim kepemimpinan kami.',
    'career.cta.title': 'Bekerja di Barisan Terdepan Inovasi',
    'career.cta.desc': 'Jadilah yang pertama tahu saat ada peluang baru yang sesuai dengan keahlian Anda.',
    'career.cta.placeholder': 'Masukkan alamat email Anda',

    'services.web.features': 'React, NodeJS, PostgreSQL',
    'services.mobile.features': 'React Native, Flutter, Swift',
    'services.product.features': 'Figma, Prototyping, Research',
    'services.graphic.features': 'Branding, UI Kits, Motion',

    // Footer & Generic
    'footer.about': 'Membawa presisi rekayasa ke dunia kreatif. Mitra digital terpercaya untuk masa depan bisnis Anda.',
    'footer.office.hq': 'SolvingTech Indonesia HQ',
    'footer.links.home': 'Beranda',
    'footer.links.portfolio': 'Portofolio',
    'footer.links.about': 'Tentang Kami',
    'footer.links.blog': 'Blog',
    'footer.links.career': 'Karir',
    'footer.services.web': 'Pengembangan Web',
    'footer.services.mobile': 'Pengembangan Mobile',
    'footer.services.design': 'Desain Produk Digital',
    'footer.services.cloud': 'Cloud & DevOps',
    
    // Contact
    'contact.title': 'Mari Mulai Sesuatu yang Hebat',
    'contact.desc': 'Punya ide atau proyek? Kami di sini untuk membantu mewujudkannya.',
    'contact.info.title': 'Informasi Kontak',
    'contact.address': 'Karawang, Jawa Barat, Indonesia',
    'contact.email': 'hi@solvingtech.id',
    'contact.phone': '(+62) 811-1234-5678',
    'contact.socials': 'Media Sosial',
    'contact.form.title': 'Kirim Pesan',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Alamat Email',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan Anda',
    'contact.form.send': 'Kirim Pesan',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'nav.contact_btn': 'Contact',

    // Home Redesign
    'home.hero.title': 'Kickstart your Ideas Through Digital Product Development',
    'home.hero.desc': 'Our software development team is ready to build your ideas within weeks.',
    'home.hero.cta': 'Tell us about your needs',
    'home.stats.title': 'We are full-service software agency based in Karawang.',
    'home.stats.desc': 'With our broad knowledge & experience in various industry, we can help to achieve your goals in fast & efficient manner.',
    'home.stats.members': 'Team Members',
    'home.stats.clients': 'Brands & Clients',
    'home.stats.projects': 'Impacted Projects',
    'home.services.title': 'Our Services',
    'home.services.desc': 'We provide complete package, from product design to software & apps deployment.',
    'home.services.view_details': 'View Details',
    'home.testimonial.quote': 'SolvingTech is home to brave and team-oriented people who offer much more than just technical skills',
    'home.testimonial.name': 'Adrian Maulana Rahman',
    'home.testimonial.role': 'Co-Founder & CEO',
    'home.cta.title': 'Lets discuss your project & business with us!',
    'home.cta.desc': 'Free estimation in 24 hours',
    'home.cta.button': 'CONTACT US NOW',

    // About Redesign
    'about.company.title': 'Driving Innovation Through Technology',
    'about.company.desc': 'We build digital solutions that help your business grow faster and more efficiently.',
    'about.intro.title': 'SolvingTech is a design and digital product development company',
    'about.intro.desc': 'We are driven by a mission to help businesses thrive in the digital age through innovative and scalable technology solutions.',
    'about.mission.title': 'Our Mission',
    'about.mission.1': 'Driven Technology',
    'about.mission.2': 'Solving Real Business',
    'about.mission.3': 'Driven Digital Products',
    'about.mission.4': 'Delivering World-Class ROI',
    'about.mission.5': 'Faces the Challenges through Data',
    'about.culture.title': 'SolvingTech is home to brave and team-oriented people',
    'about.culture.desc': 'We believe that collaboration is the key to success. At SolvingTech, we build an environment where every individual is encouraged to experiment, learn, and grow together.',
    'about.cta.title': 'Ready to transform your business?',
    'about.cta.button': 'Contact Us Now',

    'career.badge': 'Careers at SolvingTech',
    'career.title': 'Build the Future of Technology with Us',
    'career.desc': 'We are looking for talented individuals who want to make a real impact through technology.',
    'career.no_vacancies': 'Sorry, there are currently no vacancies available.',
    'career.cta.notified': 'Get notified when new positions open',
    'career.culture.title': 'Culture at SolvingTech',
    'career.culture.desc': 'We prioritize collaboration, innovation, and work-life balance. Here, your ideas are heard and valued.',
    'career.stat.sat': 'Team Member Satisfaction',
    'career.stat.train': 'Training Sessions per Year',
    'career.remote.title': 'Flexible Work',
    'career.remote.desc': 'We support remote and flexible work systems for maximum results.',

    // Services
    'services.web': 'Web Development',
    'services.mobile': 'Mobile Development',
    'services.product': 'Product Design',
    'services.graphic': 'Branding Design',
    'services.web.desc': 'Build fast and scalable web applications using React & NodeJS. Microservices & DevOps ready.',
    'services.mobile.desc': 'Deploy your Android & iOS app, we create stunning & optimized apps through both Native & React Native.',
    'services.product.desc': 'Visualize your ideas by prototyping its Minimum Viable Product and validate your market quickly.',
    'services.graphic.desc': 'Create a strong visual identity for your brand with professional graphic design.',
    'services.quote': '"Our mission is to empower your business with cutting-edge technology."',

    'blog.title': 'Blog & Insights',
    'blog.desc': 'Sharing knowledge, latest trends, and tips around the world of technology and design.',
    'blog.cats.all': 'All',
    'blog.cats.tech': 'Tech',
    'blog.cats.design': 'Design',
    'blog.cats.business': 'Business',
    'blog.badge': 'Latest Insights',
    'blog.cta': 'Subscribe',
    'blog.readTime': '5 Min Read',
    'blog.newsletter.title': 'Get Insights Directly in Your Inbox',
    'blog.newsletter.desc': 'Sign up for our newsletter to get latest tips on technology and product development.',
    'blog.newsletter.placeholder': 'Your Email Address',
    'blog.newsletter.cta': 'Sign Up Now',
    'blog.cats.insights': 'Insights',
    'blog.cats.agile': 'Agile',

    'port.badge': 'Project Exploration',
    'port.title': 'Our Portfolio',
    'port.desc': 'See how we help clients achieve their digital goals.',
    'port.cats.all': 'All',
    'port.cats.web': 'Web',
    'port.cats.mobile': 'Mobile',
    'port.cats.design': 'Design',
    'port.cats.ai': 'AI / ML',
    'port.item.cta': 'View Project Detail',
    'port.footer.title': 'Ready to Start a Great Project?',
    'port.footer.desc': 'We are ready to help bring your brilliant ideas into digital reality.',
    'port.footer.cta': 'Start Now',

    'services.web.features': 'React, NodeJS, PostgreSQL',
    'services.mobile.features': 'React Native, Flutter, Swift',
    'services.product.features': 'Figma, Prototyping, Research',
    'services.graphic.features': 'Branding, UI Kits, Motion',

    'career.process.title': 'Our Hiring Process',
    'career.process.desc': 'Transparent stages to find the best talent.',
    'career.process.1': 'Online Application',
    'career.process.1.desc': 'Submit your best CV and portfolio through our portal.',
    'career.process.2': 'HR Interview',
    'career.process.2.desc': 'Discussing experiences and cultural fit.',
    'career.process.3': 'Technical Test',
    'career.process.3.desc': 'Demonstrate your technical skills through real challenges.',
    'career.process.4': 'Final Interview',
    'career.process.4.desc': 'Final meeting with our leadership team.',
    'career.cta.title': 'Work at the Forefront of Innovation',
    'career.cta.desc': 'Be the first to know when new opportunities match your skills.',
    'career.cta.placeholder': 'Enter your email address',

    // Footer & Generic
    'footer.about': 'Bringing engineering precision to the creative world. Your trusted digital partner for your business future.',
    'footer.office.hq': 'SolvingTech Indonesia HQ',
    'footer.links.home': 'Home',
    'footer.links.portfolio': 'Portfolio',
    'footer.links.about': 'About Us',
    'footer.links.blog': 'Blog',
    'footer.links.career': 'Career',
    'footer.services.web': 'Web Development',
    'footer.services.mobile': 'Mobile Development',
    'footer.services.design': 'Digital Product Design',
    'footer.services.cloud': 'Cloud & DevOps',
    
    // Contact
    'contact.title': "Let's Start Something Great",
    'contact.desc': 'Have an idea or a project in mind? We are here to help you build it.',
    'contact.info.title': 'Contact Info',
    'contact.address': 'Karawang, West Java, Indonesia',
    'contact.email': 'hi@solvingtech.id',
    'contact.phone': '(+62) 811-1234-5678',
    'contact.socials': 'Social Media',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
