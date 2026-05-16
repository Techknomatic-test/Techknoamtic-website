import type { ComponentType } from "react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  Brain,
  MessageSquare,
  Workflow,
  Layers,
  Target,
  ArrowRightLeft,
  Database,
  Users,
  Computer,
  Globe,
} from "lucide-react";

/** TicketIQ-only assets (no AssistIQ equivalent). */
const TIQ_IMG = "Images/TicketIQ";
const tiqImg = (file: string) => `/${TIQ_IMG}/${file}`;

/** Shared industry images with AssistIQ (Entrprise_Ai/AssistIQ). */
const ASSIST_IMG = "Images/Entrprise_Ai/AssistIQ";
const assistImg = (file: string) => `/${ASSIST_IMG}/${file}`;

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
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">
          Crux
        </h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">
          Focus Areas
        </h4>
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
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">
            Outcome:
          </span>
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

export const AgenticAIITSMPage = () => {
  const capabilities = [
    {
      title: "Capability 1 — Multi-Channel Request Intake",
      outcome:
        "Every employee channel, captured — unstructured conversation turned into structured action.",
      items: [
        "Email systems and shared service-desk inboxes",
        "Microsoft Teams and Slack integrations",
        "ITSM portals and enterprise self-service interfaces",
        "Enterprise chat surfaces and intranet widgets",
        "Automatic conversion of unstructured requests into structured intents",
        "Unified ticket context across every channel an employee uses",
      ],
      icon: Search,
    },
    {
      title: "Capability 2 — AI Intent Classification Engine",
      outcome:
        "Advanced AI that understands what the employee actually needs — even when they don’t say it clearly.",
      items: [
        "Identity & Access Management, Software, Network, Device, Email categorization",
        "IT knowledge queries and routine service requests",
        "Handles ambiguous, partial, and conversational requests",
        "Context-aware multi-step issue understanding",
        "Conversational follow-ups for missing information",
        "Continuous AI learning from resolved tickets",
      ],
      icon: Brain,
    },
    {
      title: "Capability 3 — Autonomous Resolution Engine",
      outcome:
        "Agentic AI that doesn’t just respond — it executes real IT actions inside enterprise systems.",
      items: [
        "Password reset, account unlock, MFA reconfiguration",
        "VPN enablement and connectivity troubleshooting",
        "Approved software installation and patch management",
        "Network diagnostics and system configuration steps",
        "Shared mailbox access and email collaboration fixes",
        "Built-in safeguards ensure every action follows enterprise policy",
      ],
      icon: Zap,
    },
    {
      title: "Capability 4 — Security-First Governance Layer",
      outcome:
        "Enterprise security and policy enforcement built into every autonomous action.",
      items: [
        "Role-based access control (RBAC) on every workflow",
        "Approval-driven execution for sensitive request types",
        "Secure identity verification (OTP / MFA) before high-risk actions",
        "Risk-tiered automation — autonomous for low-risk, gated for high-risk",
        "Complete audit visibility on every AI-executed action",
        "Compliance-ready operations for regulated industries",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Capability 5 — Intelligent Escalation Framework",
      outcome:
        "The AI knows what it can resolve — and exactly when to hand off to a human engineer.",
      items: [
        "Automatic escalation when AI confidence is low",
        "Policy-violation detection routes ticket to L2 with context",
        "Out-of-scope requests handed off without losing conversation history",
        "Full audit trail of actions taken before escalation",
        "Seamless L1 to L2 transitions with verification status preserved",
        "Human judgment retained where it actually matters",
      ],
      icon: ArrowRightLeft,
    },
    {
      title: "Capability 6 — Conversational Clarification AI",
      outcome:
        "When information is missing, the agent asks — instead of acting on incomplete requests.",
      items: [
        "Natural-language clarification dialogs with employees",
        "Targeted follow-up questions when intent or detail is unclear",
        "Prevents incorrect autonomous actions on ambiguous requests",
        "Maintains a frictionless support experience without endless email loops",
        "Multi-turn conversation memory across the same ticket",
        "Auto-populates structured ticket fields from conversational answers",
      ],
      icon: MessageSquare,
    },
    {
      title: "Capability 7 — Enterprise Knowledge & Self-Service AI",
      outcome:
        "Instant answers to IT knowledge queries — grounded in your enterprise knowledge base.",
      items: [
        "“How do I connect to VPN?” — answered instantly",
        "“How do I install approved software?” — returns catalog steps",
        "“What is the escalation process?” — returns your IT policy",
        "AI-powered retrieval from internal knowledge bases and SOPs",
        "Reduces L1 ticket creation by deflecting knowledge queries",
        "Grounded responses with source traceability",
      ],
      icon: Database,
    },
    {
      title: "Capability 8 — Automated Ticketing & Audit Trails",
      outcome:
        "Every interaction logged with full decision history — enterprise-grade governance.",
      items: [
        "Native integration with Jira, ServiceNow, and logging systems",
        "Decision history captured for every AI action",
        "Actions executed, verification steps, and approval trails logged",
        "SLA tracking with automated status updates",
        "Audit-ready records for regulated environments",
        "Single source of truth across AI and human tickets",
      ],
      icon: BarChart3,
    },
  ];

  const industries = [
    {
      title: "BFSI & Financial Services",
      description:
        "Secure identity, access, and audit-ready IT support automation for regulated banking operations.",
      image: assistImg("BFSI.jpg"),
    },
    {
      title: "Healthcare",
      description:
        "Hospital and clinical IT support automation with secure workstation and application access management.",
      image: assistImg("Healthcare.jpg"),
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Store, POS, and workforce IT support — automated onboarding, access, and connectivity resolution.",
      image: assistImg("Retail & E-Commerce.jpg"),
    },
    {
      title: "IT & Technology Services",
      description:
        "Developer environment provisioning and enterprise shared service desk automation at scale.",
      image: tiqImg("it-technology.jpg"),
    },
    {
      title: "Manufacturing",
      description:
        "Plant and operations IT support — industrial workstation troubleshooting and OT-friendly workflows.",
      image: tiqImg("manufacturing.jpg"),
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Warehouse and distributed workforce IT support, endpoint troubleshooting, and role-based access.",
      image: assistImg("Logistics.jpg"),
    },
    {
      title: "Telecom",
      description:
        "Internal workforce IT support, network and collaboration resolution, and high-volume ticket handling.",
      image: assistImg("Telecom.jpg"),
    },
  ];

  const steps = [
    {
      title: "Intake",
      content:
        "Employee requests are captured across email, Microsoft Teams, Slack, and portals — with channel-native context carried into the workflow.",
      icon: Search,
    },
    {
      title: "Classify",
      content:
        "AI intent classification interprets the request, resolves ambiguity through dialogue, and maps to the right action and risk tier.",
      icon: Brain,
    },
    {
      title: "Verify",
      content:
        "Governance gates check identity (MFA / OTP), policy rules, and approval requirements based on risk level.",
      icon: ShieldCheck,
    },
    {
      title: "Resolve",
      content:
        "Engine executes approved IT actions inside connected systems — password resets, VPN, etc. — through APIs.",
      icon: Zap,
    },
    {
      title: "Escalate",
      content:
        "Low-confidence requests or policy violations are escalated to L2 with full history and context preserved.",
      icon: ArrowRightLeft,
    },
    {
      title: "Audit",
      content:
        "Every interaction is logged into ITSM and audit systems — decision history, approvals, and SLA tracking captured.",
      icon: BarChart3,
    },
  ];

  const stack = [
    {
      title: "Identity & Access",
      icon: Users,
      content:
        "Azure Active Directory · Okta · Active Directory · SailPoint · Custom IAM systems",
    },
    {
      title: "Endpoint & Device Management",
      icon: Computer,
      content:
        "Microsoft Intune · Jamf · SCCM · Workspace ONE · Custom endpoint platforms",
    },
    {
      title: "Collaboration & Email",
      icon: Globe,
      content:
        "Microsoft 365 · Exchange · Google Workspace · Outlook · Mail and calendar systems",
    },
    {
      title: "Automation & Orchestration",
      icon: Workflow,
      content:
        "REST APIs · Webhooks · PowerShell and scripting orchestration · RPA and workflow platforms",
    },
    {
      title: "Knowledge Sources",
      icon: Database,
      content:
        "Enterprise IT knowledge bases · SOPs and runbooks · SharePoint · Confluence · Internal documentation",
    },
    {
      title: "Security & Compliance",
      icon: ShieldCheck,
      content:
        "MFA / OTP verification · RBAC · Approval workflows · Audit logging · PII controls",
    },
    {
      title: "Deployment Modes",
      icon: Layers,
      content:
        "Cloud SaaS · Private cloud · Hybrid · On-premise (regulated and government environments)",
    },
  ];

  const useCases = [
    {
      title: "BFSI & Financial Services",
      subtitle:
        "Secure, governance-driven IT support automation for regulated banking operations.",
      crux: "TicketIQ automates secure identity/access management, employee support, and access provisioning — keeping every action policy-governed and audit-defensible.",
      focusAreas:
        "Identity & Access · Employee IT Support · Governance-Driven Provisioning · Audit Readiness · Compliance",
      outcome: "Faster L1 resolution · Audit-ready operations · Stronger access governance",
    },
    {
      title: "Healthcare",
      subtitle:
        "Hospital and clinical IT support automation with secure access workflows.",
      crux: "Automate hospital IT support, clinical application access, and device troubleshooting — reducing delays while maintaining strict identity and access controls.",
      focusAreas:
        "Hospital IT Support · Clinical App Access · Workstation Troubleshooting · Secure Workflows · IT Governance",
      outcome: "Faster clinical IT support · Reduced workstation downtime · Secure access compliance",
    },
    {
      title: "Retail & E-Commerce",
      subtitle:
        "Store and workforce IT support automation across distributed operations.",
      crux: "TicketIQ resolves store IT issues, POS problems, and onboarding/access provisioning — keeping stores running without an in-store IT engineer.",
      focusAreas:
        "Store IT Support · POS Resolution · Network Troubleshooting · Onboarding Automation · Distributed Workforce",
      outcome: "Higher store uptime · Faster onboarding · Reduced field IT cost",
    },
    {
      title: "IT & Technology Services",
      subtitle:
        "Developer environment provisioning and shared service desk automation at scale.",
      crux: "Automate developer setup, app/infra support, and service desk workflows — freeing IT engineers from repetitive work and accelerating enablement.",
      focusAreas:
        "Developer Environments · App & Infra Support · ITSM Automation · Shared Service Desk · Enterprise IT",
      outcome: "Faster developer onboarding · Lower L1 load · Scalable IT operations",
    },
    {
      title: "Manufacturing",
      subtitle:
        "Plant and operations IT support automation across industrial environments.",
      crux: "TicketIQ provides plant IT support, workstation troubleshooting, and OT workflows — keeping plant systems running while respecting industrial constraints.",
      focusAreas:
        "Plant IT Support · Industrial Workstations · Device Management · OT Workflows · Operations Continuity",
      outcome: "Reduced plant IT downtime · Faster issue resolution · OT-aware governance",
    },
    {
      title: "Logistics & Supply Chain",
      subtitle:
        "Warehouse, endpoint, and distributed workforce IT support automation.",
      crux: "Automate warehouse support, connectivity troubleshooting, and role-based access for distributed workers — keeping operations productive without expanding headcount.",
      focusAreas:
        "Warehouse IT · Endpoint Troubleshooting · Role-Based Access · Distributed Workforce · Field Support",
      outcome: "Better logistics uptime · Scalable distributed support · Lower IT cost per worker",
    },
    {
      title: "Telecom",
      subtitle:
        "Internal workforce IT support and high-volume ticket handling automation.",
      crux: "TicketIQ handles internal workforce support, network/collaboration issue resolution, and high-volume ticket flows — creating an autonomous operations layer.",
      focusAreas:
        "Workforce IT · Network Resolution · Collaboration Support · Service Desk Automation · High-Volume Handling",
      outcome: "Massive L1 deflection · Faster resolution at scale · Lower service desk cost",
    },
  ];

  return (
    <div className="pt-[110px]">
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
            TicketIQ
          </motion.h1>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight text-balance leading-tight"
            >
              Autonomous IT Support. Faster Resolutions. Near Zero-Touch Operations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              Agentic AI that resolves L1 IT tickets autonomously — understanding
              intent, executing approved actions, and enforcing enterprise governance
              from intake to audit. Built for IT teams ready to move from reactive
              service desks to zero-touch IT operations, without compromising security
              or control.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              The Enterprise IT Support Challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Enterprise IT support is stuck in a loop the business can’t scale out
              of. The vast majority of tickets flowing into service desks are
              repetitive L1 work — password resets, account unlocks, VPN issues,
              software installs, mailbox access — yet each ticket still consumes a
              human agent, an hour or more of resolution time, and an employee’s
              entire workflow until it’s closed. Service desks scale headcount to
              keep up. Employees lose hours waiting on routine fixes. And the IT
              teams who should be enabling transformation spend their best capacity
              firefighting the same five requests every day. Traditional chatbots and
              scripted automations promise to fix this — but break the moment a
              request is ambiguous, requires real action inside enterprise systems, or
              needs governance the business can defend.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-20 items-start">
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group shadow-2xl border border-slate-100 dark:border-white/10">
                <img
                  src={tiqImg("challenge.jpg")}
                  alt="IT Operations Center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-black tracking-widest text-white uppercase bg-accent rounded-full">
                    Impact Framing
                  </div>
                  <p className="text-lg font-bold text-white leading-relaxed italic">
                    The result: ticket backlogs, slower response and resolution times,
                    rising operational cost, overloaded support teams, and degraded
                    employee experience — while capacity that should fund
                    modernization gets spent on repetitive work.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="mb-10 text-left">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight uppercase tracking-tight">
                  Common Operational Pain Points
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <ul className="space-y-4">
                {[
                  "High volumes of repetitive L1 tickets",
                  "Manual triaging and classification delays",
                  "Endless clarification loops with employees",
                  "Slow resolution times for routine issues",
                  "Rising service desk operational costs",
                  "Overloaded teams unable to focus on strategy",
                  "Poor employee experience and productivity loss",
                  "Scripted chatbots that fail on ambiguity",
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
                    <p className="text-[17px] font-bold text-brand-950 dark:text-white leading-tight">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              What TicketIQ Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-brand-950 dark:text-white mb-6 leading-tight uppercase tracking-tight"
            >
              From reactive support → autonomous IT operations. Intake. Classify.
              Verify. Resolve. Audit.
            </motion.h3>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-10" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              TicketIQ is an agentic AI ITSM platform that autonomously manages and
              resolves L1 IT tickets across the enterprise. It captures requests from
              email, Teams, Slack, and portals; classifies intent; verifies identity;
              and executes approved actions inside connected systems — ensuring
              security, consistency, and traceability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
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
              className="text-lg md:text-xl font-bold text-brand-950/70 dark:text-white/60 mb-10 italic"
            >
              Purpose-built for enterprises with high-volume IT service desks —
              wherever repetitive L1 tickets, governance demands, and scaling pressure
              collide.
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              How TicketIQ Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              TicketIQ is built as a layered agentic AI architecture purpose-built for
              IT operations. It captures requests across employee channels, classifies
              intent, verifies identity and policy, executes approved workflows via
              APIs, escalates intelligently, and logs every step into ITSM and audit
              systems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-4xl font-black text-slate-100 dark:text-white/5">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors text-left tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
                    {step.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Built to Plug Into Your Enterprise IT Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              TicketIQ is designed as an ITSM-native, integration-flexible platform.
              Whether your docs are in SharePoint or Confluence, your endpoints in
              Intune or Jamf, and your service desk in ServiceNow or Jira — TicketIQ
              connects through pre-built integrations and APIs to take autonomous
              action.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-accent/30 transition-all flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-brand-950 dark:text-white mb-3 group-hover:text-accent transition-colors tracking-tight">
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

      <section className="py-[80px] px-6 bg-slate-50 dark:bg-white/5 text-left">
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
              className="text-lg text-slate-500 dark:text-slate-400 font-medium italic"
            >
              Seven industry-specific deployments where TicketIQ is replacing manual
              L1 IT support with autonomous, governance-driven AI resolution.
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
