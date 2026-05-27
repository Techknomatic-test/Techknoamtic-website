import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { buildAssetUrl } from "../utils/buildAssetUrl";

const PARTNERSHIP_IMG = "Images/partnership";
const partnershipImg = (file: string) => buildAssetUrl(PARTNERSHIP_IMG, file);
const PARTNERSHIP_HERO_IMG = partnershipImg("Partnershipbanner.jpg");

const OEMSection = () => {
  const oems = [
    {
      name: "Qlik",
      imageUrl: "Images/Qlik.webp",
      description:
        "Enabling real-time analytics, data integration, and active intelligence.",
      features: [
        "Real-time Data Integration",
        "Active Intelligence",
        "Enterprise Visualization",
      ],
    },
    {
      name: "Esri",
      imageUrl: "Images/esri.jpg",
      description:
        "Powering geospatial intelligence and location-driven decision systems.",
      features: [
        "Spatial Analytics",
        "ArcGIS Enterprise",
        "Location Intelligence",
      ],
    },
    {
      name: "Microsoft",
      imageUrl: "Images/Microsoft.webp",
      description:
        "Delivering cloud-scale data platforms, AI capabilities, and enterprise architectures.",
      features: [
        "Azure Data Services",
        "Power BI ecosystem",
        "GenAI Foundations",
      ],
    },
  ];

  return (
    <section className="py-[60px] bg-slate-50 dark:bg-brand-900 px-6 transition-colors duration-500 overflow-hidden text-left">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10">
          <h2 className="section-heading mb-4">
            Our OEM Alliances
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
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
              className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 p-0 rounded-[2.5rem] flex flex-col h-full text-left hover:bg-white dark:hover:bg-accent/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group overflow-hidden"
            >
              <div className="h-64 w-full bg-slate-50/50 dark:bg-white/5 flex items-center justify-center overflow-hidden relative">
                <img
                  loading="lazy"
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
                <ul className="space-y-3 border-t border-slate-50 dark:border-white/5 pt-6 list-none m-0">
                  {oem.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/40"
                        aria-hidden
                      />
                      <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
      country: "Oman",
      partner: "Primer Trading",
      desc: "Driving market engagement and solution delivery in Oman.",
      logoImage: partnershipImg("prime.png"),
    },
    {
      country: "UAE",
      partner: "Aintisar Technologies",
      desc: "Supporting business development and client execution in the UAE.",
      logoImage: partnershipImg("Aintisar Technologies.webp"),
    },
    {
      country: "United States",
      partner: "Inspirational Global",
      desc: "Enabling go-to-market and solution expansion in the United States.",
      logoImage: partnershipImg("Inspirational Global.webp"),
    },
  ];

  return (
    <section className="py-[60px] bg-white dark:bg-brand-950 px-6 transition-colors duration-500 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10">
          <h2 className="section-heading mb-4">
            Our Global Market Presence Through Partners
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-3xl text-left">
            To expand our reach and deliver solutions effectively across
            regions, we work with strong local partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/10 rounded-[2.5rem] flex flex-col h-full text-left hover:border-accent/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group overflow-hidden"
            >
              <div className="relative h-56 sm:h-64 w-full bg-slate-50/50 dark:bg-white/5 overflow-hidden p-8 sm:p-10">
                <img
                  src={region.logoImage}
                  alt={region.partner}
                  className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col flex-1 p-10">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {region.country}
                </h3>
                <p className="text-accent font-black text-[12px] uppercase tracking-widest mb-6">
                  {region.partner}
                </p>
                <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  {region.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PartnershipsPage = () => {
  return (
    <PageShell>
      <PageHero
        title={
          <>
            Strategic Partnerships <br />
            to Scale Data & AI Globally
          </>
        }
        description="At Techknomatic, we collaborate with leading technology platforms and regional partners to build, deliver, and scale end-to-end data and AI solutions across global markets."
        imageSrc={PARTNERSHIP_HERO_IMG}
        imageAlt="Partnerships Background"
        titleAnimationDelay={0}
        descriptionAnimationDelay={0.2}
      />
      <OEMSection />
      <MarketSection />

      <PreFooterCTA />
    </PageShell>
  );
};
