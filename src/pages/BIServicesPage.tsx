import { motion } from 'motion/react';
import { 
  BarChart3, 
  Database, 
  LayoutDashboard,
  ShieldCheck,
  Users,
  Settings,
  Target,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  Globe,
  Layout,
  Layers,
  Search,
  Monitor
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

export const BIServicesPage = () => {
  const ourServices = [
    {
      title: "BI Roadmap & Architecture",
      description: "Ensuring secure, compliant, and trusted data environments through advanced access controls, audit trails, and scalable governance frameworks.",
      icon: Target
    },
    {
      title: "Data Engineering",
      description: "Architecting modern data ecosystems with seamless ingestion, transformation, and orchestration — ensuring data is accurate, accessible, and ready for scale.",
      icon: Database
    },
    {
      title: "Dashboard Design & Development",
      description: "Insight-driven dashboards crafted through Figma-led prototyping and delivered on Power BI, Tableau, Qlik, or custom tech stacks — built for clarity, usability, and business impact.",
      icon: LayoutDashboard
    },
    {
      title: "BI Governance & Security",
      description: "Row-level security, audit logging, and governance frameworks that enterprise security teams trust.",
      icon: ShieldCheck
    },
    {
      title: "Product Development & ERP Implementation",
      description: "White-labeled analytics portals embedded in your applications. Self-service BI for business users.",
      icon: Cpu
    },
    {
      title: "Support, Training & CoE Setup",
      description: "Ongoing support, user training, and BI Center of Excellence setup for sustained adoption.",
      icon: Users
    }
  ];

  const differentiators = [
    {
      title: "Design-Driven Development",
      description: "We design dashboards in Figma before building — ensuring stakeholder alignment before development starts.",
      icon: Layout
    },
    {
      title: "BI + Data Engineering End-to-End",
      description: "We own the entire pipeline — from source to insight. No handoffs, no gaps.",
      icon: Layers
    },
    {
      title: "Cross-Platform Expertise",
      description: "We own the entire pipeline — from source to insight. No handoffs, no gaps.",
      icon: Globe
    },
    {
      title: "Strong Governance",
      description: "Enterprise-grade security, RLS, and audit trails built into every dashboard.",
      icon: ShieldCheck
    },
    {
      title: "On-Prem & Cloud Experience",
      description: "Whether your data lives in Azure, on-prem SQL, or hybrid environments — we handle it.",
      icon: Database
    },
    {
      title: "500+ Dashboards Delivered",
      description: "Proven track record across industries — Insurance, Manufacturing, BFSI, Energy, and more.",
      icon: BarChart3
    }
  ];

  const tools = [
    {
      title: "Power BI",
      description: [
        "Power BI Service & Premium",
        "Microsoft Fabric",
        "Embedded Analytics",
        "Data Gateway",
        "Row-Level Security (RLS)"
      ],
      icon: Monitor
    },
    {
      title: "Tableau",
      description: [
        "Tableau Prep",
        "Tableau Server",
        "Tableau Cloud",
        "Tableau Embedded"
      ],
      icon: LayoutDashboard
    },
    {
      title: "Qlik",
      description: [
        "Qlik Sense",
        "Qlik AutoML",
        "Qlik Mashups",
        "Associative Engine"
      ],
      icon: Zap
    }
  ];

  const deliveryModels = [
    { title: "Onsite", description: "Embedded in your team", icon: Users },
    { title: "Offshore", description: "Dedicated team from India", icon: Globe },
    { title: "Hybrid", description: "Best of both worlds", icon: Layers },
    { title: "T&M", description: "Time & Materials", icon: Zap },
    { title: "Fixed Price", description: "Predictable budgets", icon: Target },
    { title: "Staff Augmentation", description: "Extend your team", icon: Users },
    { title: "Agile Sprints", description: "Rapid delivery", icon: Cpu },
    { title: "CoE as a Service", description: "Build and run your BI/Data CoE with our experts", icon: Settings }
  ];

  return (
    <div className="pt-[120px]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#f0f9ff] dark:bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full"
          >
            Business Intelligence Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-brand-950 dark:text-white mb-8 tracking-tight leading-[1.1]"
          >
            Our BI Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            Move beyond static reports. We build high-performance, secure, and design-led BI ecosystems that drive real business impact.
          </motion.p>
        </div>
      </section>

      {/* Our BI Services Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6">What Makes Us Different</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} variant="minimal" />
            ))}
          </div>
        </div>
      </section>

      {/* BI Tools We Master Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6">BI Tools We Master</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <Card key={i} {...tool} delay={i * 0.1} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Models Section */}
      <section className="py-24 px-6 bg-brand-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Delivery Models</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-accent/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <model.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{model.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to transform your data strategy?</h2>
          <p className="text-lg opacity-90 mb-12 font-medium">Let's build a secure, scalable, and insightful BI ecosystem for your enterprise.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3">
               Start a Conversation <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
