import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { PlatformCapabilityCard } from "../components/PlatformCapabilityCard";
import { SectionIcon } from "../components/SectionIcon";
import {
  FileText,
  UserCheck,
  AlertTriangle,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  Users,
  BarChart3,
} from "lucide-react";

const INSURANCE_IMG = "Images/insurance";
const insuranceHeroImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...INSURANCE_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;
const INSURANCE_HERO_IMG = insuranceHeroImg("Hero.jpg");
const INSURANCE_LOCATION_IMG = `${INSURANCE_IMG}/Location Intelligence For Insurance.jpg`;
const ESRI_LOGO_IMG = `${import.meta.env.BASE_URL}Images/esri.jpg`;

const AccordionItem = ({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-[17px] font-bold text-brand-950 dark:text-white group-hover:text-accent transition-colors">
          {title}
        </span>
        <motion.div
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white"
              : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/10"
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div className="pb-8">{children}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SolveCard = ({
  title,
  description,
  image,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden group h-full"
  >
    <div className="h-60 overflow-hidden relative">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-10 flex flex-col flex-grow text-left">
      <h4 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h4>
      <p className="text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  focusAreas,
  outcome,
}: {
  title: string;
  subtitle: string;
  crux: string;
  focusAreas: string;
  outcome: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
  >
    <h3 className="mb-2 min-h-[2.5rem] text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
      {title}
    </h3>
    <p className="mb-5 min-h-[3rem] text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">
      {subtitle}
    </p>

    <div className="mb-6 flex flex-1 flex-col space-y-4">
      <p className="min-h-[4.5rem] text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {crux}
      </p>

      <div>
        <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">Focus Areas</h4>
        <p className="min-h-[2.5rem] text-[14px] font-bold text-brand-950 dark:text-white">{focusAreas}</p>
      </div>
    </div>

    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-white/5">
      <div className="flex items-center gap-3">
        <SectionIcon icon={Target} size="sm" hover="none" />
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">
          <span className="mr-2 uppercase tracking-wider text-accent">Outcome:</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

export const InsuranceAnalyticsPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whatWeSolve = [
    {
      title: "Claims Optimization",
      description:
        "Automate manual claims adjudication to reduce processing costs and TAT significantly.",
      image: `${INSURANCE_IMG}/1.jpg`,
    },
    {
      title: "Underwriting Intelligence",
      description:
        "Improve risk scoring accuracy by unifying fragmented data into a cohesive underwriting view.",
      image: `${INSURANCE_IMG}/2.jpg`,
    },
    {
      title: "Customer Retention",
      description:
        "Mitigate churn by identifying at-risk policyholders and improving service interaction quality.",
      image: `${INSURANCE_IMG}/3.jpg`,
    },
    {
      title: "Fraud Prevention",
      description:
        "Detect anomalous patterns in real-time to prevent fraudulent payouts and reduce leakage.",
      image: `${INSURANCE_IMG}/4.jpg`,
    },
    {
      title: "Compliance Management",
      description:
        "Bridge compliance gaps with intelligent document processing and policy management solutions.",
      image: `${INSURANCE_IMG}/5.jpg`,
    },
  ];

  const modules = [
    {
      title: "Claims Analytics",
      outcome:
        "Improve claims visibility and reduce turnaround delays with end-to-end, stage-wise monitoring.",
      items: [
        "Track claim volumes by product, geography, line of business, and channel.",
        "Monitor TAT across FNOL, assessment, approval, and settlement stages.",
        "Analyze settlement ratios, reopen rates, and repudiation trends.",
        "Benchmark provider, assessor, and TPA performance on cost and speed.",
        "Identify high-severity claims and backlog risk before SLAs are breached.",
        "Surface root causes for delays to drive process and policy improvements.",
      ],
      icon: FileText,
    },
    {
      title: "Policy Performance",
      outcome:
        "Optimize the health of your portfolio with deep visibility into renewals, lapses, and profitability.",
      items: [
        "Analyze portfolio mix by product, tenure, geography, and risk band.",
        "Track renewal, persistency, and lapse rates across customer cohorts.",
        "Monitor premium growth, loss ratio, and combined ratio by segment.",
        "Detect early-warning signals for underperforming or declining products.",
        "Compare performance across channels, partners, and regions.",
        "Identify segments where pricing, features, or distribution need correction.",
      ],
      icon: BarChart3,
    },
    {
      title: "Underwriting Insights",
      outcome:
        "Strengthen underwriting decisions with unified risk views and data-driven pricing intelligence.",
      items: [
        "Consolidate customer, asset, behavioral, and location data into a single view.",
        "Track quote-to-bind conversion across products, channels, and segments.",
        "Analyze risk scores, loadings, and discount patterns across the book.",
        "Prioritize complex, high-value, or high-risk cases for senior underwriters.",
        "Monitor referral volumes, approval turnaround time, and exceptions.",
        "Support premium and coverage optimization with historical performance data.",
      ],
      icon: Target,
    },
    {
      title: "Agent Productivity",
      outcome:
        "Boost top-line growth by making every advisor, branch, and channel more productive.",
      items: [
        "Track leads, opportunities, and issued policies at agent and team level.",
        "Measure conversion rates across every stage of the sales funnel.",
        "Compare productivity across agents, branches, partners, and regions.",
        "Monitor renewal follow-ups, missed touchpoints, and cross-sell activity.",
        "Link performance to incentive and commission structures transparently.",
        "Surface best-performing behaviors and playbooks for targeted coaching.",
      ],
      icon: UserCheck,
    },
    {
      title: "Fraud Detection",
      outcome:
        "Reduce leakage by spotting suspicious patterns early and prioritizing investigations that matter most.",
      items: [
        "Detect anomalous patterns in claim amounts, frequencies, and timelines.",
        "Flag repeat claimants, providers, and networks with elevated risk scores.",
        "Map fraud hotspots across locations, product lines, and channels.",
        "Prioritize investigation queues based on potential exposure and probability of fraud.",
        "Monitor false positives to continuously refine fraud rules and models.",
        "Track recovered amounts and prevented leakage as measurable outcomes.",
      ],
      icon: AlertTriangle,
    },
    {
      title: "Customer Analytics",
      outcome:
        "Protect retention and grow share-of-wallet with a clear view of every customer segment.",
      items: [
        "Predict churn and non-renewal risk well before policy expiry.",
        "Track customer lifetime value across products and channels.",
        "Identify cross-sell, upsell, and next-best-offer opportunities.",
        "Monitor complaints, grievances, and service tickets by segment.",
        "Track NPS, CSAT, and interaction sentiment across touchpoints.",
        "Prioritize outreach lists for retention and win-back campaigns.",
      ],
      icon: Users,
    },
  ];

  const useCases = [
    {
      title: "Automated claims triage",
      subtitle: "AI-driven classification at intake",
      crux: "An insurance carrier reduced claims processing TAT using AI-driven triage that auto-classifies claims by complexity, coverage type, and fraud risk, delivering a significant improvement in speed and accuracy.",
      focusAreas:
        "Complexity Scoring · Coverage Classification · Fraud Risk Flagging · Routing Automation",
      outcome: "Faster TAT · Lower manual workload · Reduced leakage",
    },
    {
      title: "Underwriting risk intelligence",
      subtitle: "Geospatial & behavioral risk scoring",
      crux: "A leading insurer improved risk scoring accuracy by using geospatial and behavioral data, enabling more precise premium pricing and a remarkable uplift in underwriting confidence.",
      focusAreas:
        "Geospatial Mapping · Behavioral Data · Risk Score Calibration · Premium Optimization",
      outcome: "Higher accuracy · Better pricing precision · Lower exposure",
    },
    {
      title: "Churn prediction & retention",
      subtitle: "Proactive policyholder engagement",
      crux: "An insurer identified at-risk policyholders well before renewal, enabling proactive outreach that drove a significant improvement in retention rates and relationship quality.",
      focusAreas:
        "Churn Propensity Modelling · Early Warning Signals · Renewal Outreach · Loyalty Analytics",
      outcome: "Higher retention · Timely intervention · Improved NPS",
    },
  ];

  const geospatialPoints = [
    "Claim heatmaps and spatial clustering",
    "Branch and agent territory optimization",
    "Risk zone mapping and exposure analysis",
    "Geotagged CRM leads and distribution network",
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={INSURANCE_HERO_IMG}
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
            Insurance
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Turning Claims Complexity into Clarity
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full space-y-8 text-left">
           
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              The insurance industry sits at the intersection of massive data volumes and high-stakes
              decisions. From underwriting and claims to customer retention, insurers are under pressure to be
              faster, more accurate, and more compliant than ever. Legacy systems, siloed data, and manual
              processes slow down operations and erode customer trust. Techknomatic helps insurers modernize
              their data backbone and embed AI across the full policy lifecycle.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading mb-4"
            >
              What We Solve
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeSolve.map((item, idx) => (
              <SolveCard key={idx} title={item.title} description={item.description} image={item.image} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Modules Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-y border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-6"
            >
              Insurance Analytics Modules
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, i) => (
              <PlatformCapabilityCard key={i} {...module} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Intelligence Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-left">
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Location Intelligence For Insurance
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/10 group"
            >
              <img
                loading="lazy"
                src={INSURANCE_LOCATION_IMG}
                alt="Spatial analytics for insurance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="text-left">
              <div className="space-y-4">
                <AccordionItem
                  title="Real-World Impact"
                  isOpen={openAccordion === 0}
                  onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                >
                  <div className="space-y-8">
                    <p className="text-[17px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                      Our Insurance GIS analytics have helped carriers reduce claim TAT by 22% and improve renewal
                      targeting through location-based customer insights.
                    </p>
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 w-fit">
                      <img
                        loading="lazy"
                        src={ESRI_LOGO_IMG}
                        alt="ESRI"
                        className="h-6 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div className="w-px h-6 bg-slate-200 dark:bg-white/10" />
                      <span className="text-[11px] font-black tracking-widest uppercase text-slate-500">
                        ESRI Partner Implementation
                      </span>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem
                  title="ESRI-Powered Geo-Analytics"
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                >
                  <ul className="space-y-4 list-none m-0">
                    {geospatialPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-[17px] font-medium text-slate-500 dark:text-slate-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>

                <AccordionItem
                  title="Geospatial Underwriting & Risk Exposure"
                  isOpen={openAccordion === 2}
                  onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                >
                  <div className="space-y-4">
                    <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      Aggregate geospatial data to visualize accumulation risk and catastrophe exposure across
                      portfolios, enabling faster response during active events and more precise local pricing
                      modules.
                    </p>
                    <div className="flex items-center gap-2 text-accent">
                      <Zap className="w-4 h-4" />
                      <span className="text-[13px] font-bold uppercase tracking-wider">Predictive Exposure Analysis</span>
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
            >
              Three high-impact deployments where AI analytics is transforming insurance operations — from
              claims to underwriting to retention.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {useCases.map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
