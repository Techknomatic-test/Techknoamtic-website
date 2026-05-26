import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SectionIcon } from "../components/SectionIcon";
import {
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Thermometer,
  Cloud,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const OIL_GAS_IMG = "Images/Oil&Gas";
const oilGasHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${OIL_GAS_IMG}/${encodeURIComponent(file)}`;
const OIL_GAS_HERO_IMG = oilGasHeroImg("hero.jpg");
const OIL_GAS_SCADA_IMG = `${OIL_GAS_IMG}/SCADA & Process Integration.png`;

const AccordionItem = ({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-[17px] font-bold text-brand-950 dark:text-white group-hover:text-accent transition-colors">
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
            <div className="pb-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SolveCard = ({
  title,
  description,
  image,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden group h-full"
  >
    <div className="h-60 overflow-hidden relative">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-10 flex flex-col flex-grow text-left">
      <h4 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h4>
      <p className="text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  focusAreas,
  outcome,
}: {
  title: string;
  subtitle: string;
  crux: string;
  focusAreas: string;
  outcome: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
  >
    <h3 className="mb-2 min-h-[2.5rem] text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-5 min-h-[3rem] text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">
      {subtitle}
    </p>

    <div className="mb-6 flex flex-1 flex-col space-y-4">
      <p className="min-h-[4.5rem] text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {crux}
      </p>

      <div>
        <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">Focus Areas</h4>
        <p className="min-h-[2.5rem] text-[14px] font-bold text-brand-950 dark:text-white">{focusAreas}</p>
      </div>
    </div>

    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-white/5">
      <div className="flex items-center gap-3">
        <SectionIcon icon={Target} size="sm" hover="none" />
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">
          <span className="mr-2 uppercase tracking-wider text-accent">Outcome:</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

export const RefineryOperationsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      title: "Unplanned Failures",
      description: "Unplanned equipment failures due to reactive rather than predictive maintenance.",
      image: `${OIL_GAS_IMG}/1Unplanned equipment.jpg`,
    },
    {
      title: "Fragmented Data",
      description: "Fragmented data across SCADA, DCS, ERP, and historian systems.",
      image: `${OIL_GAS_IMG}/2Fragmented data.jpg`,
    },
    {
      title: "Visibility Gap",
      description: "Lack of real-time visibility into refinery unit performance and energy consumption.",
      image: `${OIL_GAS_IMG}/3realtimevisibility.jpg`,
    },
    {
      title: "HSE Reporting Bottlenecks",
      description: "HSE compliance and safety reporting bottlenecks from disconnected systems.",
      image: `${OIL_GAS_IMG}/4disconnected systems.jpg`,
    },
    {
      title: "Supply Chain Inefficiency",
      description: "Inefficient logistics and supply chain coordination driving up cost-per-barrel.",
      image: `${OIL_GAS_IMG}/5supplychain.jpg`,
    },
  ];

  const modules = [
    {
      title: "Operations Overview",
      outcome:
        "Get a single, real-time view of production performance from wellhead to refinery control room.",
      items: [
        "Track production KPIs by field, asset, and unit against plan and budget.",
        "Monitor throughput, uptime, and utilization for upstream, midstream, and downstream.",
        "Compare daily production with rolling averages and historical baselines.",
        "Surface bottlenecks across wells, lines, and refinery units in one dashboard.",
        "Drill down from enterprise view to asset, shift, and operator-level performance.",
        "Enable leadership with board-ready views that refresh in near real time.",
      ],
      icon: Layers,
    },
    {
      title: "Unit Performance",
      outcome:
        "Optimize every refinery unit with granular yield, quality, and constraint analytics.",
      items: [
        "Analyze crude blend vs. unit performance across distillation, cracking, and reforming.",
        "Track key quality parameters and off-spec production in real time.",
        "Monitor yield by cut, product slate, and unit operating mode.",
        "Identify underperforming units and campaigns with margin impact.",
        "Compare actuals vs. planning targets for throughput and recovery.",
        "Highlight opportunity barrels where minor changes unlock major value.",
      ],
      icon: Activity,
    },
    {
      title: "Energy Dashboard",
      outcome:
        "Reduce energy cost per barrel through continuous visibility into fuel and utilities performance.",
      items: [
        "Track fuel gas, power, steam, and cooling water consumption by unit.",
        "Monitor energy efficiency KPIs (e.g., SEC) against design and best-in-class benchmarks.",
        "Identify units and time windows with abnormal energy intensity.",
        "Correlate operating modes, load, and ambient conditions with energy usage.",
        "Quantify savings potential from optimization projects and campaigns.",
        "Provide management with CO₂ and energy footprint visibility across the site.",
      ],
      icon: Zap,
    },
    {
      title: "Equipment Health",
      outcome:
        "Move from reactive to predictive maintenance with live condition monitoring across critical assets.",
      items: [
        "Consolidate vibration, temperature, pressure, and run-length data for rotating equipment.",
        "Track health indices for pumps, compressors, turbines, and heat exchangers.",
        "Detect abnormal patterns and emerging failures well before breakdown.",
        "Prioritize maintenance work orders based on criticality and risk.",
        "Analyze repeat failures to address root causes, not just symptoms.",
        "Link downtime events to production and margin impact for better planning.",
      ],
      icon: Thermometer,
    },
    {
      title: "Environmental",
      outcome:
        "Strengthen compliance and ESG reporting with unified emissions and environmental monitoring.",
      items: [
        "Track flaring, venting, and stack emissions across units and sites.",
        "Monitor water intake, discharge, and waste generation against limits.",
        "Generate regulatory and internal reports from a single source of truth.",
        "Identify emission and waste hotspots for targeted mitigation.",
        "Correlate operating modes and campaigns with environmental footprint.",
        "Provide leadership with ESG dashboards that are audit-ready.",
      ],
      icon: Cloud,
    },
    {
      title: "Safety Analytics",
      outcome:
        "Reduce incidents and strengthen safety culture with data-driven HSE visibility.",
      items: [
        "Monitor incidents, near misses, and unsafe conditions by location and activity.",
        "Track PTW (Permit to Work) compliance across shifts and contractors.",
        "Analyze root causes, contributing factors, and recurring patterns.",
        "Identify high-risk tasks, zones, and time windows for focused interventions.",
        "Measure the impact of safety campaigns and training over time.",
        "Provide live HSE scorecards for supervisors and leadership teams.",
      ],
      icon: ShieldCheck,
    },
  ];

  const useCases = [
    {
      title: "Predictive equipment maintenance",
      subtitle: "ML-driven failure forecasting on sensor data",
      crux: "An upstream operator predicted equipment failures up to weeks in advance using ML models trained on real-time sensor data, significantly cutting unplanned downtime and maintenance costs.",
      focusAreas:
        "Sensor Data Monitoring · Failure Prediction · Downtime Reduction · Maintenance Scheduling",
      outcome: "Earlier warning of failures · Reduced downtime · Lower maintenance spend",
    },
    {
      title: "Refinery energy optimization",
      subtitle: "Energy dashboard for cost-per-barrel reduction",
      crux: "A refinery deployed the Energy Dashboard module and identified operational inefficiencies, resulting in a remarkable reduction in energy cost per barrel within the first quarter of deployment.",
      focusAreas:
        "Energy Consumption Tracking · Inefficiency Detection · Cost-Per-Barrel Analytics · Process Optimization",
      outcome: "Significant cost reduction · Faster ROI · Improved throughput efficiency",
    },
    {
      title: "HSE & safety incident reduction",
      subtitle: "Safety analytics integrated with PTW systems",
      crux: "By integrating Safety Analytics with their Permit-to-Work system, an O&G operator achieved a significant drop in near-miss incidents and markedly better compliance tracking across sites.",
      focusAreas:
        "Near-Miss Tracking · PTW Integration · Compliance Monitoring · Risk Alerts",
      outcome: "Fewer incidents · Stronger compliance · Safer worksites",
    },
  ];

  const systems = [
    "SCADA (Wonderware, InTouch, Ignition)",
    "DCS (Honeywell, Yokogawa, ABB)",
    "PI System and Historians",
    "LIMS for Quality Data",
    "ERP for Logistics and Maintenance",
    "IoT Sensors for Equipment Monitoring"
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={OIL_GAS_HERO_IMG}
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
            transition={{ delay: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Oil & Gas
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              From Wellhead To Boardroom Intelligence That Drives Every Decision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Connect field, plant, and operational data in one clear view. Improve
              reliability, safety, and production decisions with analytics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About The Industry Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full space-y-8 text-left">
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              The Oil & Gas sector operates in one of the world's most data-rich yet data-underutilized environments. Sensor streams from refineries, pipeline telemetry, SCADA systems, and logistics networks generate enormous volumes of operational data daily, most of it siloed and underanalyzed. In an industry where unplanned downtime costs millions per hour and environmental compliance is non-negotiable, Techknomatic brings full-stack data and AI capabilities purpose-built for upstream, midstream, and downstream operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading mb-4"
            >
              What We Solve
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeSolve.map((item, idx) => (
              <SolveCard key={idx} title={item.title} description={item.description} image={item.image} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-y border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              Oil & Gas Analytics Modules
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, i) => (
              <PlatformCapabilityCard key={i} {...module} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/50 overflow-hidden text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-left">
           
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              SCADA & Process Integration
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side: Image like Insurance Page */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/10 group"
            >
              <img
                loading="lazy"
                src={OIL_GAS_SCADA_IMG}
                alt="SCADA and process integration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Right side: Accordion */}
            <div className="text-left">
              <div className="space-y-4">
                <AccordionItem
                  title="Systems We Connect"
                  isOpen={openAccordion === 0}
                  onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                >
                  <ul className="space-y-4 list-none m-0">
                    {systems.map((system, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" />
                        <span className="text-[16px] text-brand-950 dark:text-white uppercase tracking-tight">
                          {system.split(' (')[0]}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </AccordionItem>
                
                <AccordionItem
                  title="Real-Time Data Pipeline"
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <div className="space-y-6">
                    <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl shadow-black/5">
                      <p className="text-[16px] font-medium leading-relaxed text-slate-500 dark:text-slate-400 border-l-2 border-accent/20 pl-4 mb-6">
                        "We build cloud-native pipelines that ingest process data from SCADA/DCS, normalize it, and make it available for analytics with sub-minute latency."
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Azure", "Snowflake", "Databricks", "Power BI"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-brand-950 dark:text-white border border-slate-200 dark:border-white/10 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
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
              Three high-impact deployments where AI analytics is transforming oil & gas operations — from
              predictive maintenance to energy optimization to HSE.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {useCases.map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
