import { Activity, ChevronRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-[100px] px-6 lg:px-12 bg-brand-950 border-t border-white/5 transition-colors duration-500 overflow-hidden text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-950 shadow-xl shadow-white/5">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl font-display font-bold tracking-tight text-white block leading-none">
                  TECHKNOMATIC
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mt-1 block">
                  Specialist Analytics & AI Consultancy
                </span>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-6 text-base mx-auto md:mx-0">
              Techknomatic empowers teams to transform raw data into clear, compelling visuals —
              making insights easier to share, understand, and act on.
            </p>
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">
              India · UAE · Oman
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-16">
            <div>
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">
                Product
              </h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  { label: 'Business Intelligence', href: '/bi-services' },
                  { label: 'Data Engineering', href: '/data-engineering' },
                  { label: 'AI & GenAI', href: '/ai-services' },
                  { label: 'Geospatial Analytics', href: '/geospatial-analytics' },
                  { label: 'Custom Development', href: '/custom-development' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">
                Resources
              </h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  { label: 'Insurance', href: '/insurance-analytics' },
                  { label: 'Manufacturing', href: '/manufacturing-analytics' },
                  { label: 'FMCG', href: '/fmcg-analytics' },
                  { label: 'Oil & Gas', href: '/refinery-operations' },
                  { label: 'Airlines', href: '/airlines-analytics' },
                  { label: 'ITSM', href: '/itsm-analytics' },
                  { label: 'HSE', href: '/hse-analytics' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">
                Company
              </h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Partnerships', href: '/partnerships' },
                  { label: 'Our Story', href: '/about' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-[14px] font-medium">
            © {new Date().getFullYear()} Techknomatic. All rights reserved. Precision in every byte.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-[14px] font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
