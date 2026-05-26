import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
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
        loading="lazy"
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

  return (
    <PageShell bare>
            <PageHero
        title="Custom Software"
        tagline="We don't just write code; we build products engineered for scale."
        description="Our custom software solutions are engineered for performance, security, and world-class user experience, turning metrics into usable tools."
      />

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
              className="section-heading"
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
              className="section-heading-on-dark mb-6"
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

      <PreFooterCTA />
    </PageShell>
  );
};
