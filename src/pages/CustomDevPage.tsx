import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Code,
  Layout,
  Smartphone,
  ShieldCheck,
  Users,
  Settings,
  Target,
  ArrowRight,
  Zap,
  Globe,
  Layers,
  Search,
  Monitor,
  Cpu,
  Database,
  Terminal,
  Server,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

const CapabilityCard = ({ title, description, image, delay = 0 }: { title: string; description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full overflow-hidden"
  >
    <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-950/20 to-transparent opacity-40" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
      {description}
    </p>
  </motion.div>
);

const DifferentiatorCard = ({ title, description, idx }: { title: string; description: string; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
      <CheckCircle2 className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const CustomDevPage = () => {
    const caps = [
    {
      title: "Custom BI Portals",
      description: "White-labelled analytics portals embedded in your enterprise applications using React, Angular, Power BI Embedded, or Qlik Mashups.",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&w=800"
    },
    {
      title: "AI-Powered Tools",
      description: "Custom LLM applications, chatbots, document processors, and decision assistants tailored to your high-value workflows.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800"
    },
    {
      title: "Data Integration Apps",
      description: "Custom ETL tools, data sync utilities, and connector APIs between niche or legacy systems ensuring data continuity.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&w=800"
    },
    {
      title: "Mobile Analytics Apps",
      description: "Offline-capable field tools for sales reps, inspectors, and plant operators needing real-time spatial insights.",
      image: "https://images.unsplash.com/photo-1512428559087-56096ce17540?auto=format&fit=crop&w=800"
    },
    {
      title: "Workflow Automation",
      description: "Custom dashboards with writeback capability, multi-level approval flows, and intelligent alerting logic.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    },
    {
      title: "Geo-Intelligence Apps",
      description: "Map-based spatial tools with custom layers, filters, and field inputs for field force execution.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800"
    },
  ];

  const howWeWork = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Define the problem, user personas, and data landscape. We listen before we build.",
    },
    {
      step: "2",
      title: "Prototype",
      description:
        "Wireframes (Figma) and clickable mockups for validation. You see what you're getting before we build it.",
    },
    {
      step: "3",
      title: "Build",
      description:
        "Agile sprints with weekly demos and stakeholder check-ins. No surprises at the end.",
    },
    {
      step: "4",
      title: "Test & Harden",
      description:
        "Performance, security, and user acceptance testing. We ship when it's ready.",
    },
    {
      step: "5",
      title: "Deploy & Support",
      description:
        "Go-live support, documentation, and ongoing enhancements. We're here after go-live.",
    },
  ];

  const whyTechknomaticCustom = [
    {
      title: "Analytics-First Thinking",
      description:
        "Every custom tool is built around your data, not just the UI.",
    },
    {
      title: "Full Stack in One Team",
      description: "UI, API, data pipeline, and AI, no handoffs, no gaps.",
    },
    {
      title: "Agile with Business Involvement",
      description: "Weekly demos mean you're never surprised at delivery.",
    },
    {
      title: "Regulated Industry Experience",
      description: "Insurance, pharma, energy, we understand compliance.",
    },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Custom Software
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              We don't just write code; we build products engineered for scale.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              Our custom software solutions are engineered for performance, security, and world-class user experience, turning metrics into usable tools.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Generic software often fails to solve specific business friction. Techknomatic provides the bridge between your unique organizational needs and technical reality. We specialize in building data-centric applications that empower users, streamline complex operations, and provide a competitive edge through tailored technical architecture.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Whether it's an embedded analytics portal for your customers, an AI-powered document processor for your legal team, or a real-time mobile tool for your field engineers, we follow a product-first methodology. We ensure every line of code serves a business purpose, adhering to the highest standards of security and maintainability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              WHAT WE DELIVER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Custom Solutions
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              How We Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A product-centric development methodology focused on rapid iteration and business alignment.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {howWeWork.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  {step.step.padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed px-2 border-l-2 border-accent/20">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[60px] px-6 bg-slate-100 dark:bg-brand-900/50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Techknomatic for Custom Development
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              We blend engineering excellence with deep business domain understanding.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyTechknomaticCustom.map((it, i) => (
              <DifferentiatorCard key={i} title={it.title} description={it.description} idx={i} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
