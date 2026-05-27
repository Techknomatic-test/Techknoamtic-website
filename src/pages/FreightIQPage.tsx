import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  CapabilityGridSection,
  PainPointsSection,
  PlatformCapabilityCard,
  ProcessStepsSection,
  UseCasesSection,
} from "../components/product-page";
import {
  Database,
  Zap,
  BarChart3,
  Search,
  Network,
  Cpu,
  Layers,
  FileText,
} from "lucide-react";

const FIQ_BASE = "Images/FreightIQ";
const fiqImg = (file: string) => buildAssetUrl(FIQ_BASE, file);

const FIQ_HERO = fiqImg("herobanner.jpg");
const FIQ_CHALLENGE = fiqImg("GlobalShippingTransport.jpg");

const FIQ_INTRO =
  "Every freight quote is a race against the clock. Customers expect rates in minutes. Carriers update pricing daily. Routes shift with seasonality, capacity, and fuel. Yet most logistics providers still build quotations through spreadsheets, email chains, and disconnected carrier portals, losing deals to faster competitors and leaving margin on the table with every shipment. The pricing operations that should drive profitability instead drain it.";

const FIQ_PAIN_ITEMS = [
  "Manual freight rate calculations across multiple carriers and modes",
  "Delayed customer quote responses, hours or days, not minutes",
  "Inconsistent pricing across carriers, regions, and sales teams",
  "Rapidly changing market rates that spreadsheets can't keep up with",
  "Lack of centralized pricing intelligence across the business",
  "Difficulty optimizing margins across high-volume shipments",
  "Limited visibility into historical pricing trends and carrier performance",
];

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
    <PageShell bare>
            <PageHero
        title="FreightIQ"
        tagline="Intelligent Freight Pricing for Faster Quotes and Higher Profitability"
        description="AI-powered dynamic freight pricing, real-time carrier rates, multi-modal support, and instant quote generation. Built for logistics enterprises that compete on speed and margin."
        imageSrc={FIQ_HERO}
        sectionBg="bg-brand-950"
      />

      <PainPointsSection
        intro={FIQ_INTRO}
        imageSrc={FIQ_CHALLENGE}
        imageAlt="Freight pricing challenge"
        items={FIQ_PAIN_ITEMS}
        asList
        bulletClassName="text-[17px] text-brand-950 dark:text-white leading-tight"
        imageWrapperClassName="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl lg:aspect-square"
      />

      <CapabilityGridSection
        title="What FreightIQ Solves"
        tagline="From manual freight pricing to intelligent real-time rate optimization. Quote faster. Optimize better. Scale smarter."
        description="FreightIQ is an AI-powered freight pricing and rate automation platform that intelligently calculates, optimizes, and automates freight quotations across logistics operations. The platform combines real-time carrier connectivity, AI-driven dynamic pricing, multi-modal support, and historical analytics to deliver freight quotes in seconds, with the margin discipline of a centralized pricing function."
      >
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard key={it.title} {...it} delay={idx * 0.1} titleClassName="capitalize" />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How FreightIQ Works"
        description="FreightIQ is built as a layered pricing intelligence platform that connects to carrier systems in real time, applies AI-driven dynamic pricing logic, optimizes across cost / speed / margin, and generates customer-ready quotations, all within a single automated flow."
        steps={steps}
      />
      <UseCasesSection
        description="High-impact deployments where FreightIQ is transforming manual pricing into intelligent rate automation."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
