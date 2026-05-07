import { motion } from "motion/react";
import {
  Layout,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Clock,
  Users,
  ShieldAlert,
  BarChart,
  FileText,
  Mail,
  Bell,
  Monitor,
} from "lucide-react";

const Card = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string | string[];
  icon: any;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  );
};

export const ITSMPlugAndPlayPage = () => {
  const whatYouGet = [
    {
      title: "20+ Pre-Built Dashboards",
      description:
        "Incident management, SLA tracking, change & service requests, asset CMDB, team productivity, and vendor performance.",
      icon: Layout,
    },
    {
      title: "Supported Platforms",
      description:
        "ServiceNow, ManageEngine, Freshservice, BMC Remedy, Jira Service Management.",
      icon: Database,
    },
    {
      title: "Power BI Output",
      description:
        "Reports ready to publish to your Power BI Service with seamless integration.",
      icon: BarChart,
    },
    {
      title: "Role-Based Views",
      description:
        "CIO executive summary, IT Manager operational view, L1/L2 team performance.",
      icon: Users,
    },
    {
      title: "Automated Reports",
      description:
        "Scheduled weekly/daily report delivery to stakeholders via email.",
      icon: Mail,
    },
    {
      title: "SLA Breach Alerts",
      description:
        "Email/Teams notifications for at-risk tickets before SLA breach occurs.",
      icon: Bell,
    },
  ];

  const comparisons = [
    {
      label: "3-6 Months",
      desc: "Traditional ITSM analytics project timeline",
      value: "Standard Approach",
    },
    {
      label: "1-2 Weeks",
      desc: "With ITSM Plug & Play Accelerator",
      value: "Techknomatic Speed",
      highlighted: true,
    },
    {
      label: "0",
      desc: "Custom development needed for standard KPIs",
      value: "Effort Saved",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connector Setup",
      description:
        "We configure the data connection to your ITSM tool via API or direct database.",
    },
    {
      step: "2",
      title: "Data Validation",
      description:
        "We verify data mapping, completeness, and logic alignment with your ITSM.",
    },
    {
      step: "3",
      title: "Dashboard Deployment",
      description: "Pre-built reports published to your Power BI environment.",
    },
    {
      step: "4",
      title: "Handover & Training",
      description: "2-hour walkthrough session for your team.",
    },
    {
      step: "5",
      title: "Customization (Optional)",
      description:
        "Optional sprint for org-specific KPIs or visual enhancements.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
            <div className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[11px] font-black uppercase tracking-widest">
              Go Live in 2 Weeks
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            ITSM Plug & Play
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-200 max-w-4xl font-medium leading-relaxed mb-12"
          >
            Go Live in Days, Not Months — 20+ Pre-Built ITSM Dashboards Ready to
            Deploy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] max-w-3xl backdrop-blur-sm"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Techknomatic's ITSM Plug & Play is a pre-configured analytics
              accelerator that delivers instant visibility into your IT
              operations — right out of the box. Built on top of our proven ITSM
              analytics framework, this accelerator connects to your ITSM
              platform, loads pre-built dashboards, and gives your team
              actionable insights within days of deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              What You Get — Day One
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Plug & Play Section */}
      <section className="py-32 px-6 bg-[#F8F9FA] dark:bg-brand-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Why Plug & Play?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-12 rounded-[3rem] text-center border transition-all duration-500 ${
                  item.highlighted
                    ? "bg-accent text-white border-accent shadow-2xl scale-105 z-10"
                    : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/10"
                }`}
              >
                <div
                  className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${item.highlighted ? "text-white" : "text-accent"}`}
                >
                  {item.label}
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${item.highlighted ? "text-white" : "text-brand-950 dark:text-white"}`}
                >
                  {item.value}
                </h3>
                <p
                  className={`text-sm font-medium ${item.highlighted ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-500 dark:text-slate-400 font-medium">
            All dashboards are customizable post-deployment — so you start fast
            and evolve iteratively.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="space-y-4">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-8 bg-[#F8F9FA] dark:bg-white/5 rounded-[2rem] border border-slate-100 dark:border-white/10 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white font-black text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold mb-8 tracking-tight">
            Ready to Go Live in Days?
          </h2>
          <p className="text-xl opacity-90 mb-12 font-medium">
            Request a free demo to see ITSM Plug & Play in action with your ITSM
            data.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 text-lg">
              Request a Free Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3 text-lg">
              Download Datasheet <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
