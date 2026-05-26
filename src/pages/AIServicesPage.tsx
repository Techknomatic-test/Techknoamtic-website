import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import {
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Monitor,
  Search,
  Workflow,
  Code2,
  Zap,
  RefreshCw,
} from "lucide-react";

const DAIS_IMG = "Images/Services/data-ai-strategy";
const daisImg = (file: string) => `${import.meta.env.BASE_URL}${DAIS_IMG}/${file}`;
const DAIS_HERO_IMG = daisImg("data-hero.jpg");
const DAIS_TOOLS_IMG = daisImg("toolsandtech.jpg");

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const chips = content.split("·").map((s) => s.trim());

  return (
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden text-left">
      <button
        type="button"
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-[15px] font-bold text-brand-950 dark:text-white group-hover:text-accent transition-colors">
          {title}
        </span>
        <div
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white"
              : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/10"
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6">
              <div className="flex flex-wrap gap-2">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full text-[12px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OfferCard = ({
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
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full overflow-hidden"
  >
    <div className="relative h-52 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
      {description}
    </p>
  </motion.div>
);

const ApproachStep = ({
  num,
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  num: string;
  title: string;
  description: string;
  icon: any;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative min-w-0 w-full p-6 lg:p-7 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group text-left"
  >
    <div className="absolute top-6 right-6 lg:top-7 lg:right-7 text-3xl lg:text-4xl font-black text-accent/10 transition-colors">
      {num}
    </div>
    <SectionIcon icon={Icon} size="md" className="mb-8" />
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed px-2 border-l-2 border-accent/20">
      {description}
    </p>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  industries,
  impact,
  techStack,
}: {
  title: string;
  subtitle: string;
  crux: string;
  industries: string;
  impact?: string;
  techStack?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group text-left h-full flex flex-col"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/70 dark:text-white/70 mb-8 leading-snug">
      {subtitle}
    </p>

    <div className="space-y-6 flex-1">
      <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
        {crux}
      </p>

      {techStack && (
        <div>
          <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Tech Stack</h4>
          <p className="text-[13px] font-bold text-brand-950 dark:text-white">{techStack}</p>
        </div>
      )}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-4">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-2">Industries</h4>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">{industries}</p>
      </div>
      {impact && (
        <div>
          <h4 className="text-[11px] font-black tracking-widest text-green-600 uppercase mb-2">
            Impact
          </h4>
          <p className="text-[13px] font-bold text-brand-950 dark:text-white">{impact}</p>
        </div>
      )}
    </div>
  </motion.div>
);

export const AIServicesPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeOffer = [
    {
      title: "Custom Chatbots & LLM Assistants",
      description:
        "Intelligent conversational AI for customer service, HR, helpdesk, and internal knowledge management.",
      image: daisImg("custom-chatbots-llm-assistants.jpg"),
    },
    {
      title: "Agentic AI Workflows",
      description:
        "Multi-step automation that understands context, makes decisions, and executes complex business processes.",
      image: daisImg("agentic-ai-workflows.jpg"),
    },
    {
      title: "Document AI & NLP",
      description:
        "Extract insights from contracts, claims, reports, and unstructured documents with LLM-powered processing.",
      image: daisImg("document-ai-nlp.jpg"),
    },
    {
      title: "Conversational BI",
      description:
        "Natural-language analytics that lets anyone ask questions and get answers from their data, instantly.",
      image: daisImg("conversational-bi.jpg"),
    },
    {
      title: "GenAI for Auto-Summaries",
      description:
        "Automated generation of summaries, reports, and emails from data, saving hours of manual work.",
      image: daisImg("genai-auto-summaries.jpg"),
    },
    {
      title: "AI Strategy & Model Deployment",
      description:
        "End-to-end AI consulting, from use-case identification to production deployment and monitoring.",
      image: daisImg("ai-strategy-model-deployment.jpg"),
    },
  ];

  const toolsTech = [
    {
      title: "Foundation Models",
      content:
        "Claude (Sonnet / Opus) · OpenAI (GPT-4o) · Azure OpenAI · Mistral · Gemini · Hugging Face",
    },
    {
      title: "Orchestration & Agents",
      content: "LangChain · LlamaIndex · Semantic Kernel · AutoGen · n8n",
    },
    {
      title: "Vector Databases",
      content: "Pinecone · Weaviate · Azure AI Search · pgvector",
    },
    {
      title: "Document AI",
      content: "Azure Document Intelligence · AWS Textract · NotebookLM · Custom Fine-Tuned Models",
    },
    {
      title: "MLOps & Deployment",
      content:
        "Azure ML · AWS SageMaker · MLflow · Docker · Kubernetes · Vercel · Cloudflare · Render · Railway",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discover",
      description:
        "Identify high-impact use cases, assess data readiness, and define success metrics and guardrails.",
      icon: Search,
    },
    {
      num: "02",
      title: "Design",
      description:
        "Prompt engineering, model selection, and responsible-AI architecture design, including fallback logic.",
      icon: Workflow,
    },
    {
      num: "03",
      title: "Build & Fine-Tune",
      description: "RAG implementation, domain adaptation, and performance optimisation with evaluation harnesses.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Deploy",
      description:
        "API integration, safety logging, security hardening, and monitoring setup in your cloud environment.",
      icon: Zap,
    },
    {
      num: "05",
      title: "Improve",
      description: "Hallucination reduction, feedback loops, continuous evaluation, and model refresh cycles.",
      icon: RefreshCw,
    },
  ];

  const useCases = [
    {
      title: "Intelligent Document Processing & Contract Intelligence",
      subtitle: "Automate extraction, review, and analysis of high-volume enterprise documents.",
      crux: "Deploy AI-powered document processing pipelines that extract, classify, validate, and summarize structured and unstructured documents, contracts, invoices, clinical records, regulatory filings. Use LLMs with domain-specific fine-tuning to flag risks, compare clause variations, and generate review summaries, reducing manual review effort by up to 70%.",
      industries: "Legal · BFSI · Insurance · Healthcare · Procurement",
      impact: "70% reduction in manual review · Faster contract turnaround · Improved risk flagging",
    },
    {
      title: "Intelligent Data Migration & AI-Assisted Schema Transformation",
      subtitle: "Accelerate complex data migrations with AI that maps, transforms, and validates at scale.",
      crux: "Deploy AI-assisted migration pipelines that automate schema mapping, data type reconciliation, transformation rule generation, and post-migration validation between heterogeneous sources, legacy warehouses, ERPs, SaaS platforms, and cloud databases. LLM-powered mapping assistants reduce manual effort, flag conflicts, and auto-generate reconciliation reports to ensure zero data loss.",
      industries: "BFSI · Retail · Manufacturing · Healthcare · Any Enterprise Migration Program",
      impact: "Faster migration timelines · Reduced manual mapping effort",
    },
    {
      title: "Agentic AI for IT Operations & Incident Resolution (AIOps)",
      subtitle:
        "Autonomous agents that detect, triage, investigate, and resolve IT incidents, end to end, without human bottlenecks.",
      crux: "Deploy multi-agent AIOps systems that continuously monitor infrastructure telemetry, application logs, and ITSM queues, automatically classifying incidents by severity, correlating root causes across distributed systems, executing predefined runbooks, and generating plain-language resolution summaries for on-call engineers.",
      techStack: "LangChain Agents · AutoGen · ServiceNow · Datadog · Splunk · Azure Monitor · PagerDuty",
      industries: "FinTech · Telecom · SaaS Platforms · E-Commerce · Retail · Banking",
      impact: "40–60% reduction in MTTR · Autonomous runbook execution",
    },
    {
      title: "Retail & E-Commerce AI, Recommendations & Sentiment Intelligence",
      subtitle: "Personalize customer experiences and optimize retail operations with AI.",
      crux: "Deploy AI-powered product recommendation engines, returns-reason classifiers, and review sentiment analysis pipelines that integrate with e-commerce and CRM platforms. Use LLM-driven customer intent modeling and behavioral signal processing to improve conversion rates and surface actionable insights.",
      industries: "Retail · E-Commerce · D2C · FMCG · Marketplace Platforms",
      impact: "Improved conversion · Reduced returns cost · Richer customer insights",
    },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={DAIS_HERO_IMG}
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
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Data & AI Strategy
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              From Models to Momentum: Enterprise AI, Built for Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Strategy, GenAI applications, agentic workflows, and production-grade model deployment, engineered to
              move enterprises from AI experimentation to measurable business outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full space-y-8 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Most enterprises are no longer asking whether to invest in AI, they're asking how to operationalize
              it. Pilots stall in proof-of-concept purgatory. Models work in notebooks but fail in production. GenAI
              prototypes excite leadership but never make it past compliance. Techknomatic helps enterprises bridge that
              gap with end-to-end AI and data strategy services that take ideas from discovery to deployment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our practice spans AI strategy and use-case identification, custom LLM applications and chatbots,
              agentic AI workflows, document AI, conversational BI, and production model deployment with full MLOps.
              Built on a multi-model foundation, Claude, OpenAI, Mistral, Gemini, and open-source, and tightly coupled
              with our data engineering capability, we deliver enterprise-grade AI that is secure, governed, and
              measurably impactful from day one.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-[50px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              What We Offer
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((it, idx) => (
              <OfferCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              Tools and Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              A cutting-edge tech stack for the AI era, optimized for performance, scalability, and trust.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[3rem] bg-slate-100 ring-1 ring-slate-200/80 dark:bg-white/5 dark:ring-white/10 shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <img
                  loading="lazy"
                  src={DAIS_TOOLS_IMG}
                  alt="Tools and technology for AI and data strategy"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="bg-white dark:bg-transparent rounded-2xl">
              {toolsTech.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={`${index + 1}. ${item.title}`}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden text-left">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading-on-dark mb-6"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium"
            >
              A proven 5-step delivery framework, from use case to production-grade, continuously improving AI.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 w-full pb-12">
            {steps.map((step, idx) => (
              <ApproachStep key={idx} {...step} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium mt-4"
            >
              Four high-impact AI programs we deliver for enterprises, across document intelligence, data migration,
              autonomous operations, and customer experience.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
