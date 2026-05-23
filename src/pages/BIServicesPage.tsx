import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import {
  ShieldCheck,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  Activity,
  Droplets,
  Factory,
  ShoppingBag,
  LucideIcon,
  TrendingUp,
  LayoutDashboard,
  Users,
  Database,
  Search,
  Layers,
  Cpu,
} from "lucide-react";

const BI_IMG = "Images/Services/Business Intelligence";
const biImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...BI_IMG.split("/"), file]
    .map(encodeURIComponent)
    .join("/")}`;
const BI_HERO_IMG = biImg("hero.jpg");
const BI_TOOLS_IMG = biImg("tools-and-technology.jpg");

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const chips = content.split("·").map((s) => s.trim());

  return (
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <div className="flex flex-col text-left">
          <span className="text-[17px] font-bold text-brand-950 dark:text-white group-hover:text-accent transition-colors">
            {title}
          </span>
          {!isOpen && (
            <span className="text-[12px] text-slate-400 mt-1 line-clamp-1">
              {chips.slice(0, 3).join(" · ")}...
            </span>
          )}
        </div>
        <div
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white"
              : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/10"
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8">
              <div className="flex flex-wrap gap-2">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full text-[12px] font-bold text-slate-600 dark:text-slate-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CapabilityCard = ({
  title,
  description,
  items,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full text-left"
  >
    <SectionIcon icon={Icon} size="lg" hover="rotate" className="mb-8" />
    <div className="mb-4 min-h-[4.5rem] sm:min-h-[5rem]">
      <h3 className="text-2xl font-bold text-brand-950 dark:text-white tracking-tight leading-tight group-hover:text-accent transition-colors line-clamp-3">
        {title.trim()}
      </h3>
    </div>
    <div className="min-h-[6rem] sm:min-h-[6.5rem]">
      <p className="border-l-4 border-accent/20 py-1 pl-4 text-left text-[15px] font-medium leading-relaxed text-brand-950/70 dark:text-white/60">
        {description}
      </p>
    </div>
    <ul className="space-y-3 border-t border-slate-100 dark:border-white/5 pt-4 list-none m-0">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 group/item">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0" />
          <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors text-left">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ApproachStep = ({
  num,
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group text-left"
  >
    <div className="absolute top-8 right-8 text-4xl font-black text-slate-100 dark:text-white/5 group-hover:text-accent/10 transition-colors">
      {num}
    </div>
    <SectionIcon icon={Icon} size="md" className="mb-8" />
    <h3 className="text-lg font-bold text-brand-950 dark:text-white mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-accent/30 pl-4">
      {description}
    </p>
  </motion.div>
);

const UseCaseCard = ({
  industry,
  subtitle,
  crux,
  examples,
  outcome,
  icon: Icon,
}: {
  industry: string;
  subtitle: string;
  crux: string;
  examples: string;
  outcome: string;
  icon: LucideIcon;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group flex flex-col h-full text-left"
  >
    <div className="flex items-center gap-4 mb-6">
      <SectionIcon icon={Icon} size="md" hover="none" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-brand-950 dark:text-white leading-tight">
          {industry}
        </h3>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase">Industry</h4>
      </div>
    </div>

    <p className="text-[15px] font-bold text-brand-950/70 dark:text-white/70 mb-8 leading-snug text-left">
      {subtitle}
    </p>

    <div className="space-y-6 flex-1 mb-10 text-left">
      <div>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">
          Dashboards
        </h4>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white">{examples}</p>
      </div>
    </div>

    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 text-left">
      <div className="flex items-center gap-3">
        <SectionIcon icon={Target} size="sm" hover="none" />
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

export const BIServicesPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const offerings = [
    {
      title: "BI Strategy & Roadmap",
      icon: TrendingUp,
      description:
        "Define the analytics future state, platform, data, governance, and adoption, before writing the first dashboard.",
      items: [
        "Current-state BI maturity assessment across people, process, platform, and data",
        "Target-state architecture and tool selection (Power BI / Tableau / Qlik / Hybrid)",
        "BI roadmap with phased delivery milestones and success metrics",
        "BI Centre of Excellence (CoE) design and operating model",
        "ROI modeling and business case development for analytics investments",
      ],
    },
    {
      title: "Dashboard Design & Development",
      icon: LayoutDashboard,
      description:
        "Design-led dashboards engineered for executive clarity, operational decision speed, and analyst depth.",
      items: [
        "Executive, operational, and analytical dashboard development",
        "Design-led UX with audience-appropriate information density",
        "Power BI, Tableau, and Qlik native development",
        "Custom visualization development for specialized analytical needs",
        "Performance optimization for large-scale enterprise datasets",
        "Mobile-responsive and embedded dashboard delivery",
      ],
    },
    {
      title: "BI Governance & Centre of Excellence",
      icon: ShieldCheck,
      description:
        "Defensible governance that scales analytics without creating bottlenecks, trust as a delivery outcome.",
      items: [
        "BI governance framework definition and rollout",
        "Row-level and object-level security implementation",
        "Workspace, dataset, and dashboard certification standards",
        "Version control, deployment pipelines, and DevOps for BI",
        "BI Centre of Excellence operating model and team enablement",
        "Audit, lineage, and compliance reporting",
      ],
    },
    {
      title: "Self-Service & Embedded Analytics",
      icon: Users,
      description:
        "Extend BI beyond the BI team, with self-service for business users and embedded analytics.",
      items: [
        "Self-service BI enablement for business and operational users",
        "Semantic model design for safe, governed self-service",
        "Embedded analytics integration into customer and internal applications",
        "Dataset certification and shared semantic layers",
        "Business user training and analytics literacy programs",
      ],
    },
    {
      title: "BI Modernization & Migration",
      icon: Database,
      description:
        "Move from legacy BI estates to modern cloud analytics, without losing adoption or metadata.",
      items: [
        "Migration from legacy BI tools (SAP BO, Cognos, MicroStrategy) to modern platforms",
        "Cloud BI modernization on Azure, AWS, and GCP",
        "Report and dashboard rationalization, retire, replace, rebuild",
        "Data model and semantic layer modernization",
        "Coexistence strategy during phased migration",
        "User onboarding and adoption acceleration",
      ],
    },
  ];

  const tools = [
    {
      title: "Microsoft Power BI",
      content:
        "Dashboard development · Paginated reports · Power BI Premium and Embedded · DAX optimization · Dataflows and semantic models · Row-level security · Power BI Service governance · Azure Synapse and Fabric integration",
    },
    {
      title: "Tableau",
      content:
        "Tableau Desktop and Server / Cloud · Custom visualization development · Tableau Prep data preparation · LOD calculations and advanced analytics · Embedded analytics · Multi-tenant governance · Data source certification · Performance optimization",
    },
    {
      title: "Qlik",
      content:
        "Qlik Sense and QlikView · Associative engine design · Set analysis and advanced expressions · Qlik NPrinting · Mashup and embedded development · Multi-stream and section-access security · Qlik Cloud governance · Data integration via Qlik connectors",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Search,
      description:
        "Assess current BI state, priorities, and gaps. Define success criteria and target outcomes.",
    },
    {
      num: "02",
      title: "Design",
      icon: Layers,
      description:
        "Architect solution, data model, semantic layer, dashboard structure, and governance model.",
    },
    {
      num: "03",
      title: "Build",
      icon: Cpu,
      description:
        "Develop dashboards and models on chosen platform (Power BI / Tableau / Qlik) with iterative reviews.",
    },
    {
      num: "04",
      title: "Deploy",
      icon: Zap,
      description:
        "Roll out with workspace setup, RLS, deployment pipelines, and performance tuning.",
    },
    {
      num: "05",
      title: "Sustain",
      icon: Activity,
      description:
        "Drive adoption through training, CoE enablement, and continuous improvement cycles.",
    },
  ];

  const useCases = [
    {
      industry: "Insurance",
      subtitle: "Enterprise-wide visibility across claims, underwriting, and risk.",
      crux: "Unified executive dashboards for claims settlement efficiency, premium leakage analysis, and agent performance to improve operational transparency.",
      examples: "Claims TAT · Loss Ratio Monitoring · Underwriting Productivity · Renewal Trends",
      outcome: "Improved claims efficiency · Better underwriting control",
      icon: ShieldCheck,
    },
    {
      industry: "ITSM & IT Ops",
      subtitle: "Real-time operational intelligence for enterprise IT services.",
      crux: "Centralized platforms monitoring SLA adherence, ticket lifecycle, and incident trends to proactively identify bottlenecks in service delivery.",
      examples: "SLA Compliance · Incident Trends · MTTR Analysis · Change Success Rate",
      outcome: "Higher SLA adherence · Faster issue resolution",
      icon: Activity,
    },
    {
      industry: "Oil & Gas",
      subtitle: "Operational visibility across Midstream and downstream functions.",
      crux: "Advanced analytics for production monitoring, drilling performance, and asset utilization to optimize field operations and reduce downtime.",
      examples: "Production KPIs · Refinery Performance · Asset Utilization · HSE Compliance",
      outcome: "Reduced downtime · Enhanced compliance visibility",
      icon: Droplets,
    },
    {
      industry: "Manufacturing",
      subtitle: "Plant-floor visibility and supply-chain intelligence.",
      crux: "Operational dashboards for OEE tracking, downtime root-cause analysis, and quality metrics to improve throughput and optimize planning.",
      examples: "OEE · Downtime Analysis · Quality KPIs · Inventory Visibility",
      outcome: "Higher productivity · Improved delivery reliability",
      icon: Factory,
    },
    {
      industry: "Retail & E-Commerce",
      subtitle: "Turn transaction data into merchandising and customer intelligence.",
      crux: "Sales intelligence dashboards for revenue trends, customer cohorts, and inventory movement to optimize promotions and retention.",
      examples: "Sales Trends · Customer Cohorts · Inventory Turn · Basket Analytics",
      outcome: "Smarter merchandising · Better customer retention",
      icon: ShoppingBag,
    },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center py-12 md:py-14 px-6 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={BI_HERO_IMG}
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
            Business Intelligence
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
            >
              Turning Data into Decisions, at Speed and Scale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-200/90 font-normal leading-relaxed text-pretty"
            >
              BI strategy, dashboards, and governance engineered for adoption—built on certified
              Power BI, Tableau, and Qlik expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-7xl space-y-8 text-left">
           
            <motion.div className="space-y-8 text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
              >
                Most enterprises don’t suffer from a lack of data, they suffer from a lack of
                trusted, actionable insights. Dashboards exist, but adoption is low. Reports are
                produced, but decisions still wait. Techknomatic helps organizations close that gap
                with end-to-end Business Intelligence services that combine strategy, design-led
                dashboard development, governance, and adoption, so the analytics you invest in
                actually change how the business decides.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
              >
                Built on deep, certified expertise across Power BI, Tableau, Qlik, and custom
                analytics platforms, and backed by strong data engineering capabilities, our BI
                practice goes beyond traditional reporting. We focus on building end-to-end
                analytics solutions that drive measurable business outcomes: faster decisions, higher
                adoption, defensible governance, and a single source of truth your leadership can
                rely on.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left">
        <motion.div className="max-w-7xl mx-auto">
          <motion.div className="text-left mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading mb-4"
            >
             What We Offer
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-7xl text-left"
            >
              Five core service offerings that span the full BI lifecycle, from strategy and
              roadmap to dashboard development, governance, and sustained adoption.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-8"
            >
              Tools & Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-7xl"
            >
              Deep, certified expertise across the three platforms that dominate enterprise BI, we
              recommend the right tool for your context, not the one we know best.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[3rem] bg-slate-100 ring-1 ring-slate-200/80 dark:bg-white/5 dark:ring-white/10 shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <img
                  loading="lazy"
                  src={BI_TOOLS_IMG}
                  alt="Business intelligence tools and technology"
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="rounded-2xl text-left">
              {tools.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-[60px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto relative z-10 w-full text-left">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading-on-dark mb-8"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 font-medium max-w-7xl"
            >
              A proven 5-step delivery framework that moves you from scattered reports to a trusted
              analytics environment, adoption built in from day one.
            </motion.p>
          </div>

          <motion.div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {steps.map((step, idx) => (
              <ApproachStep key={idx} {...step} delay={idx * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-7xl mx-auto text-left">
          <motion.div className="mb-10 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-8"
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-7xl text-left"
            >
              High-impact BI deployments across industries, from executive visibility
              to operational intelligence.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
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


