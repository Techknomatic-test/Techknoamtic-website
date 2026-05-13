import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Globe,
  Map as MapIcon,
  Navigation,
  ShieldCheck,
  Users,
  Settings,
  Target,
  ArrowRight,
  Zap,
  Layers,
  Search,
  Monitor,
  Cpu,
  Database,
  Satellite,
  Compass,
  Award,
  CheckCircle2,
  Layout,
  Smartphone,
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

const DifferentiatorCard = ({ title, description, idx }: { title: string; description: string; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
      <CheckCircle2 className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const GeospatialPage = () => {
    const caps = [
    {
      title: "ArcGIS Platform Implementation",
      description: "Full-stack ESRI ArcGIS implementation — Enterprise, Online, and Pro for enterprise-grade GIS.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800"
    },
    {
      title: "Geo-Dashboards & Visualizations",
      description: "Interactive map visualizations in ArcGIS, Power BI Maps, Tableau, and Qlik for spatial clarity.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800"
    },
    {
      title: "Field Operations & Mobile GIS",
      description: "ArcGIS Field Maps, Survey123 for real-time field data collection and management workflows.",
      image: "https://images.unsplash.com/photo-1512428559087-56096ce17540?auto=format&fit=crop&w=800"
    },
    {
      title: "Location Data Integration",
      description: "Seamless integration with SAP, Salesforce, IoT, and enterprise systems using spatial ETL.",
      image: "https://images.unsplash.com/photo-1551288049-bbda4e38f71?auto=format&fit=crop&w=800"
    },
    {
      title: "Route & Territory Optimization",
      description: "Data-driven territory design and route optimization for sales, delivery, and logistics.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
    },
    {
      title: "Spatial Risk & Pattern Detection",
      description: "Heatmaps, fraud clustering, and spatial pattern analysis for advanced risk management.",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=800"
    },
  ];

  const industryUseCases = [
    {
      title: "Insurance/BFSI",
      description: [
        "Claim heatmaps",
        "Branch optimization",
        "Geotagged CRM leads",
        "Risk zone mapping",
      ],
      color: "bg-[#f0f9ff]/50 dark:bg-blue-900/10",
    },
    {
      title: "Mining/Energy",
      description: [
        "Live boundary monitoring",
        "Drone overlays",
        "Geo-fencing",
        "Asset tracking",
      ],
      color: "bg-[#fffaf0]/50 dark:bg-orange-900/10",
    },
    {
      title: "Pharma/Healthcare",
      description: [
        "Doctor mapping",
        "Territory realignment",
        "Coverage analysis",
        "Field force optimization",
      ],
      color: "bg-[#f0fff4]/50 dark:bg-green-900/10",
    },
    {
      title: "Utilities/Government",
      description: [
        "Pipeline visualization",
        "Service coverage",
        "Citizen mapping",
        "Infrastructure planning",
      ],
      color: "bg-[#faf5ff]/50 dark:bg-purple-900/10",
    },
  ];

  const whyGeospatial = [
    {
      title: "ESRI Silver Partner",
      description: "Certified implementation partner for ArcGIS platform.",
      icon: Award,
    },
    {
      title: "GIS + BI Integration Experts",
      description:
        "We combine geospatial with traditional BI for unified insights.",
      icon: CheckCircle2,
    },
    {
      title: "Cross-Industry Use Cases",
      description:
        "Experience in BFSI, mining, utilities, pharma, and government.",
      icon: CheckCircle2,
    },
    {
      title: "Full-Stack Delivery",
      description: "Strategy → Build → Deploy → Support — complete ownership.",
      icon: CheckCircle2,
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
            Location Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Geospatial Systems
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Unlock the power of 'Where'. Turn spatial data into strategic intelligence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              We build enterprise GIS solutions that turn complex spatial data into intuitive location intelligence for faster, data-driven decisions.
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
              Nearly 80% of all organizational data has a location component, yet it remains one of the most underutilized assets. Techknomatic bridges this gap by integrating Geographic Information Systems (GIS) into your existing BI and decision-making workflows. We help you see patterns that spreadsheets simply cannot show.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              From optimizing field force routes and managing massive infrastructure assets to identifying claim fraud clusters, our location intelligence services bring a new dimension to your enterprise data. Partnering with industry leaders like ESRI, we deliver map-driven insights that drive operational efficiency and market dominance.
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
              WHAT WE OFFER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Geospatial Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight"
            >
              Industry Applications
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryUseCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group"
              >
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 group-hover:text-accent transition-colors">
                  {uc.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uc.description.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white dark:bg-white/10 border border-slate-100 dark:border-white/20 rounded-full text-[13px] font-bold text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Techknomatic for Geospatial
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Our silver partnership with ESRI and cross-industry expertise ensure GIS success.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGeospatial.map((it, i) => (
              <DifferentiatorCard key={i} title={it.title} description={it.description} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
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
              Structured frameworks for ArcGIS deployment and location data integration.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Assessment", description: "Evaluating current spatial data sets and GIS software landscape." },
              { step: "02", title: "Architecture", description: "Designing ESRI ArcGIS Enterprise or Cloud architecture." },
              { step: "03", title: "Integration", description: "Connecting spatial data with ERP, CRM, and BI systems." },
              { step: "04", title: "Development", description: "Building custom geo-dashboards and mobile field applications." },
              { step: "05", title: "Enablement", description: "User training and Center of Excellence (CoE) handover." }
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

// Add Brain import to lucide-react list in the file if needed, or just use Target/Activity
import { Brain } from "lucide-react";
