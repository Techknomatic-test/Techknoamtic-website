import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
﻿import { motion } from "motion/react";
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
import { SectionIcon } from "../components/SectionIcon";
import { CAREER_JOBS } from "../data/careersJobs";

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

  return (
    <PageShell className="pb-0 overflow-hidden bg-white dark:bg-brand-950 transition-colors duration-500">
            <PageHero
        title="Careers"
        tagline="Build a Career Where Data Drives Real-World Impact"
        description="At Techknomatic, you won't just build dashboards—you'll solve real business problems for enterprises across industries. Work on cutting-edge analytics, collaborate with sharp minds, and grow into a consultant who creates measurable impact."
        descriptionClassName="mb-8"
        imageSrc={CAREERS_HERO}
      />

      {/* 2. Work Culture & How We Work */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="section-heading mb-8">
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
                <SectionIcon icon={item.icon} size="md" className="mb-6" hover="none" />
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
      <section className="py-[40px] bg-slate-50 dark:bg-brand-900 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-20">
            <h2 className="section-heading mb-6">
              Choose Your Growth Path
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
              We don't just hire roles, we build careers with structured
              progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Freshers (0-2 Years)",
                roles: ["BI Developer", "Data Analyst", "Data Engineer"],
                image: GROWTH_FRESHERS_IMG,
              },
              {
                level: "Mid-Level (2-5 Years)",
                roles: ["Python + PySpark Developer", "Azure Data Engineer", "Alteryx Developer "],
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
                  <h4 className="text-xl font-bold text-brand-950 dark:text-white pb-6 border-b border-slate-50 dark:border-white/5">
                    {track.level}
                  </h4>
                  <div className="space-y-2 mt-auto">
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

      {/* 7. Open Roles Section */}
      <section
        id="roles"
        className="py-[10px] bg-slate-50 dark:bg-brand-900 px-6 text-left"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="section-heading mb-6">
              Current Opportunities
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
              Join a mission that matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {CAREER_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Hiring Process */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-50 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="section-heading mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
              Simple, transparent, and fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {hiringSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col h-full">
                <div className="bg-slate-50 dark:bg-brand-900 border border-slate-100 dark:border-white/5 p-8 rounded-[2rem] flex flex-col h-full hover:shadow-xl transition-shadow relative z-10">
                  <div className="mb-6">
                    <SectionIcon icon={step.icon} size="lg" hover="none" />
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
    </PageShell>
  );
};
