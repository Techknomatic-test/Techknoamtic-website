import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import {
  IndustryUseCasesSection,
  ServiceImageCapabilityCard,
} from "../components/product-page";
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

  const useCases = [
    {
      title: "Secondary Sales Visibility",
      subtitle: "Unifying fragmented distributor data",
      crux: "Consolidated secondary sales data for a regional FMCG leader across 150+ distributors. Enabled daily visibility into SKU performance and stock-out risks at the retail level.",
      industries: "FMCG · Food & Beverage",
      impact: "15% Sales Growth",
    },
    {
      title: "Trade Promo Optimization",
      subtitle: "Measuring ROI on shelf activities",
      crux: "Built an AI-driven promotion ROI engine. Analyzed historical spend against volume lift to recommend optimized discount structures and seasonal spend allocation.",
      industries: "CPG · Retail",
      impact: "28% Better Promo ROI",
    },
    {
      title: "Field Force Productivity",
      subtitle: "Optimizing beats for maximum coverage",
      crux: "Redesigned sales beats using spatial analytics. Integrated historical outlet potential with real-time field activity data to improve outlet coverage and drop size.",
      industries: "FMCG · Personal Care",
      impact: "20% Higher Coverage",
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="FMCG Analytics Suite"
        tagline="Intelligence for Consumer Goods."
        description="Drive secondary sales growth, optimize distribution networks, and maximize trade spend efficiency with unified market data."
        imageSrc={buildAssetUrl("Images", "slider.jpg")}
        imageClassName="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        overlay="none"
      />

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
      <section className="py-[40px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
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
              className="section-heading"
            >
              What We Solve
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caps.map((it, idx) => (
              <ServiceImageCapabilityCard
                key={idx}
                {...it}
                delay={idx * 0.1}
                imageHeightClassName="h-48"
                imageHoverClassName="group-hover:scale-110"
                showImageGradient
              />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[40px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading text-left"
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
                <SectionIcon icon={module.icon} size="md" className="mb-6" />
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
      <section className="py-[40px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto text-left">
          <div className="text-left mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
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
      <section className="py-[40px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading-on-dark mb-6"
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
                <p className="text-[13px] font-medium text-white/40 leading-relaxed px-2 border-l-2 border-accent/20">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryUseCasesSection badge="Consumer Goods Case Studies" cases={useCases} />

      <PreFooterCTA />
    </PageShell>
  );
};
