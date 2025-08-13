'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'DigitalFusion | Moderní webová řešení';

    const faviconSvg = `
      <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="15" fill="#111827"></rect>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="50" font-weight="bold" fill="#3b82f6">DF</text>
      </svg>
    `;

    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navLinks = [
    { name: 'Domů', href: '#home' },
    { name: 'O nás', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-900">Digital<span className="text-blue-600">Fusion</span></a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
              <img src={isMenuOpen ? `https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg` : `https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg`} alt="Menu Icon" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-68px)] flex items-center bg-white">
          <div className="container mx-auto px-6 text-center">
             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Tvoříme digitální zážitky,
              <br className="hidden md:block" />
              <span className="text-blue-600">které fungují.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specializujeme se na moderní, rychlé a responzivní weby, které posunou vaše podnikání vpřed.
            </p>
            <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 inline-block">
              Nezávazná poptávka
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kdo jsme a co děláme</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Jsme partnerem pro vaši digitální transformaci.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                   <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/code.svg" alt="Code Icon" className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Moderní technologie</h3>
                <p className="text-gray-600">Využíváme nejnovější frameworky jako Next.js a osvědčené postupy pro maximální výkon a bezpečnost.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                   <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/device-mobile.svg" alt="Mobile Icon" className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Responzivní design</h3>
                <p className="text-gray-600">Zajišťujeme perfektní zobrazení na všech zařízeních – od mobilních telefonů po velké monitory.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                   <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/rocket.svg" alt="Rocket Icon" className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Důraz na rychlost</h3>
                <p className="text-gray-600">Optimalizujeme každý projekt pro bleskové načítání, což zlepšuje uživatelský prožitek i pozice ve vyhledávačích.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Máte projekt?</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto mb-8">
              Pojďme se nezávazně pobavit o vašich nápadech a cílech. Rádi vám poradíme a navrhneme efektivní řešení.
            </p>
            <div className="inline-block bg-gray-100 p-8 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Spojte se s námi</h3>
               <div className="flex items-center space-x-3 mb-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email Icon" className="w-6 h-6 text-blue-600" />
                    <a href="mailto:info@digitalfusion.cz" className="text-gray-700 hover:text-blue-600 text-lg">info@digitalfusion.cz</a>
                </div>
                <div className="flex items-center space-x-3">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Phone Icon" className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 text-lg">+420 123 456 789</span>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-400">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">DigitalFusion</a></p>
          <p className="text-gray-500 text-sm mt-2">&copy; {new Date().getFullYear()} Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
