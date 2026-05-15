import type { ComponentType } from "react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  PhoneCall,
  Sparkles,
  Zap,
  BarChart3,
  Target,
  Network,
  Search,
  Brain,
  Ear,
  Workflow,
  Layers
} from "lucide-react";

const CO_IMG = "Images/CallOpsAI";
const coImg = (file: string) => `${CO_IMG}/${file}`;

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

const UseCaseCard = ({ title, subtitle, crux, focusAreas, outcome, delay = 0 }: { 
  title: string; 
  subtitle: string; 
  crux: string; 
  focusAreas: string;
  outcome: string; 
  delay?: number 
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
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Crux</h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Call Types</h4>
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

const IndustryCard = ({ title, description, image, delay = 0 }: { title: string; description: string; image: string; delay?: number }) => (
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
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent" />
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

export const CallOpsAIPage = () => {
  const capabilities = [
    {
      title: "Capability 1 — AI-Powered Inbound Calling",
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
      title: "Capability 2 — Intelligent Outbound Calling Engine",
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
      title: "Capability 3 — Conversational AI Voice Agents",
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
      title: "Capability 4 — Bulk Calling at Enterprise Scale",
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
      title: "Capability 5 — Call Analytics & Conversation Intelligence",
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
      title: "Capability 6 — Intelligent Follow-Ups & Reminders",
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

  const industries = [
    {
      title: "Retail",
      description:
        "Automate order confirmations, promotional outreach, and customer engagement at scale.",
      image: coImg("industry-retail.jpg"),
    },
    {
      title: "BFSI",
      description:
        "Streamline collections, payment reminders, customer verification, and policy renewals.",
      image: coImg("industry-bfsi.jpg"),
    },
    {
      title: "Healthcare",
      description:
        "Automate appointment scheduling, patient follow-ups, and reminder workflows.",
      image: coImg("industry-healthcare.jpg"),
    },
    {
      title: "Logistics",
      description:
        "Coordinate deliveries, shipment updates, and driver–customer communication.",
      image: coImg("industry-logistics.jpg"),
    },
    {
      title: "Real Estate",
      description:
        "Qualify leads, schedule site visits, and run automated follow-up engagement.",
      image: coImg("industry-real-estate.jpg"),
    },
  ];

  const steps = [
    { title: "Connect", content: "Calls flow in/out via SIP, cloud telephony, and CCaaS integrations — supporting inbound queues and outbound dialers.", icon: Network },
    { title: "Observe", content: "Real-time speech recognition converts customer voice into text with low latency and accent adaptability.", icon: Ear },
    { title: "Validate", content: "AI models detect intent, entities, and conversational context — driving the next best action.", icon: Search },
    { title: "Govern", content: "LLM-powered reasoning generates context-aware, human-like responses across multi-turn conversations.", icon: Brain },
    { title: "Act", content: "AI agent executes business workflows — CRM updates, scheduling, ticket creation, payment links, and delivery via TTS.", icon: Zap }
  ];

  const stack = [
    {
      title: "Telephony & CCaaS",
      content:
        "Twilio · Ecotel · Plivo · SIP trunks · Genesys · Amazon Connect",
      image: coImg("stack-telephony.jpg"),
    },
    {
      title: "CRM Platforms",
      content:
        "Salesforce · HubSpot · Zoho · MS Dynamics · Custom CRMs via REST",
      image: coImg("stack-crm.jpg"),
    },
    {
      title: "Ticketing & Support",
      content: "Zendesk · Freshdesk · ServiceNow · Intercom",
      image: coImg("stack-ticketing.jpg"),
    },
    {
      title: "Campaign & Marketing",
      content:
        "Marketing automation tools · Lead management systems · Dialer platforms",
      image: coImg("stack-campaign.jpg"),
    },
    {
      title: "Calendar & Scheduling",
      content: "Google Calendar · Outlook · Calendly · Custom booking systems",
      image: coImg("stack-calendar.jpg"),
    },
    {
      title: "Compliance & Security",
      content:
        "DNC list integration · Call recording archives · Audit log export · Encryption",
      image: coImg("stack-compliance.jpg"),
    },
    {
      title: "APIs & Webhooks",
      content: "REST APIs · Webhooks · Real-time event streams · SDK access",
      image: coImg("stack-apis.jpg"),
    },
    {
      title: "Deployment Modes",
      content:
        "Cloud SaaS · Private VPC · Hybrid · On-premise (regulated industries)",
      image: coImg("stack-deployment.jpg"),
    },
  ];

  const useCases = [
    {
      title: "Collections Automation",
      subtitle: "Recover overdue payments at scale — without expanding collections teams.",
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
      crux: "AI agents handle inbound support calls round-the-clock — answering FAQs, registering complaints, routing complex issues to human agents with full context, and capturing every interaction in the CRM.",
      focusAreas: "FAQs · Complaints · Routing",
      outcome: "Instant Resolution · Zero wait times"
    },
    {
      title: "Renewal Campaigns",
      subtitle: "Run high-volume outbound voice campaigns without a tele-calling floor.",
      crux: "Trigger AI-powered campaigns for policy renewals, product promotions, customer surveys, and re-engagement — at thousands of concurrent calls. Every conversation is logged and sentiment-scored.",
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-[80px] px-6 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            PLATFORM
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            CallOps AI
          </motion.h1>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight leading-tight"
            >
              AI Voice Agents for Intelligent Calling Operations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              AI-powered inbound and outbound calling — available 24×7. CallOps AI deploys autonomous voice agents that engage customers naturally, execute workflows in real time, and scale instantly without expanding teams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              The Call Center Reality Challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Every enterprise — retail, BFSI, healthcare, logistics, real estate — depends on voice as a primary channel for customer engagement, support, collections, reminders, and lead conversion. Yet most calling operations still rely on shift-based human teams, rigid IVRs, and outdated dialer infrastructure. As call volumes rise, organizations face an impossible trade-off: scale headcount and inflate costs, or accept slower response times, missed follow-ups, and inconsistent customer experiences.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group shadow-2xl">
              <img
                src={coImg("challenge.jpg")}
                alt="Call Center Operations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-black tracking-widest text-white uppercase bg-accent rounded-full">
                  Impact Framing
                </div>
                <p className="text-[15px] font-bold text-white leading-relaxed italic">
                  The result: rising cost-per-conversation, lower lead conversion, missed customer touchpoints, weaker collections performance, and a customer experience that hasn't kept pace with digital-first expectations.
                </p>
              </div>
            </div>

            <div className="space-y-6 self-start lg:pt-4">
              <div className="mb-12">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight">Common Operational Pain Points</h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <ul className="space-y-5">
                {[
                  "High operational and staffing costs for calling teams",
                  "Manual hiring, training, and quality-assurance overhead",
                  "Limited scalability during campaign peaks and surges",
                  "Delayed customer response times across inbound queues",
                  "Inconsistent conversation quality across human agents",
                  "Difficulty managing high-volume outbound campaigns",
                  "Lack of structured, actionable conversation intelligence",
                  "Missed follow-ups, payment reminders, and renewals"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3 group list-none"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-[17px] font-bold text-brand-950 dark:text-white leading-tight">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
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
              What CallOps AI Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-brand-950 dark:text-white mb-6 leading-tight"
            >
              From manual calling operations → autonomous voice intelligence. Connect. Hear. Understand. Respond. Act.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              CallOps AI is built on a layered voice AI architecture that combines telephony, speech recognition, LLM-powered reasoning, and enterprise workflow execution — orchestrated in real time so AI agents can listen, understand, decide, and act within a single conversation. Scaling your calling floor from 10 to 1,000 agents is now a matter of configuration, not recruitment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 uppercase"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              High-impact deployments where AI voice agents are replacing — and outperforming — traditional human calling teams across sectors.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              How CallOps AI Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              CallOps AI converts voice into structured intelligence and action. Our engine supports ultra-low latency speech-to-text, context-aware intent detection, and human-like voice synthesis — all while making real-time calls to your CRM and business applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-black tracking-[0.2em] text-accent/50 uppercase mb-2">Step 0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors text-left capitalize">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
                    {step.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Built to Plug Into Your Enterprise Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Voice agents only deliver real outcomes when they can read from and write to the systems your operations already run on. CallOps AI is API-first and CCaaS-native — connecting to CRMs, telephony providers, and campaign engines so every conversation is informed by live context.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-accent/30 transition-all flex flex-col overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <h3 className="text-[17px] font-bold text-brand-950 dark:text-white mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
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
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 uppercase"
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
              Six high-impact deployments where CallOps AI is replacing — and outperforming — traditional calling teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
