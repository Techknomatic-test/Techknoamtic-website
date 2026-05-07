import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  BarChart3,
  Plane,
  Users,
  Clock,
  ShieldCheck,
  Target,
  ArrowRight,
  Zap,
  CheckCircle2,
  TrendingUp,
  Map,
  Fuel,
  Database,
  DollarSign,
  AlertCircle,
  Briefcase,
  Layout,
  Activity,
  MapPin,
  Search,
} from "lucide-react";

const Card = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string | string[];
  icon: any;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/20 p-8 rounded-[2rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500 group overflow-hidden"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/20">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-[17px] font-bold text-brand-950 dark:text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <button className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2 group/btn cursor-pointer mt-auto pt-4 border-t border-slate-100/50 dark:border-white/5">
        <span className="border-b-2 border-accent/20 group-hover/btn:border-accent transition-colors">
          Learn More
        </span>
        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

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
    return springValue.on("change", (latest) =>
      setDisplayValue(Math.floor(latest)),
    );
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix || (typeof value === "string" ? value.replace(/[0-9]/g, "") : "")}
    </span>
  );
};

export const AirlinesAnalyticsPage = () => {
  const challenges = [
    {
      title: "Delayed Visibility",
      description:
        "Get real-time insights into delays, crew availability, and operational bottlenecks.",
      icon: Clock,
    },
    {
      title: "Siloed Data",
      description:
        "Unify data from DCS, MRO, rostering, and 20+ systems into one source of truth.",
      icon: Database,
    },
    {
      title: "Missed OTP Targets",
      description:
        "Track and improve On-Time Performance with actionable operational analytics.",
      icon: Target,
    },
    {
      title: "Revenue Leakage",
      description:
        "Identify underperforming routes and optimize cargo and ancillary revenue.",
      icon: DollarSign,
    },
    {
      title: "Inconsistent Reporting",
      description:
        "Automated, standardized reports across all stakeholders and time zones.",
      icon: CheckCircle2,
    },
    {
      title: "No Real-Time Alerting",
      description:
        "Proactive notifications for delays, crew fatigue, and SLA breaches.",
      icon: AlertCircle,
    },
  ];

  const modules = [
    {
      title: "Flight Operations",
      description:
        "OTP tracking, delay reason analysis, turnaround time monitoring",
      imageUrl: "Images/Imagesairline.jpg",
    },
    {
      title: "Crew Management",
      description:
        "Duty hours, FTL compliance, fatigue monitoring, and roster optimization",
      imageUrl: "Images/Crew Management.jpg",
    },
    {
      title: "Ground Handling",
      description:
        "Boarding, baggage, fueling, and airport operations SLA tracking",
      imageUrl: "Images/Ground Handling.jpg",
    },
    {
      title: "Passenger Experience",
      description: "Disruption management, wait times, and sentiment tracking",
      imageUrl: "Images/Passenger Experience.jpg",
    },
    {
      title: "Cargo & Revenue",
      description:
        "Ancillary revenue analytics, cargo optimization, and yield management",
      imageUrl: "Images/Cargo & Revenue.jpg",
    },
    {
      title: "Route Profitability",
      description:
        "Network analysis, cost per leg, and profitability by route segment",
      imageUrl: "Images/Route Profitability.jpg",
    },
  ];

  const results = [
    { label: "Average Delay Reduction", value: "12", suffix: " min" },
    { label: "Faster Incident Resolution", value: "40", suffix: "%" },
    { label: "Improved OTP", value: "25", suffix: "%" },
    { label: "Cargo Revenue Increase", value: "15", suffix: "%" },
  ];

  const systems = [
    "DCS (Departure Control System)",
    "Crew Rostering (AIMS, Sabre, Jeppesen)",
    "MRO (TRAX, AMOS, Ramco)",
    "Flight Planning & OCC",
    "Cargo and Fuel systems",
    "ERP (SAP/Oracle)",
    "IoT/sensors for real-time data",
  ];

  return (
    <div className="bg-white dark:bg-brand-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/airline.jpg"
            alt="Airlines Background"
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
              Airlines Operations <br />
              <span className="text-accent">Analytics Solution</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Operational Challenges.
              <br />
              <span className="text-slate-400">Intelligent Solutions.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Core Analytics Modules.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 p-0 rounded-[2.5rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none transition-all duration-500 group overflow-hidden"
              >
                <div className="h-48 w-full bg-slate-50/50 dark:bg-white/5 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={module.imageUrl}
                    alt={module.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/0 transition-colors duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-[20px] font-bold mb-3 text-brand-950 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-1">
                    {module.description}
                  </p>
                  <div className="flex items-center gap-4 group/btn cursor-pointer mt-auto pt-6 border-t border-slate-50 dark:border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover/btn:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 leading-tight"
              >
                Unified Ecosystem.
                <br />
                Single Source of Truth.
              </motion.h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {systems.map((system, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-[14px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {system}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-accent text-white rounded-[3rem] shadow-2xl shadow-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Database className="w-40 h-40" />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  Real-Time Data Pipeline
                </h3>
                <p className="text-white/80 font-medium mb-10 leading-relaxed text-lg">
                  We build high-performance data architectures that normalize
                  DCS, Crew, and MRO data for instant decision-making.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Snowflake", "Databricks", "Azure", "Power BI"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white font-black text-[10px] rounded-full uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500">
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
            Let's Scale Efficiency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-normal text-brand-950 tracking-tight leading-[1.1] mb-12"
          >
            Ready to Optimize Your <br />
            Airline Operations?
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
