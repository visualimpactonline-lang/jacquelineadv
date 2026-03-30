import React from 'react';
import { officeInfo } from '@/data/siteContent.js';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#120D0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xl font-semibold mb-2">{officeInfo.lawyerName}</p>
            <p className="text-white/80 text-sm">Advogado · {officeInfo.oab}</p>
            <p className="text-white/60 text-sm mt-3 max-w-md">
              Site institucional com apresentação profissional, linguagem sóbria e foco em contato direto e objetivo.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4">Navegação</p>
            <nav className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            © {currentYear} {officeInfo.lawyerName}. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/50">
            Identificação profissional: {officeInfo.oab}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
