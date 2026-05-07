import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Activity,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Users,
  Search,
  ClipboardCheck,
  TrendingUp,
  FileText,
  Layout,
  GraduationCap,
  Calendar,
  Clock,
  Shield,
  LifeBuoy,
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
      className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  );
};

export const HSEAnalyticsPage = () => {
  const whatWeSolve = [
    {
      title: "Incident Tracking",
      description:
        "Real-time incident capture, classification, and escalation workflows.",
      icon: AlertTriangle,
    },
    {
      title: "Compliance Management",
      description:
        "Automated compliance tracking across OSHA, ISO, and internal standards.",
      icon: ClipboardCheck,
    },
    {
      title: "Audit Management",
      description:
        "Streamlined audit scheduling, execution, and finding tracking.",
      icon: FileText,
    },
    {
      title: "Training & Certification",
      description:
        "Track training completion, certifications, and competency gaps.",
      icon: GraduationCap,
    },
    {
      title: "Risk Assessment",
      description: "Dynamic risk scoring and predictive hazard identification.",
      icon: TrendingUp,
    },
    {
      title: "Emergency Response",
      description: "Real-time emergency workflows and evacuation tracking.",
      icon: LifeBuoy,
    },
  ];

  const modules = [
    {
      title: "Incident Dashboard",
      description: "Real-time incident status, trends, and severity analysis",
      icon: Activity,
    },
    {
      title: "Root Cause Analysis",
      description: "5-Why analysis, CAPA tracking, and closure rates",
      icon: Search,
    },
    {
      title: "Compliance Tracker",
      description: "Regulatory compliance status and upcoming deadlines",
      icon: ShieldCheck,
    },
    {
      title: "Audit Calendar",
      description: "Scheduled audits, findings, and remediation tracking",
      icon: Calendar,
    },
    {
      title: "Training Matrix",
      description: "Certification status, upcoming expirations, gaps",
      icon: GraduationCap,
    },
    {
      title: "KPI Dashboard",
      description: "LTIR, TRIR, near-miss ratio, and safety score",
      icon: BarChart3,
    },
  ];

  const results = [
    { label: "Faster Incident Closure", value: "40", suffix: "%" },
    { label: "Reduction in Compliance Gaps", value: "60", suffix: "%" },
    { label: "Decrease in LTIR", value: "25", suffix: "%" },
    { label: "Faster Audit Completion", value: "80", suffix: "%" },
  ];

  const systems = [
    "EHS Management Systems",
    "SCADA and IoT Sensors",
    "HR and Payroll Systems",
    "ERP (SAP, Oracle)",
    "Permit to Work Systems",
    "Mobile Field Apps",
  ];

  return (
    <div className="bg-white dark:bg-brand-950 text-left">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/slider.jpg"
            alt="HSE Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/40" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-white"
          >
            HSE Operations <br />
            <span className="text-accent">Analytics Solution</span>
          </motion.h1>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              What We Solve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {whatWeSolve.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* HSE Analytics Dashboard Modules */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 transition-colors duration-500 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight">
              HSE Analytics Dashboard Modules
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2.5rem] group hover:bg-accent/5 transition-all flex flex-col text-left"
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

      {/* Integration & Scalability Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Integration & Scalability
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-brand-950 dark:text-white">
                Systems We Connect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {systems.map((system, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-[14px] font-bold text-slate-600 dark:text-slate-400 text-left"
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
              className="p-10 bg-slate-50 dark:bg-accent/5 rounded-[2.5rem] border border-accent/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight leading-tight">
                  Industries We Serve
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed text-[15px]">
                  Oil & Gas, Manufacturing, Chemicals, Construction, Mining, and
                  Utilities.
                </p>
                <div className="flex flex-wrap gap-2 text-left">
                  {["Oil & Gas", "Manufacturing", "Mining", "Construction"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 bg-white dark:bg-white/10 border border-slate-100 dark:border-white/20 text-accent font-black text-[10px] rounded-full uppercase tracking-widest text-left"
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

      {/* Call to Action */}
      <section className="py-[120px] bg-accent px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
          >
            Let's Perfect Safety
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-normal text-brand-950 mb-12 tracking-tight leading-[1.1]"
          >
            Ready to Build a <br />
            Zero-Harm Culture?
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3.5 bg-white text-accent font-medium rounded-2xl hover:bg-white/90 transition-all shadow-2xl flex items-center gap-3 group active:scale-95">
              Schedule a Demo{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
