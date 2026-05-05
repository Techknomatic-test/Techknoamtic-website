import { motion } from 'motion/react';
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
  CheckCircle2
} from 'lucide-react';

const Card = ({ title, description, icon: Icon, delay = 0, variant = "default" }: { title: string, description: string | string[], icon: any, delay?: number, variant?: "default" | "minimal" | "list" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`p-8 rounded-[2.5rem] border transition-all duration-500 group h-full flex flex-col ${
        variant === "minimal" 
          ? 'bg-slate-50/50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-accent/10' 
          : 'bg-white dark:bg-white/5 border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
        variant === "minimal" 
          ? 'bg-white dark:bg-white/10 text-slate-400 group-hover:text-accent group-hover:bg-accent/10' 
          : 'bg-accent/10 text-accent group-hover:scale-110'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="space-y-2 flex-1">
          {description.map((item, idx) => (
            <li key={idx} className="text-[13px] font-medium text-slate-500 dark:text-slate-400 flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const AIServicesPage = () => {
  const ourServices = [
    {
      title: "Custom Chatbots & LLM Assistants",
      description: "Enterprise-grade conversational AI for customer service, HR, IT helpdesk, and internal knowledge management.",
      icon: MessageSquare
    },
    {
      title: "Agentic AI Workflows",
      description: "Multi-step automation that understands context, makes decisions, and executes complex business processes.",
      icon: Brain
    },
    {
      title: "Document AI & NLP",
      description: "Extract insights from contracts, claims, reports, and unstructured documents with AI-powered document processing.",
      icon: BookOpen
    },
    {
      title: "Conversational BI",
      description: "Natural language analytics that lets anyone ask questions and get answers from their data instantly.",
      icon: Lightbulb
    },
    {
      title: "GenAI for Auto-Summaries",
      description: "Automated generation of summaries, reports, and emails from data — saving hours of manual work.",
      icon: Settings
    },
    {
      title: "AI Strategy & Model Deployment",
      description: "End-to-end AI consulting from use case identification to production deployment and monitoring.",
      icon: ShieldCheck
    }
  ];

  const whyTechknomaticAI = [
    {
      title: "AI + Data Engineering Under One Roof",
      description: "Seamless integration between AI and your data infrastructure."
    },
    {
      title: "Multi-Model Expertise",
      description: "Azure OpenAI, Hugging Face, private models — whatever fits your needs."
    },
    {
      title: "Cross-Industry Experience",
      description: "Deep expertise across BFSI, Pharma, Energy, and Manufacturing."
    },
    {
      title: "Enterprise-Grade by Default",
      description: "Secure, governed, scalable — built for enterprise requirements."
    },
    {
      title: "No Black Boxes",
      description: "Full transparency on model behavior, biases, and decision rationale."
    }
  ];

  const industryUseCases = [
    {
      title: "Insurance",
      description: [
        "Claim validation",
        "Underwriting assistant",
        "Policy chatbot",
        "Fraud detection explanations"
      ],
      color: "bg-[#f0f9ff]/50 dark:bg-blue-900/10"
    },
    {
      title: "Pharma/Healthcare",
      description: [
        "Rep call notes analysis",
        "Patient journey bots",
        "Med literature search",
        "Clinical trial insights"
      ],
      color: "bg-[#fffaf0]/50 dark:bg-orange-900/10"
    },
    {
      title: "Banking/Finance",
      description: [
        "Compliance alerts",
        "Fraud explanations",
        "Customer service AI",
        "Report generation"
      ],
      color: "bg-[#f0fff4]/50 dark:bg-green-900/10"
    },
    {
      title: "Energy/Manufacturing",
      description: [
        "Maintenance ticket summarization",
        "Plant assistant",
        "Safety report generation",
        "Operational insights"
      ],
      color: "bg-[#faf5ff]/50 dark:bg-purple-900/10"
    }
  ];

  const ourApproach = [
    {
      step: "1",
      title: "Discover",
      description: "Identify high-impact use cases, assess data landscape, and define success metrics"
    },
    {
      step: "2",
      title: "Design",
      description: "Prompt engineering, model selection, and architecture design"
    },
    {
      step: "3",
      title: "Build & Fine-Tune",
      description: "RAG implementation, domain adaptation, and performance optimization"
    },
    {
      step: "4",
      title: "Deploy",
      description: "API integration, audit logs, security hardening, and monitoring setup"
    },
    {
      step: "5",
      title: "Improve",
      description: "Hallucination reduction, feedback loops, and continuous learning"
    }
  ];

  return (
    <div className="pt-[120px]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full"
          >
            AI & Generative AI Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Our AI Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            Bridge the gap between experimental AI and production value. We build agentic, secure, and domain-intelligent AI systems.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight mb-6">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Industry Use Cases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryUseCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2rem] ${useCase.color} border border-slate-100/50 dark:border-white/5 h-full`}
              >
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-6">
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.description.map((item, idx) => (
                    <li key={idx} className="text-[14px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-3">
                      <span className="text-slate-400 mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ourApproach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center mb-6 text-xl shadow-lg shadow-accent/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic for AI Section */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Why Techknomatic for AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {whyTechknomaticAI.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to integrate intelligence?</h2>
          <p className="text-lg opacity-90 mb-12 font-medium">Let's build AI features that actually move the needle for your business.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3">
               Start AI Consulting <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
