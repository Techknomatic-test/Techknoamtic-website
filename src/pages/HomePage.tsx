import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useInView,
  useMotionValue,
  useAnimationControls,
} from "motion/react";
import {
  BarChart as ReBarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  Cell,
} from "recharts";
import {
  BarChart3,
  Database,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
  LineChart,
  Target,
  LayoutDashboard,
  Layout,
  Search,
  FolderCheck,
  MessagesSquare,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  ChevronDown,
  Quote,
  Factory,
  ShoppingBag,
  Plane,
  Cpu,
  PhoneCall,
} from "lucide-react";
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Link, useLocation } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { contactFormLinkTo } from "../config/contactNavigation";
import {
  ACCELERATORS_SECTION_ID,
  shouldScrollToAccelerators,
} from "../config/homeNavigation";
import { scrollToElement } from "../utils/scrollToElement";

/** Public asset: public/Images/home/oil-gas-card.png (copy of Oil&gas1 (1).png) */
const OIL_GAS_CARD_IMG = `${import.meta.env.BASE_URL}Images/home/oil-gas-card.png`;

const HeroVisual = () => {
  const data = [
    { name: "A", v1: 400, v2: 240, v3: 700 },
    { name: "B", v1: 300, v2: 139, v3: 500 },
    { name: "C", v1: 200, v2: 980, v3: 800 },
    { name: "D", v1: 278, v2: 390, v3: 400 },
    { name: "E", v1: 189, v2: 480, v3: 900 },
    { name: "F", v1: 239, v2: 380, v3: 600 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-2/3 h-2/3 bg-accent/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -right-[5%] z-20 w-48 bg-white/80 dark:bg-brand-900/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-slate-400">
              Live Feedback
            </span>
          </div>
          <div className="text-xl font-black text-brand-950 dark:text-white">
            99.8%
          </div>
          <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full mt-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "99.8%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-accent"
            />
          </div>
        </motion.div>

        <div className="absolute inset-0 z-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-accent/10 rounded-full"
              style={{ width: `${(i + 1) * 15}%`, height: `${(i + 1) * 15}%` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#F17E21]" />
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-[85%] h-[70%] bg-white dark:bg-brand-900/90 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/50 dark:border-white/10 shadow-2xl flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400">
                  Insight Architecture
                </h4>
                <div className="text-lg font-bold text-brand-950 dark:text-white">
                  Global Flux
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 h-3 bg-accent rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={data}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <ReTooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-brand-950 text-white px-3 py-2 rounded-xl text-[10px] font-black tracking-widest shadow-2xl border border-white/10">
                          {payload[0].value} Units
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="v3" radius={[12, 12, 12, 12]} barSize={10}>
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index % 2 === 0 ? "#F17E21" : "rgba(241, 126, 33, 0.2)"
                      }
                    />
                  ))}
                </Bar>
                <Bar dataKey="v1" radius={[12, 12, 12, 12]} barSize={10}>
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-v2-${index}`}
                      fill={
                        index % 2 !== 0 ? "#F17E21" : "rgba(241, 126, 33, 0.1)"
                      }
                      opacity={0.5}
                    />
                  ))}
                </Bar>
              </ReBarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 flex items-center justify-between pt-8 border-t border-slate-100 dark:border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 border-2 border-white dark:border-brand-900 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?u=tech${i}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] font-black tracking-[0.2em] text-accent">
              Active Sync
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: (
        <>
          Turn Your Data Into <br className="hidden sm:block" />
          <span className="relative inline-block sm:mt-2 text-accent">
            A Competitive Edge
          </span>
        </>
      ),
      description: "Techknomatic is a specialist analytics and AI consultancy helping enterprises across India and the Middle East design, build, and scale their data advantage, from BI dashboards and data platforms to geospatial intelligence and enterprise AI.",
      ctaPrimary: "Explore Our Work",
      ctaSecondary: "Talk to an Expert"
    },
    {
      title: (
        <>
          Scale Your AI <br className="hidden sm:block" />
          <span className="relative inline-block sm:mt-2 text-accent">
            With Expert Precision
          </span>
        </>
      ),
      description: "From generative AI to custom machine learning models, we help you integrate agentic AI into your core operations, driving efficiency and innovation across your business vertical.",
      ctaPrimary: "View AI Solutions",
      ctaSecondary: "Consult our Team"
    },
    {
      title: (
        <>
          Master Your Operations <br className="hidden sm:block" />
          <span className="relative inline-block sm:mt-2 text-accent">
            With Real-Time Insights
          </span>
        </>
      ),
      description: "Our geospatial and refinery analytics platforms provide the sub-second visibility needed to optimize complex supply chains and industrial processes in today's global market.",
      ctaPrimary: "See Case Studies",
      ctaSecondary: "Request a Demo"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-[100px] pb-[40px] overflow-hidden px-6 bg-[#f0f9ff] dark:bg-brand-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-white to-sky-50/30 dark:from-sky-950/20 dark:via-brand-950 dark:to-brand-900/40" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-sky-400/20 dark:bg-accent/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-brand-950 dark:text-white"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[15px] text-slate-600 dark:text-slate-400 max-w-xl mb-14 leading-relaxed font-medium tracking-[0.2px]"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-5"
              >
                <a
                  href="#solutions"
                  className="px-8 py-3.5 bg-accent text-white text-[11px] font-black tracking-[0.2em] rounded-2xl shadow-2xl shadow-accent/20 hover:bg-accent/90 transition-all duration-300 flex items-center gap-3 active:scale-95"
                >
                  {slides[currentSlide].ctaPrimary}
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-white/70 dark:bg-white/10 backdrop-blur-md text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-[11px] font-black tracking-[0.2em] rounded-2xl hover:bg-white dark:hover:bg-white/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center gap-2 group active:scale-95"
                >
                  {slides[currentSlide].ctaSecondary}{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex gap-3 mt-16 lg:mt-24 justify-center lg:justify-start">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group relative h-1.5 transition-all duration-500"
              style={{ width: currentSlide === i ? "40px" : "12px" }}
            >
              <div 
                className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                  currentSlide === i ? "bg-accent" : "bg-slate-300 dark:bg-white/20 group-hover:bg-slate-400 dark:group-hover:bg-white/40"
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
        <span className="text-[9px] font-bold tracking-widest">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) =>
      setDisplayValue(Math.floor(latest)),
    );
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 11, suffix: "+", label: "Years of Solution Delivery" },
    { value: 25, suffix: "+", label: "Domains Served" },
    { value: 1000, suffix: "+", label: "Projects Completed" },
    { value: 20, suffix: "K+", label: "Dashboards Delivered" },
    { value: 500, suffix: "K+", label: "Consulting Hours" },
  ];

  return (
    <section className="py-[40px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-white dark:bg-brand-950 p-10 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-accent tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">
                <Counter value={stat.value} />
                <span className="text-[0.4em] font-medium ml-1 inline-block translate-y-[-0.2em]">
                  {stat.suffix}
                </span>
              </h3>
              <p className="text-[12px] font-black text-slate-400 dark:text-slate-500 tracking-[0.25em] leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  isHorizontal = false,
  delay = 0,
}: {
  service: any;
  isHorizontal?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12 }}
      className={`relative h-full min-h-[440px] rounded-[3rem] flex ${isHorizontal ? "flex-col md:flex-row" : "flex-col"} overflow-hidden border transition-all duration-700
        ${
          service.dark
            ? "bg-brand-950 text-white border-white/5 shadow-[0_40px_100px_-20px_rgba(2,6,23,0.5)]"
            : "bg-white dark:bg-white/5 text-brand-950 dark:text-white border-slate-100 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
        }
        hover:border-accent/30 group
      `}
    >
      {service.imageUrl ? (
        <div
          className={`relative ${isHorizontal ? "w-full md:w-1/2 h-[320px] md:h-full" : "w-full h-[280px]"} overflow-hidden`}
        >
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-8 left-8">
            <span
              className={`text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-full ${service.dark ? "bg-brand-950/80 text-white" : "bg-white/90 dark:bg-brand-950/80 text-brand-950 dark:text-white"} backdrop-blur-xl shadow-lg border ${service.dark ? "border-white/10" : "border-white dark:border-white/10"} transform group-hover:-translate-y-1 transition-transform duration-500`}
            >
              {service.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="p-10 flex justify-between items-start">
          <span
            className={`text-[10px] font-black tracking-[0.3em] ${service.dark ? "text-accent" : "text-slate-400 dark:text-slate-500"}`}
          >
            {service.category}
          </span>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${service.dark ? "bg-slate-700" : "bg-slate-200 dark:bg-white/10"}`}
              />
            ))}
          </div>
        </div>
      )}
      <div
        className={`p-6 md:p-8 ${service.imageUrl && !isHorizontal ? "pt-4" : "pt-6"} flex flex-col flex-1`}
      >
        <div className="flex-1">
          <h3 className="text-[22px] md:text-[28px] font-bold leading-tight mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p
            className={`text-[14px] font-medium leading-relaxed mb-6 ${service.dark ? "text-slate-400" : "text-slate-500/80 dark:text-slate-400"} ${isHorizontal ? "max-w-md" : ""}`}
          >
            {service.description}
          </p>
        </div>
        <div className="flex items-center gap-4 group/btn cursor-pointer mt-auto">
          <Link 
            to={service.href || "#"} 
            className="flex items-center gap-3 transition-all duration-500 text-accent group-hover/btn:translate-x-1"
          >
            <span className="text-[11px] font-black uppercase tracking-widest">
              {service.moreLabel}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      category: "Visualization",
      title: "Business Intelligence",
      description:
        "Turning data into decisions at speed and scale. Power BI, Tableau, Qlik, 500+ dashboards across industries.",
      moreLabel: "BI Services",
      icon: BarChart3,
      imageUrl: "Images/3d-graph-computer-illustration.jpg",
      dark: false,
      href: "/bi-services",
    },
    {
      category: "Infrastructure",
      title: "Data Engineering",
      description:
        "Cloud-native pipelines, modern data platforms, and real-time integration. Azure, Snowflake, Talend, Salesforce and beyond.",
      moreLabel: "Data Engineering",
      icon: Database,
      imageUrl:
        "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg",
      dark: false,
      href: "/data-engineering",
    },
    {
      category: "Innovation",
      title: "Geospatial Analytics",
      description:
        "ESRI Silver Partner. Location intelligence for insurance, energy, utilities, and field operations.",
      moreLabel: "Geospatial",
      icon: Globe,
      imageUrl: "Images/Geospatial Analytics.jpg",
      dark: false,
      href: "/geospatial-analytics",
    },
    {
      category: "Innovation",
      title: "Data & AI Services",
      description:
        "LLM-powered assistants, agentic workflows, document AI, and conversational BI, enterprise-grade and governed.",
      moreLabel: "Data & AI Services",
      icon: Sparkles,
      imageUrl: "Images/AI & GenAI.jpg",
      dark: false,
      href: "/ai-services",
    },
  ];

  return (
    <section className="py-[30px] bg-[#F8F9FA] dark:bg-brand-900 px-6 overflow-hidden transition-colors duration-500 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
          >
            End-to-End Analytics. <br />
            One Strategic Partner.
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={0.1 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const industries = [
    {
      category: "Insurance",
      title: "Insurance Analytics",
      description:
        "360° view across claims, policy performance, agents, and fraud trends. 22% reduction in claim turnaround on average.",
      moreLabel: "View Solution",
      imageUrl: "Images/12437.jpg",
      dark: false,
      href: "/insurance-analytics",
    },
     {
      category: "Oil & Gas",
      title: "Oil & Gas Analytics",
      description:
        "Refinery operations, asset performance, energy monitoring, and safety, SCADA-integrated. 18% downtime reduction.",
      moreLabel: "View Solution",
      imageUrl: OIL_GAS_CARD_IMG,
      dark: false,
      href: "/refinery-operations",
    },
     {
      category: "IT Operations",
      title: "ITSM Analytics",
      description:
        "Complete visibility into SLAs, assets, team performance, and vendor contracts. SLA compliance lifted from 68% to 91%.",
      moreLabel: "View Solution",
      imageUrl: "Images/home/33931.jpg",
      dark: false,
      href: "/itsm-analytics",
    },
    {
      category: "Manufacturing",
      title: "Manufacturing Analytics",
      description:
        "From plant floor to boardroom, OEE, production, quality, maintenance, and energy. 15% improvement in production efficiency.",
      moreLabel: "View Solution",
      imageUrl: "Images/2152005500.jpg",
      dark: false,
      href: "/manufacturing-analytics",
    },
   
   
  ];

  return (
    <section
      id="solutions"
      className="py-[30px] bg-[#F8F9FA] dark:bg-brand-900 px-6 overflow-hidden transition-colors duration-500 text-left"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight"
          >
            Built For Your Industry.
            <br />
            Not Just Your Technology Stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl leading-relaxed mt-6"
          >
            Pre-built, production-ready analytics accelerators across key
            industries, go live faster with fewer surprises.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((item, i) => (
            <ServiceCard key={i} service={item} delay={0.1 * (i + 1)} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-slate-50 dark:bg-white/5" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight max-w-xl leading-tight">
              Don't see your industry? <br />
              There's a good chance we've been there — just ask.
            </h3>
            <Link
              to={contactFormLinkTo}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 group whitespace-nowrap"
            >
              Talk to us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AcceleratorsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const accelerators = [
    {
      title: "DataPulse IQ, AI-Powered Data Reliability Platform",
      desc: "Monitors, validates, governs, and auto-remediates data issues across the enterprise stack, cuts data issue resolution time by 30–50%.",
      cta: "Explore DataPulse IQ",
      icon: ShieldCheck,
      href: "/dataguard",
    },
    {
      title: "CallOps AI, AI Voice Agents for Calling Operations",
      desc: "Human-like voice AI for automated inbound/outbound calls, integrates with your business logic for end-to-end call workflow automation.",
      cta: "Explore CallOps AI",
      icon: PhoneCall,
      href: "/callops-ai",
    },
    {
      title: "AssistIQ, AI Agents for Intelligent Self-Service",
      desc: "Photorealistic avatar + AI support agents for 24/7 query resolution, deflects L1 support load with conversational self-service.",
      cta: "Explore AssistIQ",
      icon: Sparkles,
      href: "/assist-iq",
    },
    {
      title: "CXO Nexus, Strategic Conversational AI",
      desc: "Conversational intelligence layer that bridges enterprise data and executive decisioning, natural-language access to KPIs and operational signals for leadership.",
      cta: "Explore CXO Nexus",
      icon: LayoutDashboard,
      href: "/cxo-nexus",
    },
  ];
  return (
    <section
      id={ACCELERATORS_SECTION_ID}
      ref={sectionRef}
      className="py-[40px] px-6 relative overflow-hidden bg-brand-950"
    >
      <div className="absolute inset-0 z-0 scale-110">
        <motion.div style={{ y }} className="w-full h-full">
          <img
            src="Images/slider.jpg"
            alt="Accelerators Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
              Go Faster With Our Accelerators.
            </h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
              Accelerators are a strong differentiator, own product thinking
              from a services company.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accelerators.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 rounded-[1.5rem] p-6 h-full flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <acc.icon className="w-32 h-32 text-brand-950 dark:text-white" />
              </div>
              <div className="relative z-10 flex-1">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mb-6 shadow-lg">
                  <acc.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
                  {acc.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed mb-6 flex-1">
                  {acc.desc}
                </p>
              </div>
              <Link
                to={acc.href}
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-accent hover:text-accent transition-colors group/btn"
              >
                {acc.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      headline: "Fast & Efficient",
      name: "Marcus Chen",
      role: "CTO",
      company: "Stratum Logistics",
      text: "Techknomatic didn't just build us a dashboard; they built us a decision architecture. Knew how to respect our several constraints and collaborate with all our departments.",
      image: "https://i.pravatar.cc/150?u=marcus",
      logo: "STRATUM",
    },
    {
      headline: "Wow effect",
      name: "Sarah Williams",
      role: "Head of Data",
      company: "Oasis Energy",
      text: "We had the chance to work with them four times on various projects. What we liked was their swiftness and the great quality of their design that will always get you that 'wow' effect.",
      image: "https://i.pravatar.cc/150?u=sarah",
      logo: "OASIS",
    },
    {
      headline: "Creative Solutions",
      name: "Arjun Mehta",
      role: "VP of Analytics",
      company: "Nexus Bank",
      text: "Creativity, Reactivity and always a very pleasant and attentive team. Enterprise-grade governance was delivered secure and scalable exactly as we wanted.",
      image: "https://i.pravatar.cc/150?u=arjun",
      logo: "NEXUS",
    },
    {
      headline: "Enterprise Grade",
      name: "Elena Rodriguez",
      role: "Director of IT",
      company: "Global Retail",
      text: "Their ability to translate complex business requirements into sleek, actionable visualizations is unparalleled. They are truly partners in our digital journey.",
      image: "https://i.pravatar.cc/150?u=elena",
      logo: "GLOBAL",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = isMobile ? testimonials.length : testimonials.length - 2;

  return (
    <section className="py-[40px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] text-accent bg-accent/10 rounded-full border border-accent/20"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-6"
            >
              Voices of Impact.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl"
            >
              We measure our success by the growth and clarity we bring to our
              partners across the globe.
            </motion.p>
        </div>

        <div className="relative">
          <motion.div
            animate={{
              x: isMobile
                ? `-${activeIndex * 100}%`
                : `-${activeIndex * 33.333}%`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            className="flex gap-6 w-full"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="w-full lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div className="h-full bg-white dark:bg-brand-950 p-10 md:p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/10 flex flex-col min-h-[520px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 text-left hover:border-accent/30 group relative">
                  <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Quote className="w-24 h-24 text-brand-950 dark:text-white rotate-180" />
                  </div>

                  <div className="mb-8">
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles
                          key={i}
                          className="w-3.5 h-3.5 fill-current"
                        />
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight leading-[1.25]">
                      "{t.headline}"
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-base font-medium leading-[1.8] mb-10 flex-1">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-5 mt-auto pt-8 border-t border-slate-50 dark:border-white/5">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-brand-900 border border-slate-200 dark:border-white/10 shrink-0 shadow-inner">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-950 dark:text-white tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 tracking-widest mt-1">
                        {t.role} •{" "}
                        <span className="text-accent">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              className="w-14 h-14 rounded-2xl bg-white dark:bg-brand-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-brand-950 dark:text-white hover:bg-accent hover:text-white hover:border-accent transition-all active:scale-95 shadow-xl shadow-black/5 disabled:opacity-30 disabled:cursor-not-allowed group"
              disabled={activeIndex === 0}
            >
              <ChevronRight className="w-6 h-6 rotate-180 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => Math.min(totalSlides, prev + 1))
              }
              className="w-14 h-14 rounded-2xl bg-white dark:bg-brand-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-brand-950 dark:text-white hover:bg-accent hover:text-white hover:border-accent transition-all active:scale-95 shadow-xl shadow-black/5 disabled:opacity-30 disabled:cursor-not-allowed group"
              disabled={activeIndex >= totalSlides}
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="w-48 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{
                width: `${((activeIndex + 1) / (totalSlides + 1)) * 100}%`,
              }}
              className="h-full bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const reasons = [
    {
      title: "Full-Stack, Single Team",
      description:
        "BI + Data Engineering + AI + Geospatial under one roof. No coordination overhead.",
    },
    {
      title: "India-Built, Global-Delivered",
      description:
        "Headquartered in Pune. Active across India, UAE, Oman, and Southeast Asia.",
    },
    {
      title: "Outcomes, Not Outputs",
      description:
        "We don't ship dashboards, we deliver decisions. Every engagement is tied to business impact.",
    },
    {
      title: "Enterprise-Grade by Default",
      description:
        "Governance, RLS, audit logging, and security built into every solution from day one.",
    },
  ];
  return (
    <section className="py-[30px] px-6 bg-[#F8F9FA] dark:bg-brand-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 leading-tight">
              Why Enterprises <br />
              Choose Techknomatic.
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">
              We complement your existing engineering teams with
              hyper-specialized expertise in data storytelling and decision
              architecture.
            </p>
          </motion.div>
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border-b border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 ${openIndex === i ? "pb-8" : "pb-0"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${openIndex === i ? "text-accent" : "text-brand-950 dark:text-slate-200 hover:text-accent dark:hover:text-white"}`}
                  >
                    <span className="text-sm font-mono mr-6 opacity-30">
                      0{i + 1}
                    </span>
                    {reason.title}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === i ? "bg-accent border-accent text-white rotate-180" : "bg-transparent border-slate-200 dark:border-white/10 text-slate-400 rotate-0"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-semibold leading-relaxed max-w-xl pl-12 border-l-2 border-accent/20">
                        {reason.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSlider = () => {
  const toLogoItems = (folder: string, files: string[]) =>
    files.map((file) => ({
      src: `Images/home/${folder}/${encodeURIComponent(file)}`,
      alt: file.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim(),
    }));

  const clientLogos = toLogoItems("Client_logo", [
    "ANI-20230801113821.jpg",
    "BDO_Unibank_(logo).svg.png",
    "DBS_Bank_Logo_(alternative).svg.png",
    "Honeywell_logo.svg.png",
    "HxCentral-Color-Web 1.png",
    "IGTlogo.png",
    "KIA_logo3.svg.png",
    "Logo_of_Everest_spices.png",
    "Lux-Cozi-Logo-Vector.svg-.png",
    "Novartis-Logo.svg.png",
    "Persistent_Systems_Logo.svg.png",
    "Tech_Mahindra_New_Logo.svg.png",
    "Teradata_Logo.png",
    "ZS_Associates 1.png",
    "keventers.png",
    "malpani-group-logo.jpg",
    "marketing-strategy-of-trent-trent-limited-logo-e1721457798938-85604e26b126834de5a36d237555f96c.png",
    "tvs-credit 1.png",
    "images (1).png",
    "images (2).png",
    "images.png",
    "logo.png",
  ]);

  const dubaiClientLogos = toLogoItems("Dubai_client_logo", [
    "Abu_Dhabi_National_Oil_Company-Logo.wine.png",
    "AldiWorldwideLogo.svg.png",
    "2738905a-ff6b-42ba-b952-1a42abdc5e01.png",
    "Damac_logo.svg.png",
    "department-of-municipalities-and-transport-logo-png_seeklogo-502976 1.png",
    "dubai-holding-logo-png_seeklogo-325964.png",
    "Emirates_Nuclear_Energy_Company_-_2024_logo.svg.png",
    "Federal-Tax-Authority-DUBAI-UAE-Logo-Vector.svg-1-1.png",
    "images 1.png",
    "images 2.png",
    "intertec-logo-300by300.png",
    "logo-1603690812.png",
    "mtn-logo-png_seeklogo-503277.png",
    "OQ_LOGO.svg.png",
    "roshn-logo.webp",
    "RTA_Dubai_logo.png",
    "Tahaluf_logo.svg.png",
  ]);
  const MarqueeRow = ({
    items,
    reverse = false,
  }: {
    items: { src: string; alt: string }[];
    reverse?: boolean;
  }) => {
    const controls = useAnimationControls();

    const runMarquee = () => {
      controls.start({
        x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: {
          duration: 80,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      });
    };

    useEffect(() => {
      runMarquee();
      return () => controls.stop();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reverse]);

    return (
      <div
        className="flex overflow-hidden"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => runMarquee()}
      >
        <motion.div
          animate={controls}
          className="flex gap-4 py-2 whitespace-nowrap will-change-transform"
        >
          {[...items, ...items, ...items, ...items, ...items, ...items].map(
            (logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="group/logo relative z-20 w-40 h-16 shrink-0 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center px-5 shadow-sm hover:border-accent/30 transition-colors cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[120px] w-auto object-contain opacity-100 transition-all duration-300 ease-out group-hover/logo:scale-105"
                />
              </div>
            ),
          )}
        </motion.div>
      </div>
    );
  };
  return (
    <section className="pt-[20px] pb-[10px] bg-white dark:bg-brand-950 transition-colors duration-500 overflow-hidden relative">
      {/* Modern fade effect for the marquee edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-brand-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-brand-950 to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-black tracking-[0.2em] text-accent bg-accent/5 rounded-full"
            >
              Global Reach
            </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white tracking-tight"
        >
          Trusted By Industry Leaders.
        </motion.h2>
      </div>
      <div className="space-y-4 relative">
        <MarqueeRow items={clientLogos} />
        <MarqueeRow items={dubaiClientLogos} reverse />
      </div>
    </section>
  );
};


const AcceleratorsScrollEffect = () => {
  const { state, search } = useLocation();

  useEffect(() => {
    if (!shouldScrollToAccelerators(state, search)) return;
    scrollToElement(ACCELERATORS_SECTION_ID);
  }, [state, search]);

  return null;
};

export const HomePage = () => {
  return (
    <>
      <AcceleratorsScrollEffect />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <SolutionsSection />
      <AcceleratorsSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ClientSlider />
      <PreFooterCTA />
    </>
  );
};
