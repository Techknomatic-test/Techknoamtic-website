import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
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
  RefreshCw
} from "lucide-react";

const CapabilityCard = ({ title, description, image, delay = 0 }: { title: string; description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full overflow-hidden text-left"
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

const UseCaseCard = ({ title, subtitle, crux, industries, impact }: { 
  title: string; 
  subtitle: string; 
  crux: string; 
  industries: string;
  impact?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group text-left h-full flex flex-col"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/70 dark:text-white/70 mb-8 leading-snug">
      {subtitle}
    </p>
    
    <div className="space-y-6 mt-auto">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Crux</h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-2">Industries</h4>
          <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
            {industries}
          </p>
        </div>
        {impact && (
          <div>
            <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-2">Impact</h4>
            <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
              {impact}
            </p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export const AirlinesAnalyticsPage = () => {
    const caps = [
    {
      title: "Flight Operations",
      description: "Real-time OTP tracking, comprehensive delay reason analysis, and ground turnaround time monitoring optimization.",
      image: "Images/Imagesairline.jpg"
    },
    {
      title: "Crew Management",
      description: "Detailed duty hour tracking, FTL compliance, fatigue monitoring, and AI-driven roster optimization analytics.",
      image: "Images/Crew Management.jpg"
    },
    {
      title: "Ground Handling",
      description: "End-to-end boarding, baggage movement, fueling, and airport operational SLA tracking for smoother air-side performance.",
      image: "Images/Ground Handling.jpg"
    },
    {
      title: "Passenger Experience",
      description: "Advanced disruption management strategies, wait time analysis, and real-time passenger sentiment tracking engines.",
      image: "Images/Passenger Experience.jpg"
    }
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/airline.jpg"
            alt="Airlines Background"
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
            Airlines Analytics Suite
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Unified Operations for Higher Horizons.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              Optimize On-Time Performance (OTP), normalize crew silos, and empower ground handling teams with real-time operational flows.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Global aviation complexity requires instant operational visibility. Techknomatic's Airlines Analytics Suite transforms raw DCS and crew signals into unified hub intelligence. We modernize fragmented operational data pools into a unified, cloud-native foundation ready for the enterprise scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates data from DCS, MRO, and rostering systems to provide a high-fidelity view of hub performance and crew fatigue. By combining historical context with real-time flight streams, we enable predictive resolution strategies that drastically reduce turnaround delays and optimize revenue leakage across several routes simultaneously.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              AVIATION CORE SOLUTIONS
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

      {/* Modules Section */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden">
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
                  <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-0 flex-1">
                    {module.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 overflow-hidden">
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
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
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
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden text-left">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
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
              A high-precision path for airline digital hub maturity.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping complex DCS, Crew and MRO silos." },
              { step: "02", title: "Data Lakehouse", description: "Engineering the cloud foundation for storage and ELT." },
              { step: "03", title: "Hub Modeling", description: "Creating hub-specific data models for operational OTP." },
              { step: "04", title: "Dashboarding", description: "Deploying carrier-wide persona-based analytics." },
              { step: "05", title: "OCC Scale", description: "Integrating real-time disruption sense and resolution AI." }
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

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
            >
              Aviation Case Studies
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight uppercase"
            >
              USE CASES
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Hub Operations Optimization",
                subtitle: "Standardizing On-Time Performance across global hubs",
                crux: "Unified fragmented DCS and ground handling data for a major carrier. Enabled real-time turnaround monitoring and proactive delay resolution strategies at 5 international hubs.",
                industries: "Airlines · Airport Ops",
                impact: "25% Improved OTP"
              },
              {
                title: "Crew Management Analytics",
                subtitle: "Reducing fatigue and improving roster efficiency",
                crux: "Built a consolidated crew analytics platform integrating AIMS and Jeppesen. Surface duty hour trends and standby utilization to optimize roster stability and reduce burnout.",
                industries: "Airlines · Crew Rostering",
                impact: "15% Lower Standby Costs"
              },
              {
                title: "Customer Disruption Recovery",
                subtitle: "Proactive communication during major delays",
                crux: "Deployed a real-time disruption sense engine. Automatically identifies impacted passengers, suggests re-accommodation options, and triggers automated communication workflows.",
                industries: "Airlines · Customer Success",
                impact: "40% Faster Resolution"
              }
            ].map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
