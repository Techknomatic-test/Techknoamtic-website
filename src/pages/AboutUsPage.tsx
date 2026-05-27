import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion, AnimatePresence } from "motion/react";
import {
  Lightbulb,
  MousePointer2,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
  Brain,
  Database,
  BarChart3,
  Globe,
  BookOpen,
  UserCheck,
  Target,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import { useState, useEffect, useRef } from "react";

const ABOUTUS_BASE = "Images/Aboutus";

const aboutusImg = (...segments: string[]) =>
  `${import.meta.env.BASE_URL}${[...ABOUTUS_BASE.split("/"), ...segments]
    .map(encodeURIComponent)
    .join("/")}`;

const LIFE_AT_IMAGES = [
  "life-at-1.jpg",
  "life-at-2.jpg",
  "life-at-3.jpg",
  "life-at-4.jpg",
  "life-at-5.jpg",
  "life-at-6.jpg",
  "life-at-7.jpg",
  "life-at-8.jpg",
  "life-at-9.jpeg",
  "life-at-10.jpg",
  "life-at-11.jpg",
  "life-at-12.jpg",
  "life-at-13.jpg",
  "life-at-14.jpg",
  "life-at-15.jpg",
  "life-at-16.jpg",
  "life-at-17.jpg",
  "life-at-18.jpg",
  "life-at-19.jpg",
  "life-at-20.jpg",
].map((file) => aboutusImg("Life at Techknomatic", file));

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
        "We have experienced professionals with hands-on experience in delivering end-to-end data solutions. We can leverage Technology tools to help clients convert their data into insights within less time.",
      imageUrl: aboutusImg(
        "What Makes Us Different",
        "Experienced Team.jpg",
      ),
    },
    {
      id: 2,
      title: "Proven Methodology",
      description:
        "By following a systematic approach, we construct Technology solutions with well-defined processes that make it easy for you to manage all of the dashboards and changes.",
      imageUrl: aboutusImg(
        "What Makes Us Different",
        "Proven Methodology.jpg",
      ),
    },
    {
      id: 3,
      title: "Less Turnaround Time",
      description:
        "In this dynamically changing analytics world, we give a minimum turnaround time for all our Analytics deliverables so you can make informed decisions anytime, anywhere.",
      imageUrl: aboutusImg(
        "What Makes Us Different",
        "Less Turnaround Time.jpg",
      ),
    },
  ];

  return (
    <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 overflow-hidden text-left">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            What Makes Us Different
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
                  loading="lazy"
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
    const speed = 3;

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

  const lifeImages = LIFE_AT_IMAGES;

  return (
    <PageShell className="pb-0 overflow-hidden bg-white dark:bg-brand-950">
            <PageHero
        title={<>We are a team with <br />
            knowledge and experience</>}
        description="We are a trusted BI technology and implementation partner for data analytics and visualization requirements, helping leaders turn complexity into clarity"
        descriptionClassName="mb-8"
        imageSrc={aboutusImg("Herobanner.jpg")}
        overlay="about"
        imageClassName="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center scale-105"
      />

      {/* 2. Different Section (Accordion Redesign) */}
      <DifferentSection />

      {/* 3. Culture and Values (Updated Layout) */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="section-heading mb-8">
              Our Culture and Values
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl text-left">
              At Techknomatic, we strive to create a culture that empowers a
              self-driven, creative, and independent workforce. We focus on
              building a diverse and equitable organization
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {[
              { label: "Knowledge Sharing", icon: BookOpen },
              { label: "Accountability", icon: UserCheck },
              { label: "Responsibility", icon: Target },
              { label: "Integrity", icon: ShieldCheck },
              { label: "Ethics", icon: Scale },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-white/5 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 flex flex-col items-start text-left group hover:bg-accent transition-all duration-500"
              >
                <SectionIcon icon={v.icon} size="lg" className="mb-6" hover="none" />
                <h4 className="text-lg font-bold text-brand-950 dark:text-white tracking-tight group-hover:text-white transition-colors">
                  {v.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Life at Techknomatic (Auto-Slider + Team Gallery) */}
      <section className="py-[40px] bg-slate-50 dark:bg-brand-900 border-y border-slate-100 dark:border-white/5 overflow-hidden text-left px-6">
        <div className="max-w-6xl mx-auto mb-5 text-left">
          <h2 className="section-heading">
            Life at Techknomatic
          </h2>
        </div>

        <div className="relative mb-20">
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
                  loading="lazy"
                  src={img}
                  alt="Life at Techknomatic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-left">
            <h2 className="section-heading">
              Our Leadership & Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100 dark:border-white/5">
            {[
              {
                name: "Rahul Madke",
                role: "Founder & CEO",
                img: "Images/Leadership/people/Rahul_madake.jpeg",
                objectPosition: "center 28%",
              },
              {
                name: "Prakash Pawar",
                role: "Co-Founder & COO",
                img: "Images/Leadership/people/prakash_pawar.jpeg",
                objectPosition: "center 25%",
              },
              {
                name: "Sunny Tatiya",
                role: "Strategic Consultant",
                img: "Images/Leadership/people/Sunny%20Tatia.jpeg",
                objectPosition: "center 30%",
              },
              {
                name: "Gopinath Sambandam",
                role: "Service Delivery Head (Global)",
                img: "Images/Leadership/people/gopi_s.jpeg",
                objectPosition: "center 30%",
              },
              {
                name: "Pranita Singh",
                role: "AVP - HR (India)",
                img: "Images/Leadership/people/pranita_singh.jpeg",
                objectPosition: "center 28%",
              },
              {
                name: "Vasundhara Gaekwad",
                role: "Marketing & Growth",
                img: "Images/Leadership/people/vasundhra_m.jpeg",
                objectPosition: "center 28%",
              },
              {
                name: "Hemant Jadhav",
                role: "AVP - Sales (India)",
                img: "Images/Leadership/people/hemant_.jpeg",
                objectPosition: "center 32%",
              },
              {
                name: "Uthaiah Ganpathi",
                role: "Growth Consultant",
                img: "Images/Leadership/people/Uthaiah_Ganpathi.jpeg",
                objectPosition: "center 30%",
              },
              {
                spacer: true,
              },
              {
                name: "Mohammed Nizar Said Al Shanfari",
                role: "Business Partner (Oman)",
                img: "Images/Leadership/people/mohamad.jpeg",
                objectPosition: "center 30%",
              },
              {
                name: "Anup Sangli",
                role: "Strategic Consultant (UAE)",
                img: "Images/Leadership/people/anup_sangli.jpeg",
                objectPosition: "center 30%",
              },
              {
                name: "Apoorva Gowda",
                role: "Sales Manager (UAE)",
                img: "Images/Leadership/people/Apoorva.jpeg",
                objectPosition: "center 30%",
              },
            ].map((member, i) => (
              member.spacer ? (
                <div
                  key={`spacer-${i}`}
                  className="hidden lg:block border-r border-b border-slate-100 dark:border-white/5 bg-white dark:bg-brand-950"
                  aria-hidden
                />
              ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group border-r border-b border-slate-100 dark:border-white/5 bg-white dark:bg-brand-950 p-8"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 border border-slate-100 dark:border-white/10 relative bg-slate-50 dark:bg-brand-900 rounded-none">
                  <img
                    loading="lazy"
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-none scale-105 group-hover:scale-110 transition-transform duration-700 origin-center"
                    style={{
                      objectPosition: member.objectPosition ?? "center 30%",
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-brand-950 dark:text-white tracking-tight mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-black uppercase tracking-[0.1em] text-accent">
                    {member.role}
                  </p>
                </div>
              </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </PageShell>
  );
};
