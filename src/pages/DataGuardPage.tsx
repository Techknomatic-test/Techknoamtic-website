import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
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
  ChevronUp,
  ChevronDown,
  Monitor
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

export const DataGuardPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const capabilities = [
    {
      title: "Data Quality Monitoring",
      description: "Automated profiling, validation rules, and anomaly detection across your entire data estate.",
      image: "Images/stock/photo-1551288049-bbda38a10ad5.jpg"
    },
    {
      title: "AI Recommendations",
      description: "ML-powered suggestions for data quality improvements based on patterns and context.",
      image: "Images/stock/photo-1677442136019-21780ecad995.jpg"
    },
    {
      title: "Autonomous Data Agent",
      description: "AI agent that automatically fixes common data issues, validates corrections, and escalates complex problems.",
      image: "Images/stock/photo-1531746790731-6c087fdecce1.jpg"
    },
    {
      title: "Business Rule Management",
      description: "Define, manage, and enforce business rules for data quality without coding.",
      image: "Images/stock/photo-1460925895917-afdab827c52f.jpg"
    },
    {
      title: "Data Governance",
      description: "Catalog, lineage, metadata management, and stewardship workflows.",
      image: "Images/stock/photo-1454165833762-b104c18c942e.jpg"
    },
    {
      title: "Collaboration & Alerts",
      description: "Automated alerts, issue assignment, and resolution tracking for data teams.",
      image: "Images/stock/photo-1551434678-e076c223a692.jpg"
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            Digital Trust
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            DataGuard
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              AI-Powered Data Reliability Platform — Monitor, Validate, Govern, and Autonomously Fix Data Issues.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Techknomatic's flagship platform ensuring your analytics are always accurate, consistent, and trustworthy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              DataGuard is Techknomatic's flagship AI-powered data reliability platform. It combines data quality monitoring, governance, AI recommendations, an autonomous data agent, and business rule management in a single platform — ensuring your analytics are always accurate, consistent, and trustworthy.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Enterprise systems are plagued by fragmented data silos and unreliable reporting. DataGuard bridges this gap by providing an autonomous layer that profiles, monitors, and corrects data in real-time. Whether you're running on cloud, on-prem, or hybrid environments, it acts as a sentinel for your data integrity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              WHAT IT DOES
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              DataGuard Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-[120px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              How it Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A seamless, AI-driven process that automates data reliability.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  0{step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed italic px-2 border-l-2 border-accent/20">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Platforms Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              Integration & Platforms
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl"
            >
              DataGuard integrates with your existing stack seamlessly, supporting a wide range of cloud and on-premise sources.
            </motion.p>
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
                    className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10"
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
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              The Value of DataGuard
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Proven impact on data reliability and operational efficiency.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all text-center border border-slate-100 dark:border-white/5"
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

      <PreFooterCTA />
    </div>
  );
};
