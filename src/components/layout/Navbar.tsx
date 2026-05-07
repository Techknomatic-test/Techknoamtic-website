import { Activity, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../../config/navigation';
import { NavDropdown } from './NavDropdown';

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
};

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500 rounded-2xl ${isScrolled ? 'w-[90%] lg:w-[85%] xl:w-[80%] glass shadow-xl border-slate-200/50 dark:border-white/10' : 'w-[94%] lg:w-[96%] xl:w-[85%] bg-transparent border-transparent'}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-950 dark:bg-accent rounded-lg flex items-center justify-center text-white shrink-0">
          <Link to="/">
            <Activity className="w-5 h-5" />
          </Link>
        </div>
        <Link
          to="/"
          className="text-lg lg:text-xl font-display font-bold tracking-tight text-brand-950 dark:text-white whitespace-nowrap uppercase"
        >
          TECHKNOMATIC
        </Link>
      </div>

      <div
        className={`hidden lg:flex items-center transition-all duration-300 text-[13px] xl:text-[14px] font-medium text-slate-600 dark:text-slate-300 ${isScrolled ? 'gap-3 xl:gap-5' : 'gap-5 xl:gap-8'}`}
      >
        <NavDropdown title="Services" items={navData.services} />
        <NavDropdown title="Solutions" items={navData.solutions} />
        <NavDropdown title="Accelerators" items={navData.accelerators} />
        <NavDropdown title="About Us" items={navData.aboutUs} />
        <Link to="/contact" className="hover:text-accent transition-colors whitespace-nowrap">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:text-accent transition-all border border-transparent hover:border-accent/30 hidden sm:flex"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <Link
          to="/contact"
          className="px-4 xl:px-6 py-2.5 text-[13px] xl:text-[14px] font-medium bg-accent text-white rounded-xl hover:bg-accent/90 transition-all group flex items-center gap-2 shadow-lg shadow-accent/20 whitespace-nowrap"
        >
          Start a Conversation{' '}
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </nav>
  );
};
