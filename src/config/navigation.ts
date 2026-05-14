import {
  Activity,
  BarChart3,
  Database,
  Globe,
  Layout,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
} from 'lucide-react';
import type { NavItem } from '../types/navigation';

export type SiteNavData = {
  services: NavItem[];
  enterpriseAI: NavItem[];
  platforms: NavItem[];
  industries: NavItem[];
  aboutUs: NavItem[];
  resources: NavItem[];
};

export const navData: SiteNavData = {
  services: [
    { label: 'Business Analytics', href: '/bi-services', icon: BarChart3 },
    { label: 'Data Engineering', href: '/data-engineering', icon: Database },
    { label: 'Data & AI Strategy', href: '/ai-services', icon: Sparkles },
    { label: 'GeoSpacial Analytics', href: '/geospatial-analytics', icon: Globe },
  ],
  enterpriseAI: [
    {
      label: 'AssistIQ - AI Agents/Avatar for Intelligent Self-Service',
      href: '/assistiq',
      icon: Sparkles,
    },
    {
      label: 'TicketIQ - AI Agents for Intelligent Ticket Handling',
      href: '/agentic-ai-itsm',
      icon: Sparkles,
    },
    {
      label: 'CallOps AI - AI-Powered Call Operations',
      href: '/callops-ai',
      icon: Activity,
    },
    {
      label: 'CXO Nexus - Conversational AI for CXOs',
      href: '#',
      icon: LayoutDashboard,
    },
  ],
  platforms: [
    { label: 'InsightSM', href: '/itsm-plug-and-play', icon: Layout },
    { label: 'DataPulse IQ', href: '/dataguard', icon: ShieldCheck },
    { label: 'ParseIQ', href: '/parse-iq', icon: Database },
    { label: 'FreightIQ', href: '/freight-iq', icon: Truck },
  ],
  industries: [
    { label: 'Oil & Gas', href: '/refinery-operations', icon: Activity },
    { label: 'Manufacturing', href: '/manufacturing-analytics', icon: Target },
    { label: 'BFSI', href: '/insurance-analytics', icon: ShieldCheck },
    { label: 'Tech & IT Services', href: '/itsm-analytics', icon: Layout },
    { label: 'FMCG', href: '/fmcg-analytics', icon: Truck },
    { label: 'Healthcare', href: '/healthcare-analytics', icon: Activity },
  ],
  aboutUs: [
    { label: 'About the Company', href: '/about', icon: Users },
    { label: 'Partnerships', href: '/partnerships', icon: Globe },
    { label: 'Careers', href: '/careers', icon: Activity },
  ],
  resources: [
    { label: 'Blogs', href: '#', icon: Layout },
    { label: 'FAQs', href: '/faq', icon: Sparkles },
    { label: 'Customer Stories', href: '#', icon: Users },
    { label: 'Brand Guidelines', href: '/brand', icon: Palette },
  ],
};
