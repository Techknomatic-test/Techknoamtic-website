import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Activity,
  ClipboardCheck,
  Cpu,
  Eye,
  FileSearch,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const DPIQ_BASE = "Images/DataPulseIQ";
const DPIQ_INDUSTRIES_FOLDER = "Industries We Serv";
const DPIQ_STACK_FOLDER = "Enterprise Data Stack";

const dpiqRootImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...DPIQ_BASE.split("/"), file].map(encodeURIComponent).join("/")}`;

const dpiqAsset = (folder: string, file: string) =>
  `${import.meta.env.BASE_URL}${[...DPIQ_BASE.split("/"), folder, file]
    .map(encodeURIComponent)
    .join("/")}`;

const DPIQ_HERO_IMG = dpiqRootImg("Hero.jpg");
const DPIQ_PAIN_POINTS_IMG = dpiqRootImg("painpoints.jpg");

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
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition-transform group-hover:scale-110">
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-1">
      <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <p className="mb-6 text-[13px] font-bold italic leading-snug text-brand-950/70 dark:text-white/60">{outcome}</p>
      <ul className="list-none space-y-3 border-t border-slate-100 pt-6 dark:border-white/5">
        {items.map((item, i) => (
          <li key={i} className="group/item flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/40" />
            <span className="text-[13px] font-medium text-slate-500 transition-colors group-hover/item:text-brand-950 dark:text-slate-400 dark:group-hover/item:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  focusAreas,
  outcome,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  crux: string;
  focusAreas: string;
  outcome: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
  >
    <h3 className="mb-2 text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-8 text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">{subtitle}</p>

    <div className="mb-10 flex-1 space-y-6">
      <div>
        <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-accent">Crux</h4>
        <p className="text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">{crux}</p>
      </div>
      <div>
        <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-accent">Focus Areas</h4>
        <p className="text-[13px] font-bold italic text-brand-950 dark:text-white">{focusAreas}</p>
      </div>
    </div>

    <div className="mt-auto border-t border-slate-100 pt-6 dark:border-white/5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
          <Target className="h-4 w-4 text-accent" />
        </div>
        <p className="text-[13px] font-bold italic text-brand-950 dark:text-white">
          <span className="mr-2 uppercase tracking-wider text-accent not-italic">Outcome:</span>
          {outcome}
        </p>
      </div>
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

export const DataGuardPage = () => {
  const capabilities = [
    {
      title: "Capability 1, Universal Data Source Connectivity",
      outcome: "Outcome: Connect every enterprise data source, without heavy ingestion projects.",
      items: [
        "Plug-and-play connectivity to cloud, on-premise, and hybrid systems",
        "Native support for AWS, Azure, GCP, lakehouses, and warehouses",
        "PostgreSQL and extensible connector framework",
        "ERP and operational system connectivity",
        "Secure encrypted credential handling",
        "Lightweight onboarding with no heavy ingestion setup",
      ],
      icon: Network,
    },
    {
      title: "Capability 2, Real-Time Data Quality Observability",
      outcome: "Outcome: Complete visibility into data quality across tables, columns, and business rules.",
      items: [
        "Null value analysis and completeness validation",
        "Duplicate detection across keys and entities",
        "Schema drift monitoring and change tracking",
        "Referential integrity checks across systems",
        "Trend analysis and anomaly tracking over time",
        "Severity-based issue classification",
      ],
      icon: Eye,
    },
    {
      title: "Capability 3, AI-Powered Recommendations Engine",
      outcome: "Outcome: Beyond alerts, intelligent recommendations and guided remediation actions.",
      items: [
        "AI detection of anomalies, null spikes, and duplicate keys",
        "Cross-column inconsistency and schema mismatch identification",
        "PII exposure risk detection",
        "Recommended constraint enforcement and deduplication",
        "Validation, masking, and encryption recommendations",
        "Index optimization and rule improvement guidance",
      ],
      icon: Cpu,
    },
    {
      title: "Capability 4, Autonomous Data Agent",
      outcome: "Outcome: Natural-language data operations, from manual SQL to AI-assisted diagnostics.",
      items: [
        "Conversational interface for data quality and governance",
        "Natural-language detection of missing primary keys",
        "AI-assisted duplicate record and sensitive column ID",
        "Performance optimization opportunity surfacing",
        "Reduces dependency on manual SQL analysis",
        "Transforms data teams into AI-assisted operations",
      ],
      icon: Sparkles,
    },
    {
      title: "Capability 5, Business Rules Validation Framework",
      outcome: "Outcome: Embed business logic directly into data validation workflows.",
      items: [
        "SQL-based and business-logic validation expressions",
        "Global and column-level rule definition",
        "Severity tagging and prioritization per rule",
        "Revenue, threshold, and mandatory-field enforcement",
        "Format and approved-value validation (e.g. email)",
        "Ensures data is business compliant",
      ],
      icon: ClipboardCheck,
    },
    {
      title: "Capability 6, Integrated Data Governance Layer",
      outcome: "Outcome: Operational governance, not static documentation.",
      items: [
        "PII detection and automatic classification",
        "Sensitivity tagging across tables and columns",
        "Data catalog visibility and lineage",
        "Governance maturity scoring across the enterprise",
        "Compliance tracking and audit-ready reporting",
        "Metadata-driven governance workflows",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Capability 7, Built-In Query & Exploration Workspace",
      outcome: "Outcome: Debug, validate, and explore, without leaving the platform.",
      items: [
        "Read-only SQL interface for safe exploration",
        "Built-in data exploration and profiling tools",
        "Quick validation workflows on suspect datasets",
        "Faster troubleshooting without external tools",
        "Centralized environment for analysts and engineers",
        "Reduces context switching across tools",
      ],
      icon: FileSearch,
    },
  ];

  const industries = [
    {
      title: "Banking & Financial Services",
      description:
        "Trusted data for regulatory reporting, risk analytics, and customer intelligence across banking systems.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "BFSI.jpg"),
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Patient data integrity, clinical reliability, and compliance-grade governance for healthcare analytics.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "HealthcareLife Sciences.jpg"),
    },
    {
      title: "Retail & E-Commerce",
      description: "Customer, product, and order data reliability for personalization and omnichannel operations.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "RetailE-Commerce.jpg"),
    },
    {
      title: "Manufacturing & Supply Chain",
      description: "Master data harmonization and supply chain data reliability across ERP and operational systems.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "ManufacturingSupply Chain.jpg"),
    },
    {
      title: "Telecom & Technology",
      description: "Subscriber, network, and operational KPI data quality at AI-ready scale.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "Telecom Technology.jpg"),
    },
    {
      title: "Government & Public Sector",
      description: "Citizen-data governance, compliance monitoring, and cross-department data reliability.",
      image: dpiqAsset(DPIQ_INDUSTRIES_FOLDER, "GovernmentPublic Sector.jpg"),
    },
  ];

  const steps = [
    {
      title: "Connect",
      content:
        "Universal connectors link to cloud platforms (AWS, Azure, GCP), lakehouses, warehouses, ERP systems, and on-premise databases, with secure credential handling and minimal ingestion setup.",
      icon: Network,
    },
    {
      title: "Observe",
      content:
        "Continuous monitoring across tables and columns surfaces nulls, duplicates, schema drift, referential integrity gaps, and anomaly trends, classified by severity (Critical, Error, Warning, Informational).",
      icon: Activity,
    },
    {
      title: "Validate",
      content:
        "Business-rule validation framework applies SQL-based and business-logic expressions, ensuring data is not only technically correct but aligned to real business KPIs and operational thresholds.",
      icon: ClipboardCheck,
    },
    {
      title: "Govern",
      content:
        "Integrated governance layer auto-detects PII, applies sensitivity tagging, builds data-catalog visibility, and tracks governance maturity, turning compliance from documentation into operational workflow.",
      icon: ShieldCheck,
    },
    {
      title: "Act",
      content:
        "AI recommendations engine and autonomous data agent translate observability into action, guided remediation, conversational diagnostics, and intelligent optimization across the data ecosystem.",
      icon: Zap,
    },
  ];

  const stack = [
    {
      title: "Cloud Platforms",
      content: "AWS · Azure · GCP · Multi-cloud and hybrid deployments",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "CloudPlatforms.jpg"),
    },
    {
      title: "Data Warehouses & Lakehouses",
      content: "Snowflake · Databricks · BigQuery · Redshift · Synapse · Open lakehouse formats",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "DataWarehouses.jpg"),
    },
    {
      title: "Databases",
      content: "PostgreSQL · Oracle · SQL Server · MySQL · Extensible connector framework",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "Databases.jpg"),
    },
    {
      title: "ERP & Operational Systems",
      content: "SAP · Oracle EBS · Microsoft Dynamics · NetSuite · Custom operational systems",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "ERP.jpg"),
    },
    {
      title: "BI & Visualization Layer",
      content: "Power BI · Tableau · Qlik · Looker · Export of quality scores and governance signals",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "BIVisualization.jpg"),
    },
    {
      title: "Security & Access",
      content: "Role-based access control (RBAC) · Encrypted credential vault · Audit logging · Governance controls",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "SecurityAccess.jpg"),
    },
    {
      title: "Deployment Modes",
      content: "Cloud SaaS · Private VPC · Hybrid · On-premise (regulated industries)",
      image: dpiqAsset(DPIQ_STACK_FOLDER, "DeploymentModes.jpg"),
    },
  ];

  const useCases = [
    {
      title: "Banking & Financial Services",
      subtitle: "Trusted data for regulatory reporting, risk analytics, and customer intelligence.",
      crux: "DataPulseIQ continuously monitors customer and transaction data quality, validates regulatory reporting datasets, enforces PII governance, and reconciles financial data across systems, so banks can run risk, fraud, and compliance analytics on data they fully trust.",
      focusAreas:
        "Transaction Data Quality · Regulatory Reporting · PII Governance · Risk Analytics Reliability · Cross-System Reconciliation",
      outcome: "Audit-ready compliance · Trusted risk analytics · Reduced reconciliation effort",
    },
    {
      title: "Healthcare & Life Sciences",
      subtitle: "Patient data integrity and compliance-grade governance for healthcare analytics.",
      crux: "Validate patient records across clinical and operational systems, enforce healthcare data compliance, and continuously observe medical records consistency. DataPulseIQ also ensures data reliability for healthcare analytics platforms and research-grade clinical datasets.",
      focusAreas:
        "Patient Data Integrity · Healthcare Compliance · Clinical Observability · Records Consistency · Analytics Reliability",
      outcome: "Higher clinical data trust · Stronger compliance posture · Audit-ready records",
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Reliable customer, product, and order data for personalization and analytics.",
      crux: "Monitor customer master data quality, validate inventory and order datasets, detect duplicate customer and product records, and enforce pricing and sales consistency, so retail and D2C operations run personalization and customer analytics on reliable data.",
      focusAreas:
        "Customer MDM · Inventory & Order Validation · Duplicate Detection · Pricing Consistency · Personalization Reliability",
      outcome: "Cleaner customer data · Sharper personalization · Trusted retail analytics",
    },
    {
      title: "Manufacturing & Supply Chain",
      subtitle: "Master data harmonization and supply chain data reliability across ERP systems.",
      crux: "DataPulseIQ validates supply chain data consistency, monitors ERP and operational data quality, governs vendor and shipment datasets, and harmonizes master data across plants and systems, strengthening reliability for production analytics and supply-chain decisions.",
      focusAreas:
        "Supply Chain Validation · ERP Data Quality · Vendor & Shipment Governance · Production Analytics · Master Data Harmonization",
      outcome: "Reliable supply-chain analytics · Stronger vendor data · Consolidated master data",
    },
    {
      title: "Telecom & Technology",
      subtitle: "Subscriber, network, and operational KPI reliability at AI-ready scale.",
      crux: "Validate subscriber and network data, monitor operational KPI datasets, detect schema drift and anomalies, and reconcile data across platforms. DataPulseIQ also prepares enterprise data for advanced analytics and AI workloads at telecom scale.",
      focusAreas: "Subscriber Data · Network KPIs · Schema Drift · Cross-Platform Reconciliation · AI-Ready Data Prep",
      outcome: "Trusted operational KPIs · Faster anomaly detection · AI-ready data foundations",
    },
    {
      title: "Government & Public Sector",
      subtitle: "Citizen-data governance and trusted reporting for public-sector analytics.",
      crux: "Govern and validate citizen data across departments, run compliance-focused data quality monitoring, detect and mask sensitive information, and deliver cross-department reliability for shared services, enabling trusted reporting across public-sector analytics initiatives.",
      focusAreas:
        "Citizen Data Governance · Compliance Monitoring · Cross-Department Reliability · Sensitive Data Detection · Public-Sector Reporting",
      outcome: "Trusted citizen analytics · Stronger compliance · Cross-department visibility",
    },
  ];

  return (
    <div className="pt-[110px]">
      <section className="relative flex min-h-[min(50vh,480px)] items-center overflow-hidden bg-brand-950 px-6 py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={DPIQ_HERO_IMG}
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
        <div className="relative z-10 mx-auto w-full max-w-7xl text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[52px]"
          >
            DataPulseIQ
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-2xl font-medium tracking-tight text-white md:text-3xl"
            >
              Trusted Data. Intelligent Validation. Autonomous Data Operations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-normal leading-relaxed text-slate-400"
            >
              AI-powered data quality and reliability framework, continuously monitor, validate, govern, and improve data
              across every source system. Built for enterprises ready to move from reactive data firefighting to autonomous
              data operations.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white px-6 py-[60px] text-left dark:border-white/5 dark:bg-brand-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-medium tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              The Enterprise Data Reliability Challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400"
            >
              Every strategic decision, every CXO dashboard, every AI initiative depends on one assumption: the data is
              reliable. Yet across most enterprises, that assumption breaks down daily. Data flows in from dozens of source
              systems with inconsistent quality. Issues surface in production dashboards, not before. Governance lives in
              static documentation instead of operational workflows. And engineering teams spend their best hours writing
              SQL to debug data problems that should never have reached the warehouse. The result is a quiet but expensive
              crisis: low trust in analytics, slow decisions, and AI programs blocked by data that isn’t ready.
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
                src={DPIQ_PAIN_POINTS_IMG}
                alt="Common operational pain points in enterprise data reliability"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-8">
                <p className="border-l-4 border-accent pl-4 text-[15px] font-bold leading-relaxed text-white">
                  The result: low trust in dashboards and analytics, delayed business decisions, increased operational
                  overhead, compliance and governance risk, and slower AI and digital transformation initiatives, exactly
                  when the business needs faster, sharper, more trusted data to compete.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6 self-start lg:pt-4">
              <div className="mb-12">
                <h3 className="mb-2 text-xl font-bold leading-tight text-brand-950 dark:text-white">
                  Common Operational Pain Points
                </h3>
              </div>
              <ul className="list-none space-y-5">
                {[
                  "Inconsistent data quality across cloud, on-prem, and hybrid source systems",
                  "Reactive issue detection, data problems surface in dashboards, not in pipelines",
                  "Lack of business-aware validation rules tied to real KPIs and operational logic",
                  "Fragmented governance and compliance processes spread across teams and tools",
                  "Manual debugging and SQL-heavy troubleshooting draining engineering capacity",
                  "No centralized visibility into data reliability across the enterprise stack",
                  "PII and sensitive-data risk surfacing only during audits, not in operations",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-[17px] font-bold leading-tight text-brand-950 dark:text-white">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 px-6 py-[60px] text-left dark:border-white/5 dark:bg-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-medium tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              What DataPulseIQ Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-xl font-bold leading-tight text-brand-950 dark:text-white md:text-2xl"
            >
              From reactive data monitoring → autonomous data reliability. Connect. Observe. Validate. Govern. Act.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400"
            >
              DataPulseIQ is an AI-powered data quality and reliability framework that unifies observability, business-rule
              validation, governance, and autonomous data intelligence into a single operational platform. It connects to
              enterprise data sources with minimal setup, continuously monitors quality across tables and columns, applies
              business-aware validation logic, surfaces AI-driven recommendations, and enables conversational data operations
              through an autonomous AI agent, so data teams move from manual firefighting to intelligent, business-ready
              data ecosystems.
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-medium uppercase tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400"
            >
              Purpose-built for any data-heavy enterprise, wherever data fragmentation, governance gaps, or reliability
              issues slow down decisions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 px-6 py-[60px] text-left dark:bg-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-medium tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              How DataPulseIQ Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400"
            >
              DataPulseIQ is built as a layered data reliability platform that connects to enterprise data sources,
              continuously observes quality across tables and columns, applies business-aware validation logic, embeds
              governance into operational workflows, and surfaces AI-driven recommendations and conversational diagnostics , 
              transforming raw data ecosystems into trusted, AI-ready data operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
              className="mb-8 text-3xl font-medium tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              Built to Plug Into Your Enterprise Data Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400"
            >
              DataPulseIQ is designed as a connector-first, deployment-flexible platform. Whether your enterprise data lives
              in Snowflake, Databricks, BigQuery, Redshift, an on-prem warehouse, an ERP, or a combination of all of them , 
              DataPulseIQ connects through reusable connectors and ingests metadata without disrupting your existing pipelines.
              Deploy it in our cloud, your cloud, or on-premise. Push governance signals and reliability scores to the BI
              tools your teams already use.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stack.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 transition-all hover:border-accent/30 dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 p-8">
                  <h3 className="mb-3 text-[17px] font-bold text-brand-950 transition-colors group-hover:text-accent dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.content}
                  </p>
                </div>
              </motion.div>
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
              className="mb-8 text-3xl font-medium uppercase tracking-tight text-brand-950 dark:text-white md:text-5xl"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-medium italic text-slate-500 dark:text-slate-400"
            >
              Six domain-specific deployments where DataPulseIQ is replacing reactive data monitoring with intelligent,
              autonomous data reliability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {useCases.map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
