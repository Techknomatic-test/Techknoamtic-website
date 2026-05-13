import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Target,
  Factory,
  BarChart3,
  Activity,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Settings,
  Truck,
  Layers,
  Container,
  TrendingUp,
  LineChart,
  Boxes,
  ClipboardCheck,
  FileBarChart,
  Database,
  Cpu,
  Building2,
  MapPin,
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

export const ManufacturingAnalyticsPage = () => {
    const caps = [
    {
      title: "OEE Tracking",
      description: "Real-time Overall Equipment Effectiveness monitoring across all lines for maximized throughput.",
      image: "Images/2988.jpg"
    },
    {
      title: "Production Analytics",
      description: "Comprehensive tracking of production targets, cycle times, and detailed output quality metrics.",
      image: "Images/291956.jpg"
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment health monitoring and advanced failure prediction to reduce downtime.",
      image: "Images/33931.jpg"
    },
    {
      title: "Quality Management",
      description: "End-to-end defect tracking, SPC dashboards, and real-time quality assurance KPIs.",
      image: "Images/2151680571.jpg"
    }
  ];

  const dashboardModules = [
    {
      title: "OEE Dashboard",
      description: "Availability, Performance, Quality",
      icon: BarChart3,
    },
    {
      title: "Production Line",
      description: "Output, cycle time, rejects",
      icon: Factory,
    },
    {
      title: "Maintenance",
      description: "PM schedules, work orders, costs",
      icon: Settings,
    },
    {
      title: "Quality Control",
      description: "Defects, FPY, CAPA",
      icon: ClipboardCheck,
    },
    {
      title: "Energy & Utilities",
      description: "Consumption, costs, targets",
      icon: Zap,
    },
    {
      title: "Inventory",
      description: "WIP, finished goods, warehousing",
      icon: Boxes,
    },
  ];

  const results = [
    { label: "Production Efficiency Gain", value: "15", suffix: "%" },
    { label: "Dashboards per Plant", value: "45", suffix: "" },
    { label: "Reduction in Manual Reporting", value: "90", suffix: "%" },
    { label: "Energy Cost Reduction", value: "20", suffix: "%" },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/slider.jpg"
            alt="Manufacturing Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            Smart Manufacturing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Industrial Analytics Suite
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Powering the Intelligent Factory Floor.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Modernize your production lines with real-time OEE visibility, predictive maintenance, and closed-loop quality control.
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
              The fourth industrial revolution is built on data. Techknomatic's Manufacturing Analytics Suite transforms raw machine signals into unified operational intelligence. We modernize fragmented OT data ecosystems into a unified, cloud-native foundation ready for the enterprise scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates directly with your existing MES and ERP systems to provide a high-fidelity view of Overall Equipment Effectiveness (OEE). By combining historical context with real-time streaming data, we enable predictive maintenance strategies that drastically reduce unplanned downtime and optimize production cycles across several plants simultaneously.
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
              FACTORY SOLUTIONS
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
              Manufacturing Analytics Modules.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardModules.map((module, i) => (
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

      {/* Integration Section */}
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
                Unified Ecosystem.
                <br />
                System Integration.
              </motion.h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "SAP (PP, QM, PM modules)",
                  "Oracle ERP Cloud",
                  "Microsoft Dynamics 365",
                  "MES Systems Connectivity",
                  "SCADA & IoT Sensors",
                  "CMMS for Maintenance",
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
              className="p-12 bg-brand-950 text-white rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Settings className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  Multi-Plant Visibility
                </h3>
                <p className="text-white/60 font-medium mb-10 leading-relaxed text-lg">
                  "We standardized KPIs across 12 global plants, providing
                  real-time OEE comparisons that drove a 15% efficiency increase
                  in the first year."
                </p>
                <div className="flex flex-wrap gap-2 text-left">
                  {["Automotive", "Industrial", "Electronics", "F&B"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black text-[10px] rounded-full uppercase tracking-widest text-left"
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
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Business Impact
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
      <section className="py-[120px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <div className="mb-16">
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
              A structured implementation path for industrial scale.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping data sources from PLC, SCADA and MES." },
              { step: "02", title: "Cloud Landing", description: "Engineering the cloud foundation for storage and ELT." },
              { step: "03", title: "Modelling", description: "Creating shop-floor specific data models for OEE." },
              { step: "04", title: "Visualization", description: "Deploying persona-based dashboards for operators." },
              { step: "05", title: "AI/ML Scale", description: "Integrating predictive maintenance and anomaly detection." }
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
