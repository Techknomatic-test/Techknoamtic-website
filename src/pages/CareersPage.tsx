/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  Zap, 
  Settings, 
  MapPin, 
  Clock, 
  DollarSign,
  ChevronDown,
  Plus,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const JobCard = ({ title, type, location, salary, description, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="px-3 py-1 rounded-full bg-orange-50 dark:bg-accent/10 border border-orange-100 dark:border-accent/20 text-[10px] font-bold text-accent uppercase tracking-wider">
        {salary}/mo
      </div>
    </div>
    <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-3 group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-4 text-[12px] font-medium text-slate-400">
      <div className="flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full ${type === 'Full Time' ? 'bg-green-500' : type === 'Freelance' ? 'bg-blue-500' : 'bg-orange-500'}`} />
        {type}
      </div>
      <div className="flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5" />
        {location}
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-all duration-300 rounded-2xl ${isOpen ? 'bg-slate-50 dark:bg-white/[0.03]' : 'hover:bg-slate-50/50 dark:hover:bg-white/[0.02]'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-6 text-left group"
      >
        <span className={`text-[15px] font-bold transition-colors ${isOpen ? 'text-accent' : 'text-brand-950 dark:text-white group-hover:text-accent'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-brand-950 dark:bg-accent border-transparent text-white rotate-45' : 'text-slate-400 group-hover:border-accent group-hover:text-accent'}`}>
          <Plus className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-slate-500 dark:text-slate-400 text-[14px] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CareersPage = () => {
  return (
    <div className="relative pb-32 overflow-hidden bg-[#FAFAFA] dark:bg-brand-950 transition-colors duration-500">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-[200px] pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-medium text-brand-950 dark:text-white leading-[1] tracking-tighter"
              >
                Join our team and <br />
                <span className="text-slate-400 dark:text-slate-500 italic font-light">reshape the future</span>
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed font-medium">
                Work with talented people who challenge the status quo, push boundaries, and create solutions that shape the future of modern business.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-950/5 mb-40"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670" 
              alt="Our Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Working with us Section */}
      <section className="relative px-6 mb-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
             <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6">
               <Briefcase className="w-5 h-5 text-brand-950 dark:text-white" />
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-950 dark:text-white mb-6">Working with us</h2>
             <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
               Discover a workplace where your skills are recognized, your voice matters, and your contributions shape the future of our platform.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Culture", description: "A supportive environment where collaboration and respect shape every project and interaction.", icon: Users, bg: "bg-white dark:bg-white/5", text: "text-brand-950 dark:text-white" },
              { title: "Growth", description: "Opportunities to learn, evolve, and take on challenges that accelerate your professional journey.", icon: TrendingUp, bg: "bg-slate-100 dark:bg-white/10", text: "text-brand-950 dark:text-white" },
              { title: "Impact", description: "Meaningful contributions that directly influence how businesses operate and scale.", icon: Zap, bg: "bg-orange-50 dark:bg-accent/20", text: "text-brand-950 dark:text-white" },
              { title: "Tools", description: "A modern setup designed to help you work efficiently, stay focused, and deliver your best work.", icon: Settings, bg: "bg-slate-900 dark:bg-white/5", text: "text-white" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${feature.bg} p-8 rounded-[2rem] border border-slate-100/50 dark:border-white/5 min-h-[350px] flex flex-col shadow-sm`}
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.title === 'Tools' ? 'bg-white/10' : 'bg-white dark:bg-white/5 shadow-md flex items-center justify-center mb-auto border border-slate-100 dark:border-white/10'}`}>
                   <div className="w-full h-full flex items-center justify-center">
                     <feature.icon className={`w-6 h-6 ${feature.title === 'Tools' ? 'text-white' : 'text-slate-600 dark:text-white'}`} />
                   </div>
                </div>
                <div className="mt-auto">
                  <h4 className={`text-2xl font-bold mb-4 ${feature.text}`}>{feature.title}</h4>
                  <p className={`text-sm font-medium leading-relaxed opacity-70 ${feature.text}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative px-6 mb-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
             <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6">
               <Briefcase className="w-5 h-5 text-brand-950 dark:text-white" />
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-950 dark:text-white mb-4">Open positions</h2>
             <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
               Browse our current openings and see how you can contribute to our expanding mission.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <JobCard 
              title="Senior Product Designer"
              type="Full Time"
              location="Los Angeles"
              salary="$6000"
              description="Lead the design of intuitive, scalable interfaces across our core platform. Collaborate with product managers and engineers."
              icon={Sparkles}
              color="bg-purple-500"
            />
            <JobCard 
              title="Website Designer"
              type="Full Time"
              location="Los Angeles"
              salary="$4000"
              description="Drive the evolution of our design system and elevate our visual standards. Transform ideas into stunning web experiences."
              icon={Users}
              color="bg-blue-500"
            />
            <JobCard 
              title="Senior Solution Architect"
              type="Full Time"
              location="New York"
              salary="$9000"
              description="Implement scalable, high-performance solutions that meet business needs. Collaborate with stakeholders to define requirements."
              icon={Settings}
              color="bg-orange-500"
            />
            <JobCard 
              title="Fullstack Developer"
              type="Freelance"
              location="New York"
              salary="$7500"
              description="Build and maintain web applications, handling both front-end and back-end development. Proficiency in React and Node.js."
              icon={Zap}
              color="bg-green-500"
            />
            <JobCard 
              title="Frontend Developer"
              type="Internship"
              location="Los Angeles"
              salary="$2500"
              description="Create engaging, responsive user interfaces that deliver seamless experiences. Work closely with our senior dev team."
              icon={Clock}
              color="bg-yellow-500"
            />
            <JobCard 
              title="Project Manager"
              type="Full Time"
              location="San Diego"
              salary="$7500"
              description="Plan, coordinate, and oversee projects to ensure timely delivery and quality outcomes. Strong communication skills required."
              icon={TrendingUp}
              color="bg-red-500"
            />
          </div>
        </div>
      </section>

      {/* Community FAQ Section */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-950 dark:text-white mb-6">Community FAQ's</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-8">
                All your spending, subscriptions, and financial insights wrapped in one place, fully under your control.
              </p>
              <a href="/faq" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                Visit our help center <ChevronDown className="-rotate-90 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[2.5rem] p-4 md:p-6 shadow-2xl shadow-slate-200/40 dark:shadow-none">
              <FAQItem 
                question="Is the account functional right away?" 
                answer="Yes, once your application is approved and setup is complete, you can begin using all our platform features immediately."
              />
              <FAQItem 
                question="Can I cancel my subscription anytime?" 
                answer="We offer flexible month-to-month contracts. You can cancel your subscription at the end of any billing cycle without penalty."
              />
              <FAQItem 
                question="Can I have multiple workspaces with the free plan?" 
                answer="Our basic tier allows for one primary workspace. For multiple collaborative spaces, please check our Professional or Enterprise plans."
              />
              <FAQItem 
                question="Are there any hidden fees?" 
                answer="Transparency is key. All our pricing tiers are clearly defined with no hidden costs. Optional add-ons are clearly marked."
              />
              <FAQItem 
                question="Are there any transaction limits?" 
                answer="Limits depend on your plan level and verification status. Enterprise clients can request custom limit increases."
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
