import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Clock,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layout,
  MessageSquare,
  Search,
  Activity,
  Sparkles,
  Building2,
  MapPin,
} from "lucide-react";

const Counter = ({
  value,
  suffix = "",
}: {
  value: string | number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (typeof value === "string") {
        const numericValue = parseInt(value);
        if (!isNaN(numericValue)) motionValue.set(numericValue);
      } else {
        motionValue.set(value);
      }
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latestVal) => {
      setDisplayValue(Math.floor(latestVal));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix || (typeof value === "string" ? value.replace(/[0-9]/g, "") : "")}
    </span>
  );
};

const Card = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  delay = 0,
}: {
  title: string;
  description: string | string[];
  icon?: any;
  imageUrl?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 p-0 rounded-[2.5rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group overflow-hidden"
    >
      <div className="h-48 w-full bg-slate-50/50 dark:bg-white/5 flex items-center justify-center overflow-hidden relative">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/0 transition-colors duration-500" />
          </>
        ) : (
          Icon && (
            <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
              <Icon className="w-6 h-6" />
            </div>
          )
        )}
      </div>
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-[20px] font-bold text-brand-950 dark:text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        {Array.isArray(description) ? (
          <ul className="space-y-3 flex-1">
            {description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="text-accent mt-1 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const ITSMAnalyticsPage = () => {
  const capabilities = [
    {
      title: "Service Desk Performance",
      description:
        "Analyzing ticket volume, resolution times (MTTR), and agent productivity to identify bottlenecks.",
      imageUrl: "Images/3d-graph-computer-illustration.jpg",
    },
    {
      title: "SLA Compliance Tracking",
      description:
        "Real-time dashboards to monitor service level agreements and proactively alert before breaches occur.",
      imageUrl:
        "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg",
    },
    {
      title: "Incident & Problem Management",
      description:
        "Identifying recurring 'problem' patterns to move from firefighting to permanent root-cause resolution.",
      imageUrl: "Images/2152005500.jpg",
    },
  ];

  const accelerators = [
    {
      title: "ITSM Plug & Play",
      desc: "20+ ready-made ITSM dashboards. ServiceNow, ManageEngine, Freshservice — live in 1–2 weeks.",
      cta: "See What's Included",
      icon: Layout,
      href: "/itsm-plug-and-play",
    },
    {
      title: "Agentic AI for ITSM",
      desc: "AI that reads, routes, summarizes, and resolves your IT tickets — 40–60% less manual triage.",
      cta: "Learn More",
      icon: Sparkles,
      href: "/agentic-ai-itsm",
    },
  ];

  const whyTechknomatic = [
    {
      title: "Platform Agnostic Connectors",
      description:
        "Seamlessly integrate data from ServiceNow, BMC Helix, Jira Service Management, and custom legacy tools.",
    },
    {
      title: "AI-Powered Categorization",
      description:
        "Automatically cluster similar tickets and suggest resolutions using advanced NLP models.",
    },
    {
      title: "Executive to Operational Views",
      description:
        "Dashboards built for everyone — from the CIO tracking portfolio health to team leads managing daily queues.",
    },
    {
      title: "Plug & Play ITSM Blueprints",
      description:
        "Our library of pre-built KPIs and visualizations allows you to go live with enterprise-grade analytics in weeks.",
    },
  ];

  const results = [
    { label: "MTTR Reduction", value: "35", suffix: "%" },
    { label: "First Call Resolution", value: "92", suffix: "%" },
    { label: "Self-Service Adoption", value: "45", suffix: "%" },
    { label: "Cost per Ticket reduction", value: "28", suffix: "%" },
  ];

  return (
    <div className="bg-white dark:bg-brand-950 text-left">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/slider.jpg"
            alt="ITSM Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-white"
            >
              ITSM Analytics <br />
              <span className="text-accent">Solution Suite</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Service Capabilities.
              <br />
              <span className="text-slate-400">Operational Excellence.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Why Techknomatic for ITSM.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {whyTechknomatic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerators Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white mb-4"
            >
              ITS M Accelerators.
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Pre-built solutions designed to deliver ROI in days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accelerators.map((acc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <acc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 leading-tight tracking-tight">
                  {acc.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                  {acc.desc}
                </p>
                <Link
                  to={acc.href}
                  className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[11px] group/btn"
                >
                  {acc.cta}{" "}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight"
            >
              Evidence of Impact.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-12 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] text-center group"
              >
                <h3 className="text-5xl md:text-6xl font-extrabold text-accent tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">
                  <Counter value={stat.value} />
                  <span className="text-[0.4em] font-medium ml-1 inline-block translate-y-[-0.2em]">
                    {stat.suffix ||
                      (typeof stat.value === "string"
                        ? stat.value.replace(/[0-9]/g, "")
                        : "")}
                  </span>
                </h3>
                <p className="text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] leading-tight whitespace-nowrap">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PreFooter CTA */}
      <section className="py-[120px] bg-accent px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
          >
            Let's Perfect Operations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-normal text-brand-950 tracking-tight leading-[1.1] mb-12"
          >
            Streamline your IT <br />
            service delivery.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="px-8 py-3.5 bg-white text-accent font-medium rounded-2xl hover:bg-white/90 transition-all shadow-2xl flex items-center gap-3 group active:scale-95">
              Contact Us{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-medium rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 group active:scale-95">
              Schedule Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
