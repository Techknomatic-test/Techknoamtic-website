import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";

const FAQ_IMG = "Images/FAQ";
const faqImg = (file: string) => buildAssetUrl(FAQ_IMG, file);
const FAQ_HERO_IMG = faqImg("herobanner.jpg");

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      className={`group relative overflow-hidden mb-5 rounded-3xl border transition-all duration-500 bg-white dark:bg-brand-900/40 ${
        isOpen
          ? "border-accent/20 shadow-[0_32px_64px_-16px_rgba(241,126,33,0.12)]"
          : "border-slate-100 dark:border-white/5 hover:border-accent/10 shadow-sm hover:shadow-xl hover:shadow-brand-950/5"
      }`}
    >
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
      )}

      <button onClick={onClick} className="w-full text-left focus:outline-none">
        <div
          className={`p-6 md:p-9 flex items-center justify-between gap-8 transition-colors duration-300 ${isOpen ? "pb-3" : ""}`}
        >
          <div className="flex-1 min-w-0">
            <span
              className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 block leading-snug ${isOpen ? "text-brand-950 dark:text-white" : "text-brand-950 dark:text-slate-200 group-hover:text-accent"}`}
            >
              {question}
            </span>
          </div>

          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 border ${isOpen ? "bg-accent border-transparent text-white shadow-xl shadow-accent/20 rotate-180" : "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-400 group-hover:scale-110 group-hover:border-accent/30 group-hover:text-accent"}`}
          >
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
  const [careerOpenIndex, setCareerOpenIndex] = useState<number | null>(0);
  const [contactOpenIndex, setContactOpenIndex] = useState<number | null>(null);

  const careerFaqs = [
    {
      q: "Why should I join Techknomatic Careers?",
      a: "At Techknomatic, you get the opportunity to work on real-world Data Analytics, AI, Business Intelligence, and Digital Transformation projects across multiple industries and global markets. We focus on innovation, ownership, learning, and career growth.",
    },
    {
      q: "What kind of roles does Techknomatic hire for?",
      a: "We hire for roles across: Data Engineering, Business Intelligence & Visualization, AI & Machine Learning, Geospatial Analytics, Cloud & Data Platforms, Full Stack Development, QA & Automation, Sales & Business Development, Project Management, Marketing & Operations.",
    },
    {
      q: "Do you hire freshers?",
      a: "Yes. We actively hire freshers and early-career professionals who are passionate about analytics, technology, and problem-solving.",
    },
    {
      q: "What technologies can I work on at Techknomatic?",
      a: "You may get opportunities to work on technologies like: Qlik, Microsoft Power BI, Esri, SQL & Cloud Platforms, Python & AI frameworks, Modern Data Engineering tools, Automation & Integration platforms.",
    },
    {
      q: "Does Techknomatic provide training and certifications?",
      a: "Yes. We encourage continuous learning and support employees with training programs, certifications, mentorship, and hands-on project exposure.",
    },
    {
      q: "What is the work culture like at Techknomatic?",
      a: "We promote a collaborative, growth-oriented, and innovation-driven culture where employees are encouraged to take ownership, share ideas, and grow professionally.",
    },
    {
      q: "Are there opportunities to work on international projects?",
      a: "Yes. Our teams work on projects across India, Oman, UAE, Saudi Arabia, Kuwait, and other global markets.",
    },
    {
      q: "Does Techknomatic offer hybrid or remote work options?",
      a: "Depending on the role and project requirements, we offer flexible work models including onsite, hybrid, and remote opportunities.",
    },
    {
      q: "What is the hiring process at Techknomatic?",
      a: "The hiring process typically includes: Resume Screening, Initial Discussion, Technical/Functional Assessment, Interview Rounds, Final HR Discussion.",
    },
    {
      q: "What kind of growth opportunities can I expect?",
      a: "Employees get opportunities to: Work on enterprise-scale projects, Learn emerging technologies, Move across domains and technologies, Take leadership responsibilities, Build client-facing expertise.",
    },
    {
      q: "Do you offer internship opportunities?",
      a: "Yes. We offer internship opportunities for students and graduates interested in Data Analytics, AI, BI, Software Development, and related domains.",
    },
    {
      q: "How can I apply for a job at Techknomatic?",
      a: "You can apply through the Careers page by submitting your profile or sharing your resume with our recruitment team.",
    },
    {
      q: "What qualities do you look for in candidates?",
      a: "We value: Problem-solving mindset, Willingness to learn, Ownership & accountability, Communication skills, Technical curiosity, Team collaboration.",
    },
    {
      q: "Will I get exposure to clients and real business problems?",
      a: "Yes. Our teams work closely with customers to solve real business challenges, giving employees valuable industry exposure and practical learning.",
    },
    {
      q: "Does Techknomatic support career progression internally?",
      a: "Absolutely. We believe in growing talent internally and provide opportunities for role expansion, leadership growth, and cross-functional exposure.",
    },
  ];

  const contactFaqs = [
    {
      q: "How can I contact Techknomatic?",
      a: "You can reach our team through the Contact Us form on the website, email us directly, or connect with our regional offices for business inquiries, partnerships, and support.",
    },
    {
      q: "How quickly can I expect a response?",
      a: "Our team usually responds within 24 business hours for all inquiries related to services, partnerships, demos, and support requests.",
    },
    {
      q: "Can I request a demo of your solutions?",
      a: "Yes. You can request a personalized demo for our Business Intelligence, AI, Data Engineering, Geospatial Analytics, and automation solutions.",
    },
    {
      q: "Do you provide consultation sessions before starting a project?",
      a: "Absolutely. We offer initial discovery and consultation sessions to understand your business challenges, existing systems, and analytics requirements.",
    },
    {
      q: "Can Techknomatic support projects outside Oman or India?",
      a: "Yes. We work with clients across multiple countries including Oman, UAE, Saudi Arabia, Kuwait, India, and other international markets.",
    },
    {
      q: "What types of businesses do you work with?",
      a: "We work with startups, enterprises, government organizations, and large corporations across industries such as Insurance, Oil & Gas, Banking, Manufacturing, Logistics, Retail, and Utilities.",
    },
    {
      q: "Can I contact Techknomatic for partnership opportunities?",
      a: "Yes. We welcome collaboration opportunities with technology partners, OEMs, system integrators, and consulting firms.",
    },
    {
      q: "Do you offer support for existing analytics platforms?",
      a: "Yes. We provide support, optimization, migration, and enhancement services for existing BI, Data Engineering, and AI environments.",
    },
    {
      q: "Can I request onsite meetings or workshops?",
      a: "Yes. Our team can arrange onsite meetings, workshops, capability presentations, and solution walkthroughs based on project requirements and location.",
    },
    {
      q: "Do you provide Proof of Concept (POC) services?",
      a: "Yes. We can help organizations validate use cases through pilot implementations and Proof of Concepts before full-scale deployment.",
    },
    {
      q: "What information should I share while submitting an inquiry?",
      a: "To help us respond effectively, you can share: Business requirement, Current challenges, Existing systems/tools, Project timelines, Preferred engagement model.",
    },
    {
      q: "Can I contact Techknomatic for career opportunities?",
      a: "Yes. If you are looking to join our team, you can submit your resume through the Careers page or contact our HR team directly.",
    },
    {
      q: "Does Techknomatic provide post-implementation support?",
      a: "Yes. We provide ongoing support, maintenance, enhancements, user training, and managed services after project go-live.",
    },
    {
      q: "Can Techknomatic help with technology selection and licensing?",
      a: "Yes. As implementation and OEM partners, we help organizations choose the right analytics and AI technologies along with licensing guidance.",
    },
    {
      q: "How do I schedule a meeting with your team?",
      a: "You can submit your details through the Contact Us page, and our team will coordinate a suitable time for a discussion or session.",
    },
  ];

  return (
    <PageShell className="relative overflow-hidden bg-[#FDFDFD] dark:bg-brand-950 transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <PageHero
            title={<>Got  Questions? <br />
            We've got{" "}
            <span className="relative inline-block mt-1">
              Answers.{" "}
              <span className="absolute bottom-1.5 left-0 w-full h-2 bg-accent/20 -z-10" />
            </span></>}
        description="Explore our detailed knowledge hub to find answers about our services, careers, and partnerships."
        imageSrc={FAQ_HERO_IMG}
        borderBottom={true}
        titleAnimationDelay={0.15}
        descriptionAnimationDelay={0.3}
      />

      {/* Career FAQ Section */}
      <section className="px-6 max-w-4xl mx-auto relative z-10 pt-20 pb-20">
        <div className="w-full">
          <h2 className="section-heading mb-10 text-center">
            Careers FAQs
          </h2>
          <div className="space-y-2">
            {careerFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={careerOpenIndex === i}
                onClick={() => setCareerOpenIndex(careerOpenIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ Section */}
      <section className="px-6 max-w-4xl mx-auto relative z-10 pb-0">
        <div className="w-full border-t border-slate-100 dark:border-white/5 pt-20">
          <h2 className="section-heading mb-10 text-center">
            Contact Us FAQs
          </h2>
          <div className="space-y-2">
            {contactFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={contactOpenIndex === i}
                onClick={() => setContactOpenIndex(contactOpenIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
      <PreFooterCTA />
    </PageShell>
  );
};
