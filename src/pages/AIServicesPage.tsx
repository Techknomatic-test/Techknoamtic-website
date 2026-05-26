import { motion } from "motion/react";
import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import {
  ChipAccordionItem,
  ServiceApproachStep,
  ServiceImageCapabilityCard,
  ServiceUseCasesSection,
} from "../components/product-page";
import {
  Search,
  Workflow,
  Code2,
  Zap,
  RefreshCw,
} from "lucide-react";

const DAIS_IMG = "Images/Services/data-ai-strategy";
const daisImg = (file: string) => buildAssetUrl(DAIS_IMG, file);
const DAIS_HERO_IMG = daisImg("data-hero.jpg");
const DAIS_TOOLS_IMG = daisImg("toolsandtech.jpg");

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
      metaLayout: "footer" as const,
    },
    {
      title: "Intelligent Data Migration & AI-Assisted Schema Transformation",
      subtitle: "Accelerate complex data migrations with AI that maps, transforms, and validates at scale.",
      crux: "Deploy AI-assisted migration pipelines that automate schema mapping, data type reconciliation, transformation rule generation, and post-migration validation between heterogeneous sources, legacy warehouses, ERPs, SaaS platforms, and cloud databases. LLM-powered mapping assistants reduce manual effort, flag conflicts, and auto-generate reconciliation reports to ensure zero data loss.",
      industries: "BFSI · Retail · Manufacturing · Healthcare · Any Enterprise Migration Program",
      impact: "Faster migration timelines · Reduced manual mapping effort",
      metaLayout: "footer" as const,
    },
    {
      title: "Agentic AI for IT Operations & Incident Resolution (AIOps)",
      subtitle:
        "Autonomous agents that detect, triage, investigate, and resolve IT incidents, end to end, without human bottlenecks.",
      crux: "Deploy multi-agent AIOps systems that continuously monitor infrastructure telemetry, application logs, and ITSM queues, automatically classifying incidents by severity, correlating root causes across distributed systems, executing predefined runbooks, and generating plain-language resolution summaries for on-call engineers.",
      techStack: "LangChain Agents · AutoGen · ServiceNow · Datadog · Splunk · Azure Monitor · PagerDuty",
      industries: "FinTech · Telecom · SaaS Platforms · E-Commerce · Retail · Banking",
      impact: "40–60% reduction in MTTR · Autonomous runbook execution",
      metaLayout: "footer" as const,
    },
    {
      title: "Retail & E-Commerce AI, Recommendations & Sentiment Intelligence",
      subtitle: "Personalize customer experiences and optimize retail operations with AI.",
      crux: "Deploy AI-powered product recommendation engines, returns-reason classifiers, and review sentiment analysis pipelines that integrate with e-commerce and CRM platforms. Use LLM-driven customer intent modeling and behavioral signal processing to improve conversion rates and surface actionable insights.",
      industries: "Retail · E-Commerce · D2C · FMCG · Marketplace Platforms",
      impact: "Improved conversion · Reduced returns cost · Richer customer insights",
      metaLayout: "footer" as const,
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="Data & AI Strategy"
        tagline="From Models to Momentum: Enterprise AI, Built for Impact"
        description="Strategy, GenAI applications, agentic workflows, and production-grade model deployment, engineered to move enterprises from AI experimentation to measurable business outcomes."
        imageSrc={DAIS_HERO_IMG}
      />

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
              <ServiceImageCapabilityCard key={idx} {...it} delay={idx * 0.1} />
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
                <ChipAccordionItem
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
              <ServiceApproachStep key={idx} {...step} delay={idx * 0.1} variant="slate" />
            ))}
          </div>
        </div>
      </section>

      <ServiceUseCasesSection
        description="Four high-impact AI programs we deliver for enterprises, across document intelligence, data migration, autonomous operations, and customer experience."
        cases={useCases}
        sectionClassName="py-[60px] px-6 bg-white dark:bg-brand-950 text-left pb-20"
        titleClassName="section-heading"
        descriptionClassName="text-lg text-slate-500 dark:text-slate-400 font-medium mt-4"
      />

      <PreFooterCTA />
    </PageShell>
  );
};
