import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Settings,
  Clock,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layout,
  MessageSquare,
  Search,
  Activity,
  Sparkles,
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

export const ITSMAnalyticsPage = () => {
    const caps = [
    {
      title: "Service Desk Performance",
      description: "Deep-dive analysis of ticket volume, resolution times (MTTR), and agent productivity to eliminate backlogs.",
      image: "Images/3d-graph-computer-illustration.jpg"
    },
    {
      title: "SLA Compliance Tracking",
      description: "Real-time monitoring of service level agreements with proactive alerting before critical breaches occur.",
      image: "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg"
    },
    {
      title: "Problem Management",
      description: "Data-driven root-cause identification to transition from firefighting to permanent resolution strategies.",
      image: "Images/2152005500.jpg"
    }
  ];

  const accelerators = [
    {
      title: "ITSM Plug & Play",
      desc: "20+ ready-made ITSM dashboards. ServiceNow, ManageEngine, Freshservice — live in 1–2 weeks.",
      cta: "See What's Included",
      icon: Layout,
      href: "/itsm-plug-and-play",
    },
    {
      title: "Agentic AI for ITSM",
      desc: "AI that reads, routes, summarizes, and resolves your IT tickets — 40–60% less manual triage.",
      cta: "Learn More",
      icon: Sparkles,
      href: "/agentic-ai-itsm",
    },
  ];

  const whyTechknomatic = [
    {
      title: "Platform Agnostic Connectors",
      description:
        "Seamlessly integrate data from ServiceNow, BMC Helix, Jira Service Management, and custom legacy tools.",
    },
    {
      title: "AI-Powered Categorization",
      description:
        "Automatically cluster similar tickets and suggest resolutions using advanced NLP models.",
    },
    {
      title: "Executive to Operational Views",
      description:
        "Dashboards built for everyone — from the CIO tracking portfolio health to team leads managing daily queues.",
    },
    {
      title: "Plug & Play ITSM Blueprints",
      description:
        "Our library of pre-built KPIs and visualizations allows you to go live with enterprise-grade analytics in weeks.",
    },
  ];

  const results = [
    { label: "MTTR Reduction", value: "35", suffix: "%" },
    { label: "First Call Resolution", value: "92", suffix: "%" },
    { label: "Self-Service Adoption", value: "45", suffix: "%" },
    { label: "Cost per Ticket reduction", value: "28", suffix: "%" },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/slider.jpg"
            alt="ITSM Background"
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
            Digital Operations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            ITSM Analytics Suite
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Intelligence for Exceptional Service.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Optimize your service desk with real-time MTTR visibility, SLA compliance tracking, and AI-driven ticket routing.
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
              Exceptional IT service delivery is built on actionable data. Techknomatic's ITSM Analytics Suite transforms complex service desk logs into unified operational intelligence. We modernize fragmented IT data pools into a unified, cloud-native foundation ready for AI-scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates directly with ServiceNow, ManageEngine, and Freshservice to provide a high-fidelity view of your entire service ecosystem. By combining historical context with real-time incident streams, we enable predictive resolution strategies that drastically reduce bottlenecks and improve first-call resolution rates.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
            >
              Why Techknomatic for ITSM.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {whyTechknomatic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerators Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white mb-4"
            >
              ITS M Accelerators.
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Pre-built solutions designed to deliver ROI in days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accelerators.map((acc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <acc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 leading-tight tracking-tight">
                  {acc.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-0 leading-relaxed">
                  {acc.desc}
                </p>
              </motion.div>
            ))}
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
              A high-precision path for digital service delivery.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping complex ticket workflows and agent silos." },
              { step: "02", title: "Data Lakehouse", description: "Engineering the cloud foundation for service records." },
              { step: "03", title: "MTTR Modeling", description: "Creating process-specific metrics for resolution speed." },
              { step: "04", title: "Dashboarding", description: "Deploying persona-based analytics for team leads." },
              { step: "05", title: "Agentic AI", description: "Integrating real-time ticket triage and routing AI." }
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
