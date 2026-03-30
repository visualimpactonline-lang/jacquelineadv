import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Scale,
  Briefcase,
  Users,
  Building2,
  Shield,
  FileText,
  Landmark,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PracticeAreaCard from '@/components/PracticeAreaCard.jsx';
import DifferentialCard from '@/components/DifferentialCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';
import { officeInfo, whatsappUrl } from '@/data/siteContent.js';

function HomePage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: 'Direito Civil',
      description: 'Atuação em questões contratuais, responsabilidade civil, família, sucessões e demais demandas cíveis, com análise individualizada de cada situação.'
    },
    {
      icon: Briefcase,
      title: 'Direito Trabalhista',
      description: 'Orientação e acompanhamento de demandas relacionadas às relações de trabalho, com avaliação técnica dos direitos e deveres envolvidos em cada caso.'
    },
    {
      icon: Users,
      title: 'Direito Previdenciário',
      description: 'Assessoria em aposentadorias, pensões, benefícios por incapacidade e revisões, sempre com estudo criterioso da documentação e da legislação aplicável.'
    },
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Suporte jurídico para empresas, análise e elaboração de contratos e orientação em questões societárias e negociais com enfoque preventivo e estratégico.'
    }
  ];

  const differentials = [
    {
      icon: Landmark,
      title: 'Atendimento jurídico individualizado',
      description: 'Cada demanda recebe atenção própria, com escuta cuidadosa e orientação compatível com as particularidades do caso concreto.'
    },
    {
      icon: Shield,
      title: 'Ética, discrição e transparência',
      description: 'A atuação profissional é pautada pelos princípios da advocacia, com comunicação clara sobre procedimentos, possibilidades e limites jurídicos.'
    },
    {
      icon: FileText,
      title: 'Análise técnica e fundamentada',
      description: 'O trabalho é desenvolvido com seriedade, estudo do caso e fundamentação adequada, buscando segurança e responsabilidade na condução jurídica.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${officeInfo.lawyerName} | Advogado em ${officeInfo.city}`}</title>
        <meta
          name="description"
          content={`${officeInfo.lawyerName}, ${officeInfo.oab}. Atendimento jurídico em ${officeInfo.city} nas áreas cível, trabalhista, previdenciária e empresarial.`}
        />
      </Helmet>

      <Header />

      <main>
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A120D]/90 via-[#2B1D17]/80 to-[#5A3A2E]/65" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
                  {officeInfo.lawyerName} · {officeInfo.oab}
                </span>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Atuação jurídica com seriedade, discrição e compromisso.
                </h1>
                <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Atendimento jurídico em {officeInfo.city}, com orientação técnica e responsável nas áreas cível, trabalhista, previdenciária e empresarial.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#7A4E3A] hover:bg-[#6C4432] text-white text-lg px-8 py-6 h-auto transition-all duration-200 active:scale-95"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Entre em contato
                    </a>
                  </Button>
                  <a
                    href="#areas"
                    className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-4 text-white/90 hover:bg-white/10 transition-colors"
                  >
                    Conheça as áreas de atuação
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {[
                  'Atendimento com postura técnica e personalizada',
                  'Comunicação clara e profissional durante o acompanhamento',
                  'Presença digital institucional em conformidade com a OAB'
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#D0A06B] mb-3" />
                    <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7A4E3A] mb-4">
                  Sobre o escritório
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Presença institucional, linguagem sóbria e atendimento responsável.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-[1.02rem]">
                  <p>
                    O escritório atua com foco em orientação jurídica séria, transparente e fundamentada, sempre observando os princípios éticos que norteiam a advocacia.
                  </p>
                  <p>
                    Cada demanda é avaliada de forma individualizada, com atenção ao contexto apresentado e aos caminhos juridicamente adequados para cada situação.
                  </p>
                  <p>
                    A proposta deste site é oferecer uma presença digital profissional, clara e confiável, facilitando o contato inicial e apresentando de forma objetiva as áreas de atuação.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-[#E9DED6] bg-[#FCF8F5] p-6">
                  <p className="text-sm text-[#6B4A3A] font-medium mb-2">Identificação profissional</p>
                  <p className="text-foreground font-semibold">{officeInfo.lawyerName}</p>
                  <p className="text-muted-foreground">{officeInfo.oab}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-first md:order-last"
              >
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80"
                  alt="Ambiente jurídico profissional"
                  className="w-full h-[520px] object-cover rounded-[28px] shadow-refined-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="areas" className="py-24 bg-[#F7F3F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7A4E3A] mb-4">
                Áreas de atuação
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Atendimento jurídico em diferentes frentes do direito
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                As áreas abaixo podem ser mantidas, reduzidas ou ajustadas conforme a atuação real do advogado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <PracticeAreaCard
                  key={area.title}
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7A4E3A] mb-4">
                Princípios de atuação
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Uma apresentação mais sóbria e alinhada ao perfil da advocacia
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O site foi ajustado para transmitir confiança, clareza e profissionalismo, sem linguagem promocional exagerada.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentials.map((differential, index) => (
                <DifferentialCard
                  key={differential.title}
                  icon={differential.icon}
                  title={differential.title}
                  description={differential.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-24 bg-[#181311] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D0A06B] mb-4">
                Contato
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Canal de contato direto e objetivo
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                O formulário foi substituído por um contato mais simples e institucional, priorizando clareza e praticidade no primeiro atendimento.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm"
              >
                <p className="text-[#D0A06B] font-medium mb-4">Entre em contato</p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Atendimento inicial com comunicação clara e profissional.
                </h3>
                <p className="text-white/75 leading-relaxed mb-8 max-w-2xl">
                  Este espaço foi pensado para facilitar o contato institucional do escritório. Caso queira publicar endereço completo, telefone principal e e-mail definitivo, basta substituir os dados provisórios abaixo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#7A4E3A] hover:bg-[#6C4432] text-white text-lg px-8 py-6 h-auto transition-all duration-200 active:scale-95"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                  <a
                    href={`mailto:${officeInfo.email}`}
                    className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-4 text-white/85 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar e-mail
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] border border-white/10 bg-[#231B18] p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#D0A06B]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Local de atendimento</p>
                      <a
                        href={officeInfo.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {officeInfo.addressLabel}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#D0A06B]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefone / WhatsApp</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {officeInfo.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#D0A06B]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">E-mail</p>
                      <a
                        href={`mailto:${officeInfo.email}`}
                        className="text-white/70 hover:text-white transition-colors break-all"
                      >
                        {officeInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/60 leading-relaxed">
                    Para publicação final, substitua apenas os dados de contato provisórios caso receba o telefone, e-mail e endereço completos do advogado.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={officeInfo.whatsappNumber} />
    </>
  );
}

export default HomePage;
