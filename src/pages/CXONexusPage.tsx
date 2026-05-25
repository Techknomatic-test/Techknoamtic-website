import type { ComponentType } from "react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
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
const cxoHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...CXO_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;
const CXO_HERO_IMG = cxoHeroImg("herobanner.jpg");
const CXO_PAIN_POINTS_IMG = cxoHeroImg("Pain Points.jpg");

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
    <SectionIcon icon={Icon} size="md" className="mb-6" />
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
        <SectionIcon icon={Target} size="sm" hover="none" />
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
          {outcome}
        </p>
      </div>
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
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={CXO_HERO_IMG}
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
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
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

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3 text-left">
              <div className="relative aspect-video rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group shadow-2xl border border-slate-100 dark:border-white/10">
                <img
                  loading="lazy"
                  src={CXO_PAIN_POINTS_IMG}
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20"
          >
            <h3 className="text-[12px] font-black tracking-[0.1em] text-orange-600 dark:text-orange-400 uppercase mb-4">
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
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
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
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
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

      {/* How It Works Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              How CXO Nexus Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
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
                    <span className="text-4xl font-black text- text-accent/10 dark:text-white/5">0{idx + 1}</span>
                  </div>
                  <SectionIcon icon={Icon} size="lg" className="mb-8" />
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

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
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
