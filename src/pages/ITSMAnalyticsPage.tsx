import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  Layers,
  Users,
  BarChart3,
  ClipboardCheck,
  History,
  LayoutDashboard,
  Clock,
  TrendingUp,
  Settings,
  Database,
  Monitor,
  ChevronDown,
  ChevronUp,
  LucideIcon,
  Cpu,
  BarChart4,
  RefreshCw
} from "lucide-react";

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

const SolveCard = ({ description, image, delay = 0 }: { description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative group h-[400px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-xl"
  >
    <img 
      src={image} 
      alt="ITSM Challenge" 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
        <p className="text-[15px] font-medium text-white leading-relaxed italic border-l-2 border-accent/50 pl-4">
          {description}
        </p>
      </div>
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
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight">
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
        <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-accent/20 pl-4">
          {description}
        </p>
      </div>
    </div>
    
    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 text-left">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <Settings className="w-4 h-4" />
        </div>
        <p className="text-[14px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
          {impact}
        </p>
      </div>
    </div>
  </motion.div>
);

export const ITSMAnalyticsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      description: "High ticket volumes overwhelming L1 and L2 support teams",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
    },
    {
      description: "SLA breaches caused by poor ticket routing and prioritization",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      description: "No self-service options forcing users to log every minor request",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      description: "Reactive incident management with no early warning signals",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    },
    {
      description: "Siloed ITSM data that never gets turned into actionable intelligence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const modules = [
    {
      title: "Executive Dashboard",
      description: "CIO-level KPI overview",
      icon: LayoutDashboard
    },
    {
      title: "SLA Dashboard",
      description: "Breach risk and compliance",
      icon: Clock
    },
    {
      title: "Incident Analytics",
      description: "Trends and patterns in ticket data",
      icon: Activity
    },
    {
      title: "Change Management",
      description: "Change success rates and risk assessment",
      icon: RefreshCw
    },
    {
      title: "Asset CMDB",
      description: "Hardware and software asset tracking",
      icon: Monitor
    },
    {
      title: "Vendor Performance",
      description: "Vendor SLA tracking and management",
      icon: ShieldCheck
    },
    {
      title: "Team Productivity",
      description: "Agent and group performance metrics",
      icon: Users
    },
    {
      title: "Service Request",
      description: "SR categorization and fulfillment cycle",
      icon: FileText
    }
  ];

  const systems = [
    "ServiceNow",
    "ManageEngine",
    "Freshservice",
    "BMC Remedy",
    "Jira Service Management"
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-[80px] px-6 overflow-hidden bg-[#020617] text-left">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
            alt="ITSM Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <div className="flex items-center gap-3 mb-8">
            <Link to="/" className="text-[10px] font-black tracking-widest text-white/40 hover:text-accent transition-colors uppercase">Home</Link>
            <div className="w-1 h-1 rounded-full bg-accent/40" />
            <span className="text-[10px] font-black tracking-widest text-accent uppercase">Industries</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            Digital Operations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            IT SERVICE MANAGEMENT (ITSM)
          </motion.h1>
          <div className="max-w-4xl text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-8 tracking-tight leading-relaxed"
            >
              Resolve Faster. Predict Smarter. Serve Better — AI for Modern ITSM
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl space-y-12 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase"
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
              IT Service Management teams are the backbone of enterprise operations — and under immense pressure. Ticket volumes are exploding, SLAs are tightening, and end-user expectations have never been higher. Yet most ITSM operations still rely on manual triaging, keyword-based routing, and reactive problem-solving. Techknomatic brings AI and analytics to ITSM — automating the repetitive, surfacing the critical, and helping IT leaders make proactive decisions before incidents become outages.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
               What We Solve
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Addressing Core ITSM Challenges
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeSolve.map((item, idx) => (
              <SolveCard key={idx} description={item.description} image={item.image} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-y border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-20 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              Analytics Hub
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              ITSM Analytics Dashboard Modules
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, i) => (
              <ModuleCard key={i} {...module} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/50 overflow-hidden text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left">
             <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              Unified Ecosystem
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              ITSM Platform Integration
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
                src="https://images.unsplash.com/photo-1551434678-0ed915e76222?auto=format&fit=crop&q=80&w=1200" 
                alt="ITSM Integration" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
            </motion.div>
            
            {/* Right side: Accordion */}
            <div className="text-left">
              <div className="space-y-4">
                <AccordionItem
                  title="Supported Platforms"
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
                        <span className="text-[16px] font-bold text-brand-950 dark:text-white uppercase tracking-tight">
                          {system}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </AccordionItem>
                
                <AccordionItem
                  title="BI Output & Plug-and-Play"
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <div className="space-y-6">
                    <div className="p-8 rounded-[2rem] bg-accent text-white shadow-xl shadow-accent/10">
                      <p className="text-[16px] font-medium leading-relaxed italic border-l-2 border-white/30 pl-4 mb-6">
                        "Power BI reports ready to publish to your Power BI Service with role-based views for CIO, IT Manager, and teams. Plus, ITSM Plug & Play — 20+ pre-built dashboards, live in 2 weeks."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-black">2W</div>
                        <div className="text-[11px] font-bold uppercase tracking-wider opacity-70 leading-tight">Live in<br/>Two Weeks</div>
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
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-20 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <UseCaseCard 
              title="Intelligent Ticket Auto-Resolution"
              description="An enterprise IT team achieved significant auto-resolution of L1 tickets using TicketIQ on ServiceNow — freeing staff to focus on complex incidents."
              impact="X% Auto-Resolution"
              icon={Zap}
            />
            <UseCaseCard 
              title="SLA Breach Prediction & Prevention"
              description="With early breach alerts from the SLA Dashboard, an IT ops team reduced SLA violations quarter-on-quarter through dynamic re-prioritization."
              impact="X% Breach Reduction"
              icon={TrendingUp}
            />
            <UseCaseCard 
              title="CIO-Level ITSM Visibility"
              description="A global enterprise replaced 6 weekly manual reports with a single Executive Dashboard — consolidating ticket trends, vendor SLAs, and change success rates live."
              impact="Real-time Visibility"
              icon={LayoutDashboard}
            />
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
