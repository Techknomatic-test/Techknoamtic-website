import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  LineChart,
  Boxes,
  TrendingUp,
  Users,
  BarChart3,
  ShoppingCart,
  ArrowRight,
  Truck,
  ShoppingBag,
  Package,
  Layout,
  Target,
  Activity,
  CheckCircle2,
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

export const FMCGAnalyticsPage = () => {
    const caps = [
    {
      title: "Sales Intelligence",
      description: "Comprehensive real-time visibility into secondary sales performance, field targets, and regional gap analysis.",
      image: "Images/23498.jpg"
    },
    {
      title: "Distribution Tracking",
      description: "End-to-end monitoring of distributor inventory levels, secondary movement, and stockout risk profiles.",
      image: "Images/2151680571.jpg"
    },
    {
      title: "Trade Promo Optimization",
      description: "Advanced ROI measurement for trade activities and AI-driven recommendations for future spend allocation.",
      image: "Images/2152005500.jpg"
    },
    {
      title: "Territory Management",
      description: "Data-driven beat planning, territory design, and field force productivity optimization strategies.",
      image: "Images/33931.jpg"
    }
  ];

  const modules = [
    {
      title: "Sales Dashboard",
      description: "Real-time sales vs target tracking",
      icon: BarChart3,
    },
    {
      title: "Secondary Sales",
      description: "Distributor and retailer sales data",
      icon: TrendingUp,
    },
    {
      title: "Promo Analytics",
      description: "Trade spend ROI measurement",
      icon: Target,
    },
    {
      title: "Coverage Analysis",
      description: "Outlet and SKU coverage metrics",
      icon: MapPin,
    },
    {
      title: "Merchandising",
      description: "Planogram compliance tracking",
      icon: Layout,
    },
    {
      title: "Field Force",
      description: "Beat planning and productivity",
      icon: Users,
    },
  ];

  const results = [
    { label: "Better Promotion ROI Tracking", value: "28", suffix: "%" },
    { label: "Increase in Secondary Sales", value: "15", suffix: "%" },
    { label: "Reduction in Stockouts", value: "20", suffix: "%" },
    { label: "Faster Reporting Cycles", value: "30", suffix: "%" },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="Images/slider.jpg"
            alt="FMCG Background"
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
            CPG SOLUTIONS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            FMCG Analytics Suite
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Intelligence for Consumer Goods.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Drive secondary sales growth, optimize distribution networks, and maximize trade spend efficiency with unified market data.
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
              Consumer goods agility requires instant visibility into complex market channels. Techknomatic's FMCG Analytics Suite bridges the gap between field footprints and executive strategy. We modernize fragmented secondary sales data into a unified, cloud-native foundation ready for the enterprise scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates data across your entire distribution chain to provide 360-degree visibility into SKU performance, distributor health, and stockout threats. By applying advanced spatial models to historical and real-time streams, we enable precision beat planning and automated trade promotion strategies that reduce leakage and optimize reach.
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
              SHELF SOLUTIONS
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
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight text-left"
            >
              FMCG Analytics Modules.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:text-left md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Results Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto text-left">
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
              A high-precision path for brand digital growth.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping complex distributor and reseller silos." },
              { step: "02", title: "Data Lakehouse", description: "Engineering the cloud foundation for sales records." },
              { step: "03", title: "Market Modeling", description: "Creating region-specific metrics for SKU performance." },
              { step: "04", title: "Dashboarding", description: "Deploying brand-wide persona-based analytics." },
              { step: "05", title: "Predictive AI", description: "Integrating real-time stockout and demand sensing AI." }
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

      {/* Use Cases Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
            >
              Consumer Goods Case Studies
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
                title: "Secondary Sales Visibility",
                subtitle: "Unifying fragmented distributor data",
                crux: "Consolidated secondary sales data for a regional FMCG leader across 150+ distributors. Enabled daily visibility into SKU performance and stock-out risks at the retail level.",
                industries: "FMCG · Food & Beverage",
                impact: "15% Sales Growth"
              },
              {
                title: "Trade Promo Optimization",
                subtitle: "Measuring ROI on shelf activities",
                crux: "Built an AI-driven promotion ROI engine. Analyzed historical spend against volume lift to recommend optimized discount structures and seasonal spend allocation.",
                industries: "CPG · Retail",
                impact: "28% Better Promo ROI"
              },
              {
                title: "Field Force Productivity",
                subtitle: "Optimizing beats for maximum coverage",
                crux: "Redesigned sales beats using spatial analytics. Integrated historical outlet potential with real-time field activity data to improve outlet coverage and drop size.",
                industries: "FMCG · Personal Care",
                impact: "20% Higher Coverage"
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
