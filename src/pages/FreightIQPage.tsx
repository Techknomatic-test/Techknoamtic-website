import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  Truck,
  Database,
  Zap,
  Clock,
  BarChart3,
  Target,
  Users,
  Search,
  Network,
  Cpu,
  Layers,
  FileText,
  Anchor,
  Server,
  Code2,
} from "lucide-react";

const FIQ_BASE = "Images/FreightIQ";

const fiqImg = (file: string) =>
  `${import.meta.env.BASE_URL}${[...FIQ_BASE.split("/"), file].map(encodeURIComponent).join("/")}`;

const FIQ_HERO = fiqImg("herobanner.jpg");
const FIQ_CHALLENGE = fiqImg("GlobalShippingTransport.jpg");

const CapabilityCard = ({
  title,
  outcome,
  items,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  outcome: string;
  items: string[];
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full text-left"
  >
    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors capitalize">
        {title}
      </h3>
      <p className="text-[13px] font-bold text-brand-950/70 dark:text-white/60 mb-6 italic leading-snug">
        {outcome}
      </p>
      <ul className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/5 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0" />
            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const UseCaseCard = ({
  title,
  subtitle,
  crux,
  focusAreas,
  outcome,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  crux: string;
  focusAreas: string;
  outcome: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all group flex flex-col h-full text-left"
  >
    <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-[15px] font-bold text-brand-950/70 dark:text-white/70 mb-8 leading-snug">
      {subtitle}
    </p>

    <div className="space-y-6 mb-10 flex-1">
      <div>
        <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {crux}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-black tracking-widest text-accent uppercase mb-3">Focus Areas</h4>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          {focusAreas}
        </p>
      </div>
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <Target className="w-4 h-4 text-accent" />
        </div>
        <p className="text-[13px] font-bold text-brand-950 dark:text-white italic">
          <span className="text-accent uppercase tracking-wider mr-2 not-italic">Outcome:</span>
          {outcome}
        </p>
      </div>
    </div>
  </motion.div>
);

const IndustryCard = ({
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
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all h-full text-left group overflow-hidden rounded-[2.5rem] flex flex-col"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent" />
    </div>
    <div className="p-10 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const FreightIQPage = () => {
  const capabilities = [
    {
      title: "Real-Time Carrier API Integration",
      outcome: "Outcome: Live carrier rates and capacity, directly in your quoting workflow.",
      items: [
        "Real-time carrier rate retrieval via API",
        "Automated pricing synchronization across carriers",
        "Multi-carrier rate comparison in a single view",
        "Dynamic availability and capacity checks",
        "Up-to-the-minute pricing accuracy",
        "Reduced manual coordination effort",
      ],
      icon: Network,
    },
    {
      title: "AI-Powered Dynamic Pricing Engine",
      outcome: "Outcome: Market-aware pricing that protects margin and stays competitive.",
      items: [
        "Demand fluctuation modeling",
        "Route and carrier capacity factoring",
        "Shipment urgency-based rate adjustment",
        "Historical pricing pattern intelligence",
        "Seasonal freight trend awareness",
        "Intelligent margin optimization",
      ],
      icon: Cpu,
    },
    {
      title: "Multi-Modal Freight Support",
      outcome: "Outcome: Unified freight pricing across every shipment type and transport mode.",
      items: [
        "LCL (Less than Container Load) pricing",
        "FCL (Full Container Load) pricing",
        "Air freight quotation support",
        "Multi-modal logistics operations",
        "Mode-specific cost factor handling",
        "Consistent pricing logic across modes",
      ],
      icon: Layers,
    },
    {
      title: "Instant Quote Generation",
      outcome: "Outcome: Customer-ready freight quotations in seconds, not hours.",
      items: [
        "Automated rate calculation across carriers",
        "Intelligent rate comparison and ranking",
        "Customer-ready quote document generation",
        "Dynamic pricing adjustments at quote time",
        "Fast sales-team turnaround",
        "Higher win rate through speed-to-quote",
      ],
      icon: Zap,
    },
    {
      title: "Historical Freight Analytics",
      outcome: "Outcome: Turn historical pricing into forward-looking decisions.",
      items: [
        "Historical rate trend analysis",
        "Carrier performance visibility",
        "Margin and shipment profitability analysis",
        "Route pricing intelligence",
        "Market trend monitoring",
        "Shipment cost optimization insights",
      ],
      icon: BarChart3,
    },
    {
      title: "Intelligent Rate Comparison",
      outcome: "Outcome: The right rate, every time, across cost, speed, and margin.",
      items: [
        "Best-cost option identification",
        "Fastest-delivery option ranking",
        "Margin impact analysis per option",
        "Carrier competitiveness benchmarking",
        "Operational efficiency visibility",
        "Decision-ready pricing recommendations",
      ],
      icon: Search,
    },
  ];

  const industries = [
    {
      title: "Freight Forwarding & 3PL",
      description:
        "Instant multi-carrier quoting and margin optimization for forwarders and 3PL providers.",
      image: fiqImg("3PL.jpg"),
    },
    {
      title: "Import & Export",
      description: "Dynamic landed-cost visibility and shipment cost estimation for global trade operations.",
      image: fiqImg("ImportExport.jpg"),
    },
    {
      title: "E-Commerce & Retail Logistics",
      description:
        "Real-time shipping cost optimization and multi-modal pricing for retail supply chains.",
      image: fiqImg("Retail.jpg"),
    },
    {
      title: "Manufacturing & Industrial",
      description: "Inbound and outbound shipment pricing automation for industrial supply chains.",
      image: fiqImg("Manufacturing.jpg"),
    },
    {
      title: "Air Cargo & Express",
      description: "Dynamic, urgency-based pricing for time-critical air and express logistics.",
      image: fiqImg("AirCargoExpress.jpg"),
    },
    {
      title: "Global Shipping & Transport",
      description: "Enterprise-wide freight pricing standardization across regions and routes.",
      image: fiqImg("GlobalShippingTransport.jpg"),
    },
  ];

  const steps = [
    {
      title: "Carrier Connectivity",
      content:
        "Real-time API integrations pull live rates, capacity, and availability from multiple carriers across modes (LCL, FCL, air, multi-modal).",
      icon: Network,
    },
    {
      title: "Pricing Intelligence Layer",
      content:
        "AI engine processes carrier inputs against demand signals, route conditions, urgency, and seasonality to generate market-aware pricing.",
      icon: Database,
    },
    {
      title: "Margin & Optimization Engine",
      content:
        "Pricing options are evaluated for cost, delivery speed, carrier competitiveness, and margin impact, surfacing the best-fit options.",
      icon: Zap,
    },
    {
      title: "Historical Analytics Engine",
      content:
        "Continuously learning layer uses historical shipment, rate, and margin data to refine pricing recommendations and surface trends.",
      icon: BarChart3,
    },
    {
      title: "Quote Generation & Delivery",
      content:
        "Customer-ready freight quotations are generated automatically and delivered to sales teams or directly to customers via integrations.",
      icon: FileText,
    },
  ];

  const stack = [
    {
      title: "Carrier Systems",
      content:
        "Direct carrier APIs · Multi-carrier aggregator integrations · Sea / Air / Road carrier connectivity.",
      icon: Anchor,
    },
    {
      title: "TMS Platforms",
      content: "Transportation Management Systems · Freight execution platforms · Custom TMS via REST.",
      icon: Truck,
    },
    {
      title: "ERP Systems",
      content: "SAP · Oracle · Microsoft Dynamics · NetSuite · Custom ERPs.",
      icon: Database,
    },
    {
      title: "CRM & Sales Platforms",
      content: "Salesforce · HubSpot · Zoho · Custom CRMs · Quote-to-cash workflows.",
      icon: Users,
    },
    {
      title: "APIs & Developer Access",
      content: "REST APIs · Webhooks · Real-time pricing endpoints · SDK access.",
      icon: Code2,
    },
    {
      title: "Data Refresh Modes",
      content: "Real-time carrier rate sync · Scheduled refresh · On-demand rate fetch.",
      icon: Clock,
    },
    {
      title: "Deployment Modes",
      content: "Cloud SaaS · Private VPC · Hybrid · On-premise (enterprise logistics).",
      icon: Server,
    },
  ];

  const useCases = [
    {
      title: "Freight Forwarding & 3PL Providers",
      subtitle: "Instant multi-carrier quoting and margin optimization for forwarders and 3PLs.",
      crux: "FreightIQ generates instant freight quotations across carriers, compares rates, and applies customer-specific pricing rules. Sales teams quote faster, manage LCL/FCL shipments centrally, and gain operational pricing intelligence that lifts both win rate and margin.",
      focusAreas:
        "Instant Quotes · Multi-Carrier Comparison · Margin Optimization · LCL/FCL Management · Sales Intelligence",
      outcome: "Faster quote turnaround · Higher win rate · Improved margin discipline",
    },
    {
      title: "Import & Export Businesses",
      subtitle: "Dynamic landed cost visibility for international trade.",
      crux: "Estimate shipment costs across international routes, optimize carrier selection for exports, and gain dynamic landed-cost visibility for container shipments. FreightIQ also supports freight budgeting and procurement analytics for cross-border trade operations.",
      focusAreas: "Landed Cost · Route Optimization · Carrier Selection · Container Pricing · Freight Budgeting",
      outcome: "Sharper cost estimation · Better trade margin · Smarter procurement",
    },
    {
      title: "E-Commerce & Retail Logistics",
      subtitle: "Real-time shipping cost optimization across the retail supply chain.",
      crux: "Optimize shipping costs in real time across multi-modal logistics, analyze regional delivery costs, and manage warehouse-to-customer shipment pricing. FreightIQ also provides peak-season freight pricing visibility for retail and D2C operations.",
      focusAreas:
        "Shipping Cost Optimization · Multi-Modal Pricing · Regional Delivery Analysis · Last-Mile Costs · Peak-Season Pricing",
      outcome: "Lower shipping spend · Better peak-season readiness · Higher fulfillment margin",
    },
    {
      title: "Manufacturing & Industrial Supply Chains",
      subtitle: "Inbound and outbound shipment pricing for industrial supply chains.",
      crux: "Automate inbound and outbound shipment pricing, compare vendor freight costs, and apply intelligent bulk cargo and container pricing. FreightIQ delivers supply chain transportation analytics and production logistics cost optimization across the industrial value chain.",
      focusAreas:
        "Inbound/Outbound Pricing · Vendor Comparison · Bulk Cargo · Supply Chain Analytics · Production Logistics",
      outcome: "Lower transportation cost · Better vendor benchmarking · Stronger supply chain visibility",
    },
    {
      title: "Air Cargo & Express Logistics",
      subtitle: "Urgency-aware pricing for time-critical air and express logistics.",
      crux: "Optimize pricing for urgent shipments, compare carrier availability and cost dynamically, and apply priority-based pricing logic. FreightIQ also enables express logistics margin analysis and international air freight quotation automation at enterprise scale.",
      focusAreas:
        "Urgent Shipment Pricing · Carrier Availability · Priority-Based Pricing · Express Margin Analysis · Air Freight Quoting",
      outcome: "Faster express quoting · Stronger margin on urgency · Better carrier match",
    },
    {
      title: "Global Shipping & Transportation Enterprises",
      subtitle: "Enterprise-wide freight pricing standardization across regions and routes.",
      crux: "Standardize freight pricing across the enterprise, monitor global route pricing intelligence, and analyze cross-region carrier performance. FreightIQ also delivers historical freight trend analysis and centralized pricing governance for global logistics networks.",
      focusAreas:
        "Enterprise Pricing Standardization · Global Route Intelligence · Cross-Region Analytics · Historical Trends · Pricing Governance",
      outcome: "Consistent global pricing · Stronger governance · Network-wide intelligence",
    },
  ];

  return (
    <div className="pt-[110px]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(50vh,480px)] items-center overflow-hidden bg-brand-950 px-6 py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={FIQ_HERO}
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
        <div className="relative z-10 mx-auto w-full max-w-7xl text-left drop-shadow-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            FreightIQ
          </motion.h1>
          <div className="max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight text-balance leading-tight"
            >
              Intelligent Freight Pricing for Faster Quotes and Higher Profitability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400 font-normal leading-relaxed text-pretty"
            >
              AI-powered dynamic freight pricing, real-time carrier rates, multi-modal support, and instant quote
              generation. Built for logistics enterprises that compete on speed and margin.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
           
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-5xl"
            >
              Every freight quote is a race against the clock. Customers expect rates in minutes. Carriers update
              pricing daily. Routes shift with seasonality, capacity, and fuel. Yet most logistics providers still build
              quotations through spreadsheets, email chains, and disconnected carrier portals, losing deals to faster
              competitors and leaving margin on the table with every shipment. The pricing operations that should drive
              profitability instead drain it.
            </motion.p>
          </div>

          <div className="grid items-center gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl lg:aspect-square"
            >
              <img
                src={FIQ_CHALLENGE}
                alt="Freight pricing challenge"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-8">
                <p className="border-l-4 border-accent pl-4 text-[15px] font-bold leading-relaxed text-white">
                  The result: slower quote turnaround, reduced competitiveness, revenue leakage through under-priced
                  shipments, higher operational overhead, and weaker customer experience, exactly when logistics buyers
                  expect faster, sharper, more transparent pricing.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6 self-start lg:pt-4">
              <div className="mb-12">
                <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight">
                  Common Operational Pain Points
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <ul className="space-y-5 list-none">
                {[
                  "Manual freight rate calculations across multiple carriers and modes",
                  "Delayed customer quote responses, hours or days, not minutes",
                  "Inconsistent pricing across carriers, regions, and sales teams",
                  "Rapidly changing market rates that spreadsheets can't keep up with",
                  "Lack of centralized pricing intelligence across the business",
                  "Difficulty optimizing margins across high-volume shipments",
                  "Limited visibility into historical pricing trends and carrier performance",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-[17px] text-brand-950 dark:text-white leading-tight">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              What FreightIQ Solves
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-brand-950 dark:text-white mb-6 leading-tight"
            >
              From manual freight pricing to intelligent real-time rate optimization. Quote faster. Optimize better.
              Scale smarter.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-5xl"
            >
              FreightIQ is an AI-powered freight pricing and rate automation platform that intelligently calculates,
              optimizes, and automates freight quotations across logistics operations. The platform combines real-time
              carrier connectivity, AI-driven dynamic pricing, multi-modal support, and historical analytics to deliver
              freight quotes in seconds, with the margin discipline of a centralized pricing function.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <CapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 "
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              Purpose-built for freight-intensive operations across the global logistics value chain.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              How FreightIQ Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-5xl"
            >
              FreightIQ is built as a layered pricing intelligence platform that connects to carrier systems in real
              time, applies AI-driven dynamic pricing logic, optimizes across cost / speed / margin, and generates
              customer-ready quotations, all within a single automated flow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-black tracking-[0.2em] text-accent/50 uppercase mb-2">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-4 group-hover:text-accent transition-colors text-left capitalize">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8"
            >
              Built to Plug Into Your Logistics Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-5xl"
            >
              FreightIQ is designed as an API-first platform that plugs into the operational systems freight businesses
              already run on. Whether you're issuing quotations from a CRM, executing shipments through a TMS, posting
              costs into an ERP, or coordinating carriers directly, FreightIQ connects without disrupting your existing
              workflows, and pushes intelligent, optimized pricing into every quote your team generates.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-accent/30 transition-all flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-brand-950 dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-[60px] px-6 bg-slate-50 dark:bg-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-brand-950 dark:text-white tracking-tight mb-8 "
            >
              Use Cases
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium italic"
            >
              High-impact deployments where FreightIQ is transforming manual pricing into intelligent rate automation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {useCases.map((uc, idx) => (
              <UseCaseCard key={idx} {...uc} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};
