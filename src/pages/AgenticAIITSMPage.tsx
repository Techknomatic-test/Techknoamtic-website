import { motion } from "motion/react";
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

const Card = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string | string[];
  icon: any;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  );
};

export const AgenticAIITSMPage = () => {
  const whatAgentDoes = [
    {
      title: "Intelligent Ticket Classification",
      description:
        "Automatically categorizes, prioritizes, and tags incoming tickets using natural language understanding.",
      icon: Layout,
    },
    {
      title: "Smart Auto-Routing",
      description:
        "Routes tickets to the right team or engineer based on skill, availability, and historical patterns.",
      icon: RefreshCw,
    },
    {
      title: "Auto-Response Generation",
      description:
        "Drafts first-response messages, resolution steps, or escalation notes using AI.",
      icon: MessageSquare,
    },
    {
      title: "Ticket Summarization",
      description:
        "Condenses long incident threads into concise, actionable summaries for managers.",
      icon: FileText,
    },
    {
      title: "Root Cause Suggestions",
      description:
        "Analyzes patterns across similar historical tickets to recommend likely root causes.",
      icon: Brain,
    },
    {
      title: "SLA Breach Prediction",
      description:
        "Flags at-risk tickets before breach occurs and triggers proactive alerts.",
      icon: ShieldAlert,
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[11px] font-black uppercase tracking-widest">
              AI-Powered
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Agentic AI for ITSM Tickets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-200 max-w-4xl font-medium leading-relaxed mb-12"
          >
            AI That Reads, Routes, Summarizes, and Resolves Your IT Tickets
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] max-w-3xl backdrop-blur-sm"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Techknomatic's Agentic AI for ITSM Tickets is an intelligent
              automation layer that transforms your IT service desk from a
              ticket queue into a self-learning, self-routing operations engine.
              Powered by LLMs and embedded directly into your ITSM workflows,
              this accelerator reduces resolution time, eliminates manual
              triage, and gives every ticket the intelligence it deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What the Agent Does Section */}
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              What the Agent Does
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatAgentDoes.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
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
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              What It Delivers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {deliverables.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-12 rounded-[3.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none text-center border border-slate-100 dark:border-white/5"
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
            Institutional knowledge captured and reused by the AI • Real-time
            visibility into ticket health
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold mb-8 tracking-tight leading-[1.1]">
            Ready to Transform Your ITSM?
          </h2>
          <p className="text-xl opacity-90 mb-12 font-medium">
            Schedule a live demo to see the Agentic AI in action with your ITSM
            data.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 text-lg">
              Schedule a Live Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3 text-lg">
              Download Datasheet <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
