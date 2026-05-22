import { motion } from "motion/react";
import {
  Sparkles,
  ShieldCheck,
  Layout,
  Database,
  Truck,
  Target,
} from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";

const CUSTOMER_STORIES_BASE = "Images/customerstories";

const customerStoriesImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...CUSTOMER_STORIES_BASE.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;

const CUSTOMER_STORIES_HERO = customerStoriesImg("herobanner (1).jpg");

const stories = [
  {
    title: "Insurance Analytics Transformation – Oman",
    description:
      "A leading insurance provider transformed fragmented reporting into a centralized analytics ecosystem with executive dashboards, claims insights, branch performance monitoring, and policy analytics — enabling faster decision-making and improved operational visibility.",
    icon: ShieldCheck,
    tag: "Insurance",
  },
  {
    title: "Smart ITSM Command Center – Middle East",
    description:
      "Implemented an intelligent ITSM analytics platform with SLA monitoring, ticket trend analysis, escalation tracking, and command center dashboards that significantly improved service visibility and operational efficiency.",
    icon: Layout,
    tag: "ITSM",
  },
  {
    title: "Enterprise Data Warehouse Modernization – UAE warehouse",
    description:
      "Designed and implemented a scalable cloud-ready data warehouse integrating multiple ERP and business systems, enabling unified reporting, faster analytics, and improved data governance across department.",
    icon: Database,
    tag: "Data Platform",
  },
  {
    title: "Logistics & Freight Intelligence Platform – GCC",
    description:
      "Developed a freight analytics and pricing intelligence solution that provided real-time shipment visibility, pricing optimization, route performance analysis, and operational dashboards for leadership team.",
    icon: Truck,
    tag: "Logistics",
  },
  {
    title: "Manufacturing Performance Analytics – India",
    description:
      "Built a real-time production and operational analytics platform integrating plant data, quality systems, and ERP data to improve production monitoring, operational efficiency, and executive reporting.",
    icon: Target,
    tag: "Manufacturing",
  },
];

export const CustomerStoriesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-950 pt-[115px]">
      {/* Hero Section with Integrated Banner Background directly under header */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={CUSTOMER_STORIES_HERO}
            alt="Success Stories Banner"
            className="absolute inset-0 h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-brand-950/75"
            aria-hidden
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-accent bg-accent/10 rounded-full border border-accent/20 uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3" />
            Global Success Stories
          </motion.div>

          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 tracking-tight leading-[1.1] text-left"
            >
              Customer Success <span className="text-accent">Stories</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Stories Grid - 3x3 as requested (for large screens) */}
      <section className="py-[100px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col bg-white dark:bg-brand-900 rounded-[2.5rem] border border-slate-100 dark:border-white/10 overflow-hidden shadow-xl shadow-slate-100/80 dark:shadow-brand-950/20 hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-brand-950/40 hover:border-accent/30 transition-all duration-500"
              >
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <SectionIcon icon={story.icon} size="md" hover="none" />
                    <span className="px-3 py-1 bg-slate-50 dark:bg-brand-950/50 rounded-full text-[9px] font-black tracking-widest text-brand-950 dark:text-white uppercase border border-slate-100 dark:border-white/10">
                      {story.tag}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-950 dark:text-white leading-[1.3] tracking-tight group-hover:text-accent transition-colors duration-300">
                      {story.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-[1.7] flex-1">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Section */}
      <PreFooterCTA />
    </div>
  );
};
