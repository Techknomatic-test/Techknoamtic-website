import type { ComponentType } from "react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  UserCircle,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  Brain,
  Video,
  Workflow,
  Layers,
  Target,
  PhoneCall,
  ShieldCheck,
  BarChart3,
  ArrowRightLeft,
  Settings,
  Database,
  Users,
} from "lucide-react";

const ASSIST_IMG = "Images/Entrprise_Ai/AssistIQ";
const assistImg = (file: string) => `/${ASSIST_IMG}/${file}`;
const ASSIST_HERO_IMG = assistImg("hero.jpg");

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
            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors">
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group flex flex-col h-full text-left overflow-hidden"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const AssistIQPage = () => {
  const capabilities = [
    {
      title: "Capability 1 — AI-Powered Customer Query Handling",
      outcome:
        "Autonomous handling of routine and high-volume customer interactions — instantly, 24×7.",
      items: [
        "Product and service inquiries handled conversationally",
        "Account, order, and status-tracking queries",
        "Policy, claim, billing, and payment assistance",
        "Appointment, booking, and service requests",
        "Technical support FAQs and troubleshooting",
        "Instant responses across every digital channel",
      ],
      icon: Sparkles,
    },
    {
      title: "Capability 2 — Intelligent FAQ Automation",
      outcome:
        "From static FAQ pages to dynamic conversational self-service.",
      items: [
        "Context-aware conversational responses",
        "Multi-language support across regions",
        "Conversational handling of long-tail questions",
        "Intelligent answer recommendations",
        "Native knowledge-base integration",
        "Continuous AI learning and answer optimization",
      ],
      icon: MessageSquare,
    },
    {
      title: "Capability 3 — AI Avatars & Human-Like Interactions",
      outcome:
        "Engaging, brand-aligned digital assistants for customer-facing experiences.",
      items: [
        "Human-like conversational delivery",
        "Voice and text-based interaction modes",
        "Personalized, context-aware responses",
        "Visual customer engagement through avatars",
        "Brand-aligned tone, persona, and appearance",
        "Ideal for web, kiosks, apps, and digital lobbies",
      ],
      icon: Video,
    },
    {
      title: "Capability 4 — Workflow Automation Through Conversations",
      outcome:
        "Beyond answers — the AI agent executes real business workflows.",
      items: [
        "Appointment booking and rescheduling",
        "Service request submission and tracking",
        "Customer onboarding step automation",
        "Lead capture and qualification",
        "Password reset and account self-service",
        "Status updates, notifications, and feedback collection",
      ],
      icon: Workflow,
    },
    {
      title: "Capability 5 — Multi-Channel Customer Engagement",
      outcome:
        "One AI agent. Every customer channel. Consistent experience.",
      items: [
        "Websites and customer portals",
        "Mobile applications (iOS / Android)",
        "WhatsApp and messaging platforms",
        "Voice interfaces and IVR replacement",
        "Social and digital channels",
        "Unified conversation context across touchpoints",
      ],
      icon: Globe,
    },
    {
      title: "Capability 6 — AI Knowledge Intelligence",
      outcome:
        "Accurate answers grounded in enterprise knowledge — not generic AI.",
      items: [
        "FAQ and SOP repository integration",
        "Product catalogs and pricing data",
        "Policy documents and compliance content",
        "CRM and support system context",
        "Internal operational workflows",
        "Reduced hallucination through grounded retrieval",
      ],
      icon: Brain,
    },
    {
      title: "Capability 7 — Intelligent Escalation Framework",
      outcome:
        "AI knows what it can answer — and exactly when to hand off to a human.",
      items: [
        "Automatic escalation on complex customer scenarios",
        "Low-confidence response detection and handoff",
        "Sensitive-request routing (complaints, distress, etc)",
        "Full conversation context handed to human agent",
        "Exception-handling workflows with clear triggers",
        "AI + human collaboration that protects customer trust",
      ],
      icon: ArrowRightLeft,
    },
    {
      title: "Capability 8 — Analytics & Conversation Insights",
      outcome:
        "Every conversation becomes operational and customer intelligence.",
      items: [
        "Query trend analysis across customer base",
        "Customer intent and journey tracking",
        "Resolution rate and deflection monitoring",
        "Conversation analytics and topic clustering",
        "Customer satisfaction (CSAT) signals from chat",
        "Self-service adoption and channel-mix metrics",
      ],
      icon: BarChart3,
    },
  ];

  const industries = [
    {
      title: "Retail & E-Commerce",
      description:
        "AI agents that handle order tracking, returns, recommendations, and promotions — 24×7.",
      image: assistImg("Retail & E-Commerce.jpg"),
    },
    {
      title: "BFSI",
      description:
        "Conversational AI for account, card, loan, and onboarding queries with secure customer assistance.",
      image: assistImg("BFSI.jpg"),
    },
    {
      title: "Telecom",
      description:
        "AI self-service for plans, recharges, complaints, SIM activation, and service requests.",
      image: assistImg("Telecom.jpg"),
    },
    {
      title: "Healthcare",
      description:
        "Appointment booking, patient queries, and hospital service support through AI agents and avatars.",
      image: assistImg("Healthcare.jpg"),
    },
    {
      title: "Logistics",
      description:
        "Shipment tracking, delivery issue resolution, and customer communication automation.",
      image: assistImg("Logistics.jpg"),
    },
    {
      title: "Insurance",
      description:
        "Policy, claims, renewals, and customer self-service journeys powered by conversational AI.",
      image: assistImg("BFSI.jpg"),
    },
    {
      title: "Government & Public Services",
      description:
        "AI citizen-service portals for schemes, applications, and public information — at digital scale.",
      image: assistImg("Government & Public Services.jpg"),
    },
  ];

  const steps = [
    {
      title: "Intent Capture",
      content:
        "Customer query is captured across web, mobile, WhatsApp, voice, kiosk, or portal — with channel-native context carried into the conversation.",
      icon: MessageSquare,
    },
    {
      title: "Understand",
      content:
        "AI engine interprets natural-language intent, disambiguates the goal, and pulls grounded context from enterprise knowledge sources.",
      icon: Brain,
    },
    {
      title: "Respond",
      content:
        "Conversational response is generated in the customer’s language and channel — delivered via LLM-powered agent or avatar.",
      icon: UserCircle,
    },
    {
      title: "Execute",
      content:
        "When intent requires action, AssistIQ executes the workflow autonomously — bookings, status lookups, or service requests.",
      icon: Zap,
    },
    {
      title: "Escalate",
      content:
        "Low-confidence responses or sensitive scenarios trigger a safe handoff to a human agent with full conversation history.",
      icon: ArrowRightLeft,
    },
    {
      title: "Learn",
      content:
        "Every conversation feeds analytics and continuous AI optimization — improving intent accuracy and refining escalation thresholds.",
      icon: Sparkles,
    },
  ];

  const stack = [
    {
      title: "Customer Channels",
      content:
        "Web · Mobile apps (iOS / Android) · WhatsApp · Messaging platforms · Voice · IVR · Kiosk · Social channels",
      icon: Globe,
    },
    {
      title: "CRM & Customer Systems",
      content:
        "Salesforce · HubSpot · Microsoft Dynamics · Zoho · Custom enterprise CRMs",
      icon: Users,
    },
    {
      title: "Contact Center & Ticketing",
      icon: PhoneCall,
      content:
        "Zendesk · Freshdesk · ServiceNow · Genesys · Cisco · Custom ticketing systems",
    },
    {
      title: "Knowledge & Content Sources",
      icon: Database,
      content:
        "Knowledge bases · SOPs and policy repositories · Product catalogs · SharePoint and document stores",
    },
    {
      title: "Workflow & Operational Systems",
      icon: Settings,
      content:
        "ERP · Order management · Booking systems · Policy and claims platforms · Custom workflow APIs",
    },
    {
      title: "Analytics & BI Layer",
      icon: BarChart3,
      content:
        "Conversation analytics export · CSAT signals · Power BI · Tableau · Custom dashboards",
    },
    {
      title: "Security & Compliance",
      icon: ShieldCheck,
      content:
        "Role-based access control · Data encryption · PII redaction · Audit logging · Region-specific data residency",
    },
    {
      title: "Deployment Modes",
      icon: Layers,
      content:
        "Cloud SaaS · Private cloud · Hybrid · On-premise (regulated industries)",
    },
  ];

  const useCases = [
    {
      title: "Retail & E-Commerce",
      subtitle:
        "24×7 AI customer assistance for orders, returns, and shopper engagement.",
      crux: "AssistIQ automates customer query handling, order tracking and returns assistance, product recommendation conversations, and promotional engagement — turning support into a revenue channel.",
      focusAreas:
        "Query Automation · Order Tracking · Returns Assistance · Product Recommendation · Promotional Engagement",
      outcome: "Higher CSAT · Faster resolution · Lower support cost per order",
    },
    {
      title: "BFSI",
      subtitle:
        "Conversational AI for banking, cards, loans, and onboarding self-service.",
      crux: "Handle account queries, loan/card support, and onboarding journeys through AI agents that operate inside your CRM and core systems — with secure human escalation.",
      focusAreas:
        "Account Queries · Loan & Card Support · Claims Assistance · Payments · Onboarding Guidance",
      outcome: "Faster customer service · Lower call-center load · Safer escalation",
    },
    {
      title: "Telecom",
      subtitle:
        "AI self-service for plans, recharges, complaints, and service requests.",
      crux: "AssistIQ automates plan/recharge assistance, complaint registration, and SIM guidance — deflecting routine queries from contact centers and improving resolution times.",
      focusAreas:
        "Plans & Recharge · Complaint Registration · SIM Activation · Service Requests · Customer Channels",
      outcome: "Higher deflection · Faster resolution · Lower contact-center cost",
    },
    {
      title: "Healthcare",
      subtitle:
        "AI agents and avatars for appointments, patient queries, and hospital services.",
      crux: "Automate appointment booking, patient query assistance, and prescription guidance — freeing clinical and admin teams from routine query load while ensuring safe handoffs.",
      focusAreas:
        "Appointment Booking · Patient Queries · Prescription Guidance · Hospital Services · Safe Escalation",
      outcome: "Faster patient response · Reduced admin load · Better patient experience",
    },
    {
      title: "Logistics",
      subtitle:
        "Conversational AI for shipment tracking, delivery issues, and customer updates.",
      crux: "AssistIQ provides instant shipment tracking, delivery issue resolution, and proactive communication — reducing 'Where is my order?' contacts and improving delivery CX.",
      focusAreas:
        "Shipment Tracking · Delivery Issues · Customer Communication · Status Notifications · Proactive Updates",
      outcome: "Fewer WISMO calls · Better delivery experience · Lower support cost",
    },
    {
      title: "Insurance",
      subtitle:
        "AI self-service for policies, claims, renewals, and customer journeys.",
      crux: "Automate policy info, claims guidance, and renewal support with intelligent escalation. AI agents reduce service load and accelerate policyholder engagement.",
      focusAreas:
        "Policy Information · Claims Workflow · Renewals · Payment Support · Customer Journeys",
      outcome: "Faster claims response · Higher self-service adoption · Lower service cost",
    },
    {
      title: "Government & Public Services",
      subtitle:
        "AI citizen-service portals for schemes, applications, and public information.",
      crux: "Deploy AI agents and avatars across citizen portals to guide scheme applications and answer queries — enabling 24×7 citizen access at scale.",
      focusAreas:
        "Citizen Portals · Scheme Guidance · Public Information · Application Assistance · Digital Services",
      outcome: "Better citizen access · Reduced departmental load · Standardized public service",
    },
  ];

  return (
    <div className="pt-[110px]">
      <section className="relative min-h-[min(72vh,720px)] py-20 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={ASSIST_HERO_IMG}
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
        <div className="max-w-7xl mx-auto relative z-10 text-left drop-shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            ASSISTIQ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            AssistIQ
          </motion.h1>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight leading-tight"
            >
              Engage Faster. Support Smarter. Scale Seamlessly
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed"
            >
              AI-powered conversational agents and intelligent avatars that
              autonomously handle customer queries, execute workflows, and deliver
              human-like self-service — 24×7, across every digital channel. Built
              for enterprises ready to move from manual customer support to
              intelligent autonomous engagement.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              The Modern Customer Service Challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Customer expectations have outrun the support models built to serve
              them. Today’s customers expect instant responses across every channel
              they use — web, app, WhatsApp, voice — yet most enterprises still
              answer them through shift-based contact centers, static FAQ pages, and
              ticket queues. The result is a constant tension: repetitive queries
              flood support teams, wait times stretch, costs rise, and customers
              churn quietly to faster competitors. Meanwhile, the business case for
              AI-led self-service has shifted from ‘nice to have’ to operational
              necessity — with one condition: the AI has to actually work, sound
              human, and know when to escalate.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-20 items-start">
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group shadow-2xl border border-slate-100 dark:border-white/10">
                <img
                  src={ASSIST_HERO_IMG}
                  alt="Modern Customer Service"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-black tracking-widest text-white uppercase bg-accent rounded-full">
                    Impact Framing
                  </div>
                  <p className="text-lg font-bold text-white leading-relaxed italic">
                    The result: poor customer satisfaction, reduced operational
                    efficiency, higher support overheads, lost engagement and
                    conversion opportunities — and a widening gap between the
                    experience customers expect and the support model built to
                    deliver it.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight uppercase tracking-tight">
                  Common Operational Pain Points
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <ul className="space-y-4">
                {[
                  "High volumes of repetitive customer queries draining capacity",
                  "Long support wait times across calls, email, and chat",
                  "Rising contact center and support operational costs",
                  "Inconsistent customer experiences across channels",
                  "Limited support availability outside business hours",
                  "Heavy dependency on manual support for routine queries",
                  "Slow resolution cycles for routine requests",
                  "Static FAQ pages that customers abandon",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 group list-none"
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

      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              What AssistIQ Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-brand-950 dark:text-white mb-6 leading-tight uppercase tracking-tight"
            >
              From manual customer support → intelligent autonomous self-service.
              Instant. Conversational. Scalable. Safe
            </motion.h3>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-10" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Every conversation is an opportunity. AssistIQ unifies your business
              knowledge into an intelligent conversational engine that handles routine
              inquiries, executes workflows, and escalates complex scenarios —
              ensuring 24/7 engagement without the manual overhead.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

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
              className="text-lg md:text-xl font-bold text-brand-950/70 dark:text-white/60 mb-10 italic"
            >
              Purpose-built for customer-facing enterprises — wherever customer
              expectations have outpaced traditional support models.
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              How AssistIQ Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              AssistIQ is built as a layered conversational AI architecture that
              captures customer intent, understands meaning through
              enterprise-grounded knowledge, responds in human-like conversation,
              executes workflows autonomously, escalates safely, and learns
              continuously — transforming support into a cost-effective engagement
              layer.
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

      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Built to Plug Into Your Customer-Experience Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              AssistIQ is a channel-first, integration-flexible platform. Whether
              web, mobile, WhatsApp, or voice — AssistIQ deploys with unified
              context. It plugs into your CRM, ticketing, and operational systems
              through pre-built connectors and APIs — operating on top of the CX
              stack you already run.
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
              className="text-lg text-slate-500 dark:text-slate-400 font-medium italic"
            >
              Seven industry-specific deployments where AssistIQ is replacing manual
              customer support with intelligent, autonomous AI self-service.
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
