import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
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

export const RefineryOperationsPage = () => {
    const caps = [
    {
      title: "Production Monitoring",
      description: "Real-time yield, throughput, and quality tracking across critical refinery units for optimal output.",
      image: "Images/2988.jpg",
    },
    {
      title: "Asset Performance",
      description: "Comprehensive equipment health, MTBF tracking, and predictive maintenance for mission-critical assets.",
      image: "Images/3170.jpg",
    },
    {
      title: "Energy Management",
      description: "Optimizing steam, electricity, and fuel consumption to reduce operational expenditure and carbon footprint.",
      image: "Images/3d-graph-computer-illustration.jpg",
    },
    {
      title: "HSE Integration",
      description: "Unified safety KPIs, environmental compliance tracking, and incident reporting for high-risk environments.",
      image: "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg",
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/slider.jpg"
            alt="Refinery Background"
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
            Airlines & Logistics
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Refinery Operations Suite
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Precision Intelligence for Downstream Assets.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Unify SCADA, DCS, and LIMS data into a unified operational dashboard for real-time visibility and predictive maintenance.
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
              Refining margins are earned in the seconds between data acquisition and operational action. Techknomatic's Refinery Solution Suite provides a high-throughput data foundation that bridges the gap between field-level automation and executive-level strategy. We modernize fragmented data ecosystems into a unified, cloud-native foundation.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates SCADA, DCS, and LIMS data to provide a single pane of glass for monitoring yield, energy consumption, and asset integrity. By applying advanced analytics to historical and real-time streams, we enable proactive decision-making that reduces unplanned downtime and optimizes unit throughput across the entire refinery lifecycle.
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
              OPERATIONAL EXCELLENCE
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
              Unified data ecosystems for downstream operations.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping data sources from SCADA and Historians." },
              { step: "02", title: "Cloud Landing", description: "Engineering the cloud foundation for storage and ELT." },
              { step: "03", title: "Modelling", description: "Creating unit-specific data models for Distillation and Yield." },
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
