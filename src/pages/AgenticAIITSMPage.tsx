import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  CapabilityGridSection,
  ImpactFramingSection,
  PainPointsSection,
  PlatformCapabilityCard,
  ProcessStepsSection,
  UseCasesSection,
} from "../components/product-page";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  Brain,
  MessageSquare,
  ArrowRightLeft,
  Database,
} from "lucide-react";

/** TicketIQ-only assets (no AssistIQ equivalent). */
const TIQ_IMG = "Images/TicketIQ";
const TIQ_ENT_IMG = "Images/Entrprise_Ai/TiketIq";
const tiqHeroImg = (file: string) => buildAssetUrl(TIQ_ENT_IMG, file);
const TIQ_HERO_IMG = tiqHeroImg("Tickethero.jpg");
const TIQ_PAIN_POINTS_IMG = tiqHeroImg("Pain Points.jpg");

const TIQ_INTRO =
  "Enterprise IT support is stuck in a loop the business can't scale out of. The vast majority of tickets flowing into service desks are repetitive L1 work, password resets, account unlocks, VPN issues, software installs, mailbox access, yet each ticket still consumes a human agent, an hour or more of resolution time, and an employee's entire workflow until it's closed. Service desks scale headcount to keep up. Employees lose hours waiting on routine fixes. And the IT teams who should be enabling transformation spend their best capacity firefighting the same five requests every day. Traditional chatbots and scripted automations promise to fix this, but break the moment a request is ambiguous, requires real action inside enterprise systems, or needs governance the business can defend.";

const TIQ_PAIN_ITEMS = [
  "High volumes of repetitive L1 tickets",
  "Manual triaging and classification delays",
  "Endless clarification loops with employees",
  "Slow resolution times for routine issues",
  "Rising service desk operational costs",
  "Overloaded teams unable to focus on strategy",
  "Poor employee experience and productivity loss",
  "Scripted chatbots that fail on ambiguity",
];

export const AgenticAIITSMPage = () => {
  const capabilities = [
    {
      title: "Multi-Channel Request Intake",
      outcome:
        "Every employee channel, captured, unstructured conversation turned into structured action.",
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
      title: "AI Intent Classification Engine",
      outcome:
        "Advanced AI that understands what the employee actually needs, even when they don’t say it clearly.",
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
      title: "Autonomous Resolution Engine",
      outcome:
        "Agentic AI that doesn’t just respond, it executes real IT actions inside enterprise systems.",
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
      title: "Security-First Governance Layer",
      outcome:
        "Enterprise security and policy enforcement built into every autonomous action.",
      items: [
        "Role-based access control (RBAC) on every workflow",
        "Approval-driven execution for sensitive request types",
        "Secure identity verification (OTP / MFA) before high-risk actions",
        "Risk-tiered automation, autonomous for low-risk, gated for high-risk",
        "Complete audit visibility on every AI-executed action",
        "Compliance-ready operations for regulated industries",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Intelligent Escalation Framework",
      outcome:
        "The AI knows what it can resolve, and exactly when to hand off to a human engineer.",
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
      title: "Conversational Clarification AI",
      outcome:
        "When information is missing, the agent asks, instead of acting on incomplete requests.",
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
      title: "Enterprise Knowledge & Self-Service AI",
      outcome:
        "Instant answers to IT knowledge queries, grounded in your enterprise knowledge base.",
      items: [
        "“How do I connect to VPN?”, answered instantly",
        "“How do I install approved software?”, returns catalog steps",
        "“What is the escalation process?”, returns your IT policy",
        "AI-powered retrieval from internal knowledge bases and SOPs",
        "Reduces L1 ticket creation by deflecting knowledge queries",
        "Grounded responses with source traceability",
      ],
      icon: Database,
    },
    {
      title: "Automated Ticketing & Audit Trails",
      outcome:
        "Every interaction logged with full decision history, enterprise-grade governance.",
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

  const steps = [
    {
      title: "Intake",
      content:
        "Employee requests are captured across email, Microsoft Teams, Slack, and portals, with channel-native context carried into the workflow.",
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
        "Engine executes approved IT actions inside connected systems, password resets, VPN, etc., through APIs.",
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
        "Every interaction is logged into ITSM and audit systems, decision history, approvals, and SLA tracking captured.",
      icon: BarChart3,
    },
  ];

  const useCases = [
    {
      title: "BFSI & Financial Services",
      subtitle:
        "Secure, governance-driven IT support automation for regulated banking operations.",
      crux: "TicketIQ automates secure identity/access management, employee support, and access provisioning, keeping every action policy-governed and audit-defensible.",
      focusAreas:
        "Identity & Access · Employee IT Support · Governance-Driven Provisioning · Audit Readiness · Compliance",
      outcome: "Faster L1 resolution · Audit-ready operations · Stronger access governance",
    },
    {
      title: "Healthcare",
      subtitle:
        "Hospital and clinical IT support automation with secure access workflows.",
      crux: "Automate hospital IT support, clinical application access, and device troubleshooting, reducing delays while maintaining strict identity and access controls.",
      focusAreas:
        "Hospital IT Support · Clinical App Access · Workstation Troubleshooting · Secure Workflows · IT Governance",
      outcome: "Faster clinical IT support · Reduced workstation downtime · Secure access compliance",
    },
    {
      title: "Retail & E-Commerce",
      subtitle:
        "Store and workforce IT support automation across distributed operations.",
      crux: "TicketIQ resolves store IT issues, POS problems, and onboarding/access provisioning, keeping stores running without an in-store IT engineer.",
      focusAreas:
        "Store IT Support · POS Resolution · Network Troubleshooting · Onboarding Automation · Distributed Workforce",
      outcome: "Higher store uptime · Faster onboarding · Reduced field IT cost",
    },
    {
      title: "IT & Technology Services",
      subtitle:
        "Developer environment provisioning and shared service desk automation at scale.",
      crux: "Automate developer setup, app/infra support, and service desk workflows, freeing IT engineers from repetitive work and accelerating enablement.",
      focusAreas:
        "Developer Environments · App & Infra Support · ITSM Automation · Shared Service Desk · Enterprise IT",
      outcome: "Faster developer onboarding · Lower L1 load · Scalable IT operations",
    },
    {
      title: "Manufacturing",
      subtitle:
        "Plant and operations IT support automation across industrial environments.",
      crux: "TicketIQ provides plant IT support, workstation troubleshooting, and OT workflows, keeping plant systems running while respecting industrial constraints.",
      focusAreas:
        "Plant IT Support · Industrial Workstations · Device Management · OT Workflows · Operations Continuity",
      outcome: "Reduced plant IT downtime · Faster issue resolution · OT-aware governance",
    },
    {
      title: "Logistics & Supply Chain",
      subtitle:
        "Warehouse, endpoint, and distributed workforce IT support automation.",
      crux: "Automate warehouse support, connectivity troubleshooting, and role-based access for distributed workers, keeping operations productive without expanding headcount.",
      focusAreas:
        "Warehouse IT · Endpoint Troubleshooting · Role-Based Access · Distributed Workforce · Field Support",
      outcome: "Better logistics uptime · Scalable distributed support · Lower IT cost per worker",
    },
    {
      title: "Telecom",
      subtitle:
        "Internal workforce IT support and high-volume ticket handling automation.",
      crux: "TicketIQ handles internal workforce support, network/collaboration issue resolution, and high-volume ticket flows, creating an autonomous operations layer.",
      focusAreas:
        "Workforce IT · Network Resolution · Collaboration Support · Service Desk Automation · High-Volume Handling",
      outcome: "Massive L1 deflection · Faster resolution at scale · Lower service desk cost",
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="TicketIQ"
        tagline="Autonomous IT Support. Faster Resolutions. Near Zero-Touch Operations."
        description="Agentic AI that resolves L1 IT tickets autonomously, understanding intent, executing approved actions, and enforcing enterprise governance from intake to audit. Built for IT teams ready to move from reactive service desks to zero-touch IT operations, without compromising security or control."
        imageSrc={TIQ_HERO_IMG}
      />

      <PainPointsSection
        intro={TIQ_INTRO}
        imageSrc={TIQ_PAIN_POINTS_IMG}
        imageAlt="Common operational pain points in enterprise IT support"
        items={TIQ_PAIN_ITEMS}
        sectionClassName="pt-[60px] pb-8 bg-white dark:bg-brand-950 px-6 text-left"
      />

      <ImpactFramingSection sectionClassName="pb-8 px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        The result - ticket backlogs, slower response and resolution times, rising operational cost,
        overloaded support teams, and degraded employee experience, while capacity that should fund
        modernization gets spent on repetitive work.
      </ImpactFramingSection>

      <CapabilityGridSection
        title="What TicketIQ Solves"
        tagline="From Reactive IT Support to Autonomous IT Operations. Intake. Classify. Verify. Resolve. Audit."
        description="TicketIQ is an agentic AI ITSM platform that autonomously manages and resolves L1 IT tickets across the enterprise. It captures requests from email, Teams, Slack, and portals; classifies intent; verifies identity; and executes approved actions inside connected systems, ensuring security, consistency, and traceability."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.05} prependOutcomeLabel />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How TicketIQ Works"
        description="TicketIQ is built as a layered agentic AI architecture purpose-built for IT operations. It captures requests across employee channels, classifies intent, verifies identity and policy, executes approved workflows via APIs, escalates intelligently, and logs every step into ITSM and audit systems."
        steps={steps}
      />

      <UseCasesSection
        description="Seven industry-specific deployments where TicketIQ is replacing manual L1 IT support with autonomous, governance-driven AI resolution."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
