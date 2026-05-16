import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
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

export const HRPortalPage = () => {
    const caps = [
    {
      title: "Employee Self-Service",
      description: "Allow employees to manage their own profiles, leaves, and documents without HR intervention.",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&w=800"
    },
    {
      title: "Leave & Attendance",
      description: "Real-time tracking of time-off, shifts, and attendance with automated approval workflows.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800"
    },
    {
      title: "Performance Management",
      description: "Structured OKRs, 360-degree feedback, and continuous performance monitoring for growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    },
    {
      title: "Payroll Integration",
      description: "Seamless synchronization with payroll systems for accurate salary and benefit processing.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800"
    },
    {
      title: "Compliance & Security",
      description: "Secure storage of employee data with role-based access control and detailed audit logs.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
    },
    {
      title: "Internal Communication",
      description: "Centralized hub for company announcements, policies, and meaningful employee engagement.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800"
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
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            HR Portal Accelerator
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Building a high-performance home for your most valuable asset: People.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              A unified, high-performance portal for employee self-service, leave management, and company culture engineered for enterprise scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              The digital employee experience is no longer optional. Fragmented systems for leave, payroll, and benefits lead to frustration and decreased productivity. Techknomatic's HR Portal Accelerator bridges these silos into a single, intuitive interface that puts the employee at the center, reducing administrative overhead for HR teams.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Our accelerator is more than a database; it is a cultural hub. We focus on 'Culture of Care' by designing for warmth and usability, ensuring that every touchpoint—from onboarding to performance reviews—reinforces your employer brand. Secure, mobile-friendly, and ready for global deployment, we turn HR operations into a competitive advantage.
            </motion.p>
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
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              PORTAL CAPABILITIES
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Core Solutions
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
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
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight"
            >
              Proven Impact
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-white/5 p-10 rounded-[2.5rem] shadow-sm text-center border border-slate-100 dark:border-white/5"
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

      {/* Engagement Models Section */}
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
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
              A structured implementation path for your internal HR ecosystem.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[
              { step: "01", title: "Audit", description: "Auditing existing HR data silos and user friction points." },
              { step: "02", title: "UI/UX Design", description: "Mapping employee personas to specific portal journeys." },
              { step: "03", title: "Integration", description: "Wiring the portal to payroll, ERP, and SSO systems." },
              { step: "04", title: "Pilot", description: "Launching with a core group for feedback and hardening." },
              { step: "05", title: "Go-Live", description: "Full organization rollout with change management support." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed italic px-2 border-l-2 border-accent/20">
                  {step.description}
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
