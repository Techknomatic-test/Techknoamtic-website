import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SectionIcon } from "../components/SectionIcon";
import {
  ShieldCheck,
  ArrowRight,
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

const PARSE_IQ_BASE = "Images/ParseIQ";

const parseIqImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...PARSE_IQ_BASE.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;

const PARSE_IQ_HERO = parseIqImg("herobanner.jpg");
const PARSE_IQ_CHALLENGE = parseIqImg("The Enterprise Document Challenge.jpg");

const UseCaseCard = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-brand-900/40 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all group"
  >
    <SectionIcon icon={Icon} size="lg" hover="rotate" className="mb-8" />
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const ParseIQPage = () => {
  const capabilities = [
    {
      title: "Smart OCR System",
      icon: Scan,
      items: ["Handwritten text recognition", "Printed document extraction", "Multi-format document support", "Automated field detection", "Structured data conversion", "API-driven integrations"]
    },
    {
      title: "AI-Powered Document Understanding",
      icon: Brain,
      items: ["Context-aware extraction", "Intelligent field mapping", "Document classification", "Semantic understanding", "Multi-layout interpretation", "Adaptive learning models"]
    },
    {
      title: "LLM-Powered PDF Extraction",
      icon: FileSearch,
      items: ["Complex table extraction", "Contextual data interpretation", "Multi-page document understanding", "Structured output generation", "Custom extraction workflows", "AI-assisted compliance processing"]
    },
    {
      title: "Passport & Identity Data Extraction",
      icon: ShieldCheck,
      items: ["MRZ extraction", "Passport and ID data parsing", "Identity verification support", "Authenticity validation", "KYC-ready integrations"]
    },
    {
      title: "Automated Data Structuring",
      icon: Database,
      items: ["JSON, CSV, and API payload outputs", "Database-ready records", "ERP and CRM integration formats", "Schema-validated outputs", "Custom output templates"]
    },
    {
      title: "Custom AI Model Training",
      icon: Cpu,
      items: ["Industry-specific templates", "Custom field extraction", "Domain-specific validation logic", "Enterprise compliance requirements", "Continuous model refinement"]
    }
  ];

  const steps = [
    { title: "Ingestion", content: "Documents enter via API, watch-folder, email, or batch upload.", icon: Mail },
    { title: "Smart OCR & Pre-Processing", content: "Image enhancement, deskewing, and OCR extraction.", icon: Scan },
    { title: "AI Classification & Layout Understanding", content: "AI models identify document type, layout, and key regions.", icon: Brain },
    { title: "LLM-Driven Contextual Extraction", content: "LLMs interpret context, extract complex tables, validate fields, and reason across multi-page documents.", icon: Cpu },
    { title: "Structured Output & Delivery", content: "Clean JSON, CSV, or API payloads are delivered downstream.", icon: Share2 },
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
          <img
            loading="lazy"
            src={PARSE_IQ_HERO}
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
            ParseIQ
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              AI-Powered Document Intelligence & Data Extraction Platform
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Transform unstructured documents into structured, actionable intelligence. ParseIQ combines OCR, AI, and LLM-driven understanding to automate document processing at enterprise scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="w-full text-left mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Every enterprise runs on documents invoices, contracts, KYC forms, passports, claims, shipment paperwork, onboarding records, and operational PDFs. Yet despite digital transformation investments, most document workflows still remain manual, fragmented, and heavily dependent on human effort. Traditional OCR systems can extract text, but they fail to understand context, layouts, handwritten content, or complex multi-page documents. Teams spend countless hours validating fields, correcting extraction errors, re-entering data into ERP and CRM systems, and managing compliance-heavy verification processes manually
              The result is an operational bottleneck hidden inside back-office workflows: slower customer onboarding, delayed approvals, rising operational costs, compliance risks, and poor scalability. As document volumes grow, organizations are forced to scale teams instead of intelligence making automation expensive, inconsistent, and difficult to sustain
            </motion.p>
          </div>

          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img
                loading="lazy"
                src={PARSE_IQ_CHALLENGE}
                alt="The enterprise document challenge"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-6 self-start lg:pt-4">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight">
                  Common Operational Pain Points
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
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

      {/* Capabilities Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              What ParseIQ Solves
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((it, idx) => (
              <PlatformCapabilityCard
                key={idx}
                title={it.title}
                items={it.items}
                icon={it.icon}
                delay={idx * 0.1}
                reserveOutcomeSpace={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              How ParseIQ Works
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[16px] font-bold text-brand-950 dark:text-white mb-6 leading-tight tracking-tight"
            >
              5-step architecture: ingest, understand, extract, validate, and integrate structured document intelligence.
            </motion.h3>
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

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              High-impact document automation across BFSI, logistics, healthcare, and public-sector operations.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
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
