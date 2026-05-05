import { motion } from 'motion/react';
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
  CheckCircle2
} from 'lucide-react';

const Card = ({ title, description, icon: Icon, delay = 0, variant = "default" }: { title: string, description: string | string[], icon: any, delay?: number, variant?: "default" | "minimal" | "list" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`p-8 rounded-[2.5rem] border transition-all duration-500 group h-full flex flex-col ${
        variant === "minimal" 
          ? 'bg-slate-50/50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-accent/10' 
          : 'bg-white dark:bg-white/5 border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
        variant === "minimal" 
          ? 'bg-white dark:bg-white/10 text-slate-400 group-hover:text-accent group-hover:bg-accent/10' 
          : 'bg-accent/10 text-accent group-hover:scale-110'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="space-y-2 flex-1">
          {description.map((item, idx) => (
            <li key={idx} className="text-[13px] font-medium text-slate-500 dark:text-slate-400 flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const CustomDevPage = () => {
  const customSolutions = [
    {
      title: "Custom BI Portals",
      description: "White-labelled analytics portals embedded in your enterprise applications using React, Angular, Power BI Embedded, Qlik Mashups.",
      icon: Monitor
    },
    {
      title: "AI-Powered Tools",
      description: "Custom LLM applications, chatbots, document processors, and decision assistants tailored to your workflows.",
      icon: Code
    },
    {
      title: "Data Integration Apps",
      description: "Custom ETL tools, data sync utilities, and connector APIs between niche or legacy systems.",
      icon: Layers
    },
    {
      title: "Mobile Analytics Apps",
      description: "Offline-capable field tools for sales reps, inspectors, and plant operators.",
      icon: Smartphone
    },
    {
      title: "Workflow Automation",
      description: "Custom dashboards with writeback, approval flows, and alerting logic built in.",
      icon: ShieldCheck
    },
    {
      title: "Geo-Intelligence Apps",
      description: "Map-based spatial tools with custom layers, filters, and field inputs.",
      icon: Globe
    }
  ];

  const howWeWork = [
    {
      step: "1",
      title: "Discovery",
      description: "Define the problem, user personas, and data landscape. We listen before we build."
    },
    {
      step: "2",
      title: "Prototype",
      description: "Wireframes (Figma) and clickable mockups for validation. You see what you're getting before we build it."
    },
    {
      step: "3",
      title: "Build",
      description: "Agile sprints with weekly demos and stakeholder check-ins. No surprises at the end."
    },
    {
      step: "4",
      title: "Test & Harden",
      description: "Performance, security, and user acceptance testing. We ship when it's ready."
    },
    {
      step: "5",
      title: "Deploy & Support",
      description: "Go-live support, documentation, and ongoing enhancements. We're here after go-live."
    }
  ];

  const whyTechknomaticCustom = [
    {
      title: "Analytics-First Thinking",
      description: "Every custom tool is built around your data — not just the UI."
    },
    {
      title: "Full Stack in One Team",
      description: "UI, API, data pipeline, and AI — no handoffs, no gaps."
    },
    {
      title: "Agile with Business Involvement",
      description: "Weekly demos mean you're never surprised at delivery."
    },
    {
      title: "Regulated Industry Experience",
      description: "Insurance, pharma, energy — we understand compliance."
    }
  ];

  return (
    <div className="pt-[120px]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full"
          >
            Custom Software Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Custom Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            We don't just write code; we build products. Our custom software solutions are engineered for performance, security, and world-class user experience.
          </motion.p>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Custom Solutions We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSolutions.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">How We Work</h2>
          </div>
          <div className="space-y-12">
            {howWeWork.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold shadow-lg shadow-accent/20">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic for Custom Development */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight mb-6">Why Techknomatic for Custom Development</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyTechknomaticCustom.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-start"
              >
                <div className="shrink-0 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Have a custom software vision?</h2>
          <p className="text-lg opacity-90 mb-12 font-medium">Let's build a fast, secure, and user-centric application for your business.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3">
               Start Building with Us <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
