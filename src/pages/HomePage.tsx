import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView, useMotionValue } from 'motion/react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip as ReTooltip, 
  Cell 
} from 'recharts';
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
} from 'lucide-react';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const HeroVisual = () => {
  const data = [
    { name: 'A', v1: 400, v2: 240, v3: 700 },
    { name: 'B', v1: 300, v2: 139, v3: 500 },
    { name: 'C', v1: 200, v2: 980, v3: 800 },
    { name: 'D', v1: 278, v2: 390, v3: 400 },
    { name: 'E', v1: 189, v2: 480, v3: 900 },
    { name: 'F', v1: 239, v2: 380, v3: 600 },
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
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Feedback</span>
          </div>
          <div className="text-xl font-black text-brand-950 dark:text-white">99.8%</div>
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
                ease: "linear"
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
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Insight Architecture</h4>
                <div className="text-lg font-bold text-brand-950 dark:text-white">Global Flux</div>
              </div>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>
          
          <div className="flex-1 min-h-[200px]">
             <ResponsiveContainer width="100%" height="100%">
               <ReBarChart data={data}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <ReTooltip 
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-brand-950 text-white px-3 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-2xl border border-white/10">
                            {payload[0].value} UNITS
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
              <Bar dataKey="v3" radius={[12, 12, 12, 12]} barSize={10}>
                    {data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#F17E21' : 'rgba(241, 126, 33, 0.2)'} />
                    ))}
                  </Bar>
                  <Bar dataKey="v1" radius={[12, 12, 12, 12]} barSize={10}>
                    {data.map((_, index) => (
                      <Cell key={`cell-v2-${index}`} fill={index % 2 !== 0 ? '#F17E21' : 'rgba(241, 126, 33, 0.1)'} opacity={0.5} />
                    ))}
                  </Bar>
               </ReBarChart>
             </ResponsiveContainer>
          </div>

          <div className="mt-8 flex items-center justify-between pt-8 border-t border-slate-100 dark:border-white/10">
             <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 border-2 border-white dark:border-brand-900 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=tech${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Active Sync</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[65px] overflow-hidden px-6 bg-[#f0f9ff] dark:bg-brand-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-white to-sky-50/30 dark:from-sky-950/20 dark:via-brand-950 dark:to-brand-900/40" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] hidden dark:block" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-sky-400/20 dark:bg-accent/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[11px] font-medium tracking-[0.2em] text-accent uppercase bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-accent/10 rounded-full shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Analytics & AI Architecture
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-display font-bold leading-[1.1] tracking-tight mb-8 text-brand-950 dark:text-white"
            >
              Turn Your Data Into <br className="hidden sm:block" /> 
              <span className="relative inline-block sm:mt-2 text-accent">
                a Competitive Edge
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] text-slate-600 dark:text-slate-400 max-w-xl mb-14 font-sans leading-relaxed font-medium tracking-[0.2px]"
            >
              Techknomatic is a specialist analytics and AI consultancy helping enterprises across India and the Middle East design, build, and scale their data advantage — from BI dashboards and data platforms to geospatial intelligence and enterprise AI.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <button className="px-8 py-3.5 bg-accent text-white font-medium rounded-2xl shadow-2xl shadow-accent/20 hover:bg-accent/90 transition-all duration-300 flex items-center gap-3 active:scale-95">
                Explore Our Work
              </button>
              <button className="px-8 py-3.5 bg-white/70 dark:bg-white/10 backdrop-blur-md text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-medium rounded-2xl hover:bg-white dark:hover:bg-white/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center gap-2 group active:scale-95">
                Talk to an Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 2 }}
           className="mt-24 pt-8 border-t border-slate-200/50 dark:border-white/10 flex flex-wrap gap-12 items-center"
        >
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Trusted Global Partners</span>
          <div className="flex gap-10 opacity-30 grayscale contrast-125 dark:invert">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-400 rounded-sm" />
                <div className="h-3 w-16 bg-slate-400 rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => setDisplayValue(Math.floor(latest)));
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Dashboards Delivered" },
    { value: 100, suffix: "+", label: "Data Pipelines" },
    { value: 5, suffix: "+", label: "Countries" },
    { value: 10, suffix: "+", label: "Years Experience" }
  ];

  return (
    <section className="py-[65px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-white dark:bg-white/5 border border-slate-100/50 dark:border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-brand-950 dark:text-white tracking-tight mb-4 group-hover:scale-105 transition-transform duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, isHorizontal = false, delay = 0 }: { service: any; isHorizontal?: boolean; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12 }}
      className={`relative h-full min-h-[420px] rounded-[3rem] flex ${isHorizontal ? 'flex-col md:flex-row' : 'flex-col'} overflow-hidden border transition-all duration-700
        ${service.dark 
          ? 'bg-brand-950 text-white border-white/5 shadow-[0_40px_100px_-20px_rgba(2,6,23,0.5)]' 
          : 'bg-white dark:bg-white/5 text-brand-950 dark:text-white border-slate-100 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]'
        }
        hover:border-accent/30 group
      `}
    >
      {service.imageUrl ? (
        <div className={`relative ${isHorizontal ? 'w-full md:w-1/2 h-[320px] md:h-full' : 'w-full h-[250px]'} overflow-hidden`}>
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-8 left-8">
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full ${service.dark ? 'bg-brand-950/80 text-white' : 'bg-white/90 dark:bg-brand-950/80 text-brand-950 dark:text-white'} backdrop-blur-xl shadow-lg border ${service.dark ? 'border-white/10' : 'border-white dark:border-white/10'} transform group-hover:-translate-y-1 transition-transform duration-500`}>
              {service.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="p-10 flex justify-between items-start">
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${service.dark ? 'text-accent' : 'text-slate-400 dark:text-slate-500'}`}>{service.category}</span>
          <div className="flex gap-2">{[1, 2, 3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${service.dark ? 'bg-slate-700' : 'bg-slate-200 dark:bg-white/10'}`} />)}</div>
        </div>
      )}
      <div className={`p-6 md:p-8 ${service.imageUrl && !isHorizontal ? 'pt-4' : 'pt-6'} flex flex-col flex-1`}>
        <div className="flex-1">
          <h3 className="text-[22px] md:text-[28px] font-black leading-tight mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">{service.title}</h3>
          <p className={`text-[14px] font-medium leading-relaxed mb-4 ${service.dark ? 'text-slate-400' : 'text-slate-500/80 dark:text-slate-400'} ${isHorizontal ? 'max-w-md' : ''}`}>{service.description}</p>
        </div>
        <div className="flex items-center gap-4 group/btn cursor-pointer mt-auto">
          <div className="flex items-center gap-3 transition-all duration-500 text-accent group-hover/btn:translate-x-1">
            <span className="text-[11px] font-black uppercase tracking-widest">{service.moreLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    { category: "Visualization", title: "Business Intelligence", description: "Turning data into decisions at speed and scale. Power BI, Tableau, Qlik — 500+ dashboards across industries.", moreLabel: "BI Services", icon: BarChart3, imageUrl: "Images/3d-graph-computer-illustration.jpg", dark: false },
    { category: "Infrastructure", title: "Data Engineering", description: "Cloud-native pipelines, modern data platforms, and real-time integration. Azure, Snowflake, Talend, Salesforce and beyond.", moreLabel: "Data Engineering", icon: Database, imageUrl: "Images/colorful-abstract-image-wave-made-up-binary-code-concept-movement-energy-as-well-as-idea-technology-digital-world.jpg", dark: false },
    { category: "Innovation", title: "Geospatial Analytics", description: "ESRI Silver Partner. Location intelligence for insurance, energy, utilities, and field operations.", moreLabel: "Geospatial", icon: Globe, imageUrl: "Images/Geospatial Analytics.jpg", dark: false },
    { category: "Innovation", title: "AI & GenAI", description: "LLM-powered assistants, agentic workflows, document AI, and conversational BI — enterprise-grade and governed.", moreLabel: "AI Services", icon: Sparkles, imageUrl: "Images/AI & GenAI.jpg", dark: false },
    { category: "Custom Build", title: "Custom Development", description: "Bespoke BI portals, AI-powered tools, mobile analytics apps, and data integration solutions — built for your workflows.", moreLabel: "Custom Dev", icon: Layout, imageUrl: "Images/Custom Development.jpg", dark: false }
  ];

  return (
    <section className="py-[65px] bg-[#F8F9FA] dark:bg-brand-900 px-6 overflow-hidden transition-colors duration-500 text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-medium tracking-tight text-brand-950 dark:text-white leading-tight">
            End-to-End Analytics. <br />
            One Strategic Partner.
          </motion.h2>
        </div>
        <div className="flex flex-wrap justify-start gap-8">
          {services.map((service, i) => (
            <div key={i} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex">
              <ServiceCard service={service} delay={0.1 * (i + 1)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const industries = [
    { title: "", desc: "Pre-built, production-ready analytics accelerators across 7 industries — go live faster with fewer surprises.", type: "intro" },
    { title: "Insurance Analytics", desc: "360° view across claims, policy performance, agents, and fraud trends.\n\n✦ 22% reduction in claim TA", moreLabel: "View Solution", icon: Globe },
    { title: "Manufacturing Analytics", desc: "From plant floor to boardroom — OEE, production, quality, maintenance, and energy.\n\n✦ 15% improvement in production efficiency", moreLabel: "View Solution", icon: Factory },
    { title: "FMCG Analytics", desc: "Sales, distribution, trade promotion, and territory intelligence in one platform.\n\n✦ 28% better promotion ROI tracking", moreLabel: "View Solution", icon: ShoppingBag },
    { title: "Oil & Gas Analytics", desc: "Refinery operations, asset performance, energy monitoring, and safety — SCADA-integrated.\n\n✦ 18% downtime reduction", moreLabel: "View Solution", icon: Zap },
    { title: "Airlines Analytics", desc: "Flight ops, crew management, ground handling, and route profitability — real-time.\n\n✦ 12-min average delay reduction", moreLabel: "View Solution", icon: Plane },
    { title: "ITSM Analytics", desc: "Complete visibility into SLAs, assets, team performance, and vendor contracts.\n\n✦ SLA compliance lifted from 68% → 91%", moreLabel: "View Solution", icon: Cpu },
    { title: "HSE Analytics", desc: "Real-time safety intelligence across incidents, compliance, audits, and training.\n\n✦ 40% faster incident closure", moreLabel: "View Solution", icon: Activity },
  ];

  return (
    <section id="solutions" className="py-[65px] px-6 bg-white dark:bg-brand-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-brand-950 dark:text-white">
            Built for Your Industry.<br />
            Not Just Your Technology Stack.
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {industries.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-50/80 dark:bg-white/5 border border-slate-100/50 dark:border-white/10 p-4 rounded-[1.5rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500 group">
              {i === 0 ? <div className="flex flex-col h-full justify-center px-4"><h5 className="text-lg md:text-xl font-bold leading-tight text-brand-950 dark:text-slate-200">{item.desc}</h5></div> : (
                <>
                  <div className="h-32 w-full mb-4 bg-slate-50/50 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100/50 dark:border-white/10">{item.icon && <item.icon className="w-8 h-8 text-slate-300 dark:text-slate-600 stroke-[1.2] group-hover:scale-110 group-hover:text-accent transition-all duration-700" />}</div>
                  <div className="flex flex-col flex-1 px-1">
                    <h4 className="text-base font-bold mb-1 text-brand-950 dark:text-white tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium leading-snug mb-3 flex-1 whitespace-pre-line">{item.desc}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2 group/btn cursor-pointer"><span className="border-b-2 border-accent/20 group-hover/btn:border-accent transition-colors">{item.moreLabel || 'View Solution'}</span><ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" /></button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-white/5 to-slate-100/50 dark:to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight max-w-xl leading-tight">Don't see your industry? <br /><span className="text-slate-400 dark:text-slate-500">We've built intelligence for it.</span></h3>
            <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent text-white font-black rounded-2xl text-base hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 group whitespace-nowrap">Talk to us<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AcceleratorsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const accelerators = [
    { title: "DataGuard — AI-Powered Data Reliability Platform", desc: "Monitor, validate, govern, and autonomously fix data issues across your enterprise stack. 30–50% faster data issue resolution.", cta: "Explore DataGuard", icon: ShieldCheck },
    { title: "ITSM Plug & Play", desc: "20+ ready-made ITSM dashboards. ServiceNow, ManageEngine, Freshservice — live in 1–2 weeks.", cta: "See What's Included", icon: Layout },
    { title: "Agentic AI for ITSM", desc: "AI that reads, routes, summarizes, and resolves your IT tickets — 40–60% less manual triage.", cta: "Learn More", icon: Sparkles }
  ];
  return (
    <section ref={sectionRef} className="py-[120px] px-6 relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 z-0 scale-110"><motion.div style={{ y }} className="w-full h-full"><img src="Images/2988.jpg" alt="Accelerators Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></motion.div></div>
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">Go Faster With Our Accelerators.</h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
              Accelerators are a strong differentiator — own product thinking from a services company.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">{acc.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed mb-6 flex-1">{acc.desc}</p>
              </div>
              <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:text-accent transition-colors group/btn">
                {acc.cta}<ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marcus Chen", role: "CTO, Stratum Logistics", text: "Techknomatic didn't just build us a dashboard; they built us a decision architecture. Our time-to-insight dropped by 80% within the first quarter.", image: "https://i.pravatar.cc/150?u=marcus" },
    { name: "Sarah Williams", role: "Head of Data, Oasis Energy", text: "The geospatial intelligence Techknomatic provided allowed us to optimize our field operations in ways we hadn't even considered. True experts.", image: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Arjun Mehta", role: "VP of Analytics, Nexus Bank", text: "Enterprise-grade governance was our top priority. Techknomatic delivered a secure, scalable solution that our auditors actually loved.", image: "https://i.pravatar.cc/150?u=arjun" }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-[65px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16"><motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-medium text-brand-950 dark:text-white tracking-tight mb-6">Voices of Impact.</motion.h2><motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">We measure our success by the growth and clarity we bring to our partners.</motion.p></div>
        <div className="relative h-[480px] flex items-center justify-center">
          <div className="relative w-full max-w-md h-full perspective-1000">
            <AnimatePresence mode="popLayout">
              {testimonials.map((t, i) => {
                const diff = (i - activeIndex + testimonials.length) % testimonials.length;
                let zIndex = 0, rotate = 0, x = 0, scale = 1, opacity = 1, display = "block";
                if (diff === 0) { zIndex = 30; rotate = 0; x = 0; scale = 1; opacity = 1; }
                else if (diff === 1) { zIndex = 20; rotate = 8; x = 120; scale = 0.9; opacity = 0.6; }
                else if (diff === testimonials.length - 1) { zIndex = 10; rotate = -8; x = -120; scale = 0.9; opacity = 0.6; }
                else { display = "none"; }
                if (display === "none") return null;
                return (
                  <motion.div key={i} style={{ zIndex, display }} initial={{ opacity: 0, scale: 0.8, x: 0 }} animate={{ opacity, scale, x, rotate }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: "spring", stiffness: 260, damping: 25 }} onClick={() => setActiveIndex(i)} className="absolute inset-0 cursor-pointer">
                    <div className="w-full h-full bg-slate-50 dark:bg-brand-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col justify-between group transition-colors"><div className="relative"><Quote className="w-12 h-12 text-accent/20 absolute -top-4 -left-4" /><p className="text-lg md:text-xl font-bold text-brand-950 dark:text-white leading-relaxed pt-6">"{t.text}"</p></div><div className="flex items-center gap-4"><img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-accent/20" referrerPolicy="no-referrer" /><div><h4 className="font-bold text-brand-950 dark:text-white">{t.name}</h4><p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t.role}</p></div></div><div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-200 dark:border-white/10 rounded-tl-sm opacity-50" /><div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-200 dark:border-white/10 rounded-tr-sm opacity-50" /><div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-200 dark:border-white/10 rounded-bl-sm opacity-50" /><div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-200 dark:border-white/10 rounded-br-sm opacity-50" /></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-12">{testimonials.map((_, i) => (<button key={i} onClick={() => setActiveIndex(i)} className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-accent' : 'w-2 bg-slate-200 dark:bg-white/10'}`} aria-label={`Go to testimonial ${i + 1}`} />))}</div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const reasons = [{ title: "Full-Stack, Single Team", description: "BI + Data Engineering + AI + Geospatial under one roof. No coordination overhead." }, { title: "India-Built, Global-Delivered", description: "Headquartered in Pune. Active across India, UAE, Oman, and Southeast Asia." }, { title: "Outcomes, Not Outputs", description: "We don't ship dashboards — we deliver decisions. Every engagement is tied to business impact." }, { title: "Enterprise-Grade by Default", description: "Governance, RLS, audit logging, and security built into every solution from day one." }];
  return (
    <section className="py-[65px] px-6 bg-[#F8F9FA] dark:bg-brand-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><h2 className="text-4xl md:text-6xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 leading-tight">Why Enterprises <br />Choose Techknomatic.</h2><div className="w-16 h-1 bg-accent mb-8" /><p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">We complement your existing engineering teams with hyper-specialized expertise in data storytelling and decision architecture.</p></motion.div>
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`border-b border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 ${openIndex === i ? 'pb-8' : 'pb-0'}`}><button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full py-8 flex items-center justify-between text-left group"><span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-accent' : 'text-brand-950 dark:text-slate-200 hover:text-accent dark:hover:text-white'}`}><span className="text-sm font-mono mr-6 opacity-30">0{i + 1}</span>{reason.title}</span><div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === i ? 'bg-accent border-accent text-white rotate-180' : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-400 rotate-0'}`}><ChevronDown className="w-5 h-5" /></div></button><AnimatePresence>{openIndex === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}><p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xl pl-12 border-l-2 border-accent/20">{reason.description}</p></motion.div>)}</AnimatePresence></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSlider = () => {
  const brands = ["Nexus", "Stratum", "Vertex", "Oasis", "Lumina", "Aether", "Prism", "Echo", "Atlas"];
  const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
    <div className="flex overflow-hidden group">
      <motion.div 
        animate={{ x: reverse ? [0, -100 + "%"] : [-100 + "%", 0] }} 
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }} 
        className="flex gap-4 py-2 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items, ...items, ...items].map((brand, i) => (
          <div key={i} className="w-36 h-14 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center px-4 shadow-sm group-hover:border-accent/30 transition-colors">
            <div className="flex items-center opacity-30 dark:opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="text-[13px] font-black tracking-tighter text-brand-950 dark:text-white uppercase">{brand}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
  return (
    <section className="pt-[50px] pb-[40px] bg-white dark:bg-brand-950 transition-colors duration-500 overflow-hidden relative">
      {/* Modern fade effect for the marquee edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-brand-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-brand-950 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-black tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">Global Reach</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-brand-950 dark:text-white tracking-tight">Trusted by Industry Leaders.</motion.h2>
      </div>
      <div className="space-y-0 relative">
        <MarqueeRow items={brands} />
        <MarqueeRow items={brands} reverse />
      </div>
    </section>
  );
};

const PreFooterCTA = () => {
  return (
    <section className="py-[120px] bg-brand-950 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"><div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-[120px]" /><div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px]" /></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20">Let's Build Together</motion.div><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-12">Tell us about your challenge. <br />We'll tell you exactly how we'd approach it.</motion.h2><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-6"><button className="px-8 py-3.5 bg-accent text-white font-black rounded-2xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/20 flex items-center gap-3 group active:scale-95">Contact Us<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button><button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all backdrop-blur-xl flex items-center gap-3 active:scale-95">Our Solutions</button></motion.div></div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <>
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
