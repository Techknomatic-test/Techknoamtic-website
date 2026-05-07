import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ShieldCheck,
  FileText,
  UserCheck,
  Search,
  AlertTriangle,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Coins,
  History,
  Building2,
  Users2,
  LineChart,
  MapPin,
  Activity,
  TrendingUp,
  Layout,
  Map,
  Users,
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
      className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 p-0 rounded-[2.5rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none transition-all duration-500 group overflow-hidden"
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
          <ul className="space-y-3 flex-1 mb-6">
            {description.map((item, idx) => (
              <li
                key={idx}
                className="text-[13px] font-medium text-slate-500 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="text-accent mt-1 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
            {description}
          </p>
        )}
        <div className="flex items-center gap-4 group/btn cursor-pointer mt-auto pt-6 border-t border-slate-50 dark:border-white/5">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover/btn:translate-x-1 transition-transform inline-flex items-center gap-2">
            Learn More <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const InsuranceAnalyticsPage = () => {
  const whatWeSolve = [
    {
      title: "Claims Optimization",
      description:
        "Reduce claim turnaround time and identify fraud patterns early.",
      imageUrl: "Images/23498.jpg",
    },
    {
      title: "Fraud Detection",
      description:
        "AI-powered fraud detection that learns from historical patterns.",
      imageUrl: "Images/2152005500.jpg",
    },
    {
      title: "Agent Performance",
      description:
        "360° view of agent productivity, conversion rates, and training needs.",
      imageUrl: "Images/291956.jpg",
    },
    {
      title: "Customer 360",
      description:
        "Unified customer view across policies, claims, and interactions.",
      imageUrl: "Images/2151680571.jpg",
    },
  ];

  const modules = [
    {
      title: "Claims Analytics",
      description: "TAT tracking, settlement analysis, provider performance",
      imageUrl: "Images/12437.jpg",
    },
    {
      title: "Policy Performance",
      description: "Portfolio analysis, renewal rates, lapse prediction",
      imageUrl: "Images/33931.jpg",
    },
    {
      title: "Underwriting Insights",
      description: "Risk scoring, pricing optimization, case prioritization",
      imageUrl: "Images/3d-graph-computer-illustration.jpg",
    },
    {
      title: "Agent Productivity",
      description: "Sales metrics, activity tracking, pipeline management",
      imageUrl: "Images/2988.jpg",
    },
    {
      title: "Fraud & Compliance",
      description:
        "Pattern recognition, anomaly detection, investigation support",
      imageUrl:
        "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg",
    },
    {
      title: "Customer Analytics",
      description: "Churn prediction, cross-sell opportunities, NPS tracking",
      imageUrl: "Images/AI & GenAI.jpg",
    },
  ];

  const outcomes = [
    { label: "Reduction in Claim TAT", value: "22", suffix: "%" },
    { label: "Dashboards Deployed", value: "40", suffix: "+" },
    { label: "Customers Covered by GIS", value: "200", suffix: "K+" },
    { label: "Fraud Detection Improvement", value: "35", suffix: "%" },
  ];

  return (
    <div className="bg-white dark:bg-brand-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/slider.jpg"
            alt="Insurance Background"
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
              Insurance Analytics <br />
              <span className="text-accent">Solution Suite</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[100px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Insurance Challenges.
              <br />
              <span className="text-slate-400">Operational Solutions.</span>
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
      <section className="py-[100px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden">
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
              <Card key={i} {...module} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Intelligence Section */}
      <section className="py-[100px] bg-white dark:bg-brand-950 px-6 overflow-hidden">
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
                Location Intelligence.
              </motion.h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Claim heatmaps & spatial clustering",
                  "Branch & agent territory optimization",
                  "Risk zone mapping & exposure analysis",
                  "Geotagged CRM leads distribution",
                  "Environmental risk modeling",
                  "Real-time incident mapping",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-[14px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {item}
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
                <MapPin className="w-40 h-40" />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  Geo-Analytics Impact
                </h3>
                <p className="text-white/80 font-medium mb-10 leading-relaxed text-lg">
                  "Our Insurance GIS analytics have helped carriers reduce claim
                  TAT by 22% and improve renewal targeting through
                  location-based customer insights."
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["ESRI Silver Partner", "ArcGIS", "PostGIS", "QGIS"].map(
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

      {/* Client Outcomes Section */}
      <section className="py-[100px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-12 rounded-[2.5rem] shadow-sm text-center group"
              >
                <h3 className="text-4xl md:text-6xl font-normal text-accent tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
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
            Ready to Transform Your <br />
            Insurance Analytics?
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
