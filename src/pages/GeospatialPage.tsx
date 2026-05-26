import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  ChipAccordionItem,
  ServiceApproachStep,
  ServiceImageCapabilityCard,
  ServiceUseCasesSection,
} from "../components/product-page";
import { SectionIcon } from "../components/SectionIcon";
import {
  Map as MapIcon,
  Navigation,
  ShieldCheck,
  Users,
  ArrowRight,
  Zap,
  Layers,
  Search,
  Monitor,
  Cpu,
  Database,
  Satellite,
  Compass,
  CheckCircle2,
  Layout,
  Smartphone,
  RefreshCw,
  Code
} from "lucide-react";

const GEO_IMG = "Images/Services/Geospatial Analytics";
const geoImg = (file: string) => buildAssetUrl(GEO_IMG, file);
const GEO_HERO_IMG = geoImg("GISHero.jpg");
const GEO_TOOLS_IMG = geoImg("tolsandtech.jpg");

export const GeospatialPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const capabilities = [
    {
      title: "ArcGIS Platform Implementation",
      description: "Full-stack ArcGIS implementation across Enterprise, Online, and Pro for enterprise-grade GIS environments.",
      image: `${GEO_IMG}/ArcGIS Platform Implementation.jpg`,
    },
    {
      title: "Geo-Dashboards & Visualisations",
      description: "Interactive map visualisations built in ArcGIS, Power BI Maps, Tableau, and Qlik.",
      image: `${GEO_IMG}/Geo Dashboards Visualisations.jpg`,
    },
    {
      title: "Field Operations & Mobile GIS",
      description: "ArcGIS Field Maps and Survey123 for real-time field data collection and asset management.",
      image: `${GEO_IMG}/Field Operations & Mobile GIS.jpg`,
    },
    {
      title: "Location Data Integration",
      description: "Seamless integration with SAP, Salesforce, IoT systems, and external geodata sources.",
      image: `${GEO_IMG}/Location Data Integration.jpg`,
    },
    {
      title: "Route Optimisation & Territory Planning",
      description: "Data-driven territory design and route optimisation for sales, service, and logistics teams.",
      image: `${GEO_IMG}/Route Optimisation & Territory Planning.jpg`,
    },
    {
      title: "Spatial Risk & Pattern Detection",
      description: "Heatmaps, fraud clustering, and spatial pattern analysis for risk management and underwriting.",
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
    { num: "01", title: "Discover", description: "Understand spatial business questions, assess available location data, and map integration points.", icon: Search },
    { num: "02", title: "Design", description: "Define GIS architecture, data layers, coordinate systems, integration topology, and visualization strategy.", icon: Layers },
    { num: "03", title: "Build", description: "Configure the ArcGIS environment, build geo-dashboards, and integrate with source systems and BI tools.", icon: Code },
    { num: "04", title: "Field-Enable", description: "Deploy mobile tools for field force, configure data collection forms, and establish real-time sync.", icon: Smartphone },
    { num: "05", title: "Scale & Govern", description: "Establish geodata governance, automate refresh pipelines, and expand to new use cases and regions.", icon: ShieldCheck },
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
    <PageShell bare>
            <PageHero
        title="Geospatial Analytics"
        tagline="Location-Driven Intelligence for Smarter Decisions"
        description="Enterprise-grade GIS strategy, ArcGIS implementation, mobile field operations, and geo-dashboards, engineered to put location at the center of business decisions."
        imageSrc={GEO_HERO_IMG}
      />

      {/* Intro Section */}
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full space-y-8 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Most enterprise decisions have a "where" attached to them, where customers live, where assets move, where risks concentrate, where territories overlap. Yet location data often sits trapped in source systems, disconnected from analytics layers and invisible to decision-makers. Techknomatic helps organizations unlock that intelligence with end-to-end geospatial analytics services built on the ESRI ArcGIS platform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              As an ESRI Partner, we deliver full-stack GIS implementations, from ArcGIS Enterprise and Online setup to mobile field operations, geo-dashboards, route optimisation, and spatial risk analytics. Our work spans BFSI, Mining & Energy, Pharma, Utilities, Retail, and Agriculture, with proven delivery across India, UAE, and Oman, giving enterprises the location intelligence layer that traditional BI alone can't provide.
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
              className="section-heading mb-4"
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
              Six core capabilities that span the full geospatial analytics lifecycle, from platform to field to dashboard.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <ServiceImageCapabilityCard key={it.title} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[40px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              Tools & Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              A platform-agnostic stack, we choose the right tool for your architecture, not the other way around.
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
                  loading="lazy"
                  src={GEO_TOOLS_IMG}
                  alt="Geospatial tools and technology"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

            </motion.div>
            <div className="bg-white dark:bg-transparent rounded-2xl">
              {toolsAccordions.map((item, index) => (
                <ChipAccordionItem
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
      <section className="py-[40px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-10 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading-on-dark mb-6"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium"
            >
              A proven 5-step delivery framework that takes you from spatial discovery to enterprise-scale GIS adoption.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 w-full pb-12">
            {approachSteps.map((step, idx) => (
              <ServiceApproachStep key={step.title} {...step} variant="slate" delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <ServiceUseCasesSection
        description="Four high-impact geospatial intelligence programs we deliver for enterprises."
        cases={useCases}
        sectionClassName="py-[40px] px-6 bg-white dark:bg-brand-950"
        titleClassName="section-heading mb-4"
      />

      <PreFooterCTA />
    </PageShell>
  );
};

