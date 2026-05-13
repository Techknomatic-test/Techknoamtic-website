import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PreFooterCTA = () => {
  return (
    <section className="py-[120px] bg-slate-100 dark:bg-white/5 px-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-950 dark:bg-white rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/20"
        >
          Let's Build Together
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-normal text-brand-950 dark:text-white tracking-tight leading-[1.1] mb-12"
        >
          Tell us about your challenge. <br />
          We'll tell you exactly how we'd approach it.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-accent text-white font-medium rounded-2xl hover:bg-accent/90 transition-all shadow-2xl flex items-center gap-3 group active:scale-95"
          >
            Contact Us{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/#solutions"
            className="px-8 py-3.5 bg-transparent border-2 border-brand-950 dark:border-white text-brand-950 dark:text-white font-medium rounded-2xl hover:bg-brand-950/5 dark:hover:bg-white/10 transition-all flex items-center gap-3 group active:scale-95"
          >
            Our Solutions{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
