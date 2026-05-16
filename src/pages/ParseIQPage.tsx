import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Activity,
  Lock,
  Search,
  RefreshCw,
  FileText,
  Scan,
  Brain,
  Cpu,
  Mail,
  FileSearch,
  ChevronUp,
  ChevronDown,
  LayoutDashboard,
  Layers,
  Globe,
  Settings,
  Server,
  Cloud,
  Box,
  Truck,
  Building2,
  Stethoscope,
  Vote,
  FileCheck2,
  Terminal,
  Network,
  Share2
} from "lucide-react";

const CapabilityCard = ({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full"
  >
    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Brain className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight leading-tight">
      {title}
    </h3>
    <ul className="space-y-3 flex-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
          <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const AccordionItem = ({
  step,
  title,
  content,
  isOpen,
  onClick,
}: {
  step: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
    <button
      onClick={onClick}
      className="w-full py-8 flex items-start gap-6 text-left group transition-all"
    >
      <span className="text-[14px] font-black text-accent mt-1 opacity-50 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {step}
      </span>
      <div className="flex-1">
        <h3 className={`text-[20px] font-bold transition-colors ${isOpen ? "text-accent" : "text-brand-950 dark:text-white"}`}>
          {title}
        </h3>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="mt-4 text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`mt-1 p-2 rounded-full transition-all duration-300 ${
          isOpen ? "bg-accent text-white" : "text-slate-400 group-hover:text-accent"
        }`}
      >
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>
    </button>
  </div>
);

const IntegrationCard = ({ num, title, description, image, delay = 0 }: { num: string; title: string; description: string; image: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-accent/40 transition-all group h-full overflow-hidden"
  >
    <div className="relative h-40 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-brand-950 to-transparent opacity-40" />
    </div>
    <div className="text-[12px] font-black text-accent mb-4 opacity-50">{num}</div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic px-2 border-l-2 border-accent/20">
      {description}
    </p>
  </motion.div>
);

const UseCaseCard = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-brand-900/40 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const ParseIQPage = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const capabilities = [
    {
      title: "Capability 1 — Smart OCR System",
      items: ["Handwritten text recognition", "Printed document extraction", "Multi-format document support", "Automated field detection", "Structured data conversion", "API-driven integrations"]
    },
    {
      title: "Capability 2 — AI-Powered Document Understanding",
      items: ["Context-aware extraction", "Intelligent field mapping", "Document classification", "Semantic understanding", "Multi-layout interpretation", "Adaptive learning models"]
    },
    {
      title: "Capability 3 — LLM-Powered PDF Extraction",
      items: ["Complex table extraction", "Contextual data interpretation", "Multi-page document understanding", "Structured output generation", "Custom extraction workflows", "AI-assisted compliance processing"]
    },
    {
      title: "Capability 4 — Passport & Identity Data Extraction",
      items: ["MRZ extraction", "Passport and ID data parsing", "Identity verification support", "Authenticity validation", "KYC-ready integrations"]
    },
    {
      title: "Capability 5 — Automated Data Structuring",
      items: ["JSON, CSV, and API payload outputs", "Database-ready records", "ERP and CRM integration formats", "Schema-validated outputs", "Custom output templates"]
    },
    {
      title: "Capability 6 — Custom AI Model Training",
      items: ["Industry-specific templates", "Custom field extraction", "Domain-specific validation logic", "Enterprise compliance requirements", "Continuous model refinement"]
    }
  ];

  const steps = [
    { step: "01.", title: "Ingestion", content: "Documents enter via API, watch-folder, email, or batch upload." },
    { step: "02.", title: "Smart OCR & Pre-Processing", content: "Image enhancement, deskewing, and OCR extraction." },
    { step: "03.", title: "AI Classification & Layout Understanding", content: "AI models identify document type, layout, and key regions." },
    { step: "04.", title: "LLM-Driven Contextual Extraction", content: "LLMs interpret context, extract complex tables, validate fields, and reason across multi-page documents." },
    { step: "05.", title: "Structured Output & Delivery", content: "Clean JSON, CSV, or API payloads are delivered downstream." }
  ];

  const integrations = [
    { 
      num: "01", 
      title: "APIs & Developer Access", 
      description: "REST APIs · Webhooks · Batch endpoints · SDK access",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "02", 
      title: "ERP Systems", 
      description: "SAP · Oracle · Microsoft Dynamics · NetSuite",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "03", 
      title: "CRM Platforms", 
      description: "Salesforce · HubSpot · Zoho",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "04", 
      title: "Workflow & Automation Engines", 
      description: "Camunda · Power Automate · Custom BPM tools",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "05", 
      title: "Document Management Systems", 
      description: "SharePoint · Box · OpenText · Custom DMS",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "06", 
      title: "Deployment Modes", 
      description: "Cloud · On-premise · Hybrid · Private VPC",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const useCases = [
    { title: "KYC & Identity Verification Automation", description: "AI-powered extraction and validation of passports, national IDs, and proof-of-address documents.", icon: ShieldCheck },
    { title: "Claims & Policy Document Processing", description: "Automate insurance claims intake and structured data extraction.", icon: FileCheck2 },
    { title: "Invoice & Vendor Document Automation", description: "Touchless AP processing across logistics and operations.", icon: Truck },
    { title: "Medical Records & Healthcare Forms Digitization", description: "Convert paper-based patient data into structured records.", icon: Stethoscope },
    { title: "Government Citizen Document Processing", description: "Automate citizen-facing application and verification workflows.", icon: Vote }
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-black text-white mb-6 tracking-tight leading-tight"
          >
            ParseIQ
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              AI-Powered Document Intelligence & Data Extraction Platform
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              Transform unstructured documents into structured, actionable intelligence. ParseIQ combines OCR, AI, and LLM-driven understanding to automate document processing at enterprise scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              The Enterprise Document Challenge
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand-950/70 dark:text-white/70 leading-snug"
            >
              Every enterprise runs on documents — but most still process them manually.
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1586282391129-56a992ad338c?auto=format&fit=crop&q=80&w=1200" 
                alt="Document Challenge" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-sm font-bold italic border-l-4 border-accent pl-4">
                  Over 80% of enterprise data is trapped in unstructured documents.
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              {[
                "Manual data entry and validation across systems",
                "Slow turnaround and operational bottlenecks",
                "High error rates in document handling and re-keying",
                "Complex PDFs and tables that defeat template-based OCR",
                "Inconsistent, unstructured document formats",
                "Time-consuming compliance, KYC, and verification workflows",
                "Limited scalability of back-office and shared-service operations"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 text-slate-500 dark:text-slate-400 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              What ParseIQ Solves
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              How ParseIQ Works
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-accent mb-12 tracking-wider"
            >
              5-STEP ARCHITECTURE
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544391682-17ef1f356b44?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture" 
                className="w-full h-full object-cover p-12 opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-brand-950/30" />
            </motion.div>

            <div className="max-w-xl">
              {steps.map((step, idx) => (
                <AccordionItem
                  key={idx}
                  step={step.step}
                  title={step.title}
                  content={step.content}
                  isOpen={activeStep === idx}
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-brand-950 text-left relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4"
            >
              System & Process Integration
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-white/50"
            >
              Supported Integrations
            </motion.h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((item, idx) => (
              <IntegrationCard key={idx} {...item} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Use Cases
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
