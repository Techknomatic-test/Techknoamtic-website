import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, ArrowUp, ArrowDown, Heart, ThumbsDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`group relative overflow-hidden mb-5 rounded-3xl border transition-all duration-500 bg-white dark:bg-brand-900/40 ${
        isOpen 
          ? 'border-accent/20 shadow-[0_32px_64px_-16px_rgba(241,126,33,0.12)]' 
          : 'border-slate-100 dark:border-white/5 hover:border-accent/10 shadow-sm hover:shadow-xl hover:shadow-brand-950/5'
      }`}
    >
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
      )}
      
      <button
        onClick={onClick}
        className="w-full text-left focus:outline-none"
      >
        <div className={`p-6 md:p-9 flex items-center justify-between gap-8 transition-colors duration-300 ${isOpen ? 'pb-3' : ''}`}>
          <div className="flex-1 min-w-0">
            <span className={`text-lg md:text-2xl font-display font-medium tracking-tight transition-colors duration-300 block leading-snug ${isOpen ? 'text-brand-950 dark:text-white' : 'text-brand-950 dark:text-slate-200 group-hover:text-accent'}`}>
              {question}
            </span>
          </div>

          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 border ${isOpen ? 'bg-accent border-transparent text-white shadow-xl shadow-accent/20 rotate-180' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-400 group-hover:scale-110 group-hover:border-accent/30 group-hover:text-accent'}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 md:px-9 pb-10">
              <div className="w-full h-px bg-slate-100 dark:bg-white/5 mb-8" />
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium tracking-[0.2px]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Techknomatic do?",
      a: "Techknomatic is a data analytics and AI consultancy. We help enterprises build BI dashboards, data platforms, AI solutions, and geospatial analytics. We work across Insurance, Manufacturing, Energy, Pharma, FMCG, and Public Sector."
    },
    {
      q: "Which industries do you serve?",
      a: "We specialize in Insurance, Manufacturing, Oil & Gas, FMCG, Pharma, Airlines, ITSM, HSE, and Public Sector across India, the Middle East, and Southeast Asia."
    },
    {
      q: "Where are you located?",
      a: "Our headquarters are in India (Pune), with regional presence in UAE and Oman. We deliver projects globally through onsite, hybrid, and offshore models."
    },
    {
      q: "What BI tools do you work with?",
      a: "We are experts in Microsoft Power BI, Tableau, and Qlik Sense. We help clients choose the right tool for their needs and maximize the value of their existing licenses."
    },
    {
      q: "Do you offer data engineering services?",
      a: "Yes. We design and build modern data architectures including cloud data warehouses (Snowflake, BigQuery, Synapse), robust ETL/ELT pipelines, and real-time streaming solutions to ensure your data is clean, reliable, and ready for analysis."
    },
    {
      q: "Can you build custom applications beyond standard dashboards?",
      a: "Absolutely. Our Custom Development practice builds bespoke BI portals, AI-powered tools, mobile analytics apps, and data integration utilities tailored to your specific processes."
    },
    {
      q: "Are you a certified Microsoft partner?",
      a: "Yes. We are a certified Microsoft Partner with expertise across Power BI, Azure Data Factory, Azure Synapse, and the broader Microsoft data stack."
    },
    {
      q: "Are you a Qlik partner?",
      a: "Yes. We are a certified Qlik Partner delivering Qlik Sense, Qlik AutoML, and embedded Qlik analytics across enterprise clients."
    },
    {
      q: "What is your ESRI partnership?",
      a: "Techknomatic is an ESRI Silver Partner, meaning we are certified to implement and integrate ESRI's ArcGIS platform for enterprise geospatial projects."
    },
    {
      q: "What is DataGuard?",
      a: "DataGuard is Techknomatic's AI-powered data reliability platform. It combines data quality monitoring, governance, AI recommendations, an autonomous data agent, and business rule management in a single platform."
    }
  ];

  return (
    <div className="relative pb-32 overflow-hidden bg-[#FDFDFD] dark:bg-brand-950 transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      {/* Hero Banner - Full Width */}
      <section className="relative mb-24 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="w-full">
          <div className="relative h-[55vh] md:h-[65vh] flex items-center justify-center group">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-white to-slate-50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,126,33,0.05),transparent)] z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.03),transparent)] z-10" />
            </div>
            
            <div className="relative z-20 text-center px-6 max-w-4xl pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.4em] text-accent uppercase bg-white dark:bg-white/5 backdrop-blur-xl rounded-full border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Help Center
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-950 dark:text-white tracking-tight leading-[1.2] mb-6"
              >
                Got <span className="text-accent italic">Questions?</span> <br />
                We've got <span className="relative inline-block mt-1">Answers. <div className="absolute bottom-1.5 left-0 w-full h-2 bg-accent/10 dark:bg-accent/20 -z-10" /></span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 dark:text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
              >
                Explore our detailed knowledge hub to find answers about our services and technical stack.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="px-6 max-w-4xl mx-auto relative z-10">
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-950 dark:text-white mb-10 text-center tracking-tight">General Questions</h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                question={faq.q} 
                answer={faq.a} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
