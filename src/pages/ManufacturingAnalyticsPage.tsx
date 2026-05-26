import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
﻿import { motion } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import {
  ExpandableAccordionItem,
  SolveCardsSection,
  UseCasesSection,
} from "../components/product-page";
import {
  Factory,
  BarChart3,
  Zap,
  Settings,
  Truck,
  TrendingUp,
  Boxes,
  ClipboardCheck,
} from "lucide-react";

const MFG_IMG = "Images/manufacturing";
const mfgHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${MFG_IMG}/${encodeURIComponent(file)}`;
const MFG_HERO_IMG = mfgHeroImg("herobanner.jpg");
const MFG_SYSTEMS_IMG = `${MFG_IMG}/Systems Integration.jpg`;

export const ManufacturingAnalyticsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      title: "Machine Downtime",
      description: "Unplanned machine downtime eating into OEE and production targets.",
      image: `${MFG_IMG}/1Unplannedmachinedowntime.jpg`,
    },
    {
      title: "Late Quality Detection",
      description: "Quality defects detected too late in the cycle, driving costly rework and waste.",
      image: `${MFG_IMG}/2Quality defects detected.jpg`,
    },
    {
      title: "Supply Chain Blind Spots",
      description: "Supply chain blind spots causing procurement delays and line stoppages.",
      image: `${MFG_IMG}/3Supply chain blind spots.jpg`,
    },
    {
      title: "Disconnected Systems",
      description: "Disconnected ERP, MES, and SCADA systems making plant data invisible to leadership.",
      image: `${MFG_IMG}/5Disconnected ERP.jpg`,
    },
    {
      title: "Manual Reporting Lag",
      description: "Manual production reporting that is always lagging, never live.",
      image: `${MFG_IMG}/6Manualproductionreporting.jpg`,
    },
  ];

  const dashboardModules = [
    {
      title: "OEE Dashboard",
      outcome:
        "Raise factory-floor performance with live Availability, Performance, and Quality visibility per line and shift.",
      items: [
        "Track OEE at machine, cell, and line level against target benchmarks.",
        "Break down downtime into planned stops, breakdowns, and minor losses.",
        "Identify top downtime contributors by shift, operator, and product SKU.",
        "Monitor real-time production rate vs. design speed and optimal throughput.",
        "Highlight quality scrap and rework input that erodes net OEE.",
        "Enable continuous improvement with OEE trend analytics and benchmarking.",
      ],
      icon: BarChart3,
    },
    {
      title: "Production Line",
      outcome:
        "Bring every production line into focus with real-time output, cycle time, and rejection tracking.",
      items: [
        "Capture output volumes and throughput per line, station, and product family.",
        "Track cycle time trends and identify which stations are slowing the line.",
        "Monitor WIP movement between stations and detect queue bottlenecks.",
        "Log reject counts and defect types at each station for rapid root-cause analysis.",
        "Provide shift-wise and operator-wise performance visibility for team huddles.",
        "Highlight underperforming lines that need process or equipment intervention.",
      ],
      icon: Factory,
    },
    {
      title: "Maintenance",
      outcome:
        "Move from reactive to planned maintenance with scheduled PM visibility, work orders, and cost control.",
      items: [
        "Track scheduled vs. actual preventive maintenance (PM) completion rates.",
        "Monitor work order status — open, in progress, closed, and overdue.",
        "Identify repeat breakdowns and components that drive unplanned maintenance cost.",
        "Link breakdown events to production loss for maintenance ROI visibility.",
        "Track maintenance cost per machine, shift, and plant against budget.",
        "Provide CMMS-integrated dashboards for planner and supervisor oversight.",
      ],
      icon: Settings,
    },
    {
      title: "Quality Control",
      outcome:
        "Reduce defects and improve first-pass quality with deep defect, FPY, and CAPA visibility.",
      items: [
        "Track defects by type, station, SKU, and shift for targeted quality action.",
        "Monitor first-pass yield (FPY) and pass rate (合格率) per line and product.",
        "Analyze rejection reasons and trending defect patterns over time.",
        "Track corrective and preventive action (CAPA) status and closure rates.",
        "Link quality events to machine, operator, raw material lot, or process parameter.",
        "Enable SPC chart visibility for critical-to-quality characteristics.",
      ],
      icon: ClipboardCheck,
    },
    {
      title: "Energy & Utilities",
      outcome:
        "Cut energy cost per unit with granular consumption, cost, and target tracking across the plant.",
      items: [
        "Track electricity, gas, water, steam, and compressed air consumption per line and shift.",
        "Calculate specific energy consumption (SEC) per unit and per product family.",
        "Compare consumption against daily, monthly, and annual energy targets.",
        "Identify off-spec consumption and waste hotspots for quick savings wins.",
        "Correlate energy usage with production volumes and operating hours.",
        "Track utility cost allocation per plant, department, and cost center.",
      ],
      icon: Zap,
    },
    {
      title: "Inventory",
      outcome:
        "Eliminate surprises in WIP and finished goods with real-time stock, movement, and aging analytics.",
      items: [
        "Monitor raw material stock levels, consumption patterns, and safety stock alerts.",
        "Track WIP across process stages with aging analysis and queue time visibility.",
        "Track finished goods by warehouse, line, and customer segment.",
        "Highlight slow-moving or obsolete inventory that ties up working capital.",
        "Provide pegging between demand, production orders, and available stock.",
        "Enable replenishment signals based on consumption and lead time data.",
      ],
      icon: Boxes,
    },
    {
      title: "Supply Chain",
      outcome:
        "Bring clarity to inbound, outbound, and lead time performance for better planning and reliability.",
      items: [
        "Track inbound delivery performance by supplier and commodity.",
        "Monitor outbound shipment status, dispatch adherence, and on-time delivery.",
        "Calculate lead time by supplier, route, and mode for planning accuracy.",
        "Flag supplier delays and logistics bottlenecks before they impact production.",
        "Provide vendor scorecards with lead time, OTIF, and quality data.",
        "Link procurement commitments to production schedules for coordinated execution.",
      ],
      icon: Truck,
    },
    {
      title: "Cost Analytics",
      outcome:
        "See cost per unit, per plant, and per shift with full operational cost transparency.",
      items: [
        "Calculate manufacturing cost per unit, per SKU, and per product family.",
        "Allocate direct material, labor, energy, and maintenance costs accurately.",
        "Compare cost performance across plants and shifts.",
        "Track cost trending and identify periods or lines with cost escalation.",
        "Surface cost drivers that benefit most from lean or Kaizen intervention.",
        "Provide management with unit cost, productivity, and margin dashboards.",
      ],
      icon: TrendingUp,
    },
  ];

  const systemsIntegrationList = [
    "SAP (PP, QM, PM modules) — Orders, Quality, and Maintenance data",
    "Oracle ERP — Finance, procurement, and inventory feeds",
    "Microsoft Dynamics — Cross-module manufacturing operations support",
    "MES Systems — Real-time production and quality data ingestion",
    "SCADA and IoT Sensors — Machine-level telemetry and alarm integration",
    "CMMS for Maintenance — Work orders, schedules, and failure history",
  ];

  const useCases = [
    {
      title: "OEE improvement across production lines",
      subtitle: "OEE dashboard connected to MES and SCADA systems",
      crux: "A discrete manufacturer achieved significant OEE improvement by identifying top downtime contributors per shift using the OEE Dashboard connected to MES and SCADA systems, enabling targeted corrective actions.",
      focusAreas:
        "OEE Tracking · Downtime Analysis · MES & SCADA Integration · Shift-Level Reporting",
      outcome: "Noticeable OEE gain · Reduced unplanned downtime · Faster root cause resolution",
    },
    {
      title: "Quality defect reduction with CAPA tracking",
      subtitle: "Quality control analytics integrated with SAP QM",
      crux: "Integrating Quality Control analytics with SAP QM delivered a remarkable reduction in rejection rates and cut CAPA closure time dramatically across production lines, improving overall product quality and compliance.",
      focusAreas:
        "Defect Detection · CAPA Management · SAP QM Integration · Rejection Rate Analytics",
      outcome: "Fewer rejections · Faster CAPA closure · Improved compliance",
    },
    {
      title: "Multi-plant supply chain visibility",
      subtitle: "Real-time demand-supply tracking across 6 plants",
      crux: "A 6-plant enterprise standardized inbound lead time tracking and reduced excess WIP inventory through real-time demand-supply visibility, enabling smarter procurement and production planning with significantly better control across plants.",
      focusAreas:
        "Lead Time Tracking · WIP Inventory Reduction · Demand-Supply Balancing · Multi-Plant Consolidation",
      outcome: "Lower WIP levels · More standardized reporting · Better procurement decisions",
    },
  ];

  const industryVerticals = [
    "Automotive",
    "Industrial Equipment",
    "Electronics",
    "Food & Beverage"
  ];

  return (
    <PageShell bare>
            <PageHero
        title="Manufacturing"
        tagline="Smart Factories Start with Smarter Data, AI for Modern Manufacturing"
        description="Unify production, quality, and supply chain insights in real time. Drive efficiency, reduce downtime, and improve plant performance."
        imageSrc={MFG_HERO_IMG}
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
              Manufacturing is in the midst of a fundamental transformation. Industry 4.0 has unlocked massive potential, but most manufacturers are still struggling to connect their ERP, MES, and SCADA systems, make sense of shop floor data, and translate operational metrics into strategic decisions. Whether managing discrete, process, or hybrid manufacturing, the challenges of downtime, quality failures, supply chain disruption, and energy costs demand an intelligent, data-driven response. Techknomatic brings that intelligence to your floor, and your boardroom.
            </motion.p>
          </div>
        </div>
      </section>

      <SolveCardsSection
        title="What We Solve"
        items={whatWeSolve}
        sectionClassName="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left overflow-hidden"
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
              Manufacturing Modules
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dashboardModules.map((module, i) => (
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
              className="section-heading mb-4"
            >
              Systems Integration
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl"
            >
              Built to integrate seamlessly with your existing manufacturing stack.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/10 group"
            >
              <img
                loading="lazy"
                src={MFG_SYSTEMS_IMG}
                alt="Systems integration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="text-left space-y-4">
              <div className="space-y-4">
                <ExpandableAccordionItem
                  title="Supported Platforms"
                  isOpen={openAccordion === 0}
                  onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                >
                  <ul className="flex flex-col gap-4 m-0 p-0">
                    {systemsIntegrationList.map((system, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-[17px] font-medium text-slate-500 dark:text-slate-400">
                          {system}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ExpandableAccordionItem>
                
                <ExpandableAccordionItem
                  title="Multi-Plant Visibility"
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <div className="space-y-6">
                    <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      We have implemented manufacturing analytics across multiple plants with standardized KPIs and plant-specific drill-downs.
                    </p>
                    <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                      {industryVerticals.map((industry) => (
                        <span
                          key={industry}
                          className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-white/10 whitespace-nowrap transition-colors hover:bg-slate-200 dark:hover:bg-white/10"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </ExpandableAccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCasesSection
        description="Three high-impact deployments where AI-powered manufacturing analytics is improving OEE, reducing quality defects, and delivering real-time supply chain visibility."
        cases={useCases}
      />

      <PreFooterCTA />
    </PageShell>
  );
};
