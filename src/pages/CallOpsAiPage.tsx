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
  PhoneCall,
  Sparkles,
  Zap,
  BarChart3,
  Network,
  Search,
  Brain,
  Ear,
  Workflow,
  Layers
} from "lucide-react";

const CO_ENT_IMG = "Images/Entrprise_Ai/callopsAI";
const coHeroImg = (file: string) => buildAssetUrl(CO_ENT_IMG, file);
const CO_HERO_IMG = coHeroImg("Herocallops.jpg");
const CO_PAIN_POINTS_IMG = coHeroImg("Operational Pain Points.jpg");

const CO_INTRO =
  "Every enterprise, retail, BFSI, healthcare, logistics, real estate, depends on voice as a primary channel for customer engagement, support, collections, reminders, and lead conversion. Yet most calling operations still rely on shift-based human teams, rigid IVRs, and outdated dialer infrastructure. As call volumes rise, organizations face an impossible trade-off: scale headcount and inflate costs, or accept slower response times, missed follow-ups, and inconsistent customer experiences.";

const CO_PAIN_ITEMS = [
  "High operational and staffing costs for calling teams",
  "Manual hiring, training, and quality-assurance overhead",
  "Limited scalability during campaign peaks and surges",
  "Delayed customer response times across inbound queues",
  "Inconsistent conversation quality across human agents",
  "Difficulty managing high-volume outbound campaigns",
  "Lack of structured, actionable conversation intelligence",
  "Missed follow-ups, payment reminders, and renewals",
];

export const CallOpsAIPage = () => {
  const capabilities = [
    {
      title: "AI-Powered Inbound Calling",
      outcome: "Always-on, intelligent handling of every incoming customer call.",
      items: [
        "Customer support and query handling",
        "Intent recognition and intelligent call routing",
        "Appointment confirmations and rescheduling",
        "Complaint registration and service requests",
        "Information and FAQ assistance",
        "24×7 availability with zero wait time"
      ],
      icon: PhoneCall
    },
    {
      title: "Intelligent Outbound Calling Engine",
      outcome: "Scale high-volume outbound engagement without expanding headcount.",
      items: [
        "Lead follow-ups and qualification",
        "Payment, renewal, and appointment reminders",
        "Customer surveys and feedback collection",
        "Promotional and campaign-based calling",
        "Collections and recovery communication",
        "Dynamic workflows triggered by CRM events"
      ],
      icon: Zap
    },
    {
      title: "Conversational AI Voice Agents",
      outcome: "Natural, human-like conversations across every touchpoint.",
      items: [
        "Natural language understanding (NLU)",
        "Context-aware, multi-turn conversations",
        "Real-time intent and entity recognition",
        "Dynamic response generation",
        "Human-in-the-loop escalation",
        "Multilingual and accent-adaptive speech"
      ],
      icon: Sparkles
    },
    {
      title: "Bulk Calling at Enterprise Scale",
      outcome: "Launch and manage thousands of concurrent conversations effortlessly.",
      items: [
        "Simultaneous bulk outbound calling",
        "Automated, time-zone-aware scheduling",
        "Campaign-based call management",
        "Dynamic call flows and decision trees",
        "Cloud-native elastic scalability",
        "DNC and compliance-aware dialing"
      ],
      icon: Layers
    },
    {
      title: "Call Analytics & Conversation Intelligence",
      outcome: "Turn every conversation into structured business intelligence.",
      items: [
        "Full call logs and conversation history",
        "Real-time transcripts and summaries",
        "Customer sentiment and intent analytics",
        "Agent (AI) performance dashboards",
        "Campaign effectiveness tracking",
        "CRM-pushable conversation insights"
      ],
      icon: BarChart3
    },
    {
      title: "Intelligent Follow-Ups & Reminders",
      outcome: "No customer interaction slips through the cracks.",
      items: [
        "Automated lead nurturing sequences",
        "Payment and dues follow-up cadence",
        "Appointment and visit reminders",
        "Renewal and policy expiry notifications",
        "Escalation reminders for SLAs",
        "Multi-channel handoff (voice → SMS / WhatsApp)"
      ],
      icon: Workflow
    }
  ];

  const steps = [
    { title: "Connect", content: "Calls flow in/out via SIP, cloud telephony, and CCaaS integrations, supporting inbound queues and outbound dialers.", icon: Network },
    { title: "Observe", content: "Real-time speech recognition converts customer voice into text with low latency and accent adaptability.", icon: Ear },
    { title: "Validate", content: "AI models detect intent, entities, and conversational context, driving the next best action.", icon: Search },
    { title: "Govern", content: "LLM-powered reasoning generates context-aware, human-like responses across multi-turn conversations.", icon: Brain },
    { title: "Act", content: "AI agent executes business workflows, CRM updates, scheduling, ticket creation, payment links, and delivery via TTS.", icon: Zap }
  ];

  const useCases = [
    {
      title: "Collections Automation",
      subtitle: "Recover overdue payments at scale, without expanding collections teams.",
      crux: "CallOps AI runs intelligent outbound campaigns for overdue accounts, EMI reminders, and dues recovery. Agents negotiate context-aware payment options, capture commitments, and escalate exceptions.",
      focusAreas: "EMI · Overdue · Recovery",
      outcome: "Lower cost-per-call · Improved recovery rates"
    },
    {
      title: "Lead Qualification",
      subtitle: "Convert more leads with instant, intelligent voice engagement.",
      crux: "AI agents call inbound leads within seconds, qualify them through dynamic conversations, and push qualified opportunities directly into the CRM. Sales teams receive only sales-ready prospects.",
      focusAreas: "KYC · Site Visits · Demos",
      outcome: "Faster speed-to-lead · Higher qualification accuracy"
    },
    {
      title: "Patient Reminders",
      subtitle: "Reduce no-shows and keep schedules full across healthcare operations.",
      crux: "AI voice agents handle appointment booking, confirmations, rescheduling, and pre-visit reminders for hospitals, clinics, and diagnostic chains. Patients get instant, conversational service.",
      focusAreas: "Booking · Reminders · Follow-ups",
      outcome: "Lower no-show rate · Higher staff productivity"
    },
    {
      title: "24×7 Support",
      subtitle: "Replace rigid IVRs with conversational AI that actually resolves issues.",
      crux: "AI agents handle inbound support calls round-the-clock, answering FAQs, registering complaints, routing complex issues to human agents with full context, and capturing every interaction in the CRM.",
      focusAreas: "FAQs · Complaints · Routing",
      outcome: "Instant Resolution · Zero wait times"
    },
    {
      title: "Renewal Campaigns",
      subtitle: "Run high-volume outbound voice campaigns without a tele-calling floor.",
      crux: "Trigger AI-powered campaigns for policy renewals, product promotions, customer surveys, and re-engagement, at thousands of concurrent calls. Every conversation is logged and sentiment-scored.",
      focusAreas: "Renewals · Promo · Surveys",
      outcome: "Campaign scale · Actionable sentiment insights"
    },
    {
      title: "Site Visit Coordination",
      subtitle: "Automate scheduling and qualification for real estate and field services.",
      crux: "Coordinate complex site visits and field service calls through autonomous agents that handle multi-party availability checks and provide instant confirmation to all stakeholders.",
      focusAreas: "Site Visits · Field Service · Scheduling",
      outcome: "Reduced manual coordination · Faster appointment booking"
    }
  ];

  return (
    <PageShell bare>
            <PageHero
        title="CallOps AI"
        tagline="AI Voice Agents for Intelligent Calling Operations"
        description="AI-powered inbound and outbound calling, available 24×7. CallOps AI deploys autonomous voice agents that engage customers naturally, execute workflows in real time, and scale instantly without expanding teams."
        imageSrc={CO_HERO_IMG}
      />

      <PainPointsSection
        intro={CO_INTRO}
        imageSrc={CO_PAIN_POINTS_IMG}
        imageAlt="Common operational pain points in call center operations"
        items={CO_PAIN_ITEMS}
        sectionClassName="pt-[60px] pb-8 bg-white dark:bg-brand-950 px-6 text-left"
      />

      <ImpactFramingSection sectionClassName="pb-8 px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        The result- rising cost-per-conversation, lower lead conversion, missed customer touchpoints, weaker
        collections performance, and a customer experience that hasn&apos;t kept pace with digital-first
        expectations.
      </ImpactFramingSection>

      <CapabilityGridSection
        title="What CallOps AI Solves"
        tagline="From Manual Calling Operations to Autonomous Voice Intelligence. Connect. Hear. Understand. Respond. Act."
        description="CallOps AI is built on a layered voice AI architecture that combines telephony, speech recognition, LLM-powered reasoning, and enterprise workflow execution, orchestrated in real time so AI agents can listen, understand, decide, and act within a single conversation. Scaling your calling floor from 10 to 1,000 agents is now a matter of configuration, not recruitment."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.1} prependOutcomeLabel />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How CallOps AI Works"
        description="CallOps AI converts voice into structured intelligence and action. Our engine supports ultra-low latency speech-to-text, context-aware intent detection, and human-like voice synthesis, all while making real-time calls to your CRM and business applications."
        steps={steps}
      />

      <UseCasesSection
        description="Six high-impact deployments where CallOps AI is replacing, and outperforming, traditional calling teams."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
