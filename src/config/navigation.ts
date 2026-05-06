import {
  Activity,
  BarChart3,
  Database,
  Globe,
  Layout,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
} from 'lucide-react';
import type { NavItem } from '../types/navigation';

type NavData = {
  services: NavItem[];
  solutions: NavItem[];
  accelerators: NavItem[];
  joinUs: NavItem[];
};

export const navData: NavData = {
  services: [
    { label: 'AI Services', href: '/ai-services', icon: Sparkles },
    { label: 'BI Services', href: '/bi-services', icon: LayoutDashboard },
    { label: 'Data Engineering', href: '/data-engineering', icon: Database },
    { label: 'Geospatial Analytics', href: '/geospatial-analytics', icon: Globe },
    { label: 'Custom Development', href: '/custom-development', icon: Layout },
  ],
  solutions: [
    { label: 'Airlines Analytics', href: '/#solutions', icon: BarChart3 },
    { label: 'Insurance Analytics', href: '/#solutions', icon: ShieldCheck },
    { label: 'FMCG Analytics', href: '/#solutions', icon: Truck },
    { label: 'HSE Analytics', href: '/#solutions', icon: Activity },
    { label: 'ITSM Analytics', href: '/#solutions', icon: Layout },
    { label: 'Manufacturing Analytics', href: '/#solutions', icon: Target },
    { label: 'Refinery Operations', href: '/#solutions', icon: Activity },
  ],
  accelerators: [
    { label: 'DataGuard', href: '/#accelerators', icon: ShieldCheck },
    { label: 'ITSM Plug & Play', href: '/#accelerators', icon: Layout },
    { label: 'Agentic AI for ITSM', href: '/#accelerators', icon: Sparkles },
    { label: 'Internal HR Portal', href: '/#accelerators', icon: Users },
  ],
  joinUs: [
    { label: 'FAQ', href: '/faq', icon: Sparkles },
    { label: 'Careers', href: '/careers', icon: Activity },
    { label: 'Current Openings', href: '/careers', icon: Target },
  ],
};
