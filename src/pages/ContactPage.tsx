/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Send,
  MessageSquare,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: 'BI Services',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="relative pb-32 overflow-hidden bg-[#FDFDFD] dark:bg-brand-950 transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      {/* Hero Section */}
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
                <MessageSquare className="w-3.5 h-3.5" />
                Contact Us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-950 dark:text-white tracking-tight leading-[1.2] mb-6"
              >
                Let's Start a <span className="text-accent italic">Conversation</span> <br />
                about your <span className="relative inline-block mt-1">Data. <div className="absolute bottom-1.5 left-0 w-full h-2 bg-accent/10 dark:bg-accent/20 -z-10" /></span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 dark:text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
              >
                Our team is ready to help you navigate your data journey. Reach out for consultations, inquiries, or partnership opportunities.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 space-y-10"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-medium text-brand-950 dark:text-white mb-6 tracking-tight">
                  Get in touch
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-8">
                  Whether you have a specific project in mind, want to explore a proof of concept, or simply want to understand how Techknomatic can help — we'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="group">
                    <span className="block text-[12px] uppercase tracking-widest text-slate-400 font-bold mb-1">Email:</span>
                    <a href="mailto:info@techknomatic.com" className="text-xl font-medium text-brand-950 dark:text-white hover:text-accent transition-colors">
                      info@techknomatic.com
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-[12px] uppercase tracking-widest text-slate-400 font-bold mb-1">Phone:</span>
                    <a href="tel:+910000000000" className="text-xl font-medium text-brand-950 dark:text-white hover:text-accent transition-colors">
                      +91 (22) 456-7890
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-[12px] uppercase tracking-widest text-slate-400 font-bold mb-1">Address:</span>
                    <p className="text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                      123 Innovation Avenue, Suite 456<br />
                      Tech District, San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="block text-[12px] uppercase tracking-widest text-slate-400 font-bold mb-4">Follow us</span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Send, href: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand-950 dark:text-white hover:bg-brand-950 dark:hover:bg-accent hover:text-white transition-all shadow-sm"
                    >
                      <social.icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-8 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl shadow-brand-950/5"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Full Name*</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Company Name*</label>
                    <input 
                      type="text" 
                      placeholder="Your company name"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 text-sm"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Email Address*</label>
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Your phone number"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Country</label>
                    <input 
                      type="text" 
                      placeholder="Your country"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 text-sm"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">I'm interested in</label>
                    <div className="relative">
                      <select 
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all text-sm appearance-none cursor-pointer"
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      >
                        {[
                          "BI Services", "Data Engineering", "AI & GenAI", 
                          "Geospatial", "Solutions", "Accelerators", 
                          "Partnership", "Careers", "Other"
                        ].map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-brand-900 text-brand-950 dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Message*</label>
                  <textarea 
                    rows={3}
                    placeholder="Write something..."
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-accent/30 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-slate-300 resize-none text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    type="submit"
                    className="w-fit min-w-[240px] px-8 py-3.5 bg-brand-950 dark:bg-accent text-white rounded-xl font-bold tracking-[0.1em] uppercase text-[11px] hover:opacity-90 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-950/20 dark:shadow-accent/20"
                  >
                    Start the Conversation
                    <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Indicators */}
      <div className="absolute top-[20%] left-10 pointer-events-none opacity-20 dark:opacity-10 hidden xl:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-4"
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent ml-4" />
          <div className="rotate-90 text-[10px] font-bold tracking-[0.5em] uppercase text-accent">CONNECT</div>
        </motion.div>
      </div>

    </div>
  );
};
