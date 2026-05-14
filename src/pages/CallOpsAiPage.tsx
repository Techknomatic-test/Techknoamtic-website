import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';
import {
  Phone,
  PhoneCall,
  Building2,
  Calendar,
  CheckCircle2,
  Database,
  Headset,
  Lock,
  Server,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Target,
  Terminal,
  Truck,
} from 'lucide-react';

const CapabilityCard = ({
  title,
  outcome,
  items,
  delay = 0,
}: {
  title: string;
  outcome: string;
  items: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full"
  >
    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Phone className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight">{title}</h3>
    <p className="text-[14px] font-bold text-brand-950 dark:text-white/80 mb-6 leading-tight">Outcome: {outcome}</p>
    <ul className="space-y-3 flex-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
          <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const IndustryCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-accent/40 transition-all flex flex-col items-center text-center group"
  >
    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-brand-900 shadow-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
      <Icon className="w-8 h-8 text-accent" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-3">{title}</h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const HowItWorksCard = ({
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
    className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 group flex flex-col h-full shadow-sm hover:shadow-xl transition-all"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-950 to-transparent opacity-40" />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{description}</p>
    </div>
  </motion.div>
);

const StackCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-accent/40 transition-all group h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic px-2 border-l-2 border-accent/20">
      {description}
    </p>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  callTypes,
  outcome,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  crux: string;
  callTypes: string;
  outcome: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-brand-900/40 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all group flex flex-col h-full"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950 dark:text-white mb-6 leading-tight underline underline-offset-4 decoration-accent/20">
      {subtitle}
    </p>

    <div className="space-y-6 flex-1">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-slate-500 uppercase mb-3">Crux</h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">{crux}</p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-slate-500 uppercase mb-3">Call Types</h4>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">{callTypes}</p>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Target className="w-4 h-4 text-accent" />
        </div>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">
          <span className="text-accent uppercase tracking-wider mr-2">Outcome:</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

export const CallOpsAiPage = () => {
  const capabilities = [
    {
      title: 'Capability 1 — AI-Powered Inbound Calling',
      outcome: 'Always-on, intelligent handling of every incoming customer call.',
      items: [
        'Customer support and query handling',
        'Intent recognition and intelligent call routing',
        'Appointment confirmations and rescheduling',
        'Complaint registration and service requests',
        'Information and FAQ assistance',
        '24×7 availability with zero wait time',
      ],
    },
    {
      title: 'Capability 2 — Intelligent Outbound Calling Engine',
      outcome: 'Scale high-volume outbound engagement without expanding headcount.',
      items: [
        'Lead follow-ups and qualification',
        'Payment, renewal, and appointment reminders',
        'Customer surveys and feedback collection',
        'Promotional and campaign-based calling',
        'Collections and recovery communication',
        'Dynamic workflows triggered by CRM events',
      ],
    },
    {
      title: 'Capability 3 — Conversational AI Voice Agents',
      outcome: 'Natural, human-like conversations across every touchpoint.',
      items: [
        'Natural language understanding (NLU)',
        'Context-aware, multi-turn conversations',
        'Real-time intent and entity recognition',
        'Dynamic response generation',
        'Human-in-the-loop escalation',
        'Multilingual and accent-adaptive speech',
      ],
    },
    {
      title: 'Capability 4 — Bulk Calling at Enterprise Scale',
      outcome: 'Launch and manage thousands of concurrent conversations effortlessly.',
      items: [
        'Simultaneous bulk outbound calling',
        'Automated, time-zone-aware scheduling',
        'Campaign-based call management',
        'Dynamic call flows and decision trees',
        'Cloud-native elastic scalability',
        'DNC and compliance-aware dialing',
      ],
    },
    {
      title: 'Capability 5 — Call Analytics & Conversation Intelligence',
      outcome: 'Turn every conversation into structured business intelligence.',
      items: [
        'Full call logs and conversation history',
        'Real-time transcripts and summaries',
        'Customer sentiment and intent analytics',
        'Agent (AI) performance dashboards',
        'Campaign effectiveness tracking',
        'CRM-pushable conversation insights',
      ],
    },
    {
      title: 'Capability 6 — Intelligent Follow-Ups & Reminders',
      outcome: 'No customer interaction slips through the cracks.',
      items: [
        'Automated lead nurturing sequences',
        'Payment and dues follow-up cadence',
        'Appointment and visit reminders',
        'Renewal and policy expiry notifications',
        'Escalation reminders for SLAs',
        'Multi-channel handoff (voice → SMS / WhatsApp)',
      ],
    },
  ];

  const industries = [
    {
      title: 'Retail',
      description: 'Automate order confirmations, promotional outreach, and customer engagement at scale.',
      icon: ShoppingCart,
    },
    {
      title: 'BFSI',
      description: 'Streamline collections, payment reminders, customer verification, and policy renewals.',
      icon: ShieldCheck,
    },
    {
      title: 'Healthcare',
      description: 'Automate appointment scheduling, patient follow-ups, and reminder workflows.',
      icon: Stethoscope,
    },
    {
      title: 'Logistics',
      description: 'Coordinate deliveries, shipment updates, and driver–customer communication.',
      icon: Truck,
    },
    {
      title: 'Real Estate',
      description: 'Qualify leads, schedule site visits, and run automated follow-up engagement.',
      icon: Building2,
    },
  ];

  const howItWorks = [
    {
      title: 'Telephony & Channel Layer',
      description:
        'Calls flow in/out via SIP, cloud telephony, and CCaaS integrations — supporting inbound queues and outbound dialers.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Speech-to-Text (ASR)',
      description: 'Real-time speech recognition converts customer voice into text with low latency and accent adaptability.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'NLU & Intent Engine',
      description: 'AI models detect intent, entities, and conversational context — driving the next best action.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Reasoning & Generation',
      description: 'LLM-powered reasoning generates context-aware, human-like responses across multi-turn conversations.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Action & Workflow Layer',
      description:
        'AI agent executes business workflows — CRM updates, scheduling, ticket creation, payment links, escalations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Text-to-Speech (TTS) & Delivery',
      description: 'Natural-sounding voice synthesis delivers the response in real time, completing the conversational loop.',
      image: 'https://images.unsplash.com/photo-1478737270239-2fccd27ee8fb?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const stack = [
    { title: 'Telephony & CCaaS', description: 'Twilio · Ecotel · Plivo · SIP trunks · Genesys · Amazon Connect', icon: PhoneCall },
    { title: 'CRM Platforms', description: 'Salesforce · HubSpot · Zoho · MS Dynamics · Custom CRMs via REST', icon: Database },
    { title: 'Ticketing & Support', description: 'Zendesk · Freshdesk · ServiceNow · Intercom', icon: Headset },
    { title: 'Campaign & Marketing', description: 'Marketing automation tools · Lead management systems · Dialer platforms', icon: Target },
    { title: 'Calendar & Scheduling', description: 'Google Calendar · Outlook · Calendly · Custom booking systems', icon: Calendar },
    { title: 'Compliance & Logging', description: 'DNC list integration · Call recording archives · Audit log export', icon: Lock },
    { title: 'APIs & Developer Access', description: 'REST APIs · Webhooks · Real-time event streams · SDK access', icon: Terminal },
    { title: 'Deployment Modes', description: 'Cloud SaaS · Private VPC · Hybrid · On-premise (regulated industries)', icon: Server },
  ];

  const useCases = [
    {
      title: 'Collections & Payment Reminder Automation',
      subtitle: 'Recover overdue payments at scale — without expanding collections teams.',
      crux: 'CallOps AI runs intelligent outbound campaigns for overdue accounts, EMI reminders, and dues recovery. Agents negotiate context-aware payment options, capture commitments, and escalate exceptions — improving collection rates while cutting cost-per-call dramatically.',
      callTypes: 'EMI Reminders · Overdue Follow-ups · Recovery Calls · Payment Confirmations',
      outcome: 'Higher recovery rates · Lower collections cost · Audit-ready logs',
    },
    {
      title: 'Lead Qualification & Sales Follow-Ups',
      subtitle: 'Convert more leads with instant, intelligent voice engagement.',
      crux: 'AI agents call inbound leads within seconds, qualify them through dynamic conversations, and push qualified opportunities directly into the CRM. Sales teams receive only sales-ready prospects — improving conversion and reducing speed-to-lead.',
      callTypes: 'Lead Qualification · Site Visit Booking · Demo Scheduling · Re-engagement Calls',
      outcome: 'Higher lead conversion · Faster speed-to-lead · Sales team focus',
    },
    {
      title: 'Appointment Scheduling & Patient Reminders',
      subtitle: 'Reduce no-shows and keep schedules full across healthcare operations.',
      crux: 'AI voice agents handle appointment booking, confirmations, rescheduling, and pre-visit reminders for hospitals, clinics, and diagnostic chains. Patients get instant, conversational service — and staff are freed from repetitive scheduling calls.',
      callTypes: 'Appointment Booking · Reminder Calls · Rescheduling · Post-Visit Follow-ups',
      outcome: 'Lower no-show rate · Higher slot utilization · Better patient experience',
    },
    {
      title: '24×7 AI Customer Support',
      subtitle: 'Replace rigid IVRs with conversational AI that actually resolves issues.',
      crux: 'AI agents handle inbound support calls round-the-clock — answering FAQs, registering complaints, routing complex issues to human agents with full context, and capturing every interaction in the CRM. Customers get instant answers, not menu trees.',
      callTypes: 'FAQ Handling · Complaint Registration · Status Inquiries · Issue Routing',
      outcome: '24×7 coverage · Faster resolution · Lower support cost',
    },
    {
      title: 'Renewal, Promotion & Engagement Campaigns',
      subtitle: 'Run high-volume outbound voice campaigns without a tele-calling floor.',
      crux: 'Trigger AI-powered campaigns for policy renewals, product promotions, customer surveys, and re-engagement — at thousands of concurrent calls. Every conversation is logged, sentiment-scored, and synced to the CRM for downstream action.',
      callTypes: 'Renewal Reminders · Promotional Outreach · CSAT Surveys · Win-back Campaigns',
      outcome: 'Campaign scale · Higher renewal rate · Real-time campaign intelligence',
    },
  ];

  return (
    <div className="pt-[110px]">
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-10 tracking-tight leading-tight"
          >
            CallOps AI
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-8 tracking-tight"
            >
              AI Voice Agents for Intelligent Calling Operations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              AI-powered inbound and outbound calling — available 24×7. CallOps AI deploys autonomous voice agents that
              engage customers naturally, execute workflows in real time, and scale instantly without expanding teams.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              The Call Center Reality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[15px] md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Every enterprise — retail, BFSI, healthcare, logistics, real estate — depends on voice as a primary channel
              for customer engagement, support, collections, reminders, and lead conversion. Yet most calling operations
              still rely on shift-based human teams, rigid IVRs, and outdated dialer infrastructure. As call volumes rise,
              organizations face an impossible trade-off: scale headcount and inflate costs, or accept slower response
              times, missed follow-ups, and inconsistent customer experiences.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Call Center Operations"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-sm font-bold italic border-l-4 border-accent pl-4">
                  Voice remains the highest intent channel, yet the most expensive to scale.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-6">Common Operational Pain Points</h3>
              {[
                'High operational and staffing costs for tele-calling and support teams',
                'Manual hiring, training, and quality-assurance overhead',
                'Limited scalability during campaign peaks and seasonal surges',
                'Delayed customer response times across inbound queues',
                'Inconsistent conversation quality across human agents',
                'Difficulty managing high-volume outbound campaigns',
                'Lack of structured, actionable conversation intelligence',
                'Missed follow-ups, payment reminders, and renewal opportunities',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 text-slate-500 dark:text-slate-400 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-10 rounded-[3rem] bg-accent/5 border border-accent/10"
          >
            <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Impact framing</h4>
            <p className="text-[17px] md:text-xl font-bold text-brand-950 dark:text-white leading-relaxed">
              &ldquo;The result: rising cost-per-conversation, lower lead conversion, missed customer touchpoints, weaker
              collections performance, and a customer experience that hasn&apos;t kept pace with digital-first
              expectations.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              What CallOps AI Solves
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand-950 dark:text-white/80"
            >
              From manual calling operations → autonomous voice intelligence.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Industries We Serve
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              How CallOps AI Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-4xl"
            >
              CallOps AI is built on a layered voice AI architecture that combines telephony, speech recognition,
              LLM-powered reasoning, and enterprise workflow execution — orchestrated in real time so AI agents can
              listen, understand, decide, and act within a single conversation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <HowItWorksCard key={idx} {...step} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 bg-brand-950 text-left relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              Built to Plug Into Your Enterprise Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/50 font-medium max-w-4xl leading-relaxed"
            >
              Voice agents only deliver real business outcomes when they can read from and write to the systems your
              operations already run on. CallOps AI is API-first and CCaaS-native — connecting to CRMs, telephony
              providers, ticketing systems, and campaign engines so every conversation is informed by live context and
              every outcome is logged back into your systems of record.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((item, idx) => (
              <StackCard key={idx} {...item} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
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
              Five high-impact deployments where AI voice agents are replacing — and outperforming — traditional calling
              teams.
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
