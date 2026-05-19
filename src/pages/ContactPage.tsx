/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Globe,
  Zap,
  Clock,
  LayoutDashboard,
  Building2,
  ArrowRight,
  FolderCheck,
  Activity,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";

const CONTACT_HERO_IMG = `${import.meta.env.BASE_URL}Images/contactusHero.jpg`;

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current)
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest),
        );
    });
  }, [springValue]);

  return (
    <span className="tabular-nums">
      <span ref={ref} />
      {suffix && (
        <span className="text-[0.4em] font-medium ml-1 inline-block translate-y-[-0.2em]">
          {suffix}
        </span>
      )}
    </span>
  );
};

const ContactVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-2/3 h-2/3 bg-accent/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="z-10 bg-white dark:bg-brand-900 w-32 h-32 rounded-[3.5rem] shadow-2xl flex items-center justify-center border border-slate-100 dark:border-white/10"
        >
          <MessageSquare className="w-12 h-12 text-accent" />
        </motion.div>

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              duration: i === 0 ? 15 : i === 1 ? 25 : 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-slate-100 dark:border-white/5 rounded-full"
            style={{ width: `${(i + 1) * 30}%`, height: `${(i + 1) * 30}%` }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent/20 dark:bg-accent/40 rounded-full blur-[2px]"
            />
          </motion.div>
        ))}

        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 bg-white dark:bg-brand-900 px-6 py-3 rounded-2xl shadow-xl border border-slate-50 dark:border-white/10 text-[10px] font-black tracking-widest text-accent uppercase backdrop-blur-xl"
        >
          Outcome Driven
        </motion.div>
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-0 bg-white dark:bg-brand-900 px-6 py-3 rounded-2xl shadow-xl border border-slate-50 dark:border-white/10 text-[10px] font-black tracking-widest text-slate-400 uppercase backdrop-blur-xl"
        >
          Partner Focused
        </motion.div>
      </div>
    </div>
  );
};

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "Dashboarding",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-[110px] relative pb-0 overflow-hidden bg-white dark:bg-brand-950 transition-colors duration-500">
      {/* 1. Hero Section - Styled as per Reference Attachment */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-[60px] pb-[60px] overflow-hidden px-6 bg-[#050a14] dark:bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src={CONTACT_HERO_IMG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#050a14]/95 via-[#050a14]/80 to-[#050a14]/50"
            aria-hidden
          />
          {/* Enhanced Data Particle Background Effect */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #f17e21 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #1e293b 0%, transparent 70%)",
            }}
          />
          {/* Floating glowing orbs for depth */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px]"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl drop-shadow-md">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-10 text-white"
            >
              Let’s Turn Your Data Into <br />
              <span className="text-accent">Decisions</span> That Drive Growth.
            </motion.h1>

            <div className="mb-14">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl leading-relaxed"
              >
                Whether you're exploring analytics, dashboards, or enterprise BI
                transformation, our experts are ready to help you unlock real
                business impact.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-10 py-5 bg-accent text-white font-black tracking-widest rounded-2xl hover:bg-accent/90 transition-all flex items-center gap-3 uppercase text-[12px] shadow-2xl shadow-accent/20 active:scale-95 group">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />{" "}
                Explore Solutions
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 uppercase text-[12px] active:scale-95 group">
                <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />{" "}
                Talk to an Expert
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Leading Teams Section */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight mb-6">
              Why leading teams reach out to{" "}
              <span className="text-accent">Techknomatic</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              From PoC to enterprise-scale deployments, we partner across the
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Solve complex reporting & dashboard challenges",
                icon: Activity,
                color: "bg-[#fff6ef] text-[#f17e21]",
              },
              {
                title: "Reduce decision-making time with real-time insights",
                icon: Zap,
                color: "bg-[#fff6ef] text-[#f17e21]",
              },
              {
                title: "Build scalable BI & analytics ecosystems",
                icon: Building2,
                color: "bg-[#fff6ef] text-[#f17e21]",
              },
              {
                title: "Improve business performance across functions",
                icon: Sparkles,
                color: "bg-[#fff6ef] text-[#f17e21]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-brand-950 p-10 rounded-[2rem] flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 dark:border-white/5 h-full"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8`}
                >
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-brand-950 dark:text-white leading-snug tracking-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Requirement Form Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-6">
              Tell Us About Your Requirement
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Share a few details and our team will get back within 24 hours
              with a tailored approach.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                  Role / Designation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Data Engineer, CTO"
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                What are you looking for?
              </label>
              <select className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none cursor-pointer">
                <option>Dashboarding</option>
                <option>Data Engineering</option>
                <option>AI & GenAI</option>
                <option>Geospatial Analytics</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                Brief Requirement
              </label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button className="px-12 py-5 bg-accent text-white font-bold rounded-2xl hover:bg-accent/90 transition-all flex items-center gap-3 shadow-2xl shadow-accent/20 active:scale-95 group">
                Get My Custom Solution Plan{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Trusted Statistics (Dark Section) */}
      <section className="py-[60px] bg-[#050a14] dark:bg-brand-950 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#f17e21 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Trusted by Data-Driven Teams Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <FolderCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">
                <Counter value={200} suffix="+" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Projects Delivered
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <LayoutDashboard className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">
                <Counter value={5000} suffix="+" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Dashboards Built
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <Globe className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">
                <Counter value={15} suffix="+" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Industries Served
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <Clock className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3">
                <Counter value={100000} suffix="+" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Consulting Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Presence / Locations Section */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Contact Box */}
            <div className="lg:w-[35%]">
              <div className="bg-white dark:bg-brand-950 p-[3rem] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
                <div className="mb-12">
                  <h3 className="text-[28px] font-bold text-brand-950 dark:text-white leading-tight">
                    Prefer a direct
                  </h3>
                  <h3 className="text-[28px] font-bold text-brand-950 dark:text-white leading-tight">
                    conversation?
                  </h3>
                  <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium text-[15px] leading-relaxed">
                    Speak directly with our consulting team to discuss your use
                    case.
                  </p>
                </div>

                <div className="space-y-10 mt-auto">
                  <a
                    href="tel:+919822683356"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#f17e21] group-hover:bg-[#fff6ef] group-hover:border-[#fff6ef] transition-all shrink-0">
                      <Phone className="w-[22px] h-[22px]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                        Call Us
                      </p>
                      <p className="text-[19px] font-bold text-brand-950 dark:text-white tracking-tight">
                        +91 98226 83356
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@techknomatic.com"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#f17e21] group-hover:bg-[#fff6ef] group-hover:border-[#fff6ef] transition-all shrink-0">
                      <Mail className="w-[22px] h-[22px]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                        Email Us
                      </p>
                      <p className="text-[19px] font-bold text-brand-950 dark:text-white tracking-tight">
                        info@techknomatic.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Offices List */}
            <div className="lg:w-[65%]">
              <div className="mb-14 pt-4">
                <h2 className="text-[56px] font-medium text-brand-950 dark:text-white tracking-tight mb-4 leading-none">
                  Our Presence.
                </h2>
                <p className="text-[20px] text-slate-500 dark:text-slate-400 font-medium">
                  Serving clients globally across India, Middle East, and APAC
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "India",
                    address: "3rd Floor, Signet Corner, Baner, Pune - 411045",
                    country: "IN",
                    flag: "🇮🇳"
                  },
                  {
                    title: "US (US)",
                    address: "US",
                    country: "US",
                    flag: "🇺🇸"
                  },
                  {
                    title: "Oman",
                    address: "Alkhuwair, Muscat, Muscat, Sultanate of Oman",
                    country: "OM",
                    flag: "🇴🇲"
                  },
                  {
                    title: "Dubai",
                    address: "Office # E-84 AL Aber Real Estate Building 01, ABU Hail, Dubai P.O. Box: 85031",
                    country: "AE",
                    flag: "🇦🇪"
                  },
                ].map((office, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-brand-950 px-[32px] pt-[32px] pb-[32px] rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] group hover:border-[#f17e21]/40 transition-all flex flex-col h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-[14px] bg-[#fff6ef] dark:bg-[#f17e21]/10 flex items-center justify-center text-[#f17e21] shrink-0 text-xl">
                        {office.flag}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-[20px] font-bold text-brand-950 dark:text-white tracking-tight">
                          {office.title}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-[15px] mt-2 leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
     
    </div>
  );
};
