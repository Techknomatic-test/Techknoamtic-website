import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  MessageSquare,
  Search,
  RefreshCw,
  Clock,
  Layout,
  Monitor,
  FileText,
  ShieldAlert,
  Cpu,
  Globe,
} from "lucide-react";

const CapabilityCard = ({ title, description, image, delay = 0 }: { title: string; description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full overflow-hidden"
  >
    <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-950/20 to-transparent opacity-40" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
      {description}
    </p>
  </motion.div>
);

const DifferentiatorCard = ({ title, description, idx }: { title: string; description: string; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
      <CheckCircle2 className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const AgenticAIITSMPage = () => {
    const caps = [
    {
      title: "Intelligent Ticket Classification",
      description: "Automatically categorizes, prioritizes, and tags incoming tickets using advanced natural language understanding.",
      image: "Images/stock/photo-1516321318423-f06f85e504b3.jpg"
    },
    {
      title: "Smart Auto-Routing",
      description: "Routes tickets to the right team or engineer based on skill, availability, and historical resolution patterns.",
      image: "Images/stock/photo-1551288049-bbda38a10ad5.jpg"
    },
    {
      title: "Auto-Response Generation",
      description: "Drafts high-quality first-responses, resolution steps, or escalation notes using private LLM engines.",
      image: "Images/stock/photo-1485827404703-89b55fcc595e.jpg"
    },
    {
      title: "Ticket Summarization",
      description: "Condenses long incident threads into concise, actionable summaries for rapid manager review.",
      image: "Images/stock/photo-1460925895917-afdab827c52f.jpg"
    },
    {
      title: "Root Cause Suggestions",
      description: "Analyzes patterns across similar historical tickets to recommend likely root causes and fixes.",
      image: "Images/stock/photo-1558494949-ef010cbdcc4b.jpg"
    },
    {
      title: "SLA Breach Prediction",
      description: "Flags at-risk tickets before breach occurs and triggers proactive alerts to team leads.",
      image: "Images/stock/photo-1551288049-bbda38a10ad5.jpg"
    },
  ];

  const integrationOptions = [
    {
      category: "Supported Platforms",
      items: [
        "ServiceNow",
        "ManageEngine",
        "Freshservice",
        "BMC Remedy",
        "Jira Service Management",
      ],
    },
    {
      category: "Deployment Options",
      items: [
        "API-based integration",
        "Browser-based overlay",
        "Embedded chatbot interface",
      ],
    },
  ];

  const llmOptions = [
    "Azure OpenAI",
    "Private/On-prem LLM",
    "Open-source (LLaMA, Mistral)",
  ];

  const deliverables = [
    { label: "Reduction in manual triage time", value: "40-60%" },
    { label: "Misrouted or duplicate tickets", value: "Fewer" },
    { label: "First-response SLA compliance", value: "Faster" },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
          >
            AI Accelerator
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Agentic AI for ITSM
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              AI That Reads, Routes, Summarizes, and Resolves IT Tickets.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Transform your IT service desk from a ticket queue into a self-learning operations engine powered by private LLM deployment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Techknomatic's Agentic AI for ITSM is an intelligent automation layer that integrates directly into your existing ticket management lifecycle. By applying advanced Large Language Models (LLMs) to incoming request streams, we eliminate the bottleneck of manual triage and first-level support, allowing your engineers to focus on high-impact problem solving.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solution doesn't just categorize; it understands intent, context, and historical resolution patterns. Whether it's drafting a precise resolution reply, identifying a massive incident by clustering similar requests, or predicting SLA breaches before they occur, our AI agent acts as a force multiplier for your IT operations team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[120px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              AGENT CAPABILITIES
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              What the Agent Does
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Integrates Section */}
      <section className="py-32 px-6 bg-[#F8F9FA] dark:bg-brand-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              How It Integrates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {integrationOptions.map((option, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white">
                  {option.category}
                </h3>
                <div className="space-y-4">
                  {option.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-blue-50/50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-[2rem]"
          >
            <h4 className="text-lg font-bold text-brand-950 dark:text-white mb-6 uppercase tracking-widest text-center">
              LLM Options
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {llmOptions.map((llm, i) => (
                <span
                  key={i}
                  className="px-6 py-2 bg-white dark:bg-white/10 text-accent font-bold text-sm rounded-full shadow-sm border border-slate-100 dark:border-white/10"
                >
                  {llm}
                </span>
              ))}
            </div>
            <p className="text-center text-slate-500 dark:text-slate-400 font-medium">
              Works as an intelligent layer on top of your existing ITSM
              platform — no rip-and-replace required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Delivers Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Business Impact
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {deliverables.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-white/5 p-12 rounded-[4rem] text-center border border-slate-100 dark:border-white/5"
              >
                <div className="text-5xl md:text-7xl font-black text-accent mb-6 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[14px] font-bold text-slate-500 dark:text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-400 dark:text-slate-500 font-medium">
            Institutional knowledge captured and reused by the AI • Real-time visibility into ticket health
          </p>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-[120px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              Delivery Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              Structured frameworks for LLM integration into enterprise ITSM platforms.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Discovery", description: "Analyzing ticket volume and distribution patterns." },
              { step: "02", title: "PoC", description: "Deploying the agent on a specific sub-queue for testing." },
              { step: "03", title: "Integration", description: "Full API-level wiring with your ITSM platform." },
              { step: "04", title: "Optimization", description: "Fine-tuning prompts based on domain-specific data." },
              { step: "05", title: "Scale", description: "Global rollout across all support tiers and regions." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed italic px-2 border-l-2 border-accent/20">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
