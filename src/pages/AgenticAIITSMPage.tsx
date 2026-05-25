import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SectionIcon } from "../components/SectionIcon";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  Brain,
  MessageSquare,
  Target,
  ArrowRightLeft,
  Database,
} from "lucide-react";

/** TicketIQ-only assets (no AssistIQ equivalent). */
const TIQ_IMG = "Images/TicketIQ";
const TIQ_ENT_IMG = "Images/Entrprise_Ai/TiketIq";
const tiqHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...TIQ_ENT_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;
const TIQ_HERO_IMG = tiqHeroImg("Tickethero.jpg");
const TIQ_PAIN_POINTS_IMG = tiqHeroImg("Pain Points.jpg");

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
    <h3 className="mb-2 min-h-[2.5rem] text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-5 min-h-[3rem] text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">
      {subtitle}
    </p>

    <div className="mb-6 flex flex-1 flex-col space-y-4">
      <p className="min-h-[4.5rem] text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {crux}
      </p>
      <div>
        <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">Focus Areas</h4>
        <p className="min-h-[2.5rem] text-[14px] font-bold text-brand-950 dark:text-white">{focusAreas}</p>
      </div>
    </div>

    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-white/5">
      <div className="flex items-center gap-3">
        <SectionIcon icon={Target} size="sm" hover="none" />
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">
          <span className="text-accent uppercase tracking-wider mr-2">
            Outcome:
          </span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

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
    <div className="pt-[110px]">
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={TIQ_HERO_IMG}
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
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            TicketIQ
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Autonomous IT Support. Faster Resolutions. Near Zero-Touch Operations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Agentic AI that resolves L1 IT tickets autonomously, understanding intent,
              executing approved actions, and enforcing enterprise governance from intake to
              audit. Built for IT teams ready to move from reactive service desks to zero-touch
              IT operations, without compromising security or control.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full text-left mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Enterprise IT support is stuck in a loop the business can’t scale out
              of. The vast majority of tickets flowing into service desks are
              repetitive L1 work, password resets, account unlocks, VPN issues,
              software installs, mailbox access, yet each ticket still consumes a
              human agent, an hour or more of resolution time, and an employee’s
              entire workflow until it’s closed. Service desks scale headcount to
              keep up. Employees lose hours waiting on routine fixes. And the IT
              teams who should be enabling transformation spend their best capacity
              firefighting the same five requests every day. Traditional chatbots and
              scripted automations promise to fix this, but break the moment a
              request is ambiguous, requires real action inside enterprise systems, or
              needs governance the business can defend.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <img
                loading="lazy"
                src={TIQ_PAIN_POINTS_IMG}
                alt="Common operational pain points in enterprise IT support"
                className="block h-auto w-full rounded-2xl"
                referrerPolicy="no-referrer"
              />
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
                    <p className="text-[17px] text-brand-950 dark:text-white leading-tight">
                      {item}
                    </p>
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
              The result - ticket backlogs, slower response and resolution times, rising operational cost,
              overloaded support teams, and degraded employee experience, while capacity that should fund
              modernization gets spent on repetitive work.
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
              What TicketIQ Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[16px] font-bold text-brand-950 dark:text-white mb-6 leading-tight tracking-tight"
            >
              From Reactive IT Support to Autonomous IT Operations. Intake. Classify. Verify. Resolve.
              Audit.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              TicketIQ is an agentic AI ITSM platform that autonomously manages and
              resolves L1 IT tickets across the enterprise. It captures requests from
              email, Teams, Slack, and portals; classifies intent; verifies identity;
              and executes approved actions inside connected systems, ensuring
              security, consistency, and traceability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((it, idx) => (
              <PlatformCapabilityCard key={idx} {...it} delay={idx * 0.05} prependOutcomeLabel />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              How TicketIQ Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
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
                    <span className="text-4xl font-black text- text-accent/10 dark:text-white/5">
                      0{idx + 1}
                    </span>
                  </div>
                  <SectionIcon icon={Icon} size="lg" className="mb-8" />
                  <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors text-left tracking-tight">
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
              Seven industry-specific deployments where TicketIQ is replacing manual
              L1 IT support with autonomous, governance-driven AI resolution.
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
