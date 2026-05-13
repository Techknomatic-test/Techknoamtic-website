import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Brain,
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
  Database,
  MessageSquare,
  Truck,
  Activity,
  ChevronDown,
  ChevronUp,
  Box,
  Infinity,
  FileText,
  Search,
  Code,
  LineChart,
  Network
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
      <Brain className="w-5 h-5" />
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

export const DataSciencePage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const capabilities = [
    {
      title: "Predictive Modeling & Forensics",
      description: "Harnessing historical data to predict future trends, customer behavior, and operational risks with high precision.",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Extracting meaning from unstructured text — from sentiment analysis to automated document summarization.",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Computer Vision & Image AI",
      description: "Deploying deep learning models for object detection, classification, and visual inspection in real-time.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "MLOps & Model Governance",
      description: "Industrializing AI with automated deployment pipelines, monitoring, and explainability frameworks.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "A/B Testing & Causal Inference",
      description: "Designing rigorous experiments to measure the true impact of business changes and marketing initiatives.",
      image: "https://images.unsplash.com/photo-1543286386-2e6713cf67ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Recommendation Engines",
      description: "Building personalized experiences that drive engagement and conversion through collaborative filtering.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const accordions = [
    { title: "1. Core Languages", content: "Python · R · SQL · Scala" },
    { title: "2. ML Frameworks", content: "PyTorch · TensorFlow · Scikit-Learn · XGBoost · Hugging Face" },
    { title: "3. Computer Vision", content: "OpenCV · YOLO · Mediapipe · AWS Rekognition" },
    { title: "4. MLOps Tools", content: "MLflow · Kubeflow · Weights & Biases · Airflow" },
    { title: "5. Scientific Stack", content: "Pandas · NumPy · SciPy · Matplotlib · Seaborn" },
  ];

  const steps = [
    { num: "01.", title: "Hypothesize", description: "Define the business problem, identify data availability, and set clear success metrics (MAE, RMSE, F1-Score)." },
    { num: "02.", title: "Explore", description: "Feature engineering, data cleansing, and exploratory analysis to identify patterns and signal strength." },
    { num: "03.", title: "Model & Train", description: "Select representative algorithms, handle class imbalance, and optimize hyperparameters for peak performance." },
    { num: "04.", title: "Validate & Explain", description: "Assess bias, variance, and model interpretability (SHAP/LIME) to ensure trust and compliance." },
    { num: "05.", title: "Deploy & Monitor", description: "Integrate models into production APIs and stand up drift detection for continuous reliability." },
  ];

  const differentiators = [
    { title: "Beyond The Black Box", description: "We prioritize Explainable AI (XAI) so you understand exactly why a model made a specific prediction." },
    { title: "Domain-First Modeling", description: "Our scientists don't just know code; they understand the nuances of Energy, BFSI, and Logistics." },
    { title: "Data-to-Deployment", description: "We don't just build notebooks; we build production-grade MLOps pipelines that stay reliable." },
    { title: "Rigorous Validation", description: "Every model undergoes strict cross-validation and stress testing against out-of-time data sets." },
    { title: "Feasibility-Led Approach", description: "We tell you what is possible with your current data vs. what is a 'science project' early on." },
    { title: "SLA-Governed Inference", description: "Inference pipelines optimized for latency and cost, governed by enterprise-grade SLAs." },
  ];

  const useCases = [
    {
      title: "Predictive Maintenance for Energy Assets",
      description: "Reducing unplanned downtime through early failure detection in upstream and midstream assets.",
      crux: "Deploy deep learning models on sensor telemetry to identify vibration and thermal anomalies. Using LSTM and GRU architectures, we predict maintenance windows 2 weeks in advance with 92% accuracy.",
      industries: "Oil & Gas · Manufacturing · Utilities · Power Generation"
    },
    {
      title: "Claim Propensity & Fraud Detection",
      description: "Detecting fraudulent behavior and predicting claim severity at the point of FNOL.",
      crux: "Combination of graph analytics and ensemble modeling to identify hidden relationships between claimants. Real-time scoring during registration flags high-risk transactions for manual audit immediately.",
      industries: "Insurance · Banking · Healthcare · Regulated Enterprise"
    },
    {
      title: "Demand Forecasting & Inventory Optimization",
      description: "Balancing stock levels across global distribution networks using multi-variate time series.",
      crux: "Integration of external signals (weather, economic trends, events) with historical sales. Using Prophet and DeepAR, we reduce stock-outs by 15% and minimize excess inventory capital.",
      industries: "FMCG · Retail · Logistics · Supply Chain"
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
            Predictive Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Data Science
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Unlocking Value Through Advanced Modeling and Scientific Rigor.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              Transforming complex datasets into predictive clarity — from ML research to production AI
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
              Data Science is the bridge between raw information and strategic foresight. Techknomatic helps organizations move beyond descriptive reporting and into the era of predictive and prescriptive intelligence. We combine mathematical rigor with deep domain expertise to build models that solve real-world problems — whether it's predicting asset failure, detecting subtle patterns of fraud, or automating complex human-like visual inspection.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our approach is rooted in the "Scientific Method" applied to business. We don't just chase accuracy; we prioritize reliability, scalability, and interpretability. By industrializing Data Science through MLOps, we ensure that models built in the lab deliver consistent value in production environments, governed by enterprise-grade security and ethical AI frameworks.
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
              Data Science Capabilities
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
              The Stack
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl"
            >
              Cutting-edge libraries and frameworks used by world-class research organizations.
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
                <h4 className="text-2xl font-bold text-brand-950 dark:text-white mb-2">Modern Tooling</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Built on open ecosystems for maximum longevity.</p>
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
              Scientific Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              A rigorous 5-step delivery framework that takes you from hypothesis to production-grade AI.
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
              Why Techknomatic for Data Science
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Six differentiators that consistently set our scientific delivery apart.
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
