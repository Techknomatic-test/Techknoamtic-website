import { motion } from 'motion/react';
import { 
  Globe, 
  Map as MapIcon, 
  Navigation,
  ShieldCheck,
  Users,
  Settings,
  Target,
  ArrowRight,
  Zap,
  Layers,
  Search,
  Monitor,
  Cpu,
  Database,
  Satellite,
  Compass,
  Award,
  CheckCircle2,
  Layout,
  Smartphone
} from 'lucide-react';

const Card = ({ title, description, icon: Icon, delay = 0, variant = "default" }: { title: string, description: string | string[], icon: any, delay?: number, variant?: "default" | "minimal" | "list" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`p-8 rounded-[2.5rem] border transition-all duration-500 group h-full flex flex-col ${
        variant === "minimal" 
          ? 'bg-slate-50/50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-accent/10' 
          : 'bg-white dark:bg-white/5 border-slate-100/50 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
        variant === "minimal" 
          ? 'bg-white dark:bg-white/10 text-slate-400 group-hover:text-accent group-hover:bg-accent/10' 
          : 'bg-accent/10 text-accent group-hover:scale-110'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="space-y-2 flex-1">
          {description.map((item, idx) => (
            <li key={idx} className="text-[13px] font-medium text-slate-500 dark:text-slate-400 flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const GeospatialPage = () => {
  const capabilities = [
    {
      title: "ArcGIS Platform Implementation",
      description: "Full-stack ESRI ArcGIS implementation — Enterprise, Online, and Pro for enterprise-grade GIS.",
      icon: MapIcon
    },
    {
      title: "Geo-Dashboards & Visualizations",
      description: "Interactive map visualizations in ArcGIS, Power BI Maps, Tableau, and Qlik.",
      icon: Layout
    },
    {
      title: "Field Operations & Mobile GIS",
      description: "ArcGIS Field Maps, Survey123 for real-time field data collection and management.",
      icon: Smartphone
    },
    {
      title: "Location Data Integration",
      description: "Seamless integration with SAP, Salesforce, IoT, and enterprise systems.",
      icon: Layers
    },
    {
      title: "Route Optimization & Territory Planning",
      description: "Data-driven territory design and route optimization for sales and logistics.",
      icon: Navigation
    },
    {
      title: "Spatial Risk & Pattern Detection",
      description: "Heatmaps, fraud clustering, and spatial pattern analysis for risk management.",
      icon: ShieldCheck
    }
  ];

  const industryUseCases = [
    {
      title: "Insurance/BFSI",
      description: [
        "Claim heatmaps",
        "Branch optimization",
        "Geotagged CRM leads",
        "Risk zone mapping"
      ],
      color: "bg-[#f0f9ff]/50 dark:bg-blue-900/10"
    },
    {
      title: "Mining/Energy",
      description: [
        "Live boundary monitoring",
        "Drone overlays",
        "Geo-fencing",
        "Asset tracking"
      ],
      color: "bg-[#fffaf0]/50 dark:bg-orange-900/10"
    },
    {
      title: "Pharma/Healthcare",
      description: [
        "Doctor mapping",
        "Territory realignment",
        "Coverage analysis",
        "Field force optimization"
      ],
      color: "bg-[#f0fff4]/50 dark:bg-green-900/10"
    },
    {
      title: "Utilities/Government",
      description: [
        "Pipeline visualization",
        "Service coverage",
        "Citizen mapping",
        "Infrastructure planning"
      ],
      color: "bg-[#faf5ff]/50 dark:bg-purple-900/10"
    }
  ];

  const whyGeospatial = [
    {
      title: "ESRI Silver Partner",
      description: "Certified implementation partner for ArcGIS platform.",
      icon: Award
    },
    {
      title: "GIS + BI Integration Experts",
      description: "We combine geospatial with traditional BI for unified insights.",
      icon: CheckCircle2
    },
    {
      title: "Cross-Industry Use Cases",
      description: "Experience in BFSI, mining, utilities, pharma, and government.",
      icon: CheckCircle2
    },
    {
      title: "Full-Stack Delivery",
      description: "Strategy → Build → Deploy → Support — complete ownership.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="pt-[120px]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F17E21 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full"
          >
            Location Intelligence Specialist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Geospatial Analytics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            Unlock the power of 'Where'. We build enterprise GIS solutions that turn complex spatial data into intuitive location intelligence.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Our Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((service, i) => (
              <Card key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-24 px-6 bg-white dark:bg-brand-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight">Industry Use Cases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryUseCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[2.5rem] ${useCase.color} border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-6">
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.description.map((item, idx) => (
                    <li key={idx} className="text-[14px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techknomatic for Geospatial Section */}
      <section className="py-24 px-6 bg-[#F8F9FA] dark:bg-brand-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-950 dark:text-white tracking-tight mb-6">Why Techknomatic for Geospatial</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyGeospatial.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-start"
              >
                <div className="shrink-0 mb-6">
                  <item.icon className={`w-8 h-8 ${item.icon === Award ? 'text-accent' : 'text-green-500'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-medium">GIS projects delivered across Oman, UAE, and India with proven ROI.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Got a spatial challenge?</h2>
          <p className="text-lg opacity-90 mb-12 font-medium">From custom map apps to complex spatial analysis, our experts are ready to help.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-2xl transition-all active:scale-95 flex items-center gap-3">
               Speak to Geographers <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Brain import to lucide-react list in the file if needed, or just use Target/Activity
import { Brain } from 'lucide-react';
