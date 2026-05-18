import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Factory,
  BarChart3,
  Zap,
  Settings,
  Truck,
  TrendingUp,
  Boxes,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Users,
  LucideIcon,
} from "lucide-react";

const MFG_IMG = "Images/manufacturing";
const mfgHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${MFG_IMG}/${encodeURIComponent(file)}`;
const MFG_HERO_IMG = mfgHeroImg("herobanner.jpg");
const MFG_SYSTEMS_IMG = `${MFG_IMG}/Systems Integration.jpg`;

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

const ModuleCard = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: LucideIcon; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all group flex flex-col h-full text-left"
  >
    <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-6 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-accent/20 pl-4">
      {description}
    </p>
  </motion.div>
);

const UseCaseCard = ({ title, description, impact, delay = 0, icon: Icon }: { title: string; description: string; impact: string; delay?: number; icon: LucideIcon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group flex flex-col h-full text-left"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-left">
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase">Use Case</h4>
        <h3 className="text-2xl font-bold text-brand-950 dark:text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
    
    <div className="space-y-6 flex-1 mb-10 text-left">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Context</h4>
        <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-accent/20 pl-4">
          {description}
        </p>
      </div>
    </div>
    
    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 text-left">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <p className="text-[14px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
          {impact}
        </p>
      </div>
    </div>
  </motion.div>
);

export const ManufacturingAnalyticsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      title: "Machine Downtime",
      description: "Unplanned machine downtime eating into OEE and production targets",
      image: `${MFG_IMG}/1Unplannedmachinedowntime.jpg`,
    },
    {
      title: "Late Quality Detection",
      description: "Quality defects detected too late in the cycle — driving costly rework and waste",
      image: `${MFG_IMG}/2Quality defects detected.jpg`,
    },
    {
      title: "Supply Chain Blind Spots",
      description: "Supply chain blind spots causing procurement delays and line stoppages",
      image: `${MFG_IMG}/3Supply chain blind spots.jpg`,
    },
    {
      title: "Disconnected Systems",
      description: "Disconnected ERP, MES, and SCADA systems making plant data invisible to leadership",
      image: `${MFG_IMG}/5Disconnected ERP.jpg`,
    },
    {
      title: "Manual Reporting Lag",
      description: "Manual production reporting that is always lagging, never live",
      image: `${MFG_IMG}/6Manualproductionreporting.jpg`,
    },
  ];

  const dashboardModules = [
    {
      title: "OEE Dashboard",
      description: "Availability, performance, quality",
      icon: BarChart3,
    },
    {
      title: "Production Line",
      description: "Output, cycle time, rejects",
      icon: Factory,
    },
    {
      title: "Maintenance",
      description: "PM schedules, work orders, costs",
      icon: Settings,
    },
    {
      title: "Quality Control",
      description: "Defects, FPY, CAPA",
      icon: ClipboardCheck,
    },
    {
      title: "Energy & Utilities",
      description: "Consumption, costs, targets",
      icon: Zap,
    },
    {
      title: "Inventory",
      description: "WIP, finished goods, warehousing",
      icon: Boxes,
    },
    {
      title: "Supply Chain",
      description: "Inbound, outbound, lead times",
      icon: Truck,
    },
    {
      title: "Cost Analytics",
      description: "Per unit, per plant, per shift",
      icon: TrendingUp,
    }
  ];

  const systemsIntegrationList = [
    "SAP (PP, QM, PM modules)",
    "Oracle ERP",
    "Microsoft Dynamics",
    "MES Systems",
    "SCADA and IoT Sensors",
    "CMMS for Maintenance"
  ];

  const industryVerticals = [
    "Automotive",
    "Industrial Equipment",
    "Electronics",
    "Food & Beverage"
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617] text-left">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={MFG_HERO_IMG}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
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
            Manufacturing
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance leading-relaxed"
            >
              Smart Factories Start with Smarter Data — AI for Modern Manufacturing
            </motion.h2>
          </div>
        </div>
      </section>

      {/* About The Industry Section */}
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <motion.div className="max-w-7xl mx-auto">
          <motion.div className="max-w-7xl space-y-12 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent"
            >
              About The Industry
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-7xl"
            >
              Manufacturing is in the midst of a fundamental transformation. Industry 4.0 has unlocked massive potential — but most manufacturers are still struggling to connect their ERP, MES, and SCADA systems, make sense of shop floor data, and translate operational metrics into strategic decisions. Whether managing discrete, process, or hybrid manufacturing — the challenges of downtime, quality failures, supply chain disruption, and energy costs demand an intelligent, data-driven response. Techknomatic brings that intelligence to your floor — and your boardroom.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left overflow-hidden">
        <motion.div className="max-w-7xl mx-auto">
          <motion.div className="text-left mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              What We Solve
            </motion.h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeSolve.map((it, idx) => (
              <SolveCard key={idx} title={it.title} description={it.description} image={it.image} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 border-y border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-20 text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Manufacturing Dashboard Modules
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {dashboardModules.map((module, i) => (
              <ModuleCard key={i} {...module} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[40px] px-6 bg-slate-50/50 dark:bg-brand-900/50 overflow-hidden text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Systems Integration
            </motion.h3>
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
                src={MFG_SYSTEMS_IMG}
                alt="Systems integration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="text-left space-y-12">
              <div className="space-y-4">
                <AccordionItem
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
                </AccordionItem>
                
                <AccordionItem
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
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[40px] px-6 bg-white dark:bg-brand-950 text-left">
        <motion.div className="max-w-7xl mx-auto text-left">
          <motion.div className="mb-20 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent bg-accent/5 rounded-full border border-accent/20"
            >
              Success Stories
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Use Cases
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <UseCaseCard 
              title="OEE Improvement Across Production Lines"
              description="A discrete manufacturer achieved X% OEE improvement by identifying top downtime contributors per shift using the OEE Dashboard connected to MES and SCADA systems."
              impact="X%"
              icon={Zap}
            />
            <UseCaseCard 
              title="Quality Defect Reduction with CAPA Tracking"
              description="Integrating Quality Control analytics with SAP QM reduced rejection rates by X% and cut CAPA closure time in half across 4 production lines."
              impact="X%"
              delay={0.1}
              icon={BrainCircuit}
            />
            <UseCaseCard 
              title="Multi-Plant Supply Chain Visibility"
              description="A 6-plant enterprise standardized inbound lead time tracking and reduced excess WIP inventory by X% through real-time demand-supply visibility."
              impact="X%"
              delay={0.2}
              icon={Users}
            />
          </div>
        </motion.div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
