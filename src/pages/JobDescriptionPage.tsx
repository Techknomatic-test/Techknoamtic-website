import { motion } from "motion/react";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Upload,
  Send,
  Calendar,
  Clock
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for display - in a real app this would fetch based on jobId
  const jobDetails = {
    title: "BI Consultant",
    location: "Pune / Mumbai",
    type: "Full-time",
    posted: "2 days ago",
    description: "We are looking for a passionate BI Consultant to join our elite team. You will be responsible for designing and implementing complex business intelligence solutions that help our clients transform their data into competitive advantages.",
    aboutRole: "As a BI Consultant at Techknomatic, you'll be at the forefront of data innovation. You won't just build reports; you'll partner with business leaders to identify core challenges and architect solutions that drive growth. This role requires a blend of technical mastery and consulting finesse.",
    responsibilities: [
      "Collaborate with stakeholders to understand business requirements and translate them into technical specifications.",
      "Design, develop, and maintain high-performance BI dashboards and interactive reports.",
      "Develop and optimize complex SQL queries and data models for maximum efficiency.",
      "Conduct data profiling and quality assessments to ensure accurate reporting.",
      "Stay abreast of emerging BI trends and technologies to provide innovative solutions.",
      "Mentor junior team members and contribute to the internal knowledge base."
    ],
    requirements: [
      "2-5 years of experience in Business Intelligence or Data Analytics.",
      "Expertise in Qlik Sense, Power BI, or similar enterprise BI tools.",
      "Strong proficiency in SQL and data modeling concepts.",
      "Excellent communication and presentation skills.",
      "Problem-solving mindset with a focus on business impact.",
      "Bachelor's degree in Computer Science, Data Science, or a related field."
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-950 transition-colors duration-500 pt-[110px] pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/careers" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-accent transition-colors mb-12 font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Opportunities
        </Link>

        {/* Hero Area */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Open Position
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-950 dark:text-white tracking-tight mb-8">
            {jobDetails.title}
          </h1>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-5 h-5 text-accent" />
              {jobDetails.location}
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <Briefcase className="w-5 h-5 text-accent" />
              {jobDetails.type}
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <Calendar className="w-5 h-5 text-accent" />
              Posted {jobDetails.posted}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - 7 Columns */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Job Description */}
            <section>
              <h2 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Job Description
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {jobDetails.description}
              </p>
            </section>

            {/* About the role */}
            <section>
              <h2 className="text-2xl font-bold text-brand-950 dark:text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                About the role
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {jobDetails.aboutRole}
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-brand-950 dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Responsibilities
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {jobDetails.responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-brand-900/50 border border-slate-100 dark:border-white/5 group hover:border-accent/30 transition-all">
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

            {/* Job Requirement */}
            <section>
              <h2 className="text-2xl font-bold text-brand-950 dark:text-white mb-8 tracking-tight flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Job Requirement
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {jobDetails.requirements.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-brand-900/50 border border-slate-100 dark:border-white/5 group hover:border-accent/30 transition-all">
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

          {/* Right Column - 5 Columns - Form */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 dark:bg-brand-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-2xl shadow-brand-950/5 relative overflow-hidden"
            >
              {/* Form Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-950 dark:text-white mb-2 tracking-tight">
                  Apply for this position
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
                  Fill out the form below to submit your application.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Mobile Number */}
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

                  {/* Resume Upload */}
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

                  {/* Submit Button */}
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-accent text-white rounded-xl font-black tracking-widest uppercase text-[12px] hover:bg-accent/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Application <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4">
                    By submitting, you agree to our privacy policy and terms of recruitment.
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
