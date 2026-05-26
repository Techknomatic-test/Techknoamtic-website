import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion } from "motion/react";
import { useState } from "react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  ChipAccordionItem,
  ServiceApproachStep,
  ServiceCapabilityCard,
  ServiceUseCasesSection,
} from "../components/product-page";
import {
  ShieldCheck,
  Zap,
  Activity,
  TrendingUp,
  LayoutDashboard,
  Users,
  Database,
  Search,
  Layers,
  Cpu,
} from "lucide-react";

const BI_IMG = "Images/Services/Business Intelligence";
const biImg = (file: string) => buildAssetUrl(BI_IMG, file);
const BI_HERO_IMG = biImg("hero.jpg");
const BI_TOOLS_IMG = biImg("tools-and-technology.jpg");

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
        "We put the right rules in place so your analytics stay reliable, consistent, and easy to trust at any scale.",
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
      title: "Insurance Performance & Claims Intelligence Analytics",
      subtitle: "Enterprise-wide visibility across claims, underwriting, and risk.",
      crux: "Unify claims, policy, and customer data into an executive performance cockpit for insurance leaders. Bring together settlement timelines, premium quality indicators, and agent productivity signals to strengthen oversight of claims operations and underwriting effectiveness.",
      industries:
        "Insurance · InsurTech · Health Insurance · General Insurance · Bancassurance",
      impact:
        "Significantly improved claims efficiency · Stronger underwriting control · Enhanced operational transparency",
    },
    {
      title: "ITSM & IT Ops Performance & Service Reliability Analytics",
      subtitle: "Real-time operational intelligence for enterprise IT services.",
      crux: "Consolidate SLA metrics, ticket lifecycle data, and incident patterns into a unified IT operations intelligence layer. Track adherence to service commitments, identify recurring failure themes, and surface high-risk changes to proactively strengthen service reliability and user experience.",
      industries:
        "Technology Services · Managed Services · Telecom · SaaS Providers · Enterprise IT",
      impact:
        "Remarkably higher SLA adherence · Realtime SLA reporting · Stronger service reliability",
    },
    {
      title: "Oil & Gas Production & Operations Performance Analytics",
      subtitle: "Operational visibility across midstream and downstream functions.",
      crux: "Integrate production KPIs, drilling performance, asset utilization, and safety metrics into a comprehensive operational performance view. Enable operations teams to spot underperforming assets, understand process bottlenecks, and align field activities to more reliable, compliant production outcomes.",
      industries:
        "Oil & Gas · Energy · Petrochemicals · Refining · Pipeline Operations",
      impact: "Enhanced compliance visibility · Optimized asset utilization",
    },
    {
      title: "Manufacturing OEE & Supply Chain Performance Analytics",
      subtitle: "Plant-floor visibility and supply chain intelligence.",
      crux: "Combine machine data, quality metrics, and inventory signals into a plant-level performance command center. Monitor OEE drivers, detect chronic downtime patterns, and align production planning with material availability to strengthen throughput and delivery reliability.",
      industries:
        "Discrete Manufacturing · Process Manufacturing · Automotive · Industrial Equipment · Consumer Goods",
      impact:
        "Higher productivity across lines · Significantly improved delivery reliability · Better visibility into bottlenecks",
    },
    {
      title: "Retail & E‑Commerce Sales & Customer Intelligence Analytics",
      subtitle: "Turn transaction data into merchandising and customer intelligence.",
      crux: "Blend point-of-sale, e‑commerce, and customer behavior data into a unified sales intelligence workspace. Track product performance, understand customer cohorts and journeys, and analyze inventory movement to refine merchandising, promotions, and retention strategies.",
      industries:
        "Retail · E‑Commerce · D2C Brands · Marketplaces · Omni-channel Retail",
      impact:
        "Smarter merchandising decisions · Better customer retention · Considerably improved revenue visibility",
    },
  ];

  return (
    <PageShell bare>
            <PageHero
        title="Business Intelligence"
        tagline="Turning Data into Decisions, at Speed and Scale"
        description="BI strategy, dashboards, and governance engineered for adoption—built on certified Power BI, Tableau, and Qlik expertise."
        imageSrc={BI_HERO_IMG}
      />

      {/* Intro Section */}
      <section className="py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-full space-y-8 text-left">
            <motion.div className="w-full space-y-8 text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
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
                className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
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
        <motion.div className="max-w-6xl mx-auto">
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
              className="text-lg text-slate-500 dark:text-slate-400 font-medium text-left"
            >
              Five core service offerings that span the full BI lifecycle, from strategy and
              roadmap to dashboard development, governance, and sustained adoption.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((it, idx) => (
              <ServiceCapabilityCard key={idx} {...it} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-[60px] px-6 bg-white dark:bg-brand-950 overflow-hidden text-left border-y border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
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
              className="text-lg text-slate-500 dark:text-slate-400 font-medium"
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
                <ChipAccordionItem
                  key={index}
                  variant="preview"
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
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
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
              className="text-xl text-white/50 font-medium"
            >
              A proven 5-step delivery framework that moves you from scattered reports to a trusted
              analytics environment, adoption built in from day one.
            </motion.p>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 w-full pb-12">
            {steps.map((step, idx) => (
              <ServiceApproachStep key={idx} {...step} delay={idx * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceUseCasesSection
        description="High-impact BI deployments across industries, from executive visibility to operational intelligence."
        cases={useCases}
      />

      <PreFooterCTA />
    </PageShell>
  );
};


