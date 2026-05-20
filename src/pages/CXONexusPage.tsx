import type { ComponentType } from "react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  LayoutDashboard,
  MessageSquare,
  Database,
  Brain,
  BarChart3,
  Layers,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Zap,
  PieChart,
  FileText,
  Server,
} from "lucide-react";

const CXO_IMG = "Images/CXONexus";
const cxoHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...CXO_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;

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
  icon: ComponentType<{ className?: string }>;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full text-left"
  >
    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[13px] font-bold text-brand-950/70 dark:text-white/60 mb-6 italic leading-snug">
        Outcome: {outcome}
      </p>
      <ul className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/5 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0" />
            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors text-left">
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
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group flex flex-col h-full text-left"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/70 dark:text-white/70 mb-8 leading-snug">
      {subtitle}
    </p>

    <div className="space-y-6 mb-10 flex-1">
      <div>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Focus Areas</h4>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          {focusAreas}
        </p>
      </div>
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Target className="w-4 h-4 text-accent" />
        </div>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
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
    className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all h-full text-left group overflow-hidden rounded-[2.5rem] flex flex-col"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
    </div>
    <div className="p-10 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const CXONexusPage = () => {
  const capabilities = [
    {
      title: "Natural Language Querying",
      outcome: "Ask business questions in plain English, no SQL, no BI tickets, no waiting.",
      items: [
        "“Show monthly sales trends by region”, answered instantly",
        "“Which branches have the highest claim ratios?”, answered with chart",
        "“Compare revenue growth quarter-over-quarter”, cross-period analytics",
        "“Which customers are likely to churn?”, predictive intelligence",
        "“Show SLA breach trends for the last 30 days”, operational visibility",
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
        "Insight recommendations and “what to look at next” guidance",
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

  const industries = [
    {
      title: "BFSI & Insurance",
      description:
        "Risk, claims, policy performance, and fraud analytics through conversational executive insights.",
      image: `${CXO_IMG}/Insurance.jpg`,
    },
    {
      title: "Retail & E-Commerce",
      description: "Sales, customer behavior, inventory, and campaign performance, ask in plain English.",
      image: `${CXO_IMG}/industry-retail.jpg`,
    },
    {
      title: "Healthcare",
      description:
        "Operational and patient service analytics, hospital performance, and executive healthcare dashboards.",
      image: `${CXO_IMG}/industry-healthcare.jpg`,
    },
    {
      title: "IT & ITSM",
      description:
        "SLA, incident, infrastructure, and service intelligence through conversational IT operations analytics.",
      image: `${CXO_IMG}/industry-it-itsm.jpg`,
    },
    {
      title: "Manufacturing",
      description:
        "Production KPIs, supply chain, plant performance, and predictive operational insights on demand.",
      image: `${CXO_IMG}/industry-manufacturing.jpg`,
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Shipment, delivery, fleet, and bottleneck analytics through real-time conversational visibility.",
      image: `${CXO_IMG}/industry-logistics.jpg`,
    },
    {
      title: "Telecom",
      description:
        "Subscriber, network, revenue, and churn intelligence, accessible to every business leader.",
      image: `${CXO_IMG}/industry-telecom.jpg`,
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

  const stack = [
    {
      title: "Databases",
      icon: Database,
      content:
        "PostgreSQL · MySQL · SQL Server · Oracle · NoSQL stores · Document and time-series databases",
    },
    {
      title: "Data Warehouses & Lakehouses",
      icon: Server,
      content: "Snowflake · Databricks · BigQuery · Redshift · Synapse · Open lakehouse formats",
    },
    {
      title: "ERP & Operational Systems",
      icon: Settings,
      content: "SAP · Oracle EBS · Microsoft Dynamics · NetSuite · Custom enterprise systems",
    },
    {
      title: "CRM & Business Systems",
      icon: Users,
      content: "Salesforce · HubSpot · Zoho · Microsoft Dynamics CRM · Custom CRMs",
    },
    {
      title: "Knowledge & Document Sources",
      icon: FileText,
      content: "SharePoint · Confluence · Internal knowledge bases · SOPs, policies, and document repositories",
    },
    {
      title: "BI & Visualization Layer",
      icon: BarChart3,
      content: "Power BI · Tableau · Qlik · Looker · Native CXO Nexus dashboards",
    },
    {
      title: "Conversational Surfaces",
      icon: MessageSquare,
      content: "Web interface · Teams · Slack · Mobile · Embedded BI surfaces",
    },
    {
      title: "Security & Governance",
      icon: ShieldCheck,
      content: "Role-based access control (RBAC) · Row-level security · Data masking · Audit logging",
    },
    {
      title: "Deployment Modes",
      icon: Layers,
      content: "Cloud SaaS · Private cloud · Hybrid · On-premise (regulated industries)",
    },
  ];

  const useCases = [
    {
      title: "BFSI & Insurance",
      subtitle: "Conversational executive intelligence for risk, claims, and policy operations.",
      crux: "CXO Nexus delivers conversational access to risk and claims analytics, policy performance monitoring, and fraud detection insights, grounded in real data.",
      focusAreas: "Risk Analytics · Claims Insights · Policy Performance · Fraud Detection · Executive KPIs",
      outcome: "Faster risk decisions · Audit-traceable insights · Leadership-grade visibility",
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Sales, customer, and campaign intelligence, on demand, in plain English.",
      crux: "Ask sales questions, surface customer behavior intelligence, and monitor inventory/supply chain, all without waiting for a BI report.",
      focusAreas: "Sales Analytics · Customer Behavior · Inventory Visibility · Campaign Performance · Self-Service BI",
      outcome: "Faster commercial decisions · Higher analytics adoption · Reduced BI dependency",
    },
    {
      title: "Healthcare",
      subtitle: "Hospital, operational, and patient service intelligence for leadership.",
      crux: "CXO Nexus enables hospital performance monitoring, patient service analytics, and resource utilization insights, decision intelligence for clinical teams.",
      focusAreas:
        "Hospital Performance · Patient Service Analytics · Resource Utilization · Executive Dashboards · Operational KPIs",
      outcome: "Faster operational decisions · Better resource visibility · Empowered healthcare leaders",
    },
    {
      title: "IT & ITSM",
      subtitle: "Real-time conversational IT operations and service intelligence.",
      crux: "Surface SLA and incident trend analysis, operational service intelligence, and infrastructure analytics through plain-English questions.",
      focusAreas: "SLA Analytics · Incident Trends · Infrastructure Insights · Service Intelligence · IT Operations Visibility",
      outcome: "Faster IT operational decisions · Higher CIO visibility · Reduced BI cycle time",
    },
    {
      title: "Manufacturing",
      subtitle: "Plant, production, and supply chain intelligence for industrial leadership.",
      crux: "Monitor production KPIs, surface supply chain intelligence, and analyze plant performance through conversational analytics, enabling manufacturing leaders to act.",
      focusAreas: "Production KPIs · Supply Chain Intelligence · Plant Performance · Predictive Insights · Operational Visibility",
      outcome: "Faster plant decisions · Better supply visibility · Predictive operational intelligence",
    },
    {
      title: "Logistics & Supply Chain",
      subtitle: "Shipment, fleet, and operational intelligence, conversational and real-time.",
      crux: "Ask shipment and delivery analytics questions, detect bottlenecks, and monitor route intelligence, turning logistics data into a decision layer.",
      focusAreas: "Shipment Analytics · Bottleneck Detection · Fleet Intelligence · Route Optimization · Real-Time Dashboards",
      outcome: "Faster ops decisions · Real-time supply visibility · Better fleet performance",
    },
    {
      title: "Telecom",
      subtitle: "Subscriber, network, and revenue intelligence for telecom CXOs.",
      crux: "CXO Nexus delivers subscriber and usage analytics, network performance monitoring, and churn intelligence, purpose-built for telecom leadership.",
      focusAreas: "Subscriber Analytics · Network Performance · Revenue Intelligence · Churn Insights · Operational Trends",
      outcome: "Faster commercial decisions · Sharper churn intelligence · Empowered CXOs",
    },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            CXO Nexus
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Ask Questions. Get Instant Insights. Make Smarter Decisions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              A conversational AI platform that sits on top of your enterprise data, databases, and
              knowledge repositories, so CXOs, business leaders, and operational teams can ask in
              plain English and get instant insights, dashboards, and grounded executive intelligence.
              Built for enterprises ready to move from BI ticket queues to conversational decision
              intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
           
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Enterprises sit on extraordinary volumes of operational and business data, yet the leaders who most need
              that data to decide are the furthest from it. Every executive question becomes a BI ticket. Every
              dashboard takes weeks. Every cross-system question requires someone who can write SQL, navigate three
              platforms, and translate the answer back into business language. The bottleneck isn’t the data, and it
              isn’t the BI team, it’s the gap between a business question and a trustworthy answer. Meanwhile, generic
              AI chat tools tempt leaders with instant answers but can’t see the actual enterprise data, which is exactly
              the trust problem CXOs can’t afford.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-20 items-start">
            <div className="lg:col-span-3 text-left">
              <div className="relative aspect-video rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group shadow-2xl border border-slate-100 dark:border-white/10">
                <img
                  src={cxoHeroImg("challenge.jpg")}
                  alt="Decision Intelligence"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="mb-10 text-left">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight tracking-tight">
                  Common Operational Pain Points
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <ul className="space-y-4">
                {[
                  "Heavy dependency on BI teams for every question",
                  "Delayed access to critical insights, weeks for dashboards",
                  "SQL and technical requirements blocking non-technical leaders",
                  "Fragmented data across ERP, CRM, and operational systems",
                  "Limited analytics accessibility for business teams",
                  "Slow dashboard creation cycles tied to backlogs",
                  "Lack of contextual business intelligence explanation",
                  "Generic AI tools that don’t see real enterprise data",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 group list-none text-left"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-[17px] text-brand-950 dark:text-white leading-tight">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Framing Section */}
      <section className="pt-4 pb-[40px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20"
          >
            <h3 className="text-[12px] font-black tracking-[0.3em] text-orange-600 dark:text-orange-400 uppercase mb-4">
              Impact Framing
            </h3>
            <p className="text-[15px] font-medium text-brand-950 dark:text-white leading-relaxed">
              The result- delayed business decisions, reduced operational agility, low data accessibility across teams,
              increased dependency on technical resources, and decisions made on stale dashboards or gut feel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              What CXO Nexus Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[16px] font-bold text-brand-950 dark:text-white mb-6 leading-tight tracking-tight"
            >
              From BI Ticket Queues to Conversational Decision Intelligence. Ask. Retrieve. Ground. Visualize.
              Decide.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              CXO Nexus is an enterprise conversational AI platform that turns natural-language questions into grounded
              business insights. It connects directly to enterprise databases, warehouses, ERP, CRM, and knowledge
              repositories, then uses RAG and an intelligent insights engine to interpret questions and explain answers
              in business language.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Industries We Serve
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-bold text-brand-950/70 dark:text-white/60 mb-10"
            >
              Purpose-built for any data-rich enterprise, wherever leadership decision speed depends on access to
              operational and business intelligence.
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              How CXO Nexus Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              CXO Nexus is built as a layered conversational analytics architecture that captures business questions,
              interprets executive intent, retrieves relevant data, grounds responses in actual knowledge through RAG,
              generates live visualizations, and explains the answer in business language.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group overflow-hidden relative text-left"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-4xl font-black text-slate-100 dark:text-white/5">0{idx + 1}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Built to Plug Into Your Enterprise Data & Knowledge Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              CXO Nexus is designed as a data-source-first, deployment-flexible AI platform. Connect through reusable
              connectors and grounds every answer in real enterprise context. Deploy in our cloud, your cloud, or
              on-premise. Push insights into the BI and collaboration tools your teams already use.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-accent/30 transition-all flex flex-col text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-brand-950 dark:text-white mb-3 group-hover:text-accent transition-colors font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Seven industry-specific deployments where CXO Nexus is replacing BI ticket queues with conversational
              decision intelligence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 text-left">
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
