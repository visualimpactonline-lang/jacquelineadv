import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function FloatingWhatsApp({ phoneNumber = '5511999999999' }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-[#7A4E3A] hover:bg-[#6C4432] shadow-refined-xl transition-all duration-200 active:scale-95"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar em contato pelo WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </Button>
    </motion.div>
  );
}

export default FloatingWhatsApp;
