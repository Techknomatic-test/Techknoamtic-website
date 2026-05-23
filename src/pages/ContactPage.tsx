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
import { SectionIcon } from "../components/SectionIcon";

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
          className="z-10"
        >
          <SectionIcon icon={MessageSquare} size="xl" hover="none" />
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
    mobile: "",
    lookingFor: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-[110px] relative pb-0 overflow-hidden bg-white dark:bg-brand-950 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617] text-left">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={CONTACT_HERO_IMG}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-black/15 to-black/45"
            aria-hidden
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Contact Us
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Let's Turn Your Data Into Decisions That Drive Growth
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              Whether you're exploring analytics, dashboards, or enterprise BI
              transformation, our experts are ready to help you unlock real
              business impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Why Leading Teams Section */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <h2 className="section-heading mb-4">
              Why customer teams reach out to{" "}
              <span className="text-accent">Techknomatic</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
              From PoC to enterprise-scale deployments, we partner across the
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Solve complex reporting & dashboard challenges",
                icon: Activity,
              },
              {
                title: "Reduce decision-making time with real-time insights",
                icon: Zap,
              },
              {
                title: "Build scalable BI & analytics ecosystems",
                icon: Building2,
              },
              {
                title: "Improve business performance across functions",
                icon: Sparkles,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-brand-950 p-10 rounded-[2rem] flex flex-col text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 dark:border-white/5 h-full"
              >
                <SectionIcon icon={item.icon} size="xl" className="mb-8" hover="none" />
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
            <h2 className="section-heading mb-6">
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
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mobile: e.target.value }))
                  }
                  className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-brand-950 dark:text-white px-1">
                What are you looking for?
              </label>
              <input
                type="text"
                value={formData.lookingFor}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lookingFor: e.target.value }))
                }
                placeholder="e.g. Dashboarding, Data Engineering, AI & GenAI"
                className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
              />
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
                Submit{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. Presence / Locations Section */}
      <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
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
              <div className="mb-10 pt-4 text-left">
                <h2 className="section-heading mb-4">
                  Our Presence
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
                  Serving clients globally across India, Middle East, and APAC
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "India",
                    address: "3rd & 4th Floor, Signet Corner, Baner, Pune - 411045",
                    country: "IN",
                    flag: "🇮🇳"
                  },
                  {
                    title: "USA",
                    address: "2538 Raleigh Road,Hummelstown, PA 17036",
                    country: "US",
                    flag: "🇺🇸"
                  },
                  {
                    title: "Oman",
                    address: "Oasis Mall, Alkhuwair, Muscat, Sultanate of Oman",
                    country: "OM",
                    flag: "🇴🇲"
                  },
                  {
                    title: "Dubai",
                    address: "Office # E-84 AL Aber Real Estate Building 01, ABU Hail, Dubai P.O. Box: 85031",
                    country: "UAE",
                    flag: "U🇦🇪"
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
