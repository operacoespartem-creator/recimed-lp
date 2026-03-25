import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
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
  BrainCog,
  AudioLines,
  Apple,
  Accessibility,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WHATSAPP_URL = "https://wa.me/558130332200?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Recimed!";

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
      <WhatsAppIcon className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
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
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </a>

      {/* NAVBAR */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? "top-0 liquid-glass-white shadow-md" : "md:top-0 -top-full bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo-recimed.jpg" alt="Recimed - Soluções em Saúde" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#004d6b]">
            <a href="#servicos" className="hover:text-[#006994] transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-[#006994] transition-colors">Diferenciais</a>
            <a href="#equipe" className="hover:text-[#006994] transition-colors">Equipe</a>
            <a href="#planos" className="hover:text-[#006994] transition-colors">Planos</a>
            <a href="tel:8130332200" className="flex items-center gap-1.5 hover:text-[#006994] transition-colors">
              <Phone className="w-4 h-4" />
              (81) 3033-2200
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#006994] text-white px-5 py-2 rounded-full hover:bg-[#004d6b] transition-all duration-200 hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" />
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
              href="tel:8130332200"
              className="flex items-center justify-center gap-2 text-[#004d6b] font-medium py-2 border-b border-gray-100"
            >
              <Phone className="w-4 h-4" />
              (81) 3033-2200
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#006994] text-white text-center py-3 rounded-full font-semibold mt-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-16 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2 text-white/90 text-sm font-medium">
              <MapPin className="w-4 h-4 text-[#00d4b1]" />
              Recife-PE | Empresarial RioMar Trade Center
            </span>
            <a href="tel:8130332200" className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2 text-white/90 text-sm font-medium hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 text-[#00d4b1]" />
              (81) 3033-2200
            </a>
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

      {/* STATS BAR */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, value: "Desde 2004", label: "No mercado" },
              { icon: Users, value: "500.000+", label: "Consultas realizadas" },
              { icon: Building2, value: "Clínica e Domiciliar", label: "Modalidades" },
              { icon: Shield, value: "14+", label: "Planos aceitos" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2">
                  <item.icon className="w-6 h-6 text-[#006994]" />
                  <span className="text-lg sm:text-xl font-bold text-[#006994]">{item.value}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              <div className="glass-card rounded-3xl p-8 h-full border border-[#006994]/10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #006994, #0099cc)" }}>
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"><ChevronRight className="w-6 h-6 text-[#006994]" /> Atendimento na Clínica</h3>
                <ul className="space-y-3 flex-1">
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
              <div className="glass-card rounded-3xl p-8 h-full border border-[#00a896]/20 flex flex-col">
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00a896, #006994)" }}>
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"><ChevronRight className="w-6 h-6 text-[#00a896]" /> Atendimento Domiciliar</h3>
                <ul className="space-y-3 flex-1">
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
              { icon: BrainCog, name: "Psicologia", desc: "Com horário agendado", color: "#7c3aed" },
              { icon: AudioLines, name: "Fonoaudiologia", desc: "Com horário agendado", color: "#0891b2" },
              { icon: Apple, name: "Nutrição", desc: "Com horário agendado", color: "#16a34a" },
              { icon: Accessibility, name: "Terapia Ocupacional", desc: "Com horário agendado", color: "#ea580c" },
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
        <div className="max-w-5xl mx-auto text-center">
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

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
              {[
                "SulAmérica", "Luminar", "Cassi", "Amil", "Camed",
                "Stellantis", "Postal Saúde", "Bacen", "EXMED", "Saúde Caixa",
                "CompesaPrev", "AMEPE-CAMPE", "GEAP",
              ].map((plano, i) => (
                <div key={i} className="glass-card rounded-xl px-4 py-3 border border-[#006994]/10 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00a896] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{plano}</span>
                </div>
              ))}
              <div className="glass-card rounded-xl px-4 py-3 border border-[#006994]/10 flex items-center justify-center gap-2 bg-[#006994]/5">
                <span className="text-sm font-semibold text-[#006994]">e outros</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-6 border border-[#006994]/10 mb-10 max-w-2xl mx-auto">
              <p className="text-gray-600">
                Não encontrou o seu plano? <strong className="text-[#006994]">Entre em contato</strong> e verificamos a cobertura para o seu tratamento.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <WhatsAppButton size="large">
              Agende agora pelo WhatsApp
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* AVALIAÇÕES DO GOOGLE */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
        </div>

        {(() => {
          const reviews = [
            {
              name: "Angela Calumby",
              text: "Inicialmente quero registrar o acolhimento do Dr. Regis que me apresentou a Recimed há alguns anos com aquela simpatia e gentileza. Eu só tenho a agradecer por todos os serviços prestados com muita eficiência. Sou uma cliente não apenas satisfeita, mas, sim, ENCANTADA com essa Clínica!",
            },
            {
              name: "Isabelle Gonçalves",
              text: "Clínica Maravilhosa! Desde a Recepção até as médicas e fisioterapeutas, muito atenciosas, educadas, profissionais. Um local super acolhedor e que realmente ajuda o paciente naquilo que ele precisa. Super recomendo!",
            },
            {
              name: "Danielle Cristina",
              text: "Faço terapia nessa clínica e gosto muito daqui. O ambiente é acolhedor, tranquilo e muito bem organizado. As pessoas são excelentes, sempre atenciosas, respeitosas e profissionais. Me sinto confortável e bem cuidada. Recomendo com certeza!",
            },
            {
              name: "Elaine Barroca",
              text: "Quero agradecer ao ótimo atendimento que tenho aqui na Recimed. Desde a maravilhosa recepção dada por Patrícia, à fisioterapia que faço atualmente com Luciana e Alice que é MARAVILHOSA. Vocês são incríveis!",
            },
            {
              name: "Aline Camargo",
              text: "Fiz o tratamento da minha bebê e fiquei encantada. Todos os profissionais são dedicados e o local é excelente. As sessões são pontuais. Indico muito!",
            },
            {
              name: "Rodrigo Farias",
              text: "Ótima clínica com um atendimento perfeitamente esplêndido. O melhor que encontramos tudo em um só lugar. Me sinto em casa sempre que vou lá. Faço fisioterapia lá e não me arrependo.",
            },
            {
              name: "Ailin Coutinho",
              text: "Tô fazendo minha fisioterapia e está melhorando meu processo de recuperação rumo às 100% melhorada. As profissionais da fisioterapia Eduarda e Luciana são excelentes profissionais!",
            },
            {
              name: "Kamille Maciel",
              text: "Equipe maravilhosa e atendimento excelente! As meninas da recepção são um amor!",
            },
          ];
          const duplicated = [...reviews, ...reviews];
          return (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex gap-6 animate-scroll-reviews">
                {duplicated.map((review, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-2xl p-6 border border-[#006994]/8 flex flex-col flex-shrink-0 w-[340px]"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 italic flex-1">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#006994] to-[#00a896] flex items-center justify-center text-white font-semibold text-sm">
                        {review.name[0]}
                      </div>
                      <span className="font-semibold text-gray-700 text-sm">{review.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
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
              <div className="liquid-glass-strong rounded-3xl overflow-hidden text-white">
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00d4b1]/40 shadow-xl">
                    <img src="/regis-novaes.jpg" alt="Dr. Régis Novaes" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold">Régis Novaes</h3>
                    <p className="text-white/70 text-sm">Fisioterapeuta | Fundador & CEO da Recimed</p>
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

      {/* EQUIPE */}
      <section className="bg-white">
        <div className="pt-20 pb-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <span className="inline-block bg-[#e6f4fa] text-[#006994] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Nossa Equipe</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
                Uma equipe dedicada ao seu cuidado
              </h2>
            </AnimatedSection>
          </div>
        </div>
        <AnimatedSection delay={0.2}>
          <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src="/equipe-recimed.jpg"
              alt="Equipe Recimed"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </AnimatedSection>
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
              <div className="mb-4">
                <img src="/logo-recimed.jpg" alt="Recimed - Soluções em Saúde" className="h-14 w-auto rounded-lg" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Fisioterapia especializada com foco em resultado. Cuidando da sua saúde com excelência.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00d4b1]">Endereço</h4>
              <div className="flex items-start gap-2 text-white/70 text-sm mb-4">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00d4b1]" />
                <div>
                  <p>Av. República do Líbano, 251</p>
                  <p>Torre 2, Sala 803 — Pina, Recife-PE</p>
                  <p className="text-white/50 text-xs mt-1">Empresarial RioMar Trade Center</p>
                  <p className="text-white/50 text-xs">(ao lado do Shopping RioMar)</p>
                </div>
              </div>
              <a href="tel:8130332200" className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#00d4b1]" />
                (81) 3033-2200
              </a>
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
              <WhatsAppIcon className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
