import { motion } from "motion/react";
import {
  Users,
  TrendingUp,
  Zap,
  Settings,
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Target,
  Brain,
  Globe,
  CheckCircle2,
  Mail,
  Search,
  MessageSquare,
  Terminal,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";

const CAREERS_BASE = "Images/Careers";

const careersImg = (...segments: string[]) =>
  `${import.meta.env.BASE_URL}${[...CAREERS_BASE.split("/"), ...segments]
    .map(encodeURIComponent)
    .join("/")}`;

const CAREERS_HERO = careersImg("herobanner.jpg");
const GROWTH_PATH = "Choose Your Growth Path";
const GROWTH_FRESHERS_IMG = careersImg(GROWTH_PATH, "Freshers.jpg");
const GROWTH_MID_LEVEL_IMG = careersImg(GROWTH_PATH, "Mid-Level.jpg");
const GROWTH_EXPERIENCED_IMG = careersImg(GROWTH_PATH, "Experienced.jpg");

const JobCard = ({ id, title, exp, location, skills, description }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03)] hover:border-accent/30 transition-all group flex flex-col h-full text-left"
  >
    <div className="flex justify-between items-start mb-8">
      <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.2em]">
        {exp} Exp
      </div>
      <div className="text-slate-300 dark:text-white/10">
        <Briefcase className="w-6 h-6" />
      </div>
    </div>

    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
      {title}
    </h3>

    <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
      <MapPin className="w-4 h-4" />
      <span className="font-medium">{location}</span>
    </div>

    <p className="text-slate-500 dark:text-slate-400 text-base mb-8 leading-relaxed flex-1">
      {description}
    </p>

    <div className="space-y-6 pt-6 border-t border-slate-50 dark:border-white/5">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-lg text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/job-description/${id}`}
        className="w-full py-4 bg-brand-950 dark:bg-accent text-white rounded-xl font-black tracking-widest uppercase text-[11px] hover:bg-accent transition-all flex items-center justify-center gap-2"
      >
        Apply Now <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const WhyTechkoCard = ({ title, desc, delay, image }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white dark:bg-brand-900 overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all text-left flex flex-col group"
  >
    <div className="relative h-48 w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mt-auto">
        {desc}
      </p>
    </div>
  </motion.div>
);

export const CareersPage = () => {
  const hiringSteps = [
    {
      title: "Application Review",
      desc: "Our talent team reviews your profile for alignment with our mission.",
      icon: Search,
    },
    {
      title: "Initial Discussion",
      desc: "A brief conversation to understand your goals and career trajectory.",
      icon: MessageSquare,
    },
    {
      title: "Technical / Case Round",
      desc: "Showcase your problem-solving abilities and domain expertise.",
      icon: Terminal,
    },
    {
      title: "Final Fitment Discussion",
      desc: "Meet the leadership team to discuss values and long-term vision.",
      icon: Users,
    },
    {
      title: "Offer",
      desc: "Welcome to the team where your exponential growth begins.",
      icon: Heart,
    },
  ];

  const jobs = [
    {
      id: "bi-consultant",
      title: "Power BI Developer(Sr.)",
      exp: "4-6 yr",
      location: "Pune",
      skills: ["Oracle", "Power BI", "SQL"],
      description:
        "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    },
    {
      id: "bi-consultant",
      title: "Power BI Developer(Sr.)",
      exp: "3-4 yr",
      location: "Bangalore",
      skills: ["Oracle", "Power BI", "SQL"],
      description:
        "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    },
    {
      id: "bi-consultant",
      title: "Power BI Developer (H&G)",
      exp: "2-3 yr",
      location: "Pune",
      skills: ["Oracle", "Power BI", "SQL"],
      description:
        "Lead and drive the development in BI domain using Power BI eco-system with deep technical and BI ecosystem knowledge.",
    },
    {
      id: "data-engineer-bi",
      title: "Data Engineer / BI Specialist",
      exp: "4-6 yr",
      location: "Pune",
      skills: ["Alteryx", "Denodo", "Tableau", "Teradata", "SQL"],
      description:
        "Design and develop scalable ETL workflows, data virtualization solutions, and interactive BI dashboards using Alteryx, Denodo, Tableau, and Teradata to support enterprise-scale analytics and business decision-making.",
    },

    {
      id: "azure-data-engineer",
      title: "Azure Data Engineer (ADF)",
      exp: "3+ yr",
      location: "Pune",
      skills: ["Azure Data Factory", "SQL", "Azure Data Lake", "ETL/ELT", "ADF Pipelines"],
      description:
        "Design and implement scalable ETL/ELT pipelines using Azure Data Factory, SQL, and Azure data services to enable reliable data integration, transformation, and enterprise-scale analytics solutions.",
    },

    {
      id: "data-engineer-pyspark",
      title: "Data Engineer (Python & PySpark)",
      exp: "3+ yr",
      location: "Pune",
      skills: ["Python", "PySpark", "SQL", "Spark", "ETL/ELT"],
      description:
        "Design and develop scalable data pipelines using Python, PySpark, and SQL while contributing to data architecture, distributed processing, and enterprise-scale data platform optimization.",
    },

    {
      id: "qlik-sense-developer",
      title: "Qlik Sense Developer",
      exp: "3-4 yr",
      location: "Pune",
      skills: ["Qlik Sense", "QlikScript", "SQL", "ETL", "Data Modeling"],
      description:
        "Design and develop interactive Qlik Sense dashboards, data models, and ETL solutions to deliver scalable business intelligence and data visualization solutions for enterprise analytics.",
    },
  ];

  return (
    <div className="pt-[110px] pb-0 overflow-hidden bg-white dark:bg-brand-950 transition-colors duration-500">
      {/* 1. Hero Section - Styled as per Reference Attachment */}
      <section className="relative flex min-h-[min(50vh,480px)] flex-col items-center justify-center pt-12 pb-12 md:pt-14 md:pb-14 overflow-hidden px-6 bg-[#050a14] dark:bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src={CAREERS_HERO}
            alt="Careers at Techknomatic"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050a14]/90 via-[#050a14]/55 to-[#050a14]/25"
            aria-hidden
          />
          {/* Enhanced Data Particle Background Effect */}
          <div
            className="absolute inset-0 z-[2] opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #f17e21 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glowing waves/orbs for depth */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 z-[2] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[160px] translate-x-1/4 -translate-y-1/4 pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 z-[2] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] -translate-x-1/4 translate-y-1/4 pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20"
            >
              Careers @ Techknomatic
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-12 text-white"
            >
              Build a Career Where <br />
              <span className="text-accent">Data Drives</span> Real-World <br />
              Impact.
            </motion.h1>

            <div className="space-y-8 mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl leading-relaxed"
              >
                At Techknomatic, you won't just build dashboards, you'll solve
                real business problems for enterprises across industries.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-400 font-medium max-w-3xl leading-relaxed"
              >
                Work on cutting-edge analytics, collaborate with sharp minds,
                and grow into a consultant who creates measurable impact.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#roles">
                <button className="px-10 py-5 bg-accent text-white font-black tracking-widest rounded-2xl hover:bg-accent/90 transition-all flex items-center gap-3 uppercase text-[12px] shadow-2xl shadow-accent/20 active:scale-95 group">
                  Explore Open Roles
                </button>
              </a>
              <Link to="/contact">
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 uppercase text-[12px] active:scale-95 group">
                  Apply Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Techknomatic */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10 text-left">
            <h2 className="text-4xl md:text-[56px] font-bold text-brand-950 dark:text-white tracking-tight leading-tight mb-6">
              Why High-Performers <br />
              <span>Choose Techknomatic</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Most companies talk about culture, we focus on your career
              acceleration and consulting depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhyTechkoCard
              title="Real Consulting Exposure"
              desc="Work directly with business stakeholders, driving strategy rather than just backend execution."
              delay={0.1}
              image={careersImg(
                "Choose Techknomatic",
                "Real Consulting Exposure.jpg",
              )}
            />
            <WhyTechkoCard
              title="Fast Career Growth"
              desc="Accelerated learning paths across BI, Data Engineering & AI foundations for rapid progression."
              delay={0.2}
              image={careersImg(
                "Choose Techknomatic",
                "Fast Career Growth.jpg",
              )}
            />
            <WhyTechkoCard
              title="Global Client Exposure"
              desc="Deliver high-impact projects across India, Middle East, USA, and other global markets."
              delay={0.3}
              image={careersImg(
                "Choose Techknomatic",
                "Global Client Exposure.jpg",
              )}
            />
            <WhyTechkoCard
              title="Ownership from Day One"
              desc="Solve real business problems with full accountability, not just closing development tickets."
              delay={0.4}
              image={careersImg(
                "Choose Techknomatic",
                "Ownership from Day One.jpg",
              )}
            />
            <WhyTechkoCard
              title="Skill Compounding"
              desc="Learn the intersection of technical tools, business context, and visual storytelling."
              delay={0.5}
              image={careersImg(
                "Choose Techknomatic",
                "Skill Compounding.jpg",
              )}
            />
            <WhyTechkoCard
              title="Elite Peer Group"
              desc="Collaborate with some of the sharpest minds in the data and analytics ecosystem."
              delay={0.6}
              image={careersImg(
                "Choose Techknomatic",
                "Elite Peer Group.jpg",
              )}
            />
          </div>
        </div>
      </section>

      {/* 3. Work Culture & How We Work */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-8">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Problem Solvers",
                desc: "We value problem solvers over task executors.",
                icon: Zap,
              },
              {
                title: "Ownership",
                desc: "We prefer ownership over supervision.",
                icon: Target,
              },
              {
                title: "Curiosity",
                desc: "We encourage questions, not blind execution.",
                icon: Brain,
              },
              {
                title: "Business Impact",
                desc: "We focus on business impact, not just dashboards.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-brand-900 rounded-[2.5rem] p-10 flex flex-col items-start border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-full border border-accent/20 bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-950 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Career Tracks */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-20">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6">
              Choose Your <span className="text-accent">Growth Path</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              We donâ€™t just hire roles, we build careers with structured
              progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Freshers (0-2 Years)",
                roles: ["BI Developer", "Data Analyst", "Dashboard Engineer"],
                image: GROWTH_FRESHERS_IMG,
              },
              {
                level: "Mid-Level (2-5 Years)",
                roles: ["Senior Analyst", "BI Consultant", "Data Engineer"],
                image: GROWTH_MID_LEVEL_IMG,
              },
              {
                level: "Experienced (5+ Years)",
                roles: [
                  "Analytics Lead",
                  "Solution Architect",
                  "Consulting Manager",
                ],
                image: GROWTH_EXPERIENCED_IMG,
              },
            ].map((track, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-brand-950 rounded-[2.5rem] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-white/5 text-left overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent z-10 mixture-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    loading="lazy"
                    src={track.image}
                    alt={track.level}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-10 flex-1 flex flex-col">
                  <h4 className="text-xl font-black text-brand-950 dark:text-white mb-8 pb-6 border-b border-slate-50 dark:border-white/5">
                    {track.level}
                  </h4>
                  <div className="space-y-4 mt-auto">
                    {track.roles.map((role, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. L&D Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-brand-900 border-y border-slate-100 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-8">
              We Invest in <br />
              <span className="text-accent">Your Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Structured Learning",
                desc: "Defined paths in BI, Engineering & AI.",
                image: careersImg("Your Growth", "Structured Learning.jpg"),
              },
              {
                title: "Hands-on Mastery",
                desc: "Project exposure from Day 1.",
                image: careersImg("Your Growth", "Hands-on Mastery.jpg"),
              },
              {
                title: "Mentorship",
                desc: "Learn from senior consultants.",
                image: careersImg("Your Growth", "Mentorship.jpg"),
              },
              {
                title: "Certification",
                desc: "Full support & learning reimbursements.",
                image: careersImg("Your Growth", "Certification.jpg"),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-brand-950 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-40 w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col items-start flex-1">
                  <h4 className="text-lg font-bold text-brand-950 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life at Techknomatic */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight">
                Life at <span className="text-accent">Techknomatic</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Offsites",
                icon: Globe,
                desc: "Team outings & celebrations.",
              },
              {
                title: "Flexibility",
                icon: Clock,
                desc: "Performance-driven culture.",
              },
              {
                title: "Flat Structure",
                icon: Users,
                desc: "Non-hierarchical environment.",
              },
              {
                title: "Challenges",
                icon: Brain,
                desc: "Work that excites you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-brand-900 rounded-[2.5rem] p-10 flex flex-col items-start border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full border border-accent/20 bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-950 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Open Roles Section */}
      <section
        id="roles"
        className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white mb-6 tracking-tight">
              Current <span className="text-accent">Opportunities</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Join a mission that matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {jobs.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-brand-950 p-12 md:p-20 rounded-[3.5rem] text-center border-2 border-dashed border-slate-200 dark:border-white/10">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-8">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight">
              Great Talent Doesn't Wait.
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">
              If you believe you can create impact at Techknomatic, send your
              profile directly to our talent team.
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-white dark:bg-brand-900 shadow-xl border border-slate-100 dark:border-white/5 rounded-2xl">
              <span className="text-brand-950 dark:text-white font-bold text-sm">
                careers@techknomatic.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Hiring Process */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-50 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Simple, transparent, and fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {hiringSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col h-full">
                <div className="bg-slate-50 dark:bg-brand-900 border border-slate-100 dark:border-white/5 p-8 rounded-[2rem] flex flex-col h-full hover:shadow-xl transition-shadow relative z-10">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-brand-950 dark:text-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < 4 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-8 h-8 bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/5 rounded-full items-center justify-center z-20 text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
