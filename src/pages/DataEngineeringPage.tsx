import { motion } from 'motion/react';
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
  Link,
  CheckCircle2,
  Brain,
  MessageSquare
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

export const DataEngineeringPage = () => {
  const ourServices = [
    {
      title: "ETL/ELT Pipelines & Automation",
      description: "Talend, Azure Data Factory, Databricks, SSIS, Python — built for reliability and scale.",
      icon: Database
    },
    {
      title: "Cloud Platform Setup",
      description: "Azure Synapse, Snowflake, BigQuery, Redshift — modern data platforms that scale.",
      icon: Cloud
    },
    {
      title: "Salesforce Cloud Integration",
      description: "Seamless data integration with Salesforce for unified enterprise view.",
      icon: Server
    },
    {
      title: "Metadata & MDM",
      description: "Master data management and metadata governance for trusted data assets.",
      icon: ShieldCheck
    },
    {
      title: "Real-Time & IoT Engineering",
      description: "Kafka, Event Hubs, and Spark Streaming for real-time data processing.",
      icon: Zap
    },
    {
      title: "Data Quality & Governance",
      description: "Automated data quality checks, cleansing, and governance frameworks.",
      icon: CheckCircle2
    }
  ];

  const whyTechknomaticDE = [
    {
      title: "End-to-end ownership",
      description: "Source → Pipeline → Platform → BI/AI"
    },
    {
      title: "100+ production-grade lines",
      description: "Pipelines delivered successfully"
    },
    {
      title: "Deep ecosystem expertise",
      description: "Salesforce, SAP, Oracle, IoT, and legacy systems"
    },
    {
      title: "Global Sector Exposure",
      description: "Experience across BFSI, Manufacturing, Pharma, and Energy"
    },
    {
      title: "Certified Delivery Teams",
      description: "Strong Talend, Azure, and Snowflake implementation teams"
    },
    {
      title: "SLA Guaranteed Results",
      description: "Governed and monitored pipelines with SLA guarantees"
    },
    {
      title: "Accelerated Frameworks",
      description: "Pre-built connectors and reusable frameworks for faster delivery"
    },
    {
      title: "Total Flow Visibility",
      description: "No black-box solutions — full transparency on data flows"
    }
  ];

  const engagementModels = [
    {
      title: "Project-Based",
      description: "Fixed scope, timeline, and deliverables for specific outcomes.",
      icon: Target
    },
    {
      title: "Staff Augmentation",
      description: "Extend your team with dedicated data engineers.",
      icon: Users
    },
    {
      title: "Managed Services",
      description: "Ongoing support, monitoring, and optimization of your data platform.",
      icon: Settings
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
            Modern Data Engineering
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Engineering Trusted Data
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            Your analysis is only as good as your data. We build the pipelines and platforms that deliver accurate, clean, and fast data to your enterprise.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Our DE Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic for DE Section */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight mb-6">Why Techknomatic for Data Engineering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTechknomaticDE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-start"
              >
                <div className="shrink-0 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Engagement Models</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 text-center flex flex-col items-center"
              >
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Need a data architecture refresh?</h2>
          <p className="text-lg opacity-90 mb-12 font-medium">Let's build a modern, high-performance data pipeline for your organization.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3">
               Connect with our Data Architects <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
