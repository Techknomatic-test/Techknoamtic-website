import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import {
  ExpandableAccordionItem,
  SolveCardsSection,
  UseCasesSection,
} from "../components/product-page";
import {
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Thermometer,
  Cloud,
} from "lucide-react";

const OIL_GAS_IMG = "Images/Oil&Gas";
const oilGasHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${OIL_GAS_IMG}/${encodeURIComponent(file)}`;
const OIL_GAS_HERO_IMG = oilGasHeroImg("hero.jpg");
const OIL_GAS_SCADA_IMG = `${OIL_GAS_IMG}/SCADA & Process Integration.png`;

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
    <PageShell bare>
            <PageHero
        title="Oil & Gas"
        tagline="From Wellhead To Boardroom Intelligence That Drives Every Decision"
        description="Connect field, plant, and operational data in one clear view. Improve reliability, safety, and production decisions with analytics."
        imageSrc={OIL_GAS_HERO_IMG}
      />

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

      <SolveCardsSection
        title="What We Solve"
        items={whatWeSolve}
        gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      />

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
                <ExpandableAccordionItem
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
                </ExpandableAccordionItem>
                
                <ExpandableAccordionItem
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
                </ExpandableAccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCasesSection
        description="Three high-impact deployments where AI analytics is transforming oil & gas operations — from predictive maintenance to energy optimization to HSE."
        cases={useCases}
      />

      <PreFooterCTA />
    </PageShell>
  );
};
