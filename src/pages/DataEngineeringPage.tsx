import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Database,
  Layers,
  Zap,
  ShieldCheck,
  Users,
  Settings,
  Target,
  ArrowRight,
  Globe,
  LayoutDashboard,
  Cpu,
  Monitor,
  HardDrive,
  Share2,
  RefreshCw,
  Clock,
  Cloud,
  Server,
  CheckCircle2,
  Brain,
  MessageSquare,
  Truck,
  Activity,
  ChevronDown,
  ChevronUp,
  Box,
  Infinity,
  FileText,
  Search,
  Code
} from "lucide-react";

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
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
      <button
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

const ApproachStep = ({ num, title, description, delay = 0 }: { num: string; title: string; description: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
  >
    <div className="absolute top-8 right-8 text-4xl font-black text-slate-200 dark:text-white/5 group-hover:text-accent/20 transition-colors">
      {num.split('.')[1]}
    </div>
    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center mb-8 text-accent shadow-sm group-hover:scale-110 transition-transform">
      <Code className="w-5 h-5" />
    </div>
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic px-2 border-l-2 border-accent/20">
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

const UseCaseCard = ({ title, description, crux, industries }: { title: string; description: string; crux: string; industries: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/80 dark:text-white/80 mb-8 leading-snug">
      {description}
    </p>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Crux</h4>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Industries</h4>
        <p className="text-[14px] font-bold text-brand-950 dark:text-white italic">
          {industries}
        </p>
      </div>
    </div>
  </motion.div>
);

export const DataEngineeringPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const capabilities = [
    {
      title: "ETL/ELT Pipelines & Automation",
      description: "Reliable, scalable pipelines built with Talend, Azure Data Factory, Informatica, dbt, and Python.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cloud & Platform Setup",
      description: "Modern data platforms on Azure Synapse, Snowflake, Databricks, and Redshift — engineered to scale",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Salesforce Cloud Integration",
      description: "Seamless Salesforce data integration to power a unified enterprise customer view",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Metadata & Master Data Management",
      description: "Trusted data assets through MDM, metadata governance, and enterprise data catalogs",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real-Time & IoT Engineering",
      description: "Streaming pipelines on Kafka, Event Hubs, and Spark Streaming for low-latency insights",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Quality & Governance",
      description: "Automated quality checks, cleansing routines, and governance frameworks for trusted data.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const accordions = [
    { title: "1. Cloud Platforms", content: "Azure · AWS · GCP · Snowflake · Databricks" },
    { title: "2. ETL / Orchestration", content: "Talend · Azure Data Factory · dbt · Apache Airflow · SSIS · Informatica" },
    { title: "3. Real-Time Processing", content: "Apache Kafka · Azure Event Hubs · Spark Streaming" },
    { title: "4. Data Governance", content: "Azure Purview · Talend Catalog · Collibra" },
    { title: "5. Data Sources We Integrate", content: "Salesforce · SAP · Oracle · SQL Server · Amazon S3 · IoT Devices · REST/SOAP APIs" },
  ];

  const steps = [
    { num: "01.", title: "Assess", description: "Inventory data sources, integration points, and pipeline bottlenecks. Define the target architecture." },
    { num: "02.", title: "Architect", description: "Design end-to-end data flow — ingestion, transformation, storage, and serving layers. Agree SLAs upfront" },
    { num: "03.", title: "Build & Automate", description: "Develop pipelines with CI/CD, parameterized configurations, and automated quality checks at every stage." },
    { num: "04.", title: "Test & Monitor", description: "Run data-quality assertions, lineage validation, and load tests. Stand up alerting and SLA dashboards." },
    { num: "05.", title: "Operate & Optimize", description: "Hand off to managed operations or upskill your team. Continuously tune cost and performance." },
  ];

  const differentiators = [
    { title: "End-to-End Ownership", description: "One accountable partner from source systems → pipelines → platform → BI & AI." },
    { title: "Deep Ecosystem Expertise", description: "Proven experience with Salesforce, SAP, Oracle, IoT, and legacy data systems." },
    { title: "Strong Certified Talent", description: "Azure and Snowflake implementation teams led by certified architects." },
    { title: "Pre-Built Accelerators", description: "Reusable connectors, templates, and frameworks for faster, lower-risk delivery." },
    { title: "100+ Pipelines Delivered", description: "Production-grade pipelines across BFSI, Manufacturing, Pharma, and Energy." },
    { title: "SLA-Governed Delivery", description: "Monitored, governed pipelines with SLA guarantees — no black-box solutions." },
  ];

  const useCases = [
    {
      title: "Data Platform Modernization",
      description: "Re-architect legacy data ecosystems into a scalable cloud-native foundation",
      crux: "Migrate fragmented ETL workflows and legacy warehouses into a governed lakehouse on Databricks and Azure. Using Medallion Architecture, Delta Lake, ADF, and Airflow, we build Bronze–Silver–Gold layers that power enterprise BI, analytics, and AI at scale",
      industries: "BFSI · Insurance · Manufacturing · Retail · Telecom"
    },
    {
      title: "Real-Time Operational Intelligence Platforms",
      description: "Transform enterprise operational data into actionable, real-time business intelligence",
      crux: "Build event-driven analytics platforms on AWS — Redshift, Glue, Kinesis, Lambda, MSK, and S3 — using Kafka streaming, CDC pipelines, and dimensional modeling. Consolidate ERP, CRM, IoT, ITSM, and transactional data into low-latency operational views for faster decisions.",
      industries: "Oil & Gas · Logistics · ITSM · Telecom · Supply Chain"
    },
    {
      title: "Data Quality, Reconciliation & Observability",
      description: "Engineer trust into every stage of the data lifecycle",
      crux: "Embed automated validation, reconciliation, schema-drift detection, lineage tracking, and SLA monitoring directly into transformation layers. Built on Snowflake and GCP — BigQuery, Dataflow, Pub/Sub — to surface data issues before they impact reporting or compliance.",
      industries: "BFSI · Insurance · Healthcare · Government · Regulated Enterprises"
    }
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
            Digital Foundation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Data Engineering
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Build a Foundation for Scalable, Trusted, and Intelligent Data.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Modern cloud-native data platforms — engineered for analytics, AI, and enterprise scale
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
              Enterprise data is only as powerful as the platform that moves, governs, and serves it. Techknomatic helps organizations modernize fragmented data ecosystems into unified, cloud-native foundations built on Azure, AWS, GCP, Snowflake, and Databricks. From high-throughput ETL/ELT pipelines and real-time streaming to lakehouse architectures and governance frameworks, we deliver data engineering that is reliable, observable, and audit-ready.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our solutions combine deep platform expertise with reusable accelerators — connectors, transformation frameworks, and quality libraries — that compress delivery timelines and reduce risk. The result is a scalable data foundation that powers BI, advanced analytics, and AI/ML initiatives across the enterprise.
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
              WHAT WE OFFER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Data Engineering Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6"
            >
              Tools & Technology
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl"
            >
              A platform-agnostic stack — we choose the right tool for your architecture, not the other way around.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] bg-slate-50 dark:bg-white/5 overflow-hidden group"
            >
               <div className="absolute inset-x-0 bottom-0 top-[20%] p-12 bg-gradient-to-t from-accent/20 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-brand-900 shadow-2xl flex items-center justify-center mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" id="monitor_icon">
                  <Monitor className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-brand-950 dark:text-white mb-2">Platform Agnostic</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Built for flexibility and performance.</p>
              </div>
              <div className="absolute top-12 left-12 right-12 bottom-1/2 grid grid-cols-4 gap-4 opacity-20 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="aspect-square bg-accent rounded-lg" style={{ opacity: Math.random() }} />
                ))}
              </div>
            </motion.div>
            
            <div className="bg-white dark:bg-transparent rounded-2xl">
              {accordions.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
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
      <section className="py-[120px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
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
              A proven 5-step delivery framework that takes you from assessment to optimized operations.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {steps.map((step, idx) => (
              <ApproachStep key={idx} {...step} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic Section */}
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              Why Techknomatic for Data Engineering
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Six differentiators that consistently set our delivery apart.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => (
              <DifferentiatorCard key={idx} title={diff.title} description={diff.description} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
            >
              Proof of Concept
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              USE CASES
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

