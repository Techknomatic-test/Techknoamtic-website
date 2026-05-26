import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import {
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Thermometer,
  Cloud,
  Settings,
  HardHat,
  ChevronDown,
  ChevronUp,
  LucideIcon,
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

const ModuleCard = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: LucideIcon; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all group flex flex-col h-full text-left"
  >
    <SectionIcon icon={Icon} size="lg" hover="rotate" className="mb-8" />
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-accent/20 pl-4">
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
      <SectionIcon icon={Icon} size="md" hover="none" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-brand-950 dark:text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
    
    <div className="space-y-6 flex-1 text-left">
      <div>
        <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-accent/20 pl-4">
          {description}
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
      description: "Real-time production KPIs and targets.",
      icon: Layers
    },
    {
      title: "Unit Performance",
      description: "Distillation, conversion, yield analysis.",
      icon: Activity
    },
    {
      title: "Energy Dashboard",
      description: "Fuel consumption, steam balance, efficiency.",
      icon: Zap
    },
    {
      title: "Equipment Health",
      description: "Vibration, temperature, run-length tracking.",
      icon: Thermometer
    },
    {
      title: "Environmental",
      description: "Emissions, water, waste tracking.",
      icon: Cloud
    },
    {
      title: "Safety Analytics",
      description: "Incidents, near-misses, PTW tracking.",
      icon: ShieldCheck
    }
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
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-y border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-8 text-left">
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Oil & Gas Analytics Modules
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((module, i) => (
              <ModuleCard key={i} {...module} delay={i * 0.1} />
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
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-8 text-left">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Use Cases
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <UseCaseCard 
              title="Predictive Equipment Maintenance"
              description="An upstream operator predicted failures up to 2 weeks in advance using ML models on sensor data, predicting failures up to 2 weeks in advance."
              impact="X% Downtime Reduction"
              icon={Settings}
            />
            <UseCaseCard 
              title="Refinery Energy Optimization"
              description="A refinery deployed the Energy Dashboard module and identified inefficiencies resulting in X% reduction in energy cost per barrel within the first quarter."
              impact="X% Energy Savings"
              icon={Zap}
            />
            <UseCaseCard 
              title="HSE & Safety Incident Reduction"
              description="By integrating Safety Analytics with their PTW system, an O&G operator reduced near-miss incidents by X% and improved compliance tracking."
              impact="X% Incident Reduction"
              icon={HardHat}
            />
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
