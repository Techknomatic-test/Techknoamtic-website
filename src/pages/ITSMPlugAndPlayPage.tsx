import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Layout,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Clock,
  Users,
  ShieldAlert,
  BarChart,
  FileText,
  Mail,
  Bell,
  Monitor,
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

export const ITSMPlugAndPlayPage = () => {
  const capabilities = [
    {
      title: "20+ Pre-Built Dashboards",
      description: "Incident management, SLA tracking, change & service requests, asset CMDB, team productivity, and vendor performance.",
      image: "Images/stock/photo-1551288049-bbda38a10ad5.jpg"
    },
    {
      title: "Supported Platforms",
      description: "ServiceNow, ManageEngine, Freshservice, BMC Remedy, Jira Service Management.",
      image: "Images/stock/photo-1558494949-ef010cbdcc4b.jpg"
    },
    {
      title: "Power BI Output",
      description: "Reports ready to publish to your Power BI Service with seamless integration.",
      image: "Images/stock/photo-1543286386-2e6713cf67ad.jpg"
    },
    {
      title: "Role-Based Views",
      description: "CIO executive summary, IT Manager operational view, L1/L2 team performance.",
      image: "Images/stock/photo-1552664730-d307ca884978.jpg"
    },
    {
      title: "Automated Reports",
      description: "Scheduled weekly/daily report delivery to stakeholders via email.",
      image: "Images/stock/photo-1557200134-90327ee9fafa.jpg"
    },
    {
      title: "SLA Breach Alerts",
      description: "Email/Teams notifications for at-risk tickets before SLA breach occurs.",
      image: "Images/stock/photo-1551033406-611cf9a28f67.jpg"
    },
  ];

  const comparisons = [
    {
      label: "3-6 Months",
      desc: "Traditional ITSM analytics project timeline",
      value: "Standard Approach",
    },
    {
      label: "1-2 Weeks",
      desc: "With ITSM Plug & Play Accelerator",
      value: "Techknomatic Speed",
      highlighted: true,
    },
    {
      label: "0",
      desc: "Custom development needed for standard KPIs",
      value: "Effort Saved",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connector Setup",
      description:
        "We configure the data connection to your ITSM tool via API or direct database.",
    },
    {
      step: "2",
      title: "Data Validation",
      description:
        "We verify data mapping, completeness, and logic alignment with your ITSM.",
    },
    {
      step: "3",
      title: "Dashboard Deployment",
      description: "Pre-built reports published to your Power BI environment.",
    },
    {
      step: "4",
      title: "Handover & Training",
      description: "2-hour walkthrough session for your team.",
    },
    {
      step: "5",
      title: "Customization (Optional)",
      description:
        "Optional sprint for org-specific KPIs or visual enhancements.",
    },
  ];

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
            Instant Visibility
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            ITSM Plug & Play
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Go Live in Days, Not Months — 20+ Pre-Built ITSM Dashboards Ready to Deploy.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Techknomatic's accelerator that delivers instant visibility into your IT operations — right out of the box.
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
              Techknomatic's ITSM Plug & Play is a pre-configured analytics accelerator that delivers instant visibility into your IT operations — right out of the box. Built on top of our proven ITSM analytics framework, this accelerator connects to your ITSM platform, loads pre-built dashboards, and gives your team actionable insights within days of deployment.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Skip the 6-month development cycle. Our tool is designed for speed, bridging the gap between raw ticket data and executive-level clarity. With support for major ITSM platforms, you can finally move from reactive firefighting to proactive service management.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              WHAT YOU GET
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              What You Get — Day One
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Plug & Play Section */}
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Plug & Play?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Proven impact on delivery speed and resource optimization.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-12 rounded-[3.5rem] text-center border transition-all duration-500 ${
                  item.highlighted
                    ? "bg-accent text-white border-accent shadow-2xl scale-105 z-10"
                    : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/10"
                }`}
              >
                <div
                  className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${item.highlighted ? "text-white" : "text-accent"}`}
                >
                  {item.label}
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${item.highlighted ? "text-white" : "text-brand-950 dark:text-white"}`}
                >
                  {item.value}
                </h3>
                <p
                  className={`text-sm font-medium ${item.highlighted ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              Our automated deployment framework ensures you go live with minimal friction.
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

      <PreFooterCTA />
    </div>
  );
};
