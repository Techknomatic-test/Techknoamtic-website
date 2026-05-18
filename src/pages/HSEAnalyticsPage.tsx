import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
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

export const HSEAnalyticsPage = () => {
    const caps = [
    {
      title: "Incident Intelligence",
      description: "Real-time incident capture engine with automated classification, spatial heatmapping, and critical escalation workflows.",
      image: "Images/slider.jpg"
    },
    {
      title: "Compliance Automations",
      description: "End-to-end compliance tracking across OSHA, ISO, and internal brand standards with proactive gap sensing.",
      image: "Images/slider.jpg"
    },
    {
      title: "Audit Digitization",
      description: "High-precision audit scheduling, mobile execution frameworks, and automated finding remediation tracking systems.",
      image: "Images/slider.jpg"
    },
    {
      title: "Risk Assessment",
      description: "Dynamic risk scoring models utilizing environmental data and history to enable predictive hazard identification strategies.",
      image: "Images/slider.jpg"
    }
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/slider.jpg"
            alt="HSE Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            HSE Analytics Suite
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Protecting Assets. Empowering People.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              Bridge the safety gap with real-time incident tracking, automated compliance sensing, and predictive hazard intelligence for industrial scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Industrial safety excellence requires absolute visibility into field environmental risks. Techknomatic's HSE Analytics Suite transforms raw incident signals and sensor data into proactive site intelligence. We modernize fragmented EHS records into a unified, cloud-native foundation ready for the enterprise scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates data across SCADA, PTW, and historical incident banks to provide 360-degree visibility into LTIR, TRIR, and near-miss ratios. By applying advanced spatial heatmapping to real-time streams, we enable predictive resolution strategies that mitigate risks before they manifest and ensure seamless regulatory compliance across global operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[40px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto text-left">
          <div className="text-left mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              ZERO HARM SOLUTIONS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              What We Solve
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* HSE Analytics Dashboard Modules */}
      <section className="py-[40px] bg-slate-50 dark:bg-brand-900 transition-colors duration-500 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
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
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
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
      <section className="py-[40px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Business Impact
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-white/5 p-12 rounded-[4rem] text-center border border-slate-100 dark:border-white/5"
              >
                <div className="text-5xl md:text-7xl font-black text-accent mb-6 tracking-tighter">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[14px] font-bold text-slate-500 dark:text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Models Section */}
      <section className="py-[40px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden text-left">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              Delivery Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A high-precision path for safety digital maturity.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping complex SCADA, PTW and EHS silos." },
              { step: "02", title: "Data Lakehouse", description: "Engineering the cloud foundation for storage and ELT." },
              { step: "03", title: "Incident Modeling", description: "Creating site-specific data models for LTIR/TRIR." },
              { step: "04", title: "Dashboarding", description: "Deploying enterprise-wide persona-based safety analytics." },
              { step: "05", title: "Risk Scale", description: "Integrating real-time hazard sense and resolution AI." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  {step.step}
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
    </div>
  );
};
