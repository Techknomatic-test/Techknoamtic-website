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

const ismRootImg = (file: string) => buildAssetUrl(ISM_BASE, file);

const ISM_HERO_IMG = ismRootImg("Herobanner.jpg");
const ISM_CHALLENGE_IMG = ismRootImg("Challenge.jpg");

const ISM_INTRO =
  "Most large enterprises run their IT operations on multiple ITSM platforms simultaneously, ServiceNow in one business unit, BMC Remedy in another, Jira Service Management for engineering, SolarWinds for infrastructure monitoring. Each tool serves its purpose, but together they create a fragmented operational landscape where leadership lacks a unified view of IT performance. SLA reporting is inconsistent. KPI definitions vary by team. BI teams spend weeks building dashboards. And CIOs are left making operational decisions on stale, siloed data.";

const ISM_PAIN_ITEMS = [
  "No unified visibility across IT operations and ITSM platforms",
  "Inconsistent KPI definitions and SLA reporting across teams",
  "Delayed reporting cycles and manual dashboarding effort",
  "High dependency on BI and data engineering teams for every report",
  "Slow rollout of analytics initiatives, months to first dashboard",
  "Limited operational intelligence for CIOs, CTOs, and service leaders",
  "Lack of accountability and traceability across support functions",
];

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

  const useCases = [
    {
      title: "Banking & Financial Services",
      subtitle: "Centralized SLA, incident, and compliance visibility across banking IT operations.",
      crux: "InsightSM consolidates ITSM data from core banking, digital channels, and shared services into unified SLA, incident, and compliance dashboards. Branch performance, channel uptime, and audit-ready visibility, all from one analytics layer.",
      focusAreas: "SLA Monitoring Â· Digital Banking Incidents Â· Shared Services Â· IT Compliance Â· Branch Support",
      outcome: "Faster compliance reporting Â· Unified ops visibility Â· Audit-ready dashboards",
    },
    {
      title: "Healthcare",
      subtitle: "Hospital IT operations and clinical application uptime intelligence.",
      crux: "Track incident response across medical applications, monitor SLA for healthcare support, and ensure uptime visibility for critical systems like EHR and lab platforms. InsightSM gives hospital IT leaders the operational view they need without manual reporting cycles.",
      focusAreas: "Hospital IT Monitoring Â· Medical App Incidents Â· Healthcare SLA Â· System Uptime Â· Service Desk",
      outcome: "Higher critical-system uptime Â· Faster incident response Â· Lower IT effort",
    },
    {
      title: "Telecom",
      subtitle: "Network operations SLA and customer-impact incident analytics at scale.",
      crux: "InsightSM unifies ITSM data across network operations, customer-impact incidents, and multi-vendor support. Real-time outage visibility, ticket escalation analytics, and SLA monitoring across the entire telecom support ecosystem, in one operational view.",
      focusAreas: "Network Ops SLA Â· Outage Analytics Â· Customer-Impact Incidents Â· Multi-Vendor Ops Â· Support Center",
      outcome: "Faster outage resolution Â· Better vendor accountability Â· Real-time ops visibility",
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Store, POS, and warehouse operations support, visible from one dashboard.",
      crux: "Monitor store IT operations, POS and application incidents, warehouse and logistics support, and peak-season SLA performance. InsightSM gives retail IT and operations leaders the visibility to keep stores running and customers transacting through every season.",
      focusAreas: "Store Ops Â· POS Incidents Â· Warehouse Support Â· Peak-Season SLA Â· Customer Support",
      outcome: "Higher store uptime Â· Better peak-season readiness Â· Faster issue resolution",
    },
    {
      title: "Manufacturing",
      subtitle: "Plant IT operations and production support intelligence.",
      crux: "Track plant IT operations, production support incidents, and operational downtime through unified ITSM analytics. Vendor support performance, enterprise service requests, and downtime root-cause visibility, all consolidated for plant and corporate IT leaders.",
      focusAreas: "Plant IT Ops Â· Production Support Â· Downtime Tracking Â· Vendor Performance Â· Service Requests",
      outcome: "Reduced production downtime Â· Better vendor SLAs Â· Consolidated plant visibility",
    },
    {
      title: "Government & Public Sector",
      subtitle: "Cross-department ITSM visibility for citizen service operations.",
      crux: "InsightSM consolidates ITSM data across government departments, enabling unified citizen service analytics, operational KPI tracking, and SLA monitoring for public services. Shared services reporting and cross-department visibility delivered through a single analytics platform.",
      focusAreas:
        "Citizen Service Analytics Â· Public Service KPIs Â· Cross-Department ITSM Â· Government SLAs Â· Shared Services",
      outcome: "Faster citizen response Â· Cross-dept accountability Â· Standardized public-service reporting",
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="InsightSM"
        tagline="Unified IT Operations Visibility Across Every ITSM Tool"
        description="An AI-powered analytics wrapper that sits on top of your existing ITSM ecosystem, turning fragmented operational data into unified, real-time intelligence. Deploy production-grade ITSM dashboards in days, not months."
        imageSrc={ISM_HERO_IMG}
      />

      <PainPointsSection
        intro={ISM_INTRO}
        imageSrc={ISM_CHALLENGE_IMG}
        imageAlt="ITSM challenge"
        items={ISM_PAIN_ITEMS}
      />

      <CapabilityGridSection
        title="What InsightSM Solves"
        tagline="From fragmented ITSM data to unified operational intelligence"
        description="InsightSM is a rapid ITSM analytics accelerator that sits on top of your existing ITSM ecosystem, delivering enterprise-grade operational intelligence in days. The platform connects multiple ITSM tools, harmonizes operational data, standardizes KPIs, and deploys validated dashboards before committing to full-scale enterprise rollout. No rip-and-replace. No multi-month BI projects. Just immediate, unified visibility across IT operations."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.1} />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How InsightSM Works"
        description="InsightSM follows a systematic, four-stage deployment architecture designed for speed, accuracy, and enterprise scale. By separating the validation phase from the production rollout, we allow stakeholders to align on KPIs and dashboard usability with zero data risk, ensuring the final production environment is built on trust, efficiency, and proven operational value. Our unique sample-first deployment flow transforms the complexity of fragmented ITSM ecosystems into immediate, unified operational intelligence."
        steps={steps}
      />

      <UseCasesSection
        description="Six domain-specific deployments where InsightSM is replacing manual ITSM reporting with unified operational intelligence."
        cases={useCases}
      />

      <PreFooterCTA />
    </PageShell>
  );
};
