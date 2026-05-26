import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SectionIcon } from "../components/SectionIcon";
import { UseCasesSection } from "../components/UseCasesSection";
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

      {/* Challenge Section */}
      <section className="pt-[60px] pb-8 bg-white dark:bg-brand-950 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full text-left mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Every enterprise, retail, BFSI, healthcare, logistics, real estate, depends on voice as a primary channel for customer engagement, support, collections, reminders, and lead conversion. Yet most calling operations still rely on shift-based human teams, rigid IVRs, and outdated dialer infrastructure. As call volumes rise, organizations face an impossible trade-off: scale headcount and inflate costs, or accept slower response times, missed follow-ups, and inconsistent customer experiences.
            </motion.p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <img
                loading="lazy"
                src={CO_PAIN_POINTS_IMG}
                alt="Common operational pain points in call center operations"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-6 self-start lg:pt-4">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold leading-tight text-brand-950 dark:text-white">
                  Common Operational Pain Points
                </h3>
                <div className="h-1 w-12 rounded-full bg-accent" />
              </div>
              {[
                "High operational and staffing costs for calling teams",
                "Manual hiring, training, and quality-assurance overhead",
                "Limited scalability during campaign peaks and surges",
                "Delayed customer response times across inbound queues",
                "Inconsistent conversation quality across human agents",
                "Difficulty managing high-volume outbound campaigns",
                "Lack of structured, actionable conversation intelligence",
                "Missed follow-ups, payment reminders, and renewals",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-[16px] leading-tight text-brand-950 dark:text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Framing Section */}
      <section className="pb-8 px-6 bg-white dark:bg-brand-950 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20"
          >
            <h3 className="text-[12px] font-black tracking-[0.1em] text-orange-600 dark:text-orange-400 uppercase mb-4">
              Impact Framing
            </h3>
            <p className="text-[15px] font-medium text-brand-950 dark:text-white leading-relaxed">
              The result- rising cost-per-conversation, lower lead conversion, missed customer touchpoints, weaker
              collections performance, and a customer experience that hasn&apos;t kept pace with digital-first
              expectations.
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
              What CallOps AI Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[16px] font-bold text-brand-950 dark:text-white mb-6 leading-tight tracking-tight"
            >
              From Manual Calling Operations to Autonomous Voice Intelligence. Connect. Hear. Understand. Respond.
              Act.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              CallOps AI is built on a layered voice AI architecture that combines telephony, speech recognition, LLM-powered reasoning, and enterprise workflow execution, orchestrated in real time so AI agents can listen, understand, decide, and act within a single conversation. Scaling your calling floor from 10 to 1,000 agents is now a matter of configuration, not recruitment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((it, idx) => (
              <PlatformCapabilityCard key={idx} {...it} delay={idx * 0.1} prependOutcomeLabel />
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
              How CallOps AI Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              CallOps AI converts voice into structured intelligence and action. Our engine supports ultra-low latency speech-to-text, context-aware intent detection, and human-like voice synthesis, all while making real-time calls to your CRM and business applications.
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
                    <span className="text-4xl font-black text-accent/10 dark:text-white/5">
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

      <UseCasesSection
        description="Six high-impact deployments where CallOps AI is replacing, and outperforming, traditional calling teams."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
