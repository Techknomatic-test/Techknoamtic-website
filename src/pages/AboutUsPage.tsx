import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Lightbulb,
  MousePointer2,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
  Brain,
  Database,
  BarChart3,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const AccordionItem = ({
  id,
  title,
  description,
  isOpen,
  onClick,
  index,
}: any) => {
  return (
    <div className="border-b border-slate-200 dark:border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={() => onClick(id)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-slate-300 dark:text-slate-700 font-bold text-sm tracking-tighter w-6">
            0{index + 1}
          </span>
          <h3
            className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? "text-accent" : "text-brand-950 dark:text-white"}`}
          >
            {title}
          </h3>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-accent text-white rotate-180" : "bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:bg-accent group-hover:text-white"}`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pl-12 pb-8 flex gap-6">
              <div className="w-1 bg-accent/20 rounded-full h-auto" />
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DifferentSection = () => {
  const items = [
    {
      id: 1,
      title: "Experienced Team",
      description:
        "We have experienced professionals with hands-on experience in delivering end-to-end data solutions. We can leverage BI tools to help clients convert their data into insights within less time.",
      imageUrl: "Images/HeroSection.jpg",
    },
    {
      id: 2,
      title: "Proven Methodology",
      description:
        "By following a systematic approach, we construct BI solutions with well-defined processes that make it easy for you to manage all of the dashboards and changes.",
      imageUrl: "Images/Makes Us Different/Proven Methodology.jpg",
    },
    {
      id: 3,
      title: "Less Turnaround Time",
      description:
        "In this dynamically changing analytics world, we give a minimum turnaround time for all our BI deliverables so you can make informed decisions anytime, anywhere.",
      imageUrl: "Images/Makes Us Different/Less Turnaround Time.jpg",
    },
  ];

  return (
    <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight"
          >
            What Makes Us Different.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/0 transition-colors duration-500" />
              </div>
              <div className="p-10 flex flex-col flex-1 text-left">
                <h3 className="text-2xl font-bold mb-4 text-brand-950 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutUsPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const lifeImages = [
    "images/LifeatTKS/DSC_0016.JPG",
    "images/LifeatTKS/DSC_0056.JPG",
    "images/LifeatTKS/DSC_0069.JPG",
    "images/LifeatTKS/DSC_0100.JPG",
    "images/LifeatTKS/DSC_0110.JPG",
    "images/LifeatTKS/DSC_0234.JPG",
    "images/LifeatTKS/DSC_0256.JPG",
    "images/LifeatTKS/DSC_0294.JPG",
  ];

  return (
    <div className="pb-0 overflow-hidden bg-white dark:bg-brand-950">
      {/* 1. Hero Section - Styled as per Airline Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
        <div className="absolute inset-0 z-0">
          <img
            src="Images/airline.jpg"
            alt="About Us Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
            >
              Knowledge & Experience
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-white"
            >
              We are a team with <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">
                knowledge and experience.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed mb-12"
            >
              We are a trusted BI technology and implementation partner for data
              analytics and visualization requirements, helping leaders turn
              complexity into clarity.
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent text-white rounded-2xl font-black tracking-[0.1em] uppercase text-[12px] shadow-2xl flex items-center gap-3 active:scale-95 transition-all"
                >
                  🚀 Case Studies <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Different Section (Accordion Redesign) */}
      <DifferentSection />

      {/* 3. Culture and Values (Updated Layout) */}
      <section className="py-[120px] bg-white dark:bg-brand-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-8">
              Our Culture and Values.
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-4xl">
              At Techknomatic, we strive to create a culture that empowers a
              self-driven, creative, and independent workforce. We focus on
              building a diverse and equitable organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                label: "Integrity",
                icon: ShieldCheck,
                img: "Images/Our Culture/Integrity.jpg",
              },
              { label: "Ethics", icon: Heart, img: "Images/Our Culture/Accountability.jpg" },
              { label: "Inclusion", icon: Users, img: "Images/Our Culture/Knowledge Sharing.jpg" },
              { label: "Innovation", icon: Zap, img: "Images/Our Culture/Responsibility.jpg" },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] border border-slate-100 dark:border-white/5"
              >
                <img
                  src={v.img}
                  alt={v.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                      <v.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-widest">
                      {v.label}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Life at Techknomatic (Auto-Slider + Team Gallery) */}
      <section className="py-[100px] bg-slate-50 dark:bg-brand-900 border-y border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight">
            Life at <span className="text-accent">Techknomatic.</span>
          </h2>
        </div>

        <div className="relative mb-24">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-10"
          >
            {[...lifeImages, ...lifeImages].map((img, i) => (
              <div
                key={i}
                className="inline-block shrink-0 w-[300px] md:w-[400px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white dark:border-white/10"
              >
                <img
                  src={img}
                  alt="Life at Techknomatic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-950 dark:text-white tracking-tight">
              Our <span className="text-accent">Leadership & Team.</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100 dark:border-white/5">
            {[
              {
                name: "Sandeep R.",
                role: "Founder & CEO",
                img: "Images/2151680571.jpg",
              },
              {
                name: "Priya S.",
                role: "Head of Data Science",
                img: "Images/2152005500.jpg",
              },
              {
                name: "Rahul M.",
                role: "Lead BI Consultant",
                img: "Images/12437.jpg",
              },
              {
                name: "Ananya K.",
                role: "Project Director",
                img: "Images/2988.jpg",
              },
              {
                name: "Vikram A.",
                role: "Technical Lead",
                img: "Images/23498.jpg",
              },
              {
                name: "Sarah J.",
                role: "Sr. Architect",
                img: "Images/291956.jpg",
              },
              {
                name: "Amit K.",
                role: "Analytics Lead",
                img: "Images/33931.jpg",
              },
              { name: "Elena R.", role: "Consultant", img: "Images/55251.jpg" },
              {
                name: "Chris W.",
                role: "Researcher",
                img: "Images/2151680571.jpg",
              },
              {
                name: "Maya L.",
                role: "Developer",
                img: "Images/2152005500.jpg",
              },
              { name: "David O.", role: "Specialist", img: "Images/12437.jpg" },
              { name: "Sophie T.", role: "Advisor", img: "Images/2988.jpg" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="group border-r border-b border-slate-100 dark:border-white/5 bg-white dark:bg-brand-950 p-8"
              >
                <div className="aspect-square overflow-hidden mb-8 border border-slate-100 dark:border-white/10 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-brand-950 dark:text-white tracking-tight mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer / CTA - Styled as per Airline CTA */}
      <section className="py-[120px] bg-accent px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
          >
            Let's Build Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-brand-950 tracking-tight leading-[1.1] mb-12"
          >
            Tell us about your challenge. <br />
            We'll tell you exactly how we'd approach it.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-start gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-accent font-medium rounded-2xl hover:bg-white/90 transition-all shadow-2xl flex items-center gap-3 group active:scale-95"
            >
              Contact Us{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-medium rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 group active:scale-95"
            >
              Our Solutions{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
