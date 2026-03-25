import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  Star,
  CheckCircle2,
  Users,
  Award,
  Activity,
  Heart,
  Home,
  Building2,
  Shield,
  BookOpen,
  ExternalLink,
  Brain,
  Mic2,
  Salad,
  HandHeart,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Recimed!";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function WhatsAppButton({ children, className = "", size = "default" }: { children: React.ReactNode; className?: string; size?: "default" | "large" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-3 font-semibold rounded-full transition-all duration-300
        bg-[#25D366] hover:bg-[#1fb855] text-white whatsapp-pulse hover:scale-105 active:scale-95
        ${size === "large" ? "px-8 py-5 text-lg" : "px-6 py-4 text-base"}
        ${className}
      `}
    >
      <MessageCircle className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
      {children}
    </a>
  );
}

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Fixed WhatsApp Float Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse transition-transform hover:scale-110 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? "liquid-glass-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006994] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-[#006994]">Recimed</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#004d6b]">
            <a href="#servicos" className="hover:text-[#006994] transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-[#006994] transition-colors">Diferenciais</a>
            <a href="#equipe" className="hover:text-[#006994] transition-colors">Equipe</a>
            <a href="#planos" className="hover:text-[#006994] transition-colors">Planos</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006994] text-white px-5 py-2 rounded-full hover:bg-[#004d6b] transition-all duration-200 hover:scale-105"
            >
              Agendar
            </a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg text-[#006994]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden liquid-glass-white border-t border-[#006994]/10 px-4 py-4 flex flex-col gap-3">
            {["Serviços", "Diferenciais", "Equipe", "Planos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#004d6b] font-medium py-2 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006994] text-white text-center py-3 rounded-full font-semibold mt-2"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #004d6b 0%, #006994 40%, #0099cc 70%, #00a896 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #00a896, transparent)" }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #0099cc, transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ffffff, transparent)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2 mb-8 text-white/90 text-sm font-medium"
          >
            <Activity className="w-4 h-4 text-[#00a896]" />
            Atendemos em todo o Estado de Pernambuco
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Fisioterapia especializada{" "}
            <em className="not-italic" style={{ fontFamily: "'Source Serif 4', serif", fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
              na clínica ou no conforto
            </em>{" "}
            da sua casa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Tratamento personalizado com foco na sua recuperação completa e retorno às atividades com segurança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: Building2, text: "Atendimento na clínica e domiciliar" },
              { icon: Users, text: "Equipe multiprofissional" },
              { icon: Shield, text: "Aceitamos o seu plano de saúde" },
            ].map((item, i) => (
              <div key={i} className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-white/90 text-sm">
                <item.icon className="w-4 h-4 text-[#00d4b1]" />
                {item.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <WhatsAppButton size="large">
              Agende pelo WhatsApp
            </WhatsAppButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO — Dores section */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#006994" }}>
              Você se identifica com alguma dessas situações?
            </h2>
            <p className="text-gray-500 mb-12 text-lg">Podemos ajudar!</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { icon: Activity, text: "Dor na coluna ou nas articulações?" },
              { icon: Heart, text: "Dificuldade para andar ou se movimentar?" },
              { icon: CheckCircle2, text: "Em recuperação pós-operatória?" },
              { icon: Shield, text: "Dores que atrapalham sua rotina?" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4 text-left hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #006994, #00a896)" }}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <WhatsAppButton>
              Agende sua avaliação agora
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* FISIOTERAPIA — Clínica e Domiciliar */}
      <section id="servicos" className="py-20 px-4 sm:px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Fisioterapia</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Fisioterapia especializada com foco em resultado
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Não é sobre onde você faz seu tratamento — é sobre como você evolui.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clínica */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-3xl p-8 h-full border border-[#006994]/10">
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #006994, #0099cc)" }}>
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"><ChevronRight className="w-6 h-6 text-[#006994]" /> Atendimento na Clínica</h3>
                <ul className="space-y-3">
                  {[
                    "Estrutura completa",
                    "Equipe especializada",
                    "Equipamentos modernos",
                    "Ambiente preparado para evolução rápida",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#00a896] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-[#f0f8ff] text-sm text-[#006994] font-medium">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Segunda a sexta, das 8h às 20h
                </div>
              </div>
            </AnimatedSection>

            {/* Domiciliar */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-3xl p-8 h-full border border-[#00a896]/20">
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00a896, #006994)" }}>
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"><ChevronRight className="w-6 h-6 text-[#00a896]" /> Atendimento Domiciliar</h3>
                <ul className="space-y-3">
                  {[
                    "Conforto e segurança no seu lar",
                    "Ideal para pacientes com dificuldade de locomoção",
                    "Tratamento personalizado no seu ambiente",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#00a896] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-[#f0fdf9] text-sm text-[#00a896] font-medium">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Atendemos em todo o Estado de Pernambuco
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL CLÍNICO */}
      <section id="diferenciais" className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #004d6b 0%, #006994 60%, #00a896 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Diferencial Clínico</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Por que nossos pacientes evoluem mais rápido?
            </h2>
            <p className="text-white/70 text-lg italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Aqui, consulta tem um propósito.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, title: "Avaliação Detalhada", desc: "Diagnóstico preciso para um plano de tratamento personalizado e efetivo" },
              { icon: Activity, title: "Escala de Régis", desc: "Frequência definida com critério clínico — a exclusiva metodologia Régis Scale" },
              { icon: Users, title: "Plano Individualizado", desc: "Cada paciente recebe um protocolo único, adaptado à sua condição e objetivos" },
              { icon: Award, title: "Alta Supervisionada", desc: "Acompanhamento contínuo até a alta completa, sem abandono no meio do processo" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="liquid-glass-strong rounded-2xl p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <WhatsAppButton size="large">
              Quero evoluir mais rápido
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVIÇOS COMPLEMENTARES */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Cuidado Completo</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Cuidado completo com a sua saúde!
            </h2>
            <p className="text-gray-500 text-lg">
              Além da Fisioterapia, você conta com:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Brain, name: "Psicologia", desc: "Com horário agendado", color: "#7c3aed" },
              { icon: Mic2, name: "Fonoaudiologia", desc: "Com horário agendado", color: "#0891b2" },
              { icon: Salad, name: "Nutrição", desc: "Com horário agendado", color: "#16a34a" },
              { icon: HandHeart, name: "Terapia Ocupacional", desc: "Com horário agendado", color: "#ea580c" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#006994]/8">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${item.color}18` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="glass-card rounded-2xl p-6 text-center border border-[#006994]/10">
              <p className="text-gray-600 text-lg">
                <strong className="text-[#006994]">Integração entre especialidades</strong> para acelerar resultados e melhorar sua qualidade de vida.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PLANOS DE SAÚDE */}
      <section id="planos" className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #e8f5fd 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#006994] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full">Convênios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Aceitamos o seu plano de saúde
            </h2>
            <p className="text-gray-500 text-lg mb-10">Mais facilidade para iniciar o seu tratamento</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: CheckCircle2, title: "Sem custos para você", desc: "Utilize seu plano de saúde sem preocupações adicionais" },
              { icon: Shield, title: "Mais facilidade", desc: "Processo simples para iniciar seu tratamento com cobertura do plano" },
              { icon: Heart, title: "Continuidade no cuidado", desc: "Acompanhamento contínuo garantido pelo seu convênio" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 border border-[#006994]/10">
                  <item.icon className="w-10 h-10 text-[#006994] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <WhatsAppButton size="large">
              Agende agora pelo WhatsApp
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* AVALIAÇÕES DO GOOGLE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              O que os clientes falam sobre a Recimed
            </h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <p className="text-gray-500">Avaliações verificadas do Google</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria S.",
                text: "Tratamento incrível! A equipe é extremamente profissional e o resultado foi além das minhas expectativas. Recuperei minha qualidade de vida!",
                stars: 5,
              },
              {
                name: "João P.",
                text: "O atendimento domiciliar foi fundamental para minha recuperação pós-operatória. Muito cuidado e atenção em cada sessão.",
                stars: 5,
              },
              {
                name: "Ana C.",
                text: "Dr. Régis é um profissional excepcional. A metodologia deles é única e os resultados são visíveis desde as primeiras sessões.",
                stars: 5,
              },
            ].map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-6 border border-[#006994]/8">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#006994] to-[#00a896] flex items-center justify-center text-white font-semibold text-sm">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold text-gray-700 text-sm">{review.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSÁVEL TÉCNICO */}
      <section id="equipe" className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #004d6b 0%, #006994 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Responsável Técnico</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Régis Novaes
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="liquid-glass-strong rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30">
                    R
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Régis Novaes</h3>
                    <p className="text-white/70 text-sm">Fisioterapeuta • Fundador & CEO da Recimed</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Atuação internacional (Brasil e Estados Unidos)",
                    "Especialista em Fisioterapia Manual e Postural",
                    "Especialista em Fisioterapia Cárdio-Respiratória",
                    "No mercado desde 2004",
                    "Mais de 500.000 consultas realizadas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#00d4b1] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <div className="liquid-glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="w-6 h-6 text-[#00d4b1]" />
                    <h3 className="text-white font-semibold">Régis Scale</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    Criador da Régis Scale — metodologia exclusiva para definição da frequência ideal de tratamento, com reconhecimento internacional.
                  </p>
                  <a
                    href="https://www.regisscale.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00d4b1] text-sm font-medium hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    www.regisscale.com
                  </a>
                </div>

                <div className="liquid-glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-[#00d4b1]" />
                    <h3 className="text-white font-semibold">Livro: "Frequência Ideal"</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    Autor do livro "Frequência Ideal" — uma obra que revoluciona a abordagem da fisioterapia baseada em evidências.
                  </p>
                  <a
                    href="https://loja.uiclap.com/titulo/ua127392/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    Adquirir o livro
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Como Funciona</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Agendar a sua consulta é muito simples
            </h2>
            <p className="text-gray-500 text-lg mb-12">4 passos para iniciar sua recuperação</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", icon: MessageCircle, title: "Entre em contato", desc: "Fale conosco pelo WhatsApp de forma rápida e prática" },
              { step: "02", icon: CheckCircle2, title: "Agende sua avaliação", desc: "Escolha o melhor horário para você" },
              { step: "03", icon: Activity, title: "Receba seu plano", desc: "Plano de tratamento personalizado e individualizado" },
              { step: "04", icon: Heart, title: "Inicie sua recuperação", desc: "Comece sua jornada de recuperação com segurança" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center border border-[#006994]/8 relative">
                  <div className="text-4xl font-bold text-[#006994]/10 mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>{item.step}</div>
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #006994, #00a896)" }}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDE AGORA — Final CTA */}
      <section
        className="py-24 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #004d6b 0%, #006994 40%, #00a896 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, #ffffff, transparent)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, #00d4b1, transparent)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-white/70 text-lg mb-4 italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Quanto antes você começar, mais rápido você evolui
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              Agende Agora
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Nossa equipe está pronta para te ajudar a recuperar sua qualidade de vida
            </p>
            <WhatsAppButton size="large">
              Falar no WhatsApp agora
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#003a50] text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#006994] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">Recimed</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Fisioterapia especializada com foco em resultado. Cuidando da sua saúde com excelência.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00d4b1]">Endereço</h4>
              <div className="flex items-start gap-2 text-white/70 text-sm mb-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00d4b1]" />
                <div>
                  <p>Av. República do Líbano, 251</p>
                  <p>Torre 2, Sala 803 — Pina, Recife-PE</p>
                  <p className="text-white/50 text-xs mt-1">Empresarial RioMar Trade Center</p>
                  <p className="text-white/50 text-xs">(ao lado do Shopping RioMar)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00d4b1]">Horários</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00d4b1]" />
                  <div>
                    <p className="font-medium text-white">Fisioterapia</p>
                    <p>Segunda a sexta — 8h às 20h</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4b1]" />
                  <div>
                    <p className="font-medium text-white">Demais especialidades</p>
                    <p>Com horário agendado</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <MapPin className="w-4 h-4 text-[#00d4b1]" />
                  <p>Atendemos em todo o Estado de Pernambuco</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">© 2025 Recimed. Todos os direitos reservados.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
