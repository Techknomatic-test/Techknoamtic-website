import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { SectionIcon } from "../components/SectionIcon";
import {
  IndustryUseCasesSection,
  ServiceImageCapabilityCard,
} from "../components/product-page";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Users,
  ShieldCheck,
  BarChart3,
  Stethoscope,
  Heart,
  Microscope,
  FileText,
  Clock,
  RefreshCw,
  Search,
  Monitor
} from "lucide-react";

export const HealthcareAnalyticsPage = () => {
  const capabilities = [
    {
      title: "Patient Journey Analytics",
      description: "Analyze the end-to-end patient lifecycle to improve outcomes and reduce operational friction.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Clinical Decision Support",
      description: "Real-time AI insights to assist clinicians with diagnostic accuracy and treatment planning.",
      image: "https://images.unsplash.com/photo-1579154238328-341efef8008d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Population Health Mgmt",
      description: "Identify at-risk populations and optimize preventative care strategies across communities.",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Operational Efficiency",
      description: "Optimize hospital staffing, bed utilization, and emergency room throughput with predictive models.",
      image: "https://images.unsplash.com/photo-1519494140681-891f9302e4eb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Revenue Cycle Analytics",
      description: "Minimize claims denials and optimize billing cycles through automated data reconciliation.",
      image: "https://images.unsplash.com/photo-1454165833762-b104c18c942e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Adherence & Remote Care",
      description: "Monitor patient adherence and vitals through integrated IoT and wearable data streams.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const results = [
    { label: "Improvement in patient throughput", value: "20-30%" },
    { label: "Reduction in readmission rates", value: "15%" },
    { label: "Claims processing speedup", value: "5x" },
  ];

  const useCases = [
    {
      title: "Population Health Engine",
      subtitle: "Identifying at-risk communities with precision",
      crux: "Unified fragmented EMR and social determinants of health data for a large provider. Enabled automated identification of patients requiring preventative care interventions.",
      industries: "Provider · Community Health",
      impact: "15% Lower Readmissions",
    },
    {
      title: "Hospital Thruput Optimization",
      subtitle: "Reducing wait times through predictive bed mgmt",
      crux: "Deployed a real-time bed utilization and staffing optimizer. Analyzed historical ER patterns and current ward occupancy to predict staffing needs 24 hours in advance.",
      industries: "Hospital Operations · Emergency",
      impact: "25% Higher Throughput",
    },
    {
      title: "Claims Reconciliation AI",
      subtitle: "Automating claims intake and audit loops",
      crux: "Re-engineered the revenue cycle with automated claims reconciliation. Used AI to surface audit-ready evidence and identify common payer denial patterns early.",
      industries: "Healthcare Finance · Payer",
      impact: "5x Faster Processing",
    },
  ];

  return (
    <PageShell bare>
            <PageHero
        title="Healthcare Analytics"
        tagline="Intelligent Healthcare Operations, Data-Driven Outcomes for a Healthier World."
        description="Techknomatic's healthcare intelligence platform that bridges the gap between clinical data and actionable operational clarity."
      />

      {/* Intro Section */}
      <section className="py-[40px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl space-y-8 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              Healthcare systems are under unprecedented pressure to deliver better outcomes with fewer resources. Techknomatic's Healthcare Analytics suite provides the digital foundation needed to transform fragmented EMR, clinical, and operational data into a unified platform for intelligence. By leveraging advanced data engineering and AI, we help providers move from reactive care to proactive health management.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              The complexity of healthcare data often hides the very insights needed to improve patient lives. Our solutions bridge this visibility gap, providing real-time clinical decision support and operational optimization. Whether it's reducing emergency department wait times or improving medication adherence, FreightIQ empowers healthcare leaders to make data-backed decisions that count.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-[40px] px-6 bg-slate-50/50 dark:bg-brand-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-black tracking-[0.3em] text-accent uppercase mb-4"
            >
              WHAT WE OFFER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              Healthcare Analytics Capabilities
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((it, idx) => (
              <ServiceImageCapabilityCard
                key={idx}
                {...it}
                delay={idx * 0.1}
                imageHeightClassName="h-48"
                imageHoverClassName="group-hover:scale-110"
                showImageGradient
              />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach Section */}
      <section className="py-[40px] px-6 bg-[#020617] dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 w-full text-left">
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading-on-dark mb-6"
            >
              Delivery Approach
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-xl text-white/60 font-medium max-w-2xl"
            >
              Our automated deployment framework ensures you go live with minimal friction.
            </motion.p>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto lg:overflow-x-visible pb-12 gap-6 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step * 0.1 }}
                className="relative flex-1 min-w-[240px] p-8 rounded-[2.5rem] bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                  0{step}
                </div>
                <SectionIcon icon={RefreshCw} size="md" hover="rotate" className="mb-8" />
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {step === 1 ? "Assess" : step === 2 ? "Architect" : step === 3 ? "Automate" : step === 4 ? "Action" : "Accelerate"}
                </h3>
                <p className="text-[13px] font-medium text-white/40 leading-relaxed px-2 border-l-2 border-accent/20">
                  {step === 1 ? "Inventory clinical data sources and legacy endpoints." : step === 2 ? "Design HIPAA-compliant vendor-neutral architecture." : step === 3 ? "Deploy automated ETL and data-cleansing pipelines." : step === 4 ? "Serve real-time insights to clinicians and ops." : "Continuously tune models for clinical accuracy."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryUseCasesSection badge="Clinical Case Studies" cases={useCases} />

      <PreFooterCTA />
    </PageShell>
  );
};
