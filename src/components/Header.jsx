import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { officeInfo, whatsappUrl } from '@/data/siteContent.js';

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'areas', label: 'Áreas de Atuação', href: '#areas' },
    { id: 'contato', label: 'Contato', href: '#contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 88;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#120D0B]/92 backdrop-blur-md shadow-refined-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-white"
            >
              <div className="font-semibold text-base sm:text-lg tracking-wide">
                {officeInfo.lawyerName}
              </div>
              <div className="text-[11px] sm:text-xs text-white/70 tracking-[0.18em] uppercase mt-1">
                {officeInfo.oab}
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D0A06B]" />
                )}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-[#7A4E3A] hover:bg-[#6C4432] text-white transition-all duration-200 active:scale-95"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Entre em contato
              </a>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#16100D] text-white border-l border-white/10">
                <div className="mt-6 mb-8">
                  <p className="font-semibold text-lg">{officeInfo.lawyerName}</p>
                  <p className="text-xs text-white/70 tracking-[0.18em] uppercase mt-1">{officeInfo.oab}</p>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`text-lg font-medium transition-colors ${
                          activeSection === item.id
                            ? 'text-[#D0A06B]'
                            : 'text-white/90 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="bg-[#7A4E3A] hover:bg-[#6C4432] text-white w-full"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Entre em contato
                      </a>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
