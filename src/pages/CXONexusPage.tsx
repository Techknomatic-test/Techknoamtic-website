import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  CapabilityGridSection,
  ImpactFramingSection,
  PainPointsSection,
  PlatformCapabilityCard,
  ProcessStepsSection,
  UseCasesSection,
} from "../components/product-page";
import {
  LayoutDashboard,
  MessageSquare,
  Database,
  Brain,
  BarChart3,
  ShieldCheck,
  Target,
  Zap,
  PieChart,
  FileText,
} from "lucide-react";

const CXO_IMG = "Images/CXONexus";
const cxoHeroImg = (file: string) => buildAssetUrl(CXO_IMG, file);
const CXO_HERO_IMG = cxoHeroImg("herobanner.jpg");
const CXO_PAIN_POINTS_IMG = cxoHeroImg("Pain Points.jpg");

const CXO_INTRO =
  "Enterprises sit on extraordinary volumes of operational and business data, yet the leaders who most need that data to decide are the furthest from it. Every executive question becomes a BI ticket. Every dashboard takes weeks. Every cross-system question requires someone who can write SQL, navigate three platforms, and translate the answer back into business language. The bottleneck isn't the data, and it isn't the BI team, it's the gap between a business question and a trustworthy answer. Meanwhile, generic AI chat tools tempt leaders with instant answers but can't see the actual enterprise data, which is exactly the trust problem CXOs can't afford.";

const CXO_PAIN_ITEMS = [
  "Heavy dependency on BI teams for every question",
  "Delayed access to critical insights, weeks for dashboards",
  "SQL and technical requirements blocking non-technical leaders",
  "Fragmented data across ERP, CRM, and operational systems",
  "Limited analytics accessibility for business teams",
  "Slow dashboard creation cycles tied to backlogs",
  "Lack of contextual business intelligence explanation",
  "Generic AI tools that don't see real enterprise data",
];

export const CXONexusPage = () => {
  const capabilities = [
    {
      title: "Natural Language Querying",
      outcome: "Ask business questions in plain English, no SQL, no BI tickets, no waiting.",
      items: [
        "â€œShow monthly sales trends by regionâ€, answered instantly",
        "â€œWhich branches have the highest claim ratios?â€, answered with chart",
        "â€œCompare revenue growth quarter-over-quarterâ€, cross-period analytics",
        "â€œWhich customers are likely to churn?â€, predictive intelligence",
        "â€œShow SLA breach trends for the last 30 daysâ€, operational visibility",
        "Conversational follow-ups and drill-downs without restarting the query",
      ],
      icon: MessageSquare,
    },
    {
      title: "Direct Database & System Connectivity",
      outcome: "Unified access across structured enterprise data ecosystems, wherever it lives.",
      items: [
        "SQL databases (PostgreSQL, MySQL, SQL Server, Oracle)",
        "NoSQL databases and document stores",
        "Data warehouses (Snowflake, Redshift, BigQuery, Synapse)",
        "Data lakehouses (Databricks, open formats)",
        "ERP and CRM systems (SAP, Oracle EBS, Salesforce, Dynamics)",
        "Enterprise analytics platforms and operational systems",
      ],
      icon: Database,
    },
    {
      title: "AI-Powered Insights Engine",
      outcome: "Beyond data retrieval, contextual intelligence that explains what numbers mean.",
      items: [
        "Trend identification across time series and KPIs",
        "Comparative analysis (region, period, segment, cohort)",
        "Anomaly detection and outlier highlighting",
        "KPI interpretation in business language",
        "Business performance summaries on demand",
        "Insight recommendations and â€œwhat to look at nextâ€ guidance",
      ],
      icon: Zap,
    },
    {
      title: "RAG-Powered Knowledge Intelligence",
      outcome: "Answers grounded in YOUR enterprise data and documents, not a generic model.",
      items: [
        "Retrieval-Augmented Generation across enterprise sources",
        "SOPs, operational documents, and process knowledge",
        "Policies, guidelines, and compliance content",
        "Internal business documents and historical reports",
        "Knowledge bases and decision archives",
        "Source-traceable responses leadership can defend",
      ],
      icon: Brain,
    },
    {
      title: "Smart Dashboard Generation",
      outcome: "From plain-English question to a live dashboard, in seconds.",
      items: [
        "Real-time visualizations rendered from conversational prompts",
        "KPI scorecards generated dynamically",
        "Trend, comparison, and distribution chart selection by intent",
        "Interactive drill-down without leaving the conversation",
        "Role-based analytics views per leader or team",
        "Customizable visual layouts and saved boards",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "Multi-Source Data Intelligence",
      outcome: "One conversational layer across every domain of enterprise data.",
      items: [
        "Finance and revenue analytics",
        "Sales and pipeline performance",
        "Insurance, claims, and policy operations",
        "ITSM and IT operations intelligence",
        "Customer behavior and segmentation analytics",
        "Supply chain visibility and operational KPIs",
      ],
      icon: PieChart,
    },
    {
      title: "Executive Decision Intelligence",
      outcome: "Purpose-built for CXOs and leadership teams, strategic intelligence on demand.",
      items: [
        "Business performance monitoring at executive depth",
        "Operational trend analysis across functions",
        "Strategic KPI tracking with conversational drill-down",
        "Risk, governance, and compliance visibility",
        "Revenue, profitability, and margin insights",
        "Executive summary generation for board and reviews",
      ],
      icon: Target,
    },
  ];

  const steps = [
    {
      title: "Ask",
      content:
        "An executive or business user asks a question in plain English, inside the interface, embedded in BI, or messaging platforms.",
      icon: MessageSquare,
    },
    {
      title: "Understand",
      content:
        "The AI engine interprets the question, identifies business intent, and maps it to the right data sources and patterns.",
      icon: Brain,
    },
    {
      title: "Retrieve",
      content:
        "CXO Nexus queries connected enterprise systems, SQL/NoSQL, warehouses, ERP, and CRM, retrieving only relevant data.",
      icon: Database,
    },
    {
      title: "Ground",
      content:
        "RAG blends structured query results with enterprise knowledge, SOPs, policies, and documents, for organizational context.",
      icon: ShieldCheck,
    },
    {
      title: "Visualize",
      content:
        "The platform generates the right visualization on the fly, trend charts, KPI scorecards, or drill-down dashboards.",
      icon: BarChart3,
    },
    {
      title: "Explain",
      content:
        "An AI-written insight summary accompanies every response, interpreting data in business language and surfacing anomalies.",
      icon: FileText,
    },
  ];

  const useCases = [
    {
      title: "BFSI & Insurance",
      subtitle: "Conversational executive intelligence for risk, claims, and policy operations.",
      crux: "CXO Nexus delivers conversational access to risk and claims analytics, policy performance monitoring, and fraud detection insights, grounded in real data.",
      focusAreas: "Risk Analytics Â· Claims Insights Â· Policy Performance Â· Fraud Detection Â· Executive KPIs",
      outcome: "Faster risk decisions Â· Audit-traceable insights Â· Leadership-grade visibility",
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Sales, customer, and campaign intelligence, on demand, in plain English.",
      crux: "Ask sales questions, surface customer behavior intelligence, and monitor inventory/supply chain, all without waiting for a BI report.",
      focusAreas: "Sales Analytics Â· Customer Behavior Â· Inventory Visibility Â· Campaign Performance Â· Self-Service BI",
      outcome: "Faster commercial decisions Â· Higher analytics adoption Â· Reduced BI dependency",
    },
    {
      title: "Healthcare",
      subtitle: "Hospital, operational, and patient service intelligence for leadership.",
      crux: "CXO Nexus enables hospital performance monitoring, patient service analytics, and resource utilization insights, decision intelligence for clinical teams.",
      focusAreas:
        "Hospital Performance Â· Patient Service Analytics Â· Resource Utilization Â· Executive Dashboards Â· Operational KPIs",
      outcome: "Faster operational decisions Â· Better resource visibility Â· Empowered healthcare leaders",
    },
    {
      title: "IT & ITSM",
      subtitle: "Real-time conversational IT operations and service intelligence.",
      crux: "Surface SLA and incident trend analysis, operational service intelligence, and infrastructure analytics through plain-English questions.",
      focusAreas: "SLA Analytics Â· Incident Trends Â· Infrastructure Insights Â· Service Intelligence Â· IT Operations Visibility",
      outcome: "Faster IT operational decisions Â· Higher CIO visibility Â· Reduced BI cycle time",
    },
    {
      title: "Manufacturing",
      subtitle: "Plant, production, and supply chain intelligence for industrial leadership.",
      crux: "Monitor production KPIs, surface supply chain intelligence, and analyze plant performance through conversational analytics, enabling manufacturing leaders to act.",
      focusAreas: "Production KPIs Â· Supply Chain Intelligence Â· Plant Performance Â· Predictive Insights Â· Operational Visibility",
      outcome: "Faster plant decisions Â· Better supply visibility Â· Predictive operational intelligence",
    },
    {
      title: "Logistics & Supply Chain",
      subtitle: "Shipment, fleet, and operational intelligence, conversational and real-time.",
      crux: "Ask shipment and delivery analytics questions, detect bottlenecks, and monitor route intelligence, turning logistics data into a decision layer.",
      focusAreas: "Shipment Analytics Â· Bottleneck Detection Â· Fleet Intelligence Â· Route Optimization Â· Real-Time Dashboards",
      outcome: "Faster ops decisions Â· Real-time supply visibility Â· Better fleet performance",
    },
    {
      title: "Telecom",
      subtitle: "Subscriber, network, and revenue intelligence for telecom CXOs.",
      crux: "CXO Nexus delivers subscriber and usage analytics, network performance monitoring, and churn intelligence, purpose-built for telecom leadership.",
      focusAreas: "Subscriber Analytics Â· Network Performance Â· Revenue Intelligence Â· Churn Insights Â· Operational Trends",
      outcome: "Faster commercial decisions Â· Sharper churn intelligence Â· Empowered CXOs",
    },
  ];

  return (
    <PageShell bare>
            <PageHero
        title="CXO Nexus"
        tagline="Ask Questions. Get Instant Insights. Make Smarter Decisions"
        description="A conversational AI platform that sits on top of your enterprise data, databases, and knowledge repositories, so CXOs, business leaders, and operational teams can ask in plain English and get instant insights, dashboards, and grounded executive intelligence. Built for enterprises ready to move from BI ticket queues to conversational decision intelligence."
        imageSrc={CXO_HERO_IMG}
        sectionBg="bg-brand-950"
      />

      <PainPointsSection
        intro={CXO_INTRO}
        imageSrc={CXO_PAIN_POINTS_IMG}
        imageAlt="Decision Intelligence"
        items={CXO_PAIN_ITEMS}
        sectionClassName="pt-[60px] pb-8 bg-white dark:bg-brand-950 px-6 text-left"
      />

      <ImpactFramingSection sectionClassName="pb-8 px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        The result- delayed business decisions, reduced operational agility, low data accessibility across teams,
        increased dependency on technical resources, and decisions made on stale dashboards or gut feel.
      </ImpactFramingSection>

      <CapabilityGridSection
        title="What CXO Nexus Solves"
        tagline="From BI Ticket Queues to Conversational Decision Intelligence. Ask. Retrieve. Ground. Visualize. Decide."
        description="CXO Nexus is an enterprise conversational AI platform that turns natural-language questions into grounded business insights. It connects directly to enterprise databases, warehouses, ERP, CRM, and knowledge repositories, then uses RAG and an intelligent insights engine to interpret questions and explain answers in business language."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.05} prependOutcomeLabel />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How CXO Nexus Works"
        description="CXO Nexus is built as a layered conversational analytics architecture that captures business questions, interprets executive intent, retrieves relevant data, grounds responses in actual knowledge through RAG, generates live visualizations, and explains the answer in business language."
        steps={steps}
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      />

      <UseCasesSection
        description="Seven industry-specific deployments where CXO Nexus is replacing BI ticket queues with conversational decision intelligence."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
