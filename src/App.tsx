/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  ChevronRight,
  ArrowUpRight,
  ChevronDown,
  Activity,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Sun,
  LayoutDashboard,
  Database,
  Globe,
  Sparkles,
  BarChart3,
  Target,
  Truck,
  LineChart,
  ShieldCheck,
  Layout,
  Users
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { BIServicesPage } from './pages/BIServicesPage';
import { AIServicesPage } from './pages/AIServicesPage';
import { DataEngineeringPage } from './pages/DataEngineeringPage';
import { GeospatialPage } from './pages/GeospatialPage';
import { CustomDevPage } from './pages/CustomDevPage';

const NavDropdown = ({ title, items }: { title: string; items: { label: string; href: string; icon?: any }[] }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-accent transition-colors">
        {title} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
          >
            <div className="bg-white dark:bg-brand-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 p-3 overflow-hidden">
              <div className="grid grid-cols-1 gap-1">
                {items.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group/item"
                  >
                    {item.icon && (
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-accent group-hover/item:bg-blue-50 dark:group-hover/item:bg-accent/20 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                    )}
                    <span className="text-[14px] font-medium text-slate-600 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navData = {
    services: [
      { label: "AI Services", href: "/ai-services", icon: Sparkles },
      { label: "BI Services", href: "/bi-services", icon: LayoutDashboard },
      { label: "Data Engineering", href: "/data-engineering", icon: Database },
      { label: "Geospatial Analytics", href: "/geospatial-analytics", icon: Globe },
      { label: "Custom Development", href: "/custom-development", icon: Layout },
    ],
    solutions: [
      { label: "Airlines Analytics", href: "/#solutions", icon: BarChart3 },
      { label: "Insurance Analytics", href: "/#solutions", icon: ShieldCheck },
      { label: "FMCG Analytics", href: "/#solutions", icon: Truck },
      { label: "HSE Analytics", href: "/#solutions", icon: Activity },
      { label: "ITSM Analytics", href: "/#solutions", icon: Layout },
      { label: "Manufacturing Analytics", href: "/#solutions", icon: Target },
      { label: "Refinery Operations", href: "/#solutions", icon: Activity },
    ],
    accelerators: [
      { label: "DataGuard", href: "/#accelerators", icon: ShieldCheck },
      { label: "ITSM Plug & Play", href: "/#accelerators", icon: Layout },
      { label: "Agentic AI for ITSM", href: "/#accelerators", icon: Sparkles },
      { label: "Internal HR Portal", href: "/#accelerators", icon: Users },
    ],
    joinUs: [
      { label: "FAQ", href: "/faq", icon: Sparkles },
      { label: "Careers", href: "/careers", icon: Activity },
      { label: "Current Openings", href: "/careers", icon: Target },
    ]
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500 rounded-2xl ${isScrolled ? 'w-[90%] lg:w-[85%] xl:w-[80%] glass shadow-xl border-slate-200/50 dark:border-white/10' : 'w-[94%] lg:w-[96%] xl:w-[85%] bg-transparent border-transparent'}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-950 dark:bg-accent rounded-lg flex items-center justify-center text-white shrink-0">
          <Link to="/">
            <Activity className="w-5 h-5" />
          </Link>
        </div>
        <Link to="/" className="text-lg lg:text-xl font-display font-bold tracking-tight text-brand-950 dark:text-white whitespace-nowrap uppercase">
          TECHKNOMATIC
        </Link>
      </div>
      
      <div className={`hidden lg:flex items-center transition-all duration-300 text-[13px] xl:text-[14px] font-medium text-slate-600 dark:text-slate-300 ${isScrolled ? 'gap-3 xl:gap-5' : 'gap-5 xl:gap-8'}`}>
        <NavDropdown title="Services" items={navData.services} />
        <NavDropdown title="Solutions" items={navData.solutions} />
        <NavDropdown title="Accelerators" items={navData.accelerators} />
        <NavDropdown title="Join Us" items={navData.joinUs} />
        <a href="/#partnerships" className="hover:text-accent transition-colors whitespace-nowrap">Partnerships</a>
        <a href="/#about" className="hover:text-accent transition-colors whitespace-nowrap">About</a>
        <Link to="/contact" className="hover:text-accent transition-colors whitespace-nowrap">Contact</Link>
      </div>


      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:text-accent transition-all border border-transparent hover:border-accent/30 hidden sm:flex"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <Link to="/contact" className="px-4 xl:px-6 py-2.5 text-[13px] xl:text-[14px] font-medium bg-accent text-white rounded-xl hover:bg-accent/90 transition-all group flex items-center gap-2 shadow-lg shadow-accent/20 whitespace-nowrap">
          Start a Conversation <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
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
                <span className="text-2xl font-display font-bold tracking-tight text-white block leading-none">TECHKNOMATIC</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mt-1 block">Specialist Analytics & AI Consultancy</span>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-6 text-base mx-auto md:mx-0">
              Techknomatic empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.
            </p>
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-10">
              India · UAE · Oman
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
               {[
                 { icon: Twitter, href: "#" },
                 { icon: Instagram, href: "#" },
                 { icon: Linkedin, href: "#" },
                 { icon: Mail, href: "#" }
               ].map((social, i) => (
                 <a 
                  key={i} 
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
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">Product</h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  { label: "Business Intelligence", href: "/bi-services" },
                  { label: "Data Engineering", href: "/data-engineering" },
                  { label: "AI & GenAI", href: "/ai-services" },
                  { label: "Geospatial Analytics", href: "/geospatial-analytics" },
                  { label: "Custom Development", href: "/custom-development" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.href} className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group">
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">Resources</h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  "Insurance",
                  "Manufacturing",
                  "FMCG",
                  "Oil & Gas",
                  "Airlines",
                  "ITSM",
                  "HSE"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group">
                      <span>{item}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[14px] text-white uppercase tracking-widest mb-10">Company</h5>
              <ul className="space-y-5 text-[14px] font-medium text-slate-400 whitespace-nowrap">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                  { label: "Partnerships", href: "/#partnerships" },
                  { label: "Our Story", href: "/#about" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.href} className="flex items-center justify-between w-full pr-2 hover:text-accent transition-colors group">
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
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppWrapper = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-brand-950 text-white' : 'bg-white text-brand-950'} transition-colors duration-500 overflow-x-hidden selection:bg-accent/10`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/bi-services" element={<BIServicesPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/data-engineering" element={<DataEngineeringPage />} />
          <Route path="/geospatial-analytics" element={<GeospatialPage />} />
          <Route path="/custom-development" element={<CustomDevPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppWrapper theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}
