import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
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
  Monitor,
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

export const BIServicesPage = () => {
    const caps = [
    {
      title: "BI Roadmap & Architecture",
      description: "Ensuring secure, compliant, and trusted data environments through advanced access controls, audit trails, and scalable governance frameworks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    },
    {
      title: "Data Engineering",
      description: "Architecting modern data ecosystems with seamless ingestion, transformation, and orchestration — ensuring data is accurate, accessible, and ready for scale.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&w=800"
    },
    {
      title: "Dashboard Design & Development",
      description: "Insight-driven dashboards crafted through Figma-led prototyping and delivered on Power BI, Tableau, Qlik, or custom tech stacks.",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&w=800"
    },
    {
      title: "BI Governance & Security",
      description: "Row-level security, audit logging, and governance frameworks that enterprise security teams trust.",
      image: "https://images.unsplash.com/photo-1454165833762-b104c18c942e?auto=format&fit=crop&w=800"
    },
    {
      title: "Market Insight Portals",
      description: "White-labeled analytics portals embedded in your applications. Self-service BI for business users and stakeholders.",
      image: "https://images.unsplash.com/photo-1543286386-2e6713cf67ad?auto=format&fit=crop&w=800"
    },
    {
      title: "Support, Training & CoE Setup",
      description: "Ongoing support, user training, and BI Center of Excellence setup for sustained adoption and data literacy.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
    },
  ];

  const differentiators = [
    {
      title: "Design-Driven Development",
      description:
        "We design dashboards in Figma before building — ensuring stakeholder alignment before development starts.",
      icon: Layout,
    },
    {
      title: "BI + Data Engineering End-to-End",
      description:
        "We own the entire pipeline — from source to insight. No handoffs, no gaps.",
      icon: Layers,
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "We own the entire pipeline — from source to insight. No handoffs, no gaps.",
      icon: Globe,
    },
    {
      title: "Strong Governance",
      description:
        "Enterprise-grade security, RLS, and audit trails built into every dashboard.",
      icon: ShieldCheck,
    },
    {
      title: "On-Prem & Cloud Experience",
      description:
        "Whether your data lives in Azure, on-prem SQL, or hybrid environments — we handle it.",
      icon: Database,
    },
    {
      title: "500+ Dashboards Delivered",
      description:
        "Proven track record across industries — Insurance, Manufacturing, BFSI, Energy, and more.",
      icon: BarChart3,
    },
  ];

  const tools = [
    {
      title: "Power BI",
      description: [
        "Power BI Service & Premium",
        "Microsoft Fabric",
        "Embedded Analytics",
        "Data Gateway",
        "Row-Level Security (RLS)",
      ],
      icon: Monitor,
    },
    {
      title: "Tableau",
      description: [
        "Tableau Prep",
        "Tableau Server",
        "Tableau Cloud",
        "Tableau Embedded",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "Qlik",
      description: [
        "Qlik Sense",
        "Qlik AutoML",
        "Qlik Mashups",
        "Associative Engine",
      ],
      icon: Zap,
    },
  ];

  const deliveryModels = [
    { title: "Onsite", description: "Embedded in your team", icon: Users },
    {
      title: "Offshore",
      description: "Dedicated team from India",
      icon: Globe,
    },
    { title: "Hybrid", description: "Best of both worlds", icon: Layers },
    { title: "T&M", description: "Time & Materials", icon: Zap },
    { title: "Fixed Price", description: "Predictable budgets", icon: Target },
    {
      title: "Staff Augmentation",
      description: "Extend your team",
      icon: Users,
    },
    { title: "Agile Sprints", description: "Rapid delivery", icon: Cpu },
    {
      title: "CoE as a Service",
      description: "Build and run your BI/Data CoE with our experts",
      icon: Settings,
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
            Insights Reimagined
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.1]"
          >
            Business Analytics
          </motion.h1>
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-6 tracking-tight"
            >
              Move beyond static reports. Build high-performance ecosystems.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              We build high-performance, secure, and design-led BI ecosystems that drive real business impact.
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
              In a world flooded with data, the challenge isn't collection — it's clarity. Techknomatic helps organizations transform raw metrics into strategic assets. Our BI services combine beautiful, user-centric design with robust engineering to ensure your data isn't just seen, but understood and acted upon.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              We don't just build dashboards; we build decision frameworks. From corporate strategy to department-level KPIs, we ensure a "single source of truth" across your enterprise, powered by the industry's leading tools like Power BI, Tableau, and Qlik.
            </motion.p>
          </div>
        </div>
      </section>

      {/* BI Services Section */}
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
              Business Intelligence Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-[120px] px-6 bg-slate-100 dark:bg-brand-900/50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              What Makes Us Different
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Six differentiators that consistently set our BI delivery apart.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => (
              <DifferentiatorCard key={idx} title={diff.title} description={diff.description} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* BI Tools We Master Section */}
      <section className="py-[120px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4"
            >
              BI Tools We Master
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              A platform-agnostic approach using the best tools for your analytics needs.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-brand-900 shadow-xl flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10 group-hover:rotate-12 transition-transform">
                  <tool.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 group-hover:text-accent transition-colors">
                  {tool.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.description.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white dark:bg-white/10 border border-slate-100 dark:border-white/20 rounded-full text-[12px] font-bold text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
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
              Delivery Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-medium max-w-2xl"
            >
              Multiple engagement models tailored to your organizational structure and project requirements.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {deliveryModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <model.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed italic px-2 border-l-2 border-accent/20">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
