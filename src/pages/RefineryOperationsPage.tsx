import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Activity,
  Settings,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Target,
  ArrowRight,
  CheckCircle2,
  Zap,
  Layers,
  Container,
  Droplets,
  LineChart,
  Cpu,
  FileText,
  Layout,
  Cloud,
  Thermometer,
  Database,
  Fuel,
  Building2,
  MapPin,
  Clock,
  Waves,
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

export const RefineryOperationsPage = () => {
  const whatWeSolve = [
    {
      title: "Production Monitoring",
      description:
        "Real-time yield, throughput, and quality tracking across refinery operations.",
      imageUrl: "Images/2149309653.jpg",
    },
    {
      title: "Asset Performance",
      description:
        "Equipment health, MTBF tracking, and predictive maintenance for critical assets.",
      imageUrl: "Images/2149301077.jpg",
    },
    {
      title: "Energy Management",
      description:
        "Steam, electricity, and fuel consumption optimization across units.",
      imageUrl: "Images/2149301083.jpg",
    },
    {
      title: "HSE Integration",
      description:
        "Environmental compliance, safety KPIs, and incident tracking for refineries.",
      imageUrl: "Images/2149363148.jpg",
    },
  ];

  const modules = [
    {
      title: "Operations Overview",
      description: "Real-time production KPIs and targets",
      icon: Layout,
    },
    {
      title: "Unit Performance",
      description: "Distillation, conversion, yield analysis",
      icon: Activity,
    },
    {
      title: "Energy Dashboard",
      description: "Fuel consumption, steam balance, efficiency",
      icon: Zap,
    },
    {
      title: "Equipment Health",
      description: "Vibration, temperature, run-length tracking",
      icon: Thermometer,
    },
    {
      title: "Environmental",
      description: "Emissions, water, waste tracking",
      icon: Cloud,
    },
    {
      title: "Safety Analytics",
      description: "Incidents, Near-misses, PTW tracking",
      icon: ShieldCheck,
    },
  ];

  const results = [
    { label: "Downtime Reduction", value: "18", suffix: "%" },
    { label: "Energy Cost Savings", value: "12", suffix: "%" },
    { label: "Faster Incident Response", value: "25", suffix: "%" },
    { label: "Reduction in Unplanned Maintenance", value: "30", suffix: "%" },
  ];

  const systems = [
    "SCADA (Wonderware, InTouch, Ignition)",
    "DCS (Honeywell, Yokogawa, ABB)",
    "PI System and historians",
    "LIMS for quality data",
    "ERP for logistics and maintenance",
    "IoT sensors for equipment monitoring",
  ];

  return (
    <div className="bg-white dark:bg-brand-950 text-left">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/slider.jpg"
            alt="Refinery Background"
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
              Refinery Operations <br />
              <span className="text-accent">Solution Suite</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden text-left">
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
              <span className="text-slate-400">Digital Solutions.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSolve.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Refinery Analytics Modules.
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
                className="p-10 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2.5rem] group hover:bg-accent/5 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-bold text-brand-950 dark:text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCADA Integration Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 leading-tight"
              >
                Industrial Connectivity.
                <br />
                SCADA Integration.
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
              className="p-12 bg-brand-950 text-white rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Droplets className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  Real-time Asset Integrity
                </h3>
                <p className="text-white/60 font-medium mb-10 leading-relaxed text-lg">
                  "By unifying SCADA data with our analytics suite, we reduced
                  unplanned downtime on critical CDU units by 18% through early
                  anomaly detection."
                </p>
                <div className="flex flex-wrap gap-2 text-left">
                  {["Downstream", "Assets", "Real-time", "SCADA"].map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black text-[10px] rounded-full uppercase tracking-widest text-left"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
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
            Modernize your refinery <br />
            operations today.
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
              Request Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
