import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Medal,
  ShieldCheck,
  Zap,
  Award,
  Globe,
  Database,
  Cpu,
  Map,
  Building2,
  Handshake,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const PartnershipHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6 bg-brand-950">
      <div className="absolute inset-0 z-0">
        <img
          src="Images/7660.jpg"
          alt="Partnerships Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
          >
            Collaborative Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8 text-white"
          >
            Strategic <span className="text-accent">Partnerships</span> <br />
            to Scale Data & AI Globally.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed mb-12"
          >
            At Techknomatic, we collaborate with leading technology platforms
            and regional partners to build, deliver, and scale end-to-end data
            and AI solutions across global markets.
          </motion.p>

          <div className="flex flex-wrap gap-5">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white rounded-2xl font-black tracking-[0.1em] uppercase text-[12px] shadow-2xl shadow-accent/20 flex items-center gap-3 active:scale-95"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const OEMSection = () => {
  const oems = [
    {
      name: "Qlik",
      imageUrl: "images/OEM Alliances/qlik.webp",
      description:
        "Enabling real-time analytics, data integration, and active intelligence",
      features: [
        "Real-time Data Integration",
        "Active Intelligence",
        "Enterprise Visualization",
      ],
    },
    {
      name: "Esri",
      imageUrl: "Images/OEM Alliances/esri.jpg",
      description:
        "Powering geospatial intelligence and location-driven decision systems",
      features: [
        "Spatial Analytics",
        "ArcGIS Enterprise",
        "Location Intelligence",
      ],
    },
    {
      name: "Microsoft",
      imageUrl: "Images/OEM Alliances/microsoft.webp",
      description:
        "Delivering cloud-scale data platforms, AI capabilities, and enterprise architectures",
      features: [
        "Azure Data Services",
        "Power BI ecosystem",
        "GenAI Foundations",
      ],
    },
  ];

  return (
    <section className="py-[120px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-8">
            Our OEM Alliances.
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            We partner with global technology leaders to build scalable,
            intelligent, and future-ready data ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {oems.map((oem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 p-0 rounded-[2.5rem] flex flex-col h-full hover:bg-white dark:hover:bg-accent/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group overflow-hidden"
            >
              <div className="h-64 w-full bg-slate-50/50 dark:bg-white/5 flex items-center justify-center overflow-hidden relative">
                <img
                  src={oem.imageUrl}
                  alt={oem.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/0 transition-colors duration-500" />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-[20px] font-bold mb-3 text-brand-950 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                  {oem.name}
                </h3>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-1">
                  {oem.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-50 dark:border-white/5">
                  {oem.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-[13px] font-bold text-slate-400 dark:text-slate-500"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketSection = () => {
  const regions = [
    {
      country: "🇴🇲 Oman",
      partner: "Primer Trading",
      desc: "Driving market engagement and solution delivery in Oman",
      image: "images/Global Market/Oman.jpg",
    },
    {
      country: "🇦🇪 UAE",
      partner: "Aintisar Technologies",
      desc: "Supporting business development and client execution in the UAE",
      image: "images/Global Market/UAE.jpg",
    },
    {
      country: "🇺🇸 United States",
      partner: "Inspirational Global",
      desc: "Enabling go-to-market and solution expansion in the United States",
      image: "images/Global Market/United States.jpg",
    },
  ];

  return (
    <section className="py-[120px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20"
            >
              Global Network
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight leading-tight mb-8">
              Our Global Market Presence Through Partners.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-none">
              To expand our reach and deliver solutions effectively across
              regions, we work with strong local partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-brand-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-brand-950 flex items-center justify-center text-accent mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2">
                {region.country}
              </h3>
              <p className="text-accent font-black text-[12px] uppercase tracking-widest mb-6">
                {region.partner}
              </p>
              <p className="text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                {region.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PartnershipsPage = () => {
  return (
    <div className="pb-0 overflow-hidden bg-white dark:bg-brand-950">
      <PartnershipHero />
      <OEMSection />
      <MarketSection />

      {/* Closing CTA */}
      <section className="py-[120px] bg-accent px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-white uppercase bg-white/10 rounded-full border border-white/20"
          >
            Let's Scale Efficiency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-normal text-brand-950 tracking-tight leading-[1.1] mb-8"
          >
            Let’s Build and Scale <br />
            Data-Driven Solutions Together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-brand-950/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto"
          >
            Whether you're a technology platform or a regional partner,
            Techknomatic helps you take data & AI solutions to market with speed
            and scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              to="/contact"
              className="px-10 py-5 bg-brand-950 text-white font-bold text-[14px] rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3 group active:scale-95"
            >
              Start a Partnership Discussion{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
