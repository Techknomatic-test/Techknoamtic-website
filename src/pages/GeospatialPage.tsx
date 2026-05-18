import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
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
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Brain,
  Code
} from "lucide-react";

const GEO_IMG = "Images/Services/Geospatial Analytics";
const geoImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...GEO_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;
const GEO_HERO_IMG = geoImg("GISHero.jpg");
const GEO_TOOLS_IMG = geoImg("tolsandtech.jpg");

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const chips = content.split("·").map((s) => s.trim());

  return (
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-[15px] font-bold text-brand-950 dark:text-white group-hover:text-accent transition-colors">
          {title}
        </span>
        <div
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white"
              : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/10"
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6">
              <div className="flex flex-wrap gap-2">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full text-[12px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CapabilityCard = ({ title, description, image, delay = 0 }: { title: string; description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full overflow-hidden"
  >
    <div className="relative h-52 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1 text-left">
      {description}
    </p>
  </motion.div>
);

const ApproachStep = ({ num, title, description, delay = 0 }: { num: string; title: string; description: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
  >
    <div className="absolute top-8 right-8 text-4xl font-black text-slate-200 dark:text-white/5 group-hover:text-accent/20 transition-colors">
      {num}
    </div>
    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center mb-8 text-accent shadow-sm group-hover:scale-110 transition-transform">
      <Code className="w-5 h-5" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed px-2 border-l-2 border-accent/20 text-left">
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
    className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all h-full text-left"
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

const UseCaseCard = ({ title, subtitle, crux, industries, impact }: { title: string; subtitle: string; crux: string; industries: string; impact: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group text-left h-full flex flex-col"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/80 dark:text-white/80 mb-8 leading-snug">
      {subtitle}
    </p>
    
    <div className="space-y-6 flex-1">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Crux</h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Industries</h4>
          <p className="text-[14px] font-bold text-brand-950 dark:text-white italic">
            {industries}
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-black tracking-widest text-green-600 uppercase mb-3">Impact</h4>
          <p className="text-[14px] font-bold text-brand-950 dark:text-white italic">
            {impact}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const GeospatialPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const capabilities = [
    {
      title: "ArcGIS Platform Implementation",
      description: "Full-stack ArcGIS implementation across Enterprise, Online, and Pro for enterprise-grade GIS environments",
      image: `${GEO_IMG}/ArcGIS Platform Implementation.jpg`,
    },
    {
      title: "Geo-Dashboards & Visualisations",
      description: "Interactive map visualisations built in ArcGIS, Power BI Maps, Tableau, and Qlik.",
      image: `${GEO_IMG}/Geo Dashboards Visualisations.jpg`,
    },
    {
      title: "Field Operations & Mobile GIS",
      description: "ArcGIS Field Maps and Survey123 for real-time field data collection and asset management",
      image: `${GEO_IMG}/Field Operations & Mobile GIS.jpg`,
    },
    {
      title: "Location Data Integration",
      description: "Seamless integration with SAP, Salesforce, IoT systems, and external geodata sources",
      image: `${GEO_IMG}/Location Data Integration.jpg`,
    },
    {
      title: "Route Optimisation & Territory Planning",
      description: "Data-driven territory design and route optimisation for sales, service, and logistics teams",
      image: `${GEO_IMG}/Route Optimisation & Territory Planning.jpg`,
    },
    {
      title: "Spatial Risk & Pattern Detection",
      description: "Heatmaps, fraud clustering, and spatial pattern analysis for risk management and underwriting",
      image: `${GEO_IMG}/Spatial Risk & Pattern Detection.jpg`,
    },
  ];

  const toolsAccordions = [
    { title: "GIS Platforms", content: "ESRI ArcGIS Enterprise · ArcGIS Online · ArcGIS Pro" },
    { title: "Mobile GIS", content: "ArcGIS Field Maps · QuickCapture · Survey123 · Workforce" },
    { title: "BI Integration", content: "Power BI Maps · Tableau (StoryQ) · Qlik GeoAnalytics" },
    { title: "Enterprise Integration", content: "Azure · Salesforce · Talend · REST APIs · IoT Data Streams" },
  ];

  const approachSteps = [
    { num: "01", title: "Discover", description: "Understand spatial business questions, assess available location data, and map integration points" },
    { num: "02", title: "Design", description: "Define GIS architecture — data layers, coordinate systems, integration topology, and visualization strategy" },
    { num: "03", title: "Build", description: "Configure the ArcGIS environment, build geo-dashboards, and integrate with source systems and BI tools" },
    { num: "04", title: "Field-Enable", description: "Deploy mobile tools for field force, configure data collection forms, and establish real-time sync." },
    { num: "05", title: "Scale & Govern", description: "Establish geodata governance, automate refresh pipelines, and expand to new use cases and regions" },
  ];

  const differentiators = [
    {
      title: "ESRI Silver Partner",
      description: "Authorised reseller and implementation partner for the ArcGIS platform — direct vendor support and licensing.",
    },
    {
      title: "GIS + BI Integration Experts",
      description: "We combine geospatial precision with best-in-class BI for unified, location-aware insights",
    },
    {
      title: "Cross-Industry Delivery",
      description: "GIS projects delivered across BFSI, Mining, Pharma, Government, Retail, and Agriculture",
    },
    {
      title: "Full-Stack Ownership",
      description: "Strategy → Build → Deploy → Support. One accountable partner across the entire GIS lifecycle.",
    },
    {
      title: "Proven ROI",
      description: "GIS projects delivered across India, UAE, and Oman — with measurable, documented business outcomes",
    },
    {
      title: "Field-to-Enterprise Coverage",
      description: "From mobile field data collection to executive geo-dashboards — we cover the full spectrum",
    },
  ];

  const useCases = [
    {
      title: "Geospatial Location Intelligence & Market Expansion Analytics",
      subtitle: "Transform enterprise entity data into a spatial intelligence engine for sales and market growth.",
      crux: "Geo-code and classify 10,000+ enterprise entities from MCA records, business directories, and branch datasets into a centralized spatial master database. Apply proximity mapping, territory optimization, white-space analysis, and hotspot detection to identify high-potential sales corridors and improve market coverage visibility.",
      industries: "BFSI · Retail · Telecom · Logistics · FMCG",
      impact: "Improved territory planning · Faster expansion decisions · Optimized market coverage"
    },
    {
      title: "Geospatial Healthcare Intelligence & Hospital Network Analytics",
      subtitle: "Analyze healthcare accessibility and optimize facility network expansion using advanced GIS.",
      crux: "Integrate hospital locations, service coverage data, and demographic layers into a spatial healthcare intelligence platform. Use drive-time mapping, KDE, catchment area modeling, and underserved region (white-space) analysis to optimize healthcare expansion planning and service coverage across target geographies.",
      industries: "Healthcare · HealthTech · Insurance · Public Health · Hospital Networks",
      impact: "Improved accessibility analysis · Optimized expansion planning · Enhanced coverage visibility"
    },
    {
      title: "Geospatial Site Suitability & Retail Expansion Analytics",
      subtitle: "Identify high-potential outlet locations using multi-criteria spatial intelligence.",
      crux: "Integrate outlet data, traffic patterns, competitor presence, POI, and demographic profiles into a spatial suitability engine. Apply multi-criteria analysis, footfall heatmaps, delivery zone optimization, and trade area modeling to evaluate site feasibility and accelerate data-driven outlet expansion decisions for food chains and retailers.",
      industries: "QSR · Retail · FMCG · Food & Beverage · Franchise Expansion",
      impact: "Improved site selection · Reduced expansion risk · Optimized delivery coverage"
    },
    {
      title: "Geospatial Oil Spill Detection & Environmental Monitoring Analytics",
      subtitle: "Detect, monitor, and respond to environmental risks using remote sensing and GIS.",
      crux: "Process high-resolution aerial and satellite imagery alongside pipeline corridor data to detect oil spill anomalies, map affected zones, and assess environmental impact. Leverage OBIA, spectral analysis, change detection, and geo-fencing to enable proactive risk management and faster emergency response planning across operational corridors.",
      industries: "Oil & Gas · Energy · Environmental Monitoring · Utilities · Pipeline Infrastructure",
      impact: "Improved spill detection · Faster risk identification · Enhanced compliance readiness"
    }
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={GEO_HERO_IMG}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-black/15 to-black/45"
            aria-hidden
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Geospatial Analytics
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Location-Driven Intelligence for Smarter Decisions.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Enterprise-grade GIS strategy, ArcGIS implementation, mobile field operations, and geo-dashboards — engineered to put location at the center of business decisions.
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
              Most enterprise decisions have a "where" attached to them — where customers live, where assets move, where risks concentrate, where territories overlap. Yet location data often sits trapped in source systems, disconnected from analytics layers and invisible to decision-makers. Techknomatic helps organizations unlock that intelligence with end-to-end geospatial analytics services built on the ESRI ArcGIS platform.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              As an ESRI Silver Partner, we deliver full-stack GIS implementations — from ArcGIS Enterprise and Online setup to mobile field operations, geo-dashboards, route optimisation, and spatial risk analytics. Our work spans BFSI, Mining & Energy, Pharma, Utilities, Retail, and Agriculture, with proven delivery across India, UAE, and Oman — giving enterprises the location intelligence layer that traditional BI alone can't provide.
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
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Six core capabilities that span the full geospatial analytics lifecycle — from platform to field to dashboard.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              Tools & Technology
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl"
            >
              A platform-agnostic stack — we choose the right tool for your architecture, not the other way around.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[3rem] bg-slate-100 ring-1 ring-slate-200/80 dark:bg-white/5 dark:ring-white/10 shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <img
                  src={GEO_TOOLS_IMG}
                  alt="Geospatial tools and technology"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            
            </motion.div>
            <div className="bg-white dark:bg-transparent rounded-2xl">
              {toolsAccordions.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              Our Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A proven 5-step delivery framework that takes you from spatial discovery to enterprise-scale GIS adoption.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {approachSteps.map((step, idx) => (
              <ApproachStep key={idx} {...step} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[60px] px-6 bg-slate-100 dark:bg-brand-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Techknomatic for Geospatial Analytics
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Six differentiators that set our GIS practice apart — from platform credentials to delivery depth.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((it, i) => (
              <DifferentiatorCard key={i} title={it.title} description={it.description} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Use Cases
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Four high-impact geospatial intelligence programs we deliver for enterprises.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <UseCaseCard key={i} {...uc} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};

