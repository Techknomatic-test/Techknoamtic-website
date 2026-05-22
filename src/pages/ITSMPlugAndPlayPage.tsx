import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  BarChart,
  CheckCircle,
  Database,
  LayoutDashboard,
  MessageSquare,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const ISM_BASE = "Images/InsightSM";
const ISM_INDUSTRIES_FOLDER = "Industries We Serve";
const ISM_STACK_FOLDER = "Enterprise IT Stack";

const ismRootImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...ISM_BASE.split("/"), file].map(encodeURIComponent).join("/")}`;

const ismAsset = (folder: string, file: string) =>
  `${import.meta.env.BASE_URL}${[...ISM_BASE.split("/"), folder, file]
    .map(encodeURIComponent)
    .join("/")}`;

const ISM_HERO_IMG = ismRootImg("Herobanner.jpg");
const ISM_CHALLENGE_IMG = ismRootImg("Challenge.jpg");

const CapabilityCard = ({
  title,
  outcome,
  items,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  outcome: string;
  items: string[];
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex h-full flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
  >
    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-accent shadow-sm transition-transform duration-500 group-hover:scale-110 dark:bg-brand-900/50">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-xl font-bold leading-tight tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-6 text-[13px] font-bold italic text-brand-950/70 dark:text-white/60">{outcome}</p>
    <div className="mt-auto space-y-3 border-t border-slate-100 pt-6 dark:border-white/5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
          <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400">{item}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const IndustryCard = ({
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
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent" />
    </div>
    <div className="flex flex-1 flex-col p-10">
      <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <p className="text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  </motion.div>
);

const ConnectorCard = ({
  title,
  items,
  image,
  index,
  delay = 0,
}: {
  title: string;
  items: string[];
  image: string;
  index: number;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white text-left shadow-lg dark:border-white/10 dark:bg-white/5"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
    <div className="flex flex-grow flex-col p-8">
      <h3 className="mb-4 text-lg font-bold text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <div className="mt-auto flex flex-wrap gap-2 text-[12px] font-medium text-slate-500 dark:text-slate-400">
        {items.map((item, i) => (
          <span key={i} className="after:ml-2 after:content-['·'] last:after:content-['']">
            {item}
          </span>
        ))}
      </div>
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
    <h3 className="mb-2 text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-8 text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">{subtitle}</p>

    <div className="mt-auto space-y-6">
      <div>
        <p className="text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">{crux}</p>
      </div>

      <div>
        <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-accent">Focus Areas</h4>
        <p className="text-[14px] font-bold italic text-brand-950 dark:text-white">{focusAreas}</p>
      </div>

      <div className="border-t border-slate-100 pt-4 dark:border-white/5">
        <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">Outcome</h4>
        <p className="text-[13px] font-bold tracking-tight text-brand-950 dark:text-white">{outcome}</p>
      </div>
    </div>
  </motion.div>
);

export const ITSMPlugAndPlayPage = () => {
  const capabilities = [
    {
      title: "Unified ITSM Connectivity Layer",
      outcome: "Outcome: Connect every ITSM tool in your stack, without custom integration projects.",
      items: [
        "Plug-and-play connectors for ServiceNow, BMC Remedy, Jira SM, SolarWinds",
        "Extensible to any third-party ITSM system",
        "API-based and native database connectivity",
        "Automated schema discovery",
        "Table-level ingestion readiness",
        "Minimal custom integration effort",
      ],
      icon: Network,
    },
    {
      title: "Intelligent Data Sampling Engine",
      outcome: "Outcome: Validate dashboards and KPIs on sampled data, before committing to full-scale ingestion.",
      items: [
        "UI-driven dataset selection",
        "Controlled sampling of operational datasets",
        "Rapid ingestion into analytical environments",
        "Fast KPI and dashboard validation without data overload",
        "Faster stakeholder alignment with lower upfront cost",
        "Early visibility before full deployment",
      ],
      icon: Zap,
    },
    {
      title: "Pre-Built ITSM Data Models",
      outcome: "Outcome: Standardized data models eliminate manual schema harmonization across tools.",
      items: [
        "Incident lifecycle tracking",
        "SLA performance analysis",
        "Ticket workflow analytics",
        "Service request trend analysis",
        "Agent productivity metrics",
        "Escalation and backlog monitoring",
      ],
      icon: Database,
    },
    {
      title: "Enterprise KPI & Metrics Engine",
      outcome: "Outcome: A standardized KPI framework, consistent across every team, tool, and report.",
      items: [
        "MTTR (Mean Time to Resolution)",
        "MTBF (Mean Time Between Failures)",
        "SLA compliance and breach analysis",
        "First response time tracking",
        "Incident aging trend analysis",
        "Ticket backlog and resolution efficiency",
      ],
      icon: BarChart,
    },
    {
      title: "Pre-Built Operational Dashboards",
      outcome: "Outcome: Production-ready dashboards for every stakeholder, without long BI cycles.",
      items: [
        "CXO-level operational views",
        "Service desk performance dashboards",
        "Team-level operational insights",
        "Trend analysis and drill-down capability",
        "Real-time and near real-time refresh",
        "SLA monitoring and escalation visibility",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "Validation & Feedback Framework",
      outcome:
        "Outcome: Stakeholders validate dashboards before enterprise rollout, reducing rework and accelerating adoption.",
      items: [
        "Validate KPI definitions collaboratively",
        "Test dashboard usability before production",
        "Refine drill-down structures",
        "Map operational workflows",
        "Verify reporting accuracy",
        "Faster adoption with reduced post-deployment rework",
      ],
      icon: MessageSquare,
    },
    {
      title: "Production Data Pipeline Framework",
      outcome: "Outcome: Move from validated prototype to enterprise production, without rebuilding.",
      items: [
        "Full historical data ingestion",
        "Incremental data pipelines",
        "Batch and near real-time refresh",
        "Change-based synchronization",
        "Automated operational pipelines",
        "Seamless prototype-to-production transition",
      ],
      icon: Workflow,
    },
    {
      title: "Secure Multi-Tenant Deployment",
      outcome: "Outcome: Enterprise-grade security, governance, and deployment flexibility.",
      items: [
        "Cloud (AWS, Azure, GCP) and on-premise deployment options",
        "Role-based access control (RBAC)",
        "Multi-tenant architecture with data isolation",
        "Secure processing layers",
        "Auditability and governance controls",
        "Designed for regulated industries",
      ],
      icon: ShieldCheck,
    },
  ];

  const industries = [
    {
      title: "Banking & Financial Services",
      description:
        "Centralized SLA and incident analytics across banking operations and compliance reporting.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "banking-finace.jpg"),
    },
    {
      title: "Healthcare",
      description: "Hospital IT monitoring, application incident tracking, and uptime analytics for critical systems.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "Healthcare.jpg"),
    },
    {
      title: "Telecom",
      description: "Network operations SLA monitoring, outage analytics, and multi-vendor operational visibility.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "Telecom.jpg"),
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Store operations support, POS incident monitoring, and peak-season SLA performance tracking.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "retailecommerce.jpg"),
    },
    {
      title: "Manufacturing",
      description: "Plant IT operations, production support incident analytics, and operational downtime tracking.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "Manufacturing.jpg"),
    },
    {
      title: "Government & Public Sector",
      description: "Citizen service analytics, cross-department ITSM visibility, and shared services reporting.",
      image: ismAsset(ISM_INDUSTRIES_FOLDER, "goverment-publicsector.jpg"),
    },
  ];

  const steps = [
    {
      title: "Connect",
      content:
        "Plug-and-play connectors link to ServiceNow, BMC Remedy, Jira SM, SolarWinds, and other ITSM platforms via API or native DB. Automated schema discovery accelerates setup.",
      icon: Network,
    },
    {
      title: "Analyze",
      content:
        "Sampled operational data is ingested and processed through pre-built ITSM data models. Standardized KPIs (MTTR, MTBF, SLA breach, first response) are computed automatically.",
      icon: Database,
    },
    {
      title: "Validate",
      content:
        "Pre-built dashboards (CXO, service desk, team-level) render on sampled data. Stakeholders review KPI definitions, drill-downs, and accuracy before full rollout.",
      icon: CheckCircle,
    },
    {
      title: "Scale",
      content:
        "Once validated, InsightSM transitions to enterprise production mode, full historical ingestion, incremental pipelines, and near real-time refresh, without rebuilding the analytics layer.",
      icon: Zap,
    },
  ];

  const stack = [
    {
      title: "ITSM Platforms",
      image: ismAsset(ISM_STACK_FOLDER, "ITSM Platforms.jpg"),
      items: ["ServiceNow", "BMC Remedy", "Jira Service Management", "SolarWinds", "Extensible to any ITSM platform."],
    },
    {
      title: "Connectivity Methods",
      image: ismAsset(ISM_STACK_FOLDER, "ConnectivityMethods.jpg"),
      items: ["REST APIs", "Native database connectivity", "Webhooks", "Automated schema discovery."],
    },
    {
      title: "Data Refresh Modes",
      image: ismAsset(ISM_STACK_FOLDER, "Data Refresh Modes.jpg"),
      items: ["Sampled (validation phase)", "Batch (production)", "Near real-time", "Change-based synchronization."],
    },
    {
      title: "BI & Visualization Layer",
      image: ismAsset(ISM_STACK_FOLDER, "bivisulization.jpg"),
      items: ["Pre-built InsightSM dashboards", "Export to Power BI", "Tableau", "Qlik (optional)."],
    },
    {
      title: "Security & Access",
      image: ismAsset(ISM_STACK_FOLDER, "securityaccess.jpg"),
      items: ["Role-based access control (RBAC)", "Multi-tenant data isolation", "Audit logging", "Governance controls."],
    },
    {
      title: "Deployment Modes",
      image: ismAsset(ISM_STACK_FOLDER, "Deployment Modes.jpg"),
      items: ["AWS", "Azure", "GCP", "On-premise", "Hybrid."],
    },
  ];

  const useCases = [
    {
      title: "Banking & Financial Services",
      subtitle: "Centralized SLA, incident, and compliance visibility across banking IT operations.",
      crux: "InsightSM consolidates ITSM data from core banking, digital channels, and shared services into unified SLA, incident, and compliance dashboards. Branch performance, channel uptime, and audit-ready visibility, all from one analytics layer.",
      focusAreas: "SLA Monitoring · Digital Banking Incidents · Shared Services · IT Compliance · Branch Support",
      outcome: "Faster compliance reporting · Unified ops visibility · Audit-ready dashboards",
    },
    {
      title: "Healthcare",
      subtitle: "Hospital IT operations and clinical application uptime intelligence.",
      crux: "Track incident response across medical applications, monitor SLA for healthcare support, and ensure uptime visibility for critical systems like EHR and lab platforms. InsightSM gives hospital IT leaders the operational view they need without manual reporting cycles.",
      focusAreas: "Hospital IT Monitoring · Medical App Incidents · Healthcare SLA · System Uptime · Service Desk",
      outcome: "Higher critical-system uptime · Faster incident response · Lower IT effort",
    },
    {
      title: "Telecom",
      subtitle: "Network operations SLA and customer-impact incident analytics at scale.",
      crux: "InsightSM unifies ITSM data across network operations, customer-impact incidents, and multi-vendor support. Real-time outage visibility, ticket escalation analytics, and SLA monitoring across the entire telecom support ecosystem, in one operational view.",
      focusAreas: "Network Ops SLA · Outage Analytics · Customer-Impact Incidents · Multi-Vendor Ops · Support Center",
      outcome: "Faster outage resolution · Better vendor accountability · Real-time ops visibility",
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Store, POS, and warehouse operations support, visible from one dashboard.",
      crux: "Monitor store IT operations, POS and application incidents, warehouse and logistics support, and peak-season SLA performance. InsightSM gives retail IT and operations leaders the visibility to keep stores running and customers transacting through every season.",
      focusAreas: "Store Ops · POS Incidents · Warehouse Support · Peak-Season SLA · Customer Support",
      outcome: "Higher store uptime · Better peak-season readiness · Faster issue resolution",
    },
    {
      title: "Manufacturing",
      subtitle: "Plant IT operations and production support intelligence.",
      crux: "Track plant IT operations, production support incidents, and operational downtime through unified ITSM analytics. Vendor support performance, enterprise service requests, and downtime root-cause visibility, all consolidated for plant and corporate IT leaders.",
      focusAreas: "Plant IT Ops · Production Support · Downtime Tracking · Vendor Performance · Service Requests",
      outcome: "Reduced production downtime · Better vendor SLAs · Consolidated plant visibility",
    },
    {
      title: "Government & Public Sector",
      subtitle: "Cross-department ITSM visibility for citizen service operations.",
      crux: "InsightSM consolidates ITSM data across government departments, enabling unified citizen service analytics, operational KPI tracking, and SLA monitoring for public services. Shared services reporting and cross-department visibility delivered through a single analytics platform.",
      focusAreas:
        "Citizen Service Analytics · Public Service KPIs · Cross-Department ITSM · Government SLAs · Shared Services",
      outcome: "Faster citizen response · Cross-dept accountability · Standardized public-service reporting",
    },
  ];

  return (
    <div className="pt-[110px]">
      <section className="relative flex min-h-[min(50vh,480px)] items-center overflow-hidden bg-[#020617] px-6 py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            loading="lazy"
            src={ISM_HERO_IMG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60"
            aria-hidden
          />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[56px]"
          >
            InsightSM
          </motion.h1>
          <div className="w-full max-w-none">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-heading-on-dark mb-6"
            >
              Unified IT Operations Visibility Across Every ITSM Tool
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-normal leading-relaxed text-slate-400 text-justify w-full"
            >
              An AI-powered analytics wrapper that sits on top of your existing ITSM ecosystem, turning fragmented
              operational data into unified, real-time intelligence. Deploy production-grade ITSM dashboards in days,
              not months.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-slate-100 bg-white px-6 py-[60px] text-left dark:border-white/5 dark:bg-brand-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
           
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 text-justify"
            >
              Most large enterprises run their IT operations on multiple ITSM platforms simultaneously, ServiceNow in
              one business unit, BMC Remedy in another, Jira Service Management for engineering, SolarWinds for
              infrastructure monitoring. Each tool serves its purpose, but together they create a fragmented operational
              landscape where leadership lacks a unified view of IT performance. SLA reporting is inconsistent. KPI
              definitions vary by team. BI teams spend weeks building dashboards. And CIOs are left making operational
              decisions on stale, siloed data.
            </motion.p>
          </div>

          <div className="grid items-center gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <img
                loading="lazy"
                src={ISM_CHALLENGE_IMG}
                alt="ITSM challenge"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-8">
                <p className="border-l-4 border-accent pl-4 text-sm font-bold leading-relaxed text-white">
                  The result: delayed operational decisions, inconsistent SLA tracking, and a constant drain on BI teams.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6 self-start lg:pt-4">
              <h4 className="mb-8 text-[14px] font-black uppercase tracking-widest text-accent">
                Common Operational Pain Points
              </h4>
              {[
                "No unified visibility across IT operations and ITSM platforms",
                "Inconsistent KPI definitions and SLA reporting across teams",
                "Delayed reporting cycles and manual dashboarding effort",
                "High dependency on BI and data engineering teams for every report",
                "Slow rollout of analytics initiatives, months to first dashboard",
                "Limited operational intelligence for CIOs, CTOs, and service leaders",
                "Lack of accountability and traceability across support functions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-[16px] leading-tight text-brand-950 dark:text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 px-6 py-[60px] text-left dark:bg-brand-900/20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              What InsightSM Solves
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-2 text-[12px] font-bold text-brand-950/70 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
            >
              From fragmented ITSM data to unified operational intelligence
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 text-justify"
            >
              InsightSM is a rapid ITSM analytics accelerator that sits on top of your existing ITSM ecosystem , 
              delivering enterprise-grade operational intelligence in days. The platform connects multiple ITSM tools,
              harmonizes operational data, standardizes KPIs, and deploys validated dashboards before committing to
              full-scale enterprise rollout. No rip-and-replace. No multi-month BI projects. Just immediate, unified
              visibility across IT operations.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[60px] text-left dark:bg-brand-950">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium text-slate-500 dark:text-slate-400"
            >
              Purpose-built for any IT-heavy enterprise, wherever ITSM data fragmentation slows operational
              decision-making.
            </motion.p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => (
              <IndustryCard key={idx} {...ind} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-[60px] text-left dark:bg-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-8"
            >
              How InsightSM Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-none text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 text-justify"
            >
               InsightSM follows a systematic, four-stage deployment architecture designed for speed, accuracy, and
              enterprise scale. By separating the validation phase from the production rollout, we allow stakeholders to
              align on KPIs and dashboard usability with zero data risk, ensuring the final production environment is built
              on trust, efficiency, and proven operational value. Our unique sample-first deployment flow transforms the
              complexity of fragmented ITSM ecosystems into immediate, unified operational intelligence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-accent/50">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="mb-4 text-left text-xl font-bold capitalize text-brand-950 transition-colors group-hover:text-accent dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-left text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    {step.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[60px] text-left dark:bg-brand-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              Built to Plug Into Your Enterprise IT Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-lg font-medium text-slate-500 dark:text-slate-400 text-justify"
            >
              InsightSM is designed as a connector-first, deployment-flexible platform. Whether your operations live in
              ServiceNow, BMC Remedy, Jira Service Management, SolarWinds, or a combination of all four, InsightSM
              connects through reusable plug-and-play connectors and ingests data without disrupting your existing ITSM
              workflows.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((group, idx) => (
              <ConnectorCard
                key={idx}
                index={idx}
                title={group.title}
                items={group.items}
                image={group.image}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-[60px] text-left dark:bg-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 w-full max-w-none text-lg font-medium text-slate-500 dark:text-slate-400 text-justify"
            >
              Six domain-specific deployments where InsightSM is replacing manual ITSM reporting with unified operational
              intelligence.
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
