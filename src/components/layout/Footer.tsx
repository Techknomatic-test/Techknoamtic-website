import { ChevronRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navData } from '../../config/navigation';
import type { NavItem } from '../../types/navigation';

const footerLinkLabel = (item: NavItem): string => {
  const labels: Record<string, string> = {
    'AssistIQ - AI Agents/Avatar for Intelligent Self-Service': 'AssistIQ',
    'TicketIQ - AI Agents for Intelligent Ticket Handling': 'TicketIQ',
    'CallOps AI - AI-Powered Call Operations': 'CallOps AI',
    'CXO Nexus - Conversational AI for CXOs': 'CXO Nexus',
    INSURANCE: 'Insurance',
    'OIL & GAS': 'Oil & Gas',
    'IT SERVICE MANAGEMENT (ITSM)': 'ITSM',
    MANUFACTURING: 'Manufacturing',
    'Geospatial Analytics': 'Geospatial Analytics',
  };
  return labels[item.label] ?? item.label;
};

const footerQuickLinks = [
  { label: 'About the Company', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Customer Stories', href: '#' },
  { label: 'Contact Us', href: '/contact' },
];

const FooterQuickLinksNav = () => (
  <nav
    aria-label="Footer quick links"
    className="flex flex-nowrap items-center justify-start gap-0 overflow-x-auto text-[13px] sm:text-[14px] font-medium text-slate-400 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
  >
    {footerQuickLinks.map((link, index) => (
      <span key={link.label} className="inline-flex shrink-0 items-center">
        {index > 0 && (
          <span className="mx-2 sm:mx-3 text-white/25 select-none" aria-hidden>
            |
          </span>
        )}
        <Link to={link.href} className="whitespace-nowrap hover:text-accent transition-colors">
          {link.label}
        </Link>
      </span>
    ))}
  </nav>
);

const FooterColumn = ({ title, items }: { title: string; items: NavItem[] }) => (
  <div className="w-max shrink-0">
    <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-6">{title}</h5>
    <ul className="grid grid-cols-[max-content_auto] gap-x-2 gap-y-5 items-center text-[14px] font-medium text-slate-400">
      {items.map((item) => (
        <li key={item.label} className="contents group">
          <Link to={item.href} className="contents">
            <span className="whitespace-nowrap transition-colors group-hover:text-accent">
              {footerLinkLabel(item)}
            </span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="py-14 md:py-16 lg:py-20 px-6 lg:px-12 bg-brand-950 border-t border-white/5 transition-colors duration-500 overflow-hidden text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto_auto] gap-y-6 md:gap-x-8 lg:gap-x-16 md:gap-y-6 mb-0">
          <div className="md:col-span-5 md:row-start-1 order-1">
            <Link
              to="/"
              aria-label="Techknomatic home"
              className="mb-6 inline-flex justify-center md:justify-start rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
            >
              <img
                src={`${import.meta.env.BASE_URL}Images/home/footer-logo.png`}
                alt="Techknomatic — Technology, Knowledge, Analytics"
                className="h-14 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-16"
              />
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-4 text-base mx-auto md:mx-0">
              Techknomatic empowers teams to transform raw data into clear, compelling visuals — making
              insights easier to share, understand, and act on.
            </p>
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
              India · UAE · Oman · USA
            </div>
          </div>

          <div className="md:col-span-5 md:row-start-2 order-2">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              {[
                {
                  icon: Linkedin,
                  href: 'https://in.linkedin.com/company/techknomatic-services-private-limited',
                  label: 'Techknomatic on LinkedIn',
                  external: true,
                },
                { icon: Mail, href: '#', label: 'Email Techknomatic', external: false },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-12 md:row-start-3 order-3 border-t border-white/5 pt-4 pb-4 min-w-0">
            <FooterQuickLinksNav />
          </div>

          <div className="md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1 order-4 flex flex-col md:flex-row md:flex-wrap items-start gap-y-10 gap-x-12 lg:gap-x-16">
            <FooterColumn title="Services" items={navData.services} />
            <FooterColumn title="Enterprise AI" items={navData.enterpriseAI} />
            <FooterColumn title="Platforms" items={navData.platforms} />
            <FooterColumn title="Industries" items={navData.industries} />
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
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
