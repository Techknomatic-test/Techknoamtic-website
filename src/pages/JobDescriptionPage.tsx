import { motion } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  CheckCircle2,
  Upload,
  Send,
  Calendar,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getCareerJobById } from "../data/careersJobs";

export const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const jobDetails = getCareerJobById(jobId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
    }, 1500);
  };

  if (!jobDetails) {
    return (
      <div className="min-h-screen bg-white dark:bg-brand-950 transition-colors duration-500 pt-[110px] pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-accent transition-colors mb-12 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Opportunities
          </Link>
          <h1 className="section-heading mb-4">
            Role not found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
            This job posting may have been removed or the link is incorrect.
          </p>
          <Link
            to="/careers"
            className="inline-flex px-8 py-4 bg-accent text-white rounded-xl font-black tracking-widest uppercase text-[12px] hover:bg-accent/90 transition-all"
          >
            View open roles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-950 transition-colors duration-500 pt-[110px] pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-accent transition-colors mb-12 font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Opportunities
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Open Position
          </div>
          <h1 className="section-heading mb-8">
            {jobDetails.title}
          </h1>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-5 h-5 text-accent" />
              {jobDetails.location}
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <Briefcase className="w-5 h-5 text-accent" />
              {jobDetails.type} · {jobDetails.exp}
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <Calendar className="w-5 h-5 text-accent" />
              Posted {jobDetails.posted}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {jobDetails.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-lg text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider border border-slate-100 dark:border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="section-heading mb-6 flex items-center gap-3">
                Job Description
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {jobDetails.description}
              </p>
            </section>

            <section>
              <h2 className="section-heading mb-6 flex items-center gap-3">
                About the role
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {jobDetails.aboutRole}
              </p>
            </section>

            <section>
              <h2 className="section-heading mb-8 flex items-center gap-3">
                Responsibilities
              </h2>
              <ul className="grid grid-cols-1 gap-4 list-none m-0 p-0">
                {jobDetails.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-brand-900/50 border border-slate-100 dark:border-white/5 group hover:border-accent/30 transition-all"
                  >
                    <span
                      className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/40"
                      aria-hidden
                    />
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="section-heading mb-8 flex items-center gap-3">
                Job Requirement
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {jobDetails.requirements.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-brand-900/50 border border-slate-100 dark:border-white/5 group hover:border-accent/30 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 dark:bg-brand-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-2xl shadow-brand-950/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full -mr-16 -mt-16" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 tracking-tight">
                  Apply for {jobDetails.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
                  Fill out the form below to submit your application.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/5 focus:border-accent/50 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-white/10 text-brand-950 dark:text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      Your Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/5 focus:border-accent/50 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-white/10 text-brand-950 dark:text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      Mobile Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-brand-950 border border-slate-100 dark:border-white/5 focus:border-accent/50 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-white/10 text-brand-950 dark:text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      Upload Resume
                    </label>
                    <div className="relative group/upload">
                      <input
                        required
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                      <div className="w-full px-6 py-8 rounded-xl bg-white dark:bg-brand-950 border-2 border-dashed border-slate-100 dark:border-white/5 group-hover/upload:border-accent/50 group-hover/upload:bg-accent/5 transition-all text-center flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover/upload:text-accent group-hover/upload:bg-white dark:group-hover/upload:bg-brand-950 transition-all">
                          <Upload className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 group-hover/upload:text-accent">
                          Drag & drop or click to upload PDF/DOCX
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 bg-accent text-white rounded-xl font-black tracking-widest uppercase text-[12px] hover:bg-accent/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Application{" "}
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4">
                    By submitting, you agree to our privacy policy and terms of
                    recruitment.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
