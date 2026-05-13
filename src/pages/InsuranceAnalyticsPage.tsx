import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  ShieldCheck,
  FileText,
  UserCheck,
  Search,
  AlertTriangle,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Coins,
  History,
  Building2,
  Users2,
  LineChart,
  MapPin,
  Activity,
  TrendingUp,
  Layout,
  Map,
  Users,
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

export const InsuranceAnalyticsPage = () => {
    const caps = [
    {
      title: "Claims Optimization",
      description: "Significantly reduce claim turnaround time and identify complex fraud patterns early.",
      image: "Images/23498.jpg"
    },
    {
      title: "Fraud Detection",
      description: "AI-powered fraud detection engines that continuously learn from historical settlement patterns.",
      image: "Images/2152005500.jpg"
    },
    {
      title: "Agent Performance",
      description: "360° view of agent productivity, conversion rates, and automated training needs assessment.",
      image: "Images/291956.jpg"
    },
    {
      title: "Customer 360",
      description: "Unified customer view across policies, claims, and multi-channel interactions for high retention.",
      image: "Images/2151680571.jpg"
    }
  ];

  const modules = [
    {
      title: "Claims Analytics",
      description: "TAT tracking, settlement analysis, provider performance",
      imageUrl: "Images/12437.jpg",
    },
    {
      title: "Policy Performance",
      description: "Portfolio analysis, renewal rates, lapse prediction",
      imageUrl: "Images/33931.jpg",
    },
    {
      title: "Underwriting Insights",
      description: "Risk scoring, pricing optimization, case prioritization",
      imageUrl: "Images/3d-graph-computer-illustration.jpg",
    },
    {
      title: "Agent Productivity",
      description: "Sales metrics, activity tracking, pipeline management",
      imageUrl: "Images/2988.jpg",
    },
    {
      title: "Fraud & Compliance",
      description:
        "Pattern recognition, anomaly detection, investigation support",
      imageUrl:
        "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg",
    },
    {
      title: "Customer Analytics",
      description: "Churn prediction, cross-sell opportunities, NPS tracking",
      imageUrl: "Images/AI & GenAI.jpg",
    },
  ];

  const outcomes = [
    { label: "Reduction in Claim TAT", value: "22", suffix: "%" },
    { label: "Dashboards Deployed", value: "40", suffix: "+" },
    { label: "Customers Covered by GIS", value: "200", suffix: "K+" },
    { label: "Fraud Detection Improvement", value: "35", suffix: "%" },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none text-left">
          <img
            src="Images/3170.jpg"
            alt="Insurance Background"
            className="absolute inset-0 w-full h-full object-contain opacity-30 scale-110"
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
            BFSI SOLUTIONS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Insurance Analytics Suite
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Intelligence for Modern Carriers.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Optimize claims, detect fraud, and empower your agencies with data-driven insights tailored for the insurance lifecycle.
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
              The insurance industry is navigating a fundamental shift toward data-centricity. Techknomatic's Insurance Analytics Suite provides a unified foundation to bridge the gap between complex legacy pools and growth strategy. We modernize fragmented data into a unified, cloud-native foundation ready for the enterprise scale.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution integrates cross-channel data to provide a 360-degree view of your policies, claims, and agent efficiency. By applying advanced pattern detection to historical and real-time streams, we enable automated underwriting and predictive fraud strategies that reduce claim TAT and optimize loss ratios across your entire portfolio.
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
              CARRIER CORE SOLUTIONS
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
      <section className="py-[100px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden">
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
              <CapabilityCard
                key={i}
                title={module.title}
                description={module.description}
                image={module.imageUrl}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Intelligence Section */}
      <section className="py-[100px] bg-white dark:bg-brand-950 px-6 overflow-hidden">
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
                Location Intelligence.
              </motion.h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Claim heatmaps & spatial clustering",
                  "Branch & agent territory optimization",
                  "Risk zone mapping & exposure analysis",
                  "Geotagged CRM leads distribution",
                  "Environmental risk modeling",
                  "Real-time incident mapping",
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
              className="p-12 bg-accent text-white rounded-[3rem] shadow-2xl shadow-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin className="w-40 h-40" />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  Geo-Analytics Impact
                </h3>
                <p className="text-white/80 font-medium mb-10 leading-relaxed text-lg">
                  "Our Insurance GIS analytics have helped carriers reduce claim
                  TAT by 22% and improve renewal targeting through
                  location-based customer insights."
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["ESRI Silver Partner", "ArcGIS", "PostGIS", "QGIS"].map(
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
            {outcomes.map((stat, i) => (
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
              A high-velocity path for insurer digital transformation.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Mapping complex underwriting and claim silos." },
              { step: "02", title: "Data Lakehouse", description: "Engineering the cloud foundation for policy records." },
              { step: "03", title: "NBO Modeling", description: "Implementing 'Next Best Offer' for cross-sell growth." },
              { step: "04", title: "Dashboarding", description: "Deploying carrier-wide role-based analytics." },
              { step: "05", title: "Fraud AI", description: "Integrating real-time anomaly detection into workflows." }
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
