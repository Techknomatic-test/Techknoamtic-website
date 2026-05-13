import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Cpu,
  Brain,
  ShieldCheck,
  Settings,
  Target,
  ArrowRight,
  Zap,
  Monitor,
  Code,
  MessageSquare,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  Search,
  Network,
  Code2,
  LineChart,
  RefreshCw
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

const UseCaseCard = ({ title, description }: { title: string; description: string | string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">What we do</h4>
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(description) ? description : [description]).map((item, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full text-[12px] font-bold text-slate-600 dark:text-slate-400">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const AIServicesPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const capabilities = [
    {
      title: "Custom Chatbots & LLM Assistants",
      description: "Enterprise-grade conversational AI for customer service, HR, IT helpdesk, and internal knowledge management.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800"
    },
    {
      title: "Agentic AI Workflows",
      description: "Multi-step automation that understands context, makes decisions, and executes complex business processes.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800"
    },
    {
      title: "Document AI & NLP",
      description: "Extract insights from contracts, claims, reports, and unstructured documents with AI-powered document processing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
    },
    {
      title: "Conversational BI",
      description: "Natural language analytics that lets anyone ask questions and get answers from their data instantly.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
    },
    {
      title: "GenAI for Auto-Summaries",
      description: "Automated generation of summaries, reports, and emails from data — saving hours of manual work.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
    },
    {
      title: "AI Strategy & Model Deployment",
      description: "End-to-end AI consulting from use case identification to production deployment and monitoring.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
    },
  ];

  const whyTechknomaticAI = [
    {
      title: "Full-Stack, Single Team",
      description:
        "BI + Data Engineering + AI + Geospatial under one roof. No coordination overhead.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "India-Built, Global-Delivered",
      description:
        "High-quality delivery teams spanning global markets with seamless operations.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Outcomes, Not Outputs",
      description:
        "We focus on real business outcomes over simply delivering models and lines of code.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Enterprise-Grade by Default",
      description:
        "Secure, governed, scalable — built for enterprise requirements from day one.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const industryUseCases = [
    {
      title: "Insurance",
      description: [
        "Claim validation",
        "Underwriting assistant",
        "Policy chatbot",
        "Fraud detection explanations",
      ],
      color: "bg-[#f0f9ff]/50 dark:bg-blue-900/10",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pharma/Healthcare",
      description: [
        "Rep call notes analysis",
        "Patient journey bots",
        "Med literature search",
        "Clinical trial insights",
      ],
      color: "bg-[#fffaf0]/50 dark:bg-orange-900/10",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Banking/Finance",
      description: [
        "Compliance alerts",
        "Fraud explanations",
        "Customer service AI",
        "Report generation",
      ],
      color: "bg-[#f0fff4]/50 dark:bg-green-900/10",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Energy/Manufacturing",
      description: [
        "Maintenance ticket summarization",
        "Plant assistant",
        "Safety report generation",
        "Operational insights",
      ],
      color: "bg-[#faf5ff]/50 dark:bg-purple-900/10",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const ourApproach = [
    {
      step: "01",
      title: "Discover",
      description:
        "Identify high-impact use cases, assess data landscape, and define success metrics",
      icon: Search,
    },
    {
      step: "02",
      title: "Design",
      description:
        "Prompt engineering, model selection, and architecture design",
      icon: Network,
    },
    {
      step: "03",
      title: "Build & Fine-Tune",
      description:
        "RAG implementation, domain adaptation, and performance optimization",
      icon: Code2,
    },
    {
      step: "04",
      title: "Deploy",
      description:
        "API integration, audit logs, security hardening, and monitoring setup",
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: "Improve",
      description:
        "Hallucination reduction, feedback loops, and continuous learning",
      icon: LineChart,
    },
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
            Intelligence Amplified
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Data & AI Services
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Bridge the gap between experimental AI and production value.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              We build agentic, secure, and domain-intelligent AI systems that power real business outcomes.
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
              The era of predictive analytics has evolved into the era of generative intelligence. Techknomatic helps organizations move beyond simple dashboards and static models into a future of autonomous agents and conversational interfaces. Our AI services focus on creating trust, ensuring security, and delivering measurable value.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              By combining high-performance data engineering with cutting-edge LLM orchestration, we build systems that don't just "chat" — they work. From automated claims processing to real-time supply chain optimization, our AI solutions are engineered for growth.
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
              WHAT WE DELIVER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Data & AI Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Industry Use Cases
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryUseCases.map((uc, i) => (
              <UseCaseCard key={i} title={uc.title} description={uc.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-[120px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
            >
              Our Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A structured AI delivery framework ensuring domain accuracy and technical trust.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {ourApproach.map((step, i) => (
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

      {/* Why Techknomatic for AI Section */}
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Techknomatic for AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Four key pillars that define our AI leadership.
            </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col">
                {whyTechknomaticAI.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="border-b border-slate-200 dark:border-white/10 last:border-0"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full py-6 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-6">
                          <span
                            className={`text-sm font-bold tracking-widest transition-colors ${isOpen ? "text-accent/60" : "text-slate-400 dark:text-slate-500"}`}
                          >
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          <span
                            className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-accent" : "text-brand-950 dark:text-white group-hover:text-accent/80"}`}
                          >
                            {item.title}
                          </span>
                        </div>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-accent text-white" : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/10"}`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="pl-[3.25rem] pb-8">
                              <div className="pl-4 border-l-2 border-accent/30 text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.description}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-full">
              <div className="aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={openFaq ?? 0}
                    src={whyTechknomaticAI[openFaq ?? 0].image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    alt="AI Expertise"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/40 via-transparent to-transparent mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
