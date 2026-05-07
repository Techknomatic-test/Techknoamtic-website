import { motion } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Activity,
  Lock,
  Search,
  RefreshCw,
  Bell,
  BarChart3,
  Brain,
  Cpu,
  Settings,
  FileText,
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

export const DataGuardPage = () => {
  const whatDataGuardDoes = [
    {
      title: "Data Quality Monitoring",
      description:
        "Automated profiling, validation rules, and anomaly detection across your entire data estate.",
      icon: Search,
    },
    {
      title: "AI Recommendations",
      description:
        "ML-powered suggestions for data quality improvements based on patterns and context.",
      icon: Brain,
    },
    {
      title: "Autonomous Data Agent",
      description:
        "AI agent that automatically fixes common data issues, validates corrections, and escalates complex problems.",
      icon: Cpu,
    },
    {
      title: "Business Rule Management",
      description:
        "Define, manage, and enforce business rules for data quality without coding.",
      icon: Settings,
    },
    {
      title: "Data Governance",
      description:
        "Catalog, lineage, metadata management, and stewardship workflows.",
      icon: Lock,
    },
    {
      title: "Collaboration & Alerts",
      description:
        "Automated alerts, issue assignment, and resolution tracking for data teams.",
      icon: Bell,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect",
      description: "Connect to your data sources — cloud, on-prem, or hybrid.",
    },
    {
      step: "2",
      title: "Profile",
      description: "AI profiles your data and identifies quality issues.",
    },
    {
      step: "3",
      title: "Rules",
      description: "Define business rules or let AI suggest them.",
    },
    {
      step: "4",
      title: "Monitor",
      description: "Real-time monitoring with automated alerts.",
    },
    {
      step: "5",
      title: "Fix",
      description: "Autonomous agent fixes issues, learns, improves.",
    },
  ];

  const results = [
    { label: "Faster data issue resolution", value: "30-50%" },
    { label: "Automated monitoring and fixes", value: "24/7" },
    { label: "Manual data quality checks", value: "Zero" },
  ];

  const integrations = {
    sources: [
      { category: "Cloud", list: "Azure, AWS, GCP, Snowflake, Databricks" },
      { category: "Databases", list: "SQL Server, Oracle, PostgreSQL, MySQL" },
      { category: "SaaS", list: "Salesforce, SAP, Workday, ServiceNow" },
      { category: "Files", list: "CSV, Excel, Parquet, JSON" },
    ],
    delivery: [
      "SaaS (Cloud-hosted)",
      "On-premise deployment",
      "Hybrid model",
      "Managed service available",
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[11px] font-black uppercase tracking-widest">
              Flagship Product
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            DataGuard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-200 max-w-4xl font-medium leading-relaxed mb-12"
          >
            AI-Powered Data Reliability Platform — Monitor, Validate, Govern,
            and Autonomously Fix Data Issues.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] max-w-3xl backdrop-blur-sm"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              DataGuard is Techknomatic's flagship AI-powered data reliability
              platform. It combines data quality monitoring, governance, AI
              recommendations, an autonomous data agent, and business rule
              management in a single platform — ensuring your analytics are
              always accurate, consistent, and trustworthy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What DataGuard Does Section */}
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              What DataGuard Does
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatDataGuardDoes.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How DataGuard Works Section */}
      <section className="py-32 px-6 bg-[#F8F9FA] dark:bg-brand-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              How DataGuard Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white font-black text-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Platforms Section */}
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Integration & Platforms
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-brand-950 dark:text-white">
                Data Sources Supported
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {integrations.sources.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-[#F8F9FA] dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <div>
                      <span className="block text-[14px] font-black text-brand-950 dark:text-white uppercase tracking-wider mb-1">
                        {src.category}
                      </span>
                      <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">
                        {src.list}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-brand-950 dark:text-white">
                Delivery Options
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {integrations.delivery.map((option, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-accent/5 rounded-2xl border border-accent/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-[15px] font-bold text-brand-950 dark:text-white">
                      {option}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value of DataGuard Section */}
      <section className="py-32 px-6 bg-[#F8F9FA] dark:bg-brand-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              The Value of DataGuard
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-sm text-center border border-slate-100 dark:border-white/5"
              >
                <div className="text-5xl md:text-7xl font-black text-accent mb-6 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[14px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold mb-8 tracking-tight">
            Ready to Ensure Your Data Reliability?
          </h2>
          <p className="text-xl opacity-90 mb-12 font-medium">
            Schedule a demo to see DataGuard in action with your data sources.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 text-lg">
              Schedule a Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3 text-lg">
              Download Datasheet <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
