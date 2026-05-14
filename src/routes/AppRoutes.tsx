import { Route, Routes } from 'react-router-dom';
import { AIServicesPage } from '../pages/AIServicesPage';
import { AboutUsPage } from '../pages/AboutUsPage';
import { AgenticAIITSMPage } from '../pages/AgenticAIITSMPage';
import { AirlinesAnalyticsPage } from '../pages/AirlinesAnalyticsPage';
import { AssistIQPage } from '../pages/AssistIQPage';
import { BIServicesPage } from '../pages/BIServicesPage';
import { CallOpsAiPage } from '../pages/CallOpsAiPage';
import { CareersPage } from '../pages/CareersPage';
import { ContactPage } from '../pages/ContactPage';
import { CustomDevPage } from '../pages/CustomDevPage';
import { DataGuardPage } from '../pages/DataGuardPage';
import { DataEngineeringPage } from '../pages/DataEngineeringPage';
import { FAQPage } from '../pages/FAQPage';
import { FMCGAnalyticsPage } from '../pages/FMCGAnalyticsPage';
import { FreightIQPage } from '../pages/FreightIQPage';
import { GeospatialPage } from '../pages/GeospatialPage';
import { HealthcareAnalyticsPage } from '../pages/HealthcareAnalyticsPage';
import { HRPortalPage } from '../pages/HRPortalPage';
import { HomePage } from '../pages/HomePage';
import { HSEAnalyticsPage } from '../pages/HSEAnalyticsPage';
import { InsuranceAnalyticsPage } from '../pages/InsuranceAnalyticsPage';
import { ITSMAnalyticsPage } from '../pages/ITSMAnalyticsPage';
import { ITSMPlugAndPlayPage } from '../pages/ITSMPlugAndPlayPage';
import { JobDescriptionPage } from '../pages/JobDescriptionPage';
import { ManufacturingAnalyticsPage } from '../pages/ManufacturingAnalyticsPage';
import { ParseIQPage } from '../pages/ParseIQPage';
import { PartnershipsPage } from '../pages/PartnershipsPage';
import { RefineryOperationsPage } from '../pages/RefineryOperationsPage';
import BrandGuidelinesPage from '../pages/BrandGuidelinesPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/bi-services" element={<BIServicesPage />} />
      <Route path="/ai-services" element={<AIServicesPage />} />
      <Route path="/data-engineering" element={<DataEngineeringPage />} />
      <Route path="/geospatial-analytics" element={<GeospatialPage />} />
      <Route path="/custom-development" element={<CustomDevPage />} />
      <Route path="/airlines-analytics" element={<AirlinesAnalyticsPage />} />
      <Route path="/insurance-analytics" element={<InsuranceAnalyticsPage />} />
      <Route path="/fmcg-analytics" element={<FMCGAnalyticsPage />} />
      <Route path="/hse-analytics" element={<HSEAnalyticsPage />} />
      <Route path="/itsm-analytics" element={<ITSMAnalyticsPage />} />
      <Route path="/manufacturing-analytics" element={<ManufacturingAnalyticsPage />} />
      <Route path="/healthcare-analytics" element={<HealthcareAnalyticsPage />} />
      <Route path="/refinery-operations" element={<RefineryOperationsPage />} />
      <Route path="/dataguard" element={<DataGuardPage />} />
      <Route path="/itsm-plug-and-play" element={<ITSMPlugAndPlayPage />} />
      <Route path="/parse-iq" element={<ParseIQPage />} />
      <Route path="/freight-iq" element={<FreightIQPage />} />
      <Route path="/assistiq" element={<AssistIQPage />} />
      <Route path="/agentic-ai-itsm" element={<AgenticAIITSMPage />} />
      <Route path="/callops-ai" element={<CallOpsAiPage />} />
      <Route path="/hr-portal" element={<HRPortalPage />} />
      <Route path="/partnerships" element={<PartnershipsPage />} />
      <Route path="/job-description/:jobId" element={<JobDescriptionPage />} />
      <Route path="/brand" element={<BrandGuidelinesPage />} />
    </Routes>
  );
};
