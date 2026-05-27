import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  CapabilityGridSection,
  PainPointsSection,
  PlatformCapabilityCard,
  ProcessStepsSection,
  UseCasesSection,
} from "../components/product-page";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import {
  Activity,
  ClipboardCheck,
  Cpu,
  Eye,
  FileSearch,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const DPIQ_BASE = "Images/DataPulseIQ";

const dpiqRootImg = (file: string) => buildAssetUrl(DPIQ_BASE, file);

const DPIQ_HERO_IMG = dpiqRootImg("Hero.jpg");
const DPIQ_PAIN_POINTS_IMG = dpiqRootImg("painpoints.jpg");

const DPIQ_INTRO =
  "Every strategic decision, every CXO dashboard, every AI initiative depends on one assumption: the data is reliable. Yet across most enterprises, that assumption breaks down daily. Data flows in from dozens of source systems with inconsistent quality. Issues surface in production dashboards, not before. Governance lives in static documentation instead of operational workflows. And engineering teams spend their best hours writing SQL to debug data problems that should never have reached the warehouse. The result is a quiet but expensive crisis: low trust in analytics, slow decisions, and AI programs blocked by data that isn't ready.";

const DPIQ_PAIN_ITEMS = [
  "Inconsistent data quality across cloud, on-prem, and hybrid source systems",
  "Reactive issue detection, data problems surface in dashboards, not in pipelines",
  "Lack of business-aware validation rules tied to real KPIs and operational logic",
  "Fragmented governance and compliance processes spread across teams and tools",
  "Manual debugging and SQL-heavy troubleshooting draining engineering capacity",
  "No centralized visibility into data reliability across the enterprise stack",
  "PII and sensitive-data risk surfacing only during audits, not in operations",
];

export const DataGuardPage = () => {
  const capabilities = [
    {
      title: "Universal Data Source Connectivity",
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
      title: "Real-Time Data Quality Observability",
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
      title: "AI-Powered Recommendations Engine",
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
      title: "Autonomous Data Agent",
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
      title: "Business Rules Validation Framework",
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
      title: "Integrated Data Governance Layer",
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
      title: "Built-In Query & Exploration Workspace",
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
    <PageShell bare>
      <PageHero
        title="DataPulseIQ"
        tagline="Trusted Data. Intelligent Validation. Autonomous Data Operations."
        description="AI-powered data quality and reliability framework, continuously monitor, validate, govern, and improve data across every source system. Built for enterprises ready to move from reactive data firefighting to autonomous data operations."
        imageSrc={DPIQ_HERO_IMG}
        sectionBg="bg-brand-950"
      />

      <PainPointsSection
        intro={DPIQ_INTRO}
        imageSrc={DPIQ_PAIN_POINTS_IMG}
        imageAlt="Common operational pain points in enterprise data reliability"
        items={DPIQ_PAIN_ITEMS}
        asList
        bulletClassName="text-[17px] leading-tight text-brand-950 dark:text-white"
      />

      <CapabilityGridSection
        title="What DataPulseIQ Solves"
        tagline="From reactive data monitoring to autonomous data reliability. Connect. Observe. Validate. Govern. Act."
        description="DataPulseIQ is an AI-powered data quality and reliability framework that unifies observability, business-rule validation, governance, and autonomous data intelligence into a single operational platform. It connects to enterprise data sources with minimal setup, continuously monitors quality across tables and columns, applies business-aware validation logic, surfaces AI-driven recommendations, and enables conversational data operations through an autonomous AI agent, so data teams move from manual firefighting to intelligent, business-ready data ecosystems."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.1} />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How DataPulseIQ Works"
        description="DataPulseIQ is built as a layered data reliability platform that connects to enterprise data sources, continuously observes quality across tables and columns, applies business-aware validation logic, embeds governance into operational workflows, and surfaces AI-driven recommendations and conversational diagnostics , transforming raw data ecosystems into trusted, AI-ready data operations."
        steps={steps}
      />
      <UseCasesSection
        description="Six domain-specific deployments where DataPulseIQ is replacing reactive data monitoring with intelligent, autonomous data reliability."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
