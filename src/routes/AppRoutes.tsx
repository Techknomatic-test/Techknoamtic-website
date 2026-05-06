import { Route, Routes } from 'react-router-dom';
import { AIServicesPage } from '../pages/AIServicesPage';
import { BIServicesPage } from '../pages/BIServicesPage';
import { CareersPage } from '../pages/CareersPage';
import { ContactPage } from '../pages/ContactPage';
import { CustomDevPage } from '../pages/CustomDevPage';
import { DataEngineeringPage } from '../pages/DataEngineeringPage';
import { FAQPage } from '../pages/FAQPage';
import { GeospatialPage } from '../pages/GeospatialPage';
import { HomePage } from '../pages/HomePage';

export const AppRoutes = () => {
  return (
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
  );
};
