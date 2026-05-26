import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
﻿import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SolveCardsSection, UseCasesSection } from "../components/product-page";
import {
  ShieldCheck,
  FileText,
  Activity,
  Users,
  LayoutDashboard,
  Clock,
  Monitor,
  ChevronDown,
  ChevronUp,
  RefreshCw,
} from "lucide-react";

const ITSM_IMG = "Images/ITSM";
const itsmHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${ITSM_IMG}/${encodeURIComponent(file)}`;
const ITSM_HERO_IMG = itsmHeroImg("ITSM.jpg");
const ITSM_PLATFORM_IMG = `${ITSM_IMG}/itsm_platform.jpg`;

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

export const ITSMAnalyticsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      title: "Support Team Overload",
      description: "High ticket volumes overwhelming L1 and L2 support teams.",
      image: `${ITSM_IMG}/1supportteams.jpg`,
    },
    {
      title: "SLA Breaches",
      description: "SLA breaches caused by poor ticket routing and prioritization.",
      image: `${ITSM_IMG}/SLA breache.jpg`,
    },
    {
      title: "Self-Service Gap",
      description: "No self-service options forcing users to log every minor request.",
      image: `${ITSM_IMG}/3users to log.jpg`,
    },
    {
      title: "Reactive Incidents",
      description: "Reactive incident management with no early warning signals.",
      image: `${ITSM_IMG}/4warningsignals.jpg`,
    },
    {
      title: "Siloed ITSM Data",
      description: "Siloed ITSM data that never gets turned into actionable intelligence.",
      image: `${ITSM_IMG}/5SiloedITSMdata.jpg`,
    },
  ];

  const modules = [
    {
      title: "Executive Dashboard",
      outcome:
        "Give CIOs and IT leaders a single-pane view of IT operations health and performance.",
      items: [
        "Track total ticket volumes, open vs. closed ratio, and backlog trends.",
        "Monitor SLA compliance rates across priorities, categories, and business units.",
        "View agent productivity, resolution time, and workload distribution at a glance.",
        "Surface top incident categories and recurring problems for strategic action.",
        "Provide leadership with board-ready dashboards that update in real time.",
        "Enable drill-down from portfolio view to team, agent, and ticket level.",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "SLA Dashboard",
      outcome:
        "Stop SLA breaches before they happen with real-time risk visibility and automated alerts.",
      items: [
        "Track SLA compliance across response, resolution, and escalation time bands.",
        "Identify tickets at risk of breach before deadlines are missed.",
        "Monitor SLA performance by priority, category, assignment group, and customer.",
        "Surface repeat offenders — agents, groups, or ticket types with chronic delays.",
        "Provide automated escalation triggers for tickets approaching breach thresholds.",
        "Generate trend analytics to show SLA performance improvement over time.",
      ],
      icon: Clock,
    },
    {
      title: "Incident Analytics",
      outcome:
        "Turn raw ticket data into actionable insight with deep pattern and root-cause visibility.",
      items: [
        "Analyze incident trends by category, subcategory, priority, and business service.",
        "Track incident volume, TAT, first-call resolution, and escalation rates.",
        "Identify top recurring incidents, error patterns, and high-volume issue clusters.",
        "Surface root-cause patterns across technology stack, application, and infrastructure.",
        "Measure MTTR (Mean Time to Resolve) and MTBF (Mean Time Between Failures).",
        "Provide shift-wise and agent-wise incident load and resolution analytics.",
      ],
      icon: Activity,
    },
    {
      title: "Change Management",
      outcome:
        "Reduce change failures and improve deployment confidence with structured change analytics.",
      items: [
        "Track total changes by type — standard, normal, emergency — across environments.",
        "Monitor change success rate, rollback rate, and failed change incidents.",
        "Identify high-risk changes, CAB approval delays, and scheduling conflicts.",
        "Analyze post-change incidents to correlate changes with downstream disruptions.",
        "Provide CAB-ready reports on change volume, risk, and compliance by business unit.",
        "Track implementation backlog and change lead time for capacity planning.",
      ],
      icon: RefreshCw,
    },
    {
      title: "Asset CMDB",
      outcome:
        "Know exactly what you own, where it lives, and how it impacts service delivery.",
      items: [
        "Track hardware, software, and cloud assets with lifecycle and depreciation data.",
        "Map asset relationships and dependencies to understand change impact.",
        "Monitor asset health, warranty status, and end-of-life alerts proactively.",
        "Identify underutilized, over-provisioned, or unmanaged assets across the estate.",
        "Link assets to incidents, changes, and service requests for root-cause correlation.",
        "Generate compliance and license audit reports ready for internal and external audits.",
      ],
      icon: Monitor,
    },
    {
      title: "Vendor Performance",
      outcome:
        "Hold every vendor accountable with data-driven SLA tracking and performance benchmarking.",
      items: [
        "Track vendor SLA compliance across response time, resolution time, and quality KPIs.",
        "Compare vendor performance across categories — MSP, cloud provider, SaaS, hardware.",
        "Monitor ticket volumes, resolution quality, and escalations per vendor.",
        "Identify underperforming vendors and quantify cost of poor performance.",
        "Generate vendor scorecards for quarterly business reviews and contract renewals.",
        "Track penalty calculations and SLA credit recoveries by contract.",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Team Productivity",
      outcome:
        "Turn IT teams into high-performing units with transparent, data-backed performance visibility.",
      items: [
        "Track ticket volumes, resolution time, and backlog per agent and group.",
        "Measure first-call resolution, reopen rate, and customer satisfaction by agent.",
        "Identify top performers and agents who need coaching or workload adjustment.",
        "Monitor shift-wise coverage, ticket distribution, and handoff delays.",
        "Analyze group collaboration patterns — internal escalations, handoffs, consults.",
        "Provide leadership with team health dashboards that highlight bottlenecks and wins.",
      ],
      icon: Users,
    },
    {
      title: "Service Request",
      outcome:
        "Streamline request fulfillment with clear visibility into demand, cycle time, and satisfaction.",
      items: [
        "Track service request volumes by type — access, onboarding, IT procurement, HR.",
        "Monitor fulfillment cycle time from submission to closure by request category.",
        "Analyze request backlog, pending actions, and bottlenecks in fulfillment workflows.",
        "Measure requestor satisfaction and identify repeat request patterns by user or department.",
        "Track auto-approval rates, manual intervention volume, and fulfillment SLA compliance.",
        "Identify demand forecasting opportunities for capacity and resource planning.",
      ],
      icon: FileText,
    },
  ];

  const useCases = [
    {
      title: "Intelligent ticket auto-resolution",
      subtitle: "AI-driven L1 ticket handling on ServiceNow",
      crux: "An enterprise IT team achieved significant automated resolution of L1 tickets using TicketIQ on ServiceNow, freeing staff to focus on complex incidents and reducing overall resolution time in a remarkable way.",
      focusAreas:
        "L1 Ticket Automation · Auto-Classification · ServiceNow Integration · Agent Deflection",
      outcome: "Higher auto-resolution rate · Faster TAT · Staff freed for complex work",
    },
    {
      title: "SLA breach prediction & prevention",
      subtitle: "Early breach alerts with dynamic re-prioritization",
      crux: "With early breach alerts from the SLA Dashboard, an IT ops team saw a significant reduction in SLA violations through dynamic re-prioritization of at-risk tickets before deadlines were missed.",
      focusAreas:
        "SLA Monitoring · Breach Prediction · Dynamic Prioritization · Escalation Automation",
      outcome: "Fewer SLA violations · Better QoQ performance · More proactive escalation",
    },
    {
      title: "CIO-level ITSM visibility",
      subtitle: "Live executive dashboard replacing manual reports",
      crux: "A global enterprise replaced multiple weekly manual reports with a single Executive Dashboard that consolidated ticket trends, vendor SLAs, and change success rates — giving CIOs and leaders remarkably clearer, real-time visibility without manual effort.",
      focusAreas:
        "Executive Reporting · Ticket Trend Analysis · Vendor SLA Tracking · Change Success Metrics",
      outcome: "Richer executive reports · Real-time visibility · Zero manual reporting effort",
    },
  ];

  const systems = [
    "ServiceNow",
    "ManageEngine",
    "Freshservice",
    "BMC Remedy",
    "Jira Service Management"
  ];

  return (
    <PageShell bare>
            <PageHero
        title="IT Service Management (ITSM)"
        tagline="Resolve Faster. Predict Smarter. Serve Better AI for modern ITSM"
        description="Transform service data into faster resolution and smarter support. Boost SLA performance, agent productivity, and user experience."
        imageSrc={ITSM_HERO_IMG}
      />

      {/* Intro Section */}
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
              IT Service Management teams are the backbone of enterprise operations  and under immense pressure. Ticket volumes are exploding, SLAs are tightening, and end-user expectations have never been higher. Yet most ITSM operations still rely on manual triaging, keyword-based routing, and reactive problem-solving. Techknomatic brings AI and analytics to ITSM automating the repetitive, surfacing the critical, and helping IT leaders make proactive decisions before incidents become outages.
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
              ITSM Analytics Modules
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
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-left">
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
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
                loading="lazy"
                src={ITSM_PLATFORM_IMG}
                alt="ITSM platform integration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
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
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-[16px] font-medium text-brand-950 dark:text-white tracking-tight">
                          {system}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
                
                <AccordionItem
                  title="BI Output"
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <div className="space-y-6">
                    <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl shadow-black/5">
                      <p className="text-[16px] font-medium leading-relaxed text-slate-500 dark:text-slate-400 border-l-2 border-accent/20 pl-4 mb-6">
                        Power BI reports ready to publish to your Power BI Service with role-based views for CIO, IT Manager, and L1/L2 teams.
                        <br />
                        <br />
                        Also available: ITSM Plug & Play 20+ pre-built dashboards, live in 2 weeks
                      </p>
                      <div className="flex items-center gap-4">
                        
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCasesSection
        description="Three high-impact deployments where AI-powered ITSM analytics is automating ticket resolution, preventing SLA breaches, and delivering real-time executive visibility."
        cases={useCases}
      />

      <PreFooterCTA />
    </PageShell>
  );
};
