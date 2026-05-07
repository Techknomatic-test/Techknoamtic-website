import { motion } from "motion/react";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Layout,
  Zap,
  Calendar,
  Heart,
  FileText,
  ShieldCheck,
  TrendingUp,
  Award,
  GraduationCap,
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

export const HRPortalPage = () => {
  const whatWeSolve = [
    {
      title: "Employee Self-Service",
      description:
        "Allow employees to manage their own profiles, leaves, and documents without HR intervention.",
      icon: Users,
    },
    {
      title: "Leave & Attendance",
      description:
        "Real-time tracking of time-off, shifts, and attendance with automated approval workflows.",
      icon: Calendar,
    },
    {
      title: "Performance Management",
      description:
        "Structured OKRs, 360-degree feedback, and continuous performance monitoring.",
      icon: TrendingUp,
    },
    {
      title: "Payroll Integration",
      description:
        "Seamless synchronization with payroll systems for accurate salary and benefit processing.",
      icon: Zap,
    },
    {
      title: "Compliance & Security",
      description:
        "Secure storage of employee data with role-based access control and audit logs.",
      icon: ShieldCheck,
    },
    {
      title: "Internal Communication",
      description:
        "Centralized hub for company announcements, policies, and employee engagement.",
      icon: FileText,
    },
  ];

  const modules = [
    {
      title: "Employee Directory",
      description: "Searchable database with org charts and skills",
    },
    {
      title: "Leave Dashboard",
      description: "Request tracking and balance visualization",
    },
    {
      title: "Learning Management",
      description: "Internal training courses and certification tracking",
    },
    {
      title: "Recognition Wall",
      description: "Peer-to-peer awards and company-wide praise",
    },
    {
      title: "Policy Repository",
      description: "Easy access to employee handbooks and documents",
    },
    {
      title: "Analytics Portal",
      description: "HR insights on turnover, diversity, and engagement",
    },
  ];

  const results = [
    { label: "Lower HR Admin Load", value: "40%" },
    { label: "Employee Engagement Lift", value: "30%" },
    { label: "FAster Onboarding", value: "50%" },
    { label: "Accuracy in Records", value: "99%" },
  ];

  const features = [
    "Mobile-friendly Responsive Design",
    "Single Sign-On (SSO) Integration",
    "Automated Email & Push Notifications",
    "Customizable Workflow Builder",
    "Document E-signature Support",
    "Multi-language & Multi-region Support",
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-10"
          >
            <Users className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Internal HR Portal Accelerator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-400 max-w-4xl font-medium leading-relaxed"
          >
            A unified, high-performance portal for employee self-service, leave
            management, and company culture.
          </motion.p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Core Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeSolve.map((item, i) => (
              <Card key={i} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-4">
              Portal Modules
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-3xl"
              >
                <div className="mb-4">
                  {i === 0 && <Users className="w-6 h-6 text-accent" />}
                  {i === 1 && <Calendar className="w-6 h-6 text-accent" />}
                  {i === 2 && <GraduationCap className="w-6 h-6 text-accent" />}
                  {i === 3 && <Award className="w-6 h-6 text-accent" />}
                  {i === 4 && <FileText className="w-6 h-6 text-accent" />}
                  {i === 5 && <TrendingUp className="w-6 h-6 text-accent" />}
                </div>
                <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Platform Features
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-brand-950 dark:text-white">
                Built for Scale
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-[14px] font-medium text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-[#F0F7FF] dark:bg-accent/5 rounded-[2.5rem] border border-accent/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-6">
                  Culture of Care
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed text-[15px]">
                  An HR portal isn't just a database — it's where your employees
                  interact with the company. We design for usability and warmth,
                  ensuring every touchpoint reinforces your employer brand.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Heart className="w-5 h-5 text-accent mr-2" />
                  <span className="text-accent font-bold text-[13px] uppercase tracking-wider">
                    Employee Centric Design
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
              Proven Engagement
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] shadow-sm text-center border border-slate-100 dark:border-white/5"
              >
                <div className="text-4xl md:text-6xl font-black text-accent mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight">
            Modernize Your Employee Experience
          </h2>
          <p className="text-xl opacity-90 mb-12 font-medium">
            Build a digital home for your team that actually works. Talk to our
            HR tech experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3 text-lg">
              Request a Portal Demo <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
