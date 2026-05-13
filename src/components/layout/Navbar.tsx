import { ArrowUpRight, Mail, Menu, Minus, Moon, Plus, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navData } from '../../config/navigation';
import { NavDropdown } from './NavDropdown';

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
};

const mobileLinkClass =
  'flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-[15px] font-bold text-slate-700 dark:text-white hover:bg-accent/10 hover:text-accent transition-all border border-transparent hover:border-accent/20';

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const renderMobileItem = (item: (typeof navData.services)[0]) => {
    if (item.href === '#') {
      return (
        <a
          key={item.label}
          href="#"
          className={mobileLinkClass}
          onClick={(e) => e.preventDefault()}
        >
          {item.icon && <item.icon className="w-5 h-5 text-accent" />}
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.label} to={item.href} className={mobileLinkClass}>
        {item.icon && <item.icon className="w-5 h-5 text-accent" />}
        {item.label}
      </Link>
    );
  };

  const mobileSection = (key: string, title: string, items: typeof navData.services) => (
    <div className="border-b border-slate-100 dark:border-white/5 pb-4">
      <button
        type="button"
        onClick={() => toggleSection(key)}
        className="w-full flex items-center justify-between py-4 px-1 group"
      >
        <h3 className="text-[12px] font-black tracking-[0.3em] text-accent uppercase">{title}</h3>
        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-accent transition-all">
          {expandedSection === key ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {expandedSection === key && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2 pt-2 pb-4">{items.map((item) => renderMobileItem(item))}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex min-w-0 items-center justify-between gap-3 px-4 sm:px-6 py-3 transition-all duration-500 rounded-2xl ${isScrolled ? 'w-[90%] lg:w-[85%] xl:w-[80%] glass shadow-xl border-slate-200/50 dark:border-white/10' : 'w-[94%] lg:w-[96%] xl:w-[85%] bg-transparent border-transparent'}`}
      >
        <Link
          to="/"
          aria-label="Techknomatic home"
          className={`relative block h-9 shrink-0 overflow-hidden rounded-lg bg-[url('/Images/TKS-logo.png')] bg-contain bg-left bg-no-repeat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-950 sm:h-10 ${isScrolled ? 'w-[min(160px,38vw)] sm:w-[176px] lg:w-[196px]' : 'w-[min(180px,42vw)] sm:w-[200px] lg:w-[220px]'}`}
        >
          <span className="sr-only">Techknomatic</span>
        </Link>

        <div className="hidden min-w-0 flex-1 justify-end lg:flex">
          <div
            className={`scrollbar-hide flex max-w-full flex-nowrap items-center overflow-x-auto text-[13px] xl:text-[14px] font-medium text-slate-600 dark:text-slate-300 ${isScrolled ? 'gap-3 xl:gap-4' : 'gap-4 xl:gap-7'}`}
          >
            <NavDropdown title="Services" items={navData.services} />
            <NavDropdown title="Enterprise AI" items={navData.enterpriseAI} />
            <NavDropdown title="Platforms" items={navData.platforms} />
            <NavDropdown title="Industries" items={navData.industries} />
            <NavDropdown title="About Us" items={navData.aboutUs} />
            <NavDropdown title="Resources" items={navData.resources} />
            <Link
              to="/contact"
              className="shrink-0 whitespace-nowrap hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:text-accent transition-all border border-transparent hover:border-accent/30 hidden sm:flex"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/contact"
            className="hidden sm:flex px-4 xl:px-6 py-2.5 text-[13px] xl:text-[14px] font-medium bg-accent text-white rounded-xl hover:bg-accent/90 transition-all group items-center gap-2 shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            Start a Conversation{' '}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 lg:hidden rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:text-accent transition-all border border-transparent hover:border-accent/30"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-brand-950 lg:hidden overflow-y-auto px-6 pt-[120px] pb-12"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                {mobileSection('services', 'Services', navData.services)}
                {mobileSection('enterpriseAI', 'Enterprise AI', navData.enterpriseAI)}
                {mobileSection('platforms', 'Platforms', navData.platforms)}
                {mobileSection('industries', 'Industries', navData.industries)}
                {mobileSection('aboutUs', 'About Us', navData.aboutUs)}
                {mobileSection('resources', 'Resources', navData.resources)}

                <Link to="/contact" className={mobileLinkClass}>
                  <Mail className="w-5 h-5 text-accent" />
                  Contact Us
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-full p-5 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white font-bold flex items-center justify-between transition-all"
                >
                  <span className="text-[15px]">Appearance</span>
                  <div className="flex items-center gap-2">
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span className="capitalize">{theme}</span>
                  </div>
                </button>

                <Link
                  to="/contact"
                  className="w-full py-5 bg-accent text-white rounded-2xl font-black tracking-widest uppercase text-[12px] flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
                >
                  Start a Conversation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed top-8 right-8 p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
