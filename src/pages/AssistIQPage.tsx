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
  UserCircle,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  Brain,
  Video,
  Workflow,
  BarChart3,
  ArrowRightLeft,
} from "lucide-react";

const ASSIST_IMG = "Images/Entrprise_Ai/AssistIQ";
const assistHeroImg = (file: string) => buildAssetUrl(ASSIST_IMG, file);
const ASSIST_HERO_IMG = assistHeroImg("Assit_hero.jpg");
const ASSIST_PAIN_POINTS_IMG = assistHeroImg("common_opertional.jpg");

const ASSIST_INTRO =
  "Customer expectations have outrun the support models built to serve them. Today's customers expect instant responses across every channel they use, web, app, WhatsApp, voice, yet most enterprises still answer them through shift-based contact centers, static FAQ pages, and ticket queues. The result is a constant tension: repetitive queries flood support teams, wait times stretch, costs rise, and customers churn quietly to faster competitors. Meanwhile, the business case for AI-led self-service has shifted from 'nice to have' to operational necessity, with one condition: the AI has to actually work, sound human, and know when to escalate.";

const ASSIST_PAIN_ITEMS = [
  "High volumes of repetitive customer queries draining capacity",
  "Long support wait times across calls, email, and chat",
  "Rising contact center and support operational costs",
  "Inconsistent customer experiences across channels",
  "Limited support availability outside business hours",
  "Heavy dependency on manual support for routine queries",
  "Slow resolution cycles for routine requests",
  "Static FAQ pages that customers abandon",
];

export const AssistIQPage = () => {
  const capabilities = [
    {
      title: "AI-Powered Customer Query Handling",
      outcome:
        "Autonomous handling of routine and high-volume customer interactions, instantly, 24×7.",
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
      title: "Intelligent FAQ Automation",
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
      title: "AI Avatars & Human-Like Interactions",
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
      title: "Workflow Automation Through Conversations",
      outcome:
        "Beyond answers, the AI agent executes real business workflows.",
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
      title: "Multi-Channel Customer Engagement",
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
      title: "AI Knowledge Intelligence",
      outcome:
        "Accurate answers grounded in enterprise knowledge, not generic AI.",
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
      title: "Intelligent Escalation Framework",
      outcome:
        "AI knows what it can answer, and exactly when to hand off to a human.",
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
      title: "Analytics & Conversation Insights",
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

  const steps = [
    {
      title: "Intent Capture",
      content:
        "Customer query is captured across web, mobile, WhatsApp, voice, kiosk, or portal, with channel-native context carried into the conversation.",
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
        "Conversational response is generated in the customer's language and channel, delivered via LLM-powered agent or avatar.",
      icon: UserCircle,
    },
    {
      title: "Execute",
      content:
        "When intent requires action, AssistIQ executes the workflow autonomously, bookings, status lookups, or service requests.",
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
        "Every conversation feeds analytics and continuous AI optimization, improving intent accuracy and refining escalation thresholds.",
      icon: Sparkles,
    },
  ];

  const useCases = [
    {
      title: "Retail & E-Commerce",
      subtitle:
        "24×7 AI customer assistance for orders, returns, and shopper engagement.",
      crux: "AssistIQ automates customer query handling, order tracking and returns assistance, product recommendation conversations, and promotional engagement, turning support into a revenue channel.",
      focusAreas:
        "Query Automation · Order Tracking · Returns Assistance · Product Recommendation · Promotional Engagement",
      outcome: "Higher CSAT · Faster resolution · Lower support cost per order",
    },
    {
      title: "BFSI",
      subtitle:
        "Conversational AI for banking, cards, loans, and onboarding self-service.",
      crux: "Handle account queries, loan/card support, and onboarding journeys through AI agents that operate inside your CRM and core systems, with secure human escalation.",
      focusAreas:
        "Account Queries · Loan & Card Support · Claims Assistance · Payments · Onboarding Guidance",
      outcome: "Faster customer service · Lower call-center load · Safer escalation",
    },
    {
      title: "Telecom",
      subtitle:
        "AI self-service for plans, recharges, complaints, and service requests.",
      crux: "AssistIQ automates plan/recharge assistance, complaint registration, and SIM guidance, deflecting routine queries from contact centers and improving resolution times.",
      focusAreas:
        "Plans & Recharge · Complaint Registration · SIM Activation · Service Requests · Customer Channels",
      outcome: "Higher deflection · Faster resolution · Lower contact-center cost",
    },
    {
      title: "Healthcare",
      subtitle:
        "AI agents and avatars for appointments, patient queries, and hospital services.",
      crux: "Automate appointment booking, patient query assistance, and prescription guidance, freeing clinical and admin teams from routine query load while ensuring safe handoffs.",
      focusAreas:
        "Appointment Booking · Patient Queries · Prescription Guidance · Hospital Services · Safe Escalation",
      outcome: "Faster patient response · Reduced admin load · Better patient experience",
    },
    {
      title: "Logistics",
      subtitle:
        "Conversational AI for shipment tracking, delivery issues, and customer updates.",
      crux: "AssistIQ provides instant shipment tracking, delivery issue resolution, and proactive communication, reducing 'Where is my order?' contacts and improving delivery CX.",
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
      crux: "Deploy AI agents and avatars across citizen portals to guide scheme applications and answer queries, enabling 24×7 citizen access at scale.",
      focusAreas:
        "Citizen Portals · Scheme Guidance · Public Information · Application Assistance · Digital Services",
      outcome: "Better citizen access · Reduced departmental load · Standardized public service",
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="AssistIQ"
        tagline="Engage Faster. Support Smarter. Scale Seamlessly"
        description="AI-powered conversational agents and intelligent avatars that autonomously handle customer queries, execute workflows, and deliver human-like self-service, 24×7, across every digital channel."
        imageSrc={ASSIST_HERO_IMG}
      />

      <PainPointsSection
        intro={ASSIST_INTRO}
        imageSrc={ASSIST_PAIN_POINTS_IMG}
        imageAlt="Common operational pain points in customer service"
        items={ASSIST_PAIN_ITEMS}
        sectionClassName="pt-[60px] pb-8 bg-white dark:bg-brand-950 px-6 text-left"
      />

      <ImpactFramingSection>
        The result- poor customer satisfaction, reduced operational efficiency, higher support
        overheads, lost engagement and conversion opportunities, and a widening gap between the
        experience customers expect and the support model built to deliver it.
      </ImpactFramingSection>

      <CapabilityGridSection
        title="What AssistIQ Solves"
        tagline="From Manual Customer Support to Intelligent Autonomous Self-Service. Instant. Conversational. Scalable. Safe"
        description="Every conversation is an opportunity. AssistIQ unifies your business knowledge into an intelligent conversational engine that handles routine inquiries, executes workflows, and escalates complex scenarios , ensuring 24/7 engagement without the manual overhead."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.05} prependOutcomeLabel />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How AssistIQ Works"
        description="AssistIQ is built as a layered conversational AI architecture that captures customer intent, understands meaning through enterprise-grounded knowledge, responds in human-like conversation, executes workflows autonomously, escalates safely, and learns continuously, transforming customer support into a scalable, cost-effective engagement layer."
        steps={steps}
      />

      <UseCasesSection
        description="Seven industry-specific deployments where AssistIQ is replacing manual customer support with intelligent, autonomous AI self-service."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
