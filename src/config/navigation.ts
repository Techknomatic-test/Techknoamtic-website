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
  aboutUs: NavItem[];
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
    { label: 'Airlines Analytics', href: '/airlines-analytics', icon: BarChart3 },
    { label: 'Insurance Analytics', href: '/insurance-analytics', icon: ShieldCheck },
    { label: 'FMCG Analytics', href: '/fmcg-analytics', icon: Truck },
    { label: 'HSE Analytics', href: '/hse-analytics', icon: Activity },
    { label: 'ITSM Analytics', href: '/itsm-analytics', icon: Layout },
    { label: 'Manufacturing Analytics', href: '/manufacturing-analytics', icon: Target },
    { label: 'Refinery Operations', href: '/refinery-operations', icon: Activity },
  ],
  accelerators: [
    { label: 'DataGuard', href: '/dataguard', icon: ShieldCheck },
    { label: 'ITSM Plug & Play', href: '/itsm-plug-and-play', icon: Layout },
    { label: 'Agentic AI for ITSM', href: '/agentic-ai-itsm', icon: Sparkles },
    { label: 'Internal HR Portal', href: '/hr-portal', icon: Users },
  ],
  aboutUs: [
    { label: 'About the Company', href: '/about', icon: Users },
    { label: 'Partnerships', href: '/partnerships', icon: Globe },
    { label: 'Careers', href: '/careers', icon: Activity },
    { label: 'FAQ', href: '/faq', icon: Sparkles },
  ],
};
