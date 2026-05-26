import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { PreFooterCTA } from "../components/PreFooterCTA";
import {
  CapabilityGridSection,
  PainPointsSection,
  PlatformCapabilityCard,
  ProcessStepsSection,
  UseCasesSection,
} from "../components/product-page";
import { buildAssetUrl } from "../utils/buildAssetUrl";
import {
  ShieldCheck,
  Database,
  Scan,
  Brain,
  Cpu,
  Mail,
  FileSearch,
  Share2,
} from "lucide-react";

const PARSE_IQ_BASE = "Images/ParseIQ";

const parseIqImg = (file: string) => buildAssetUrl(PARSE_IQ_BASE, file);

const PARSE_IQ_HERO = parseIqImg("herobanner.jpg");
const PARSE_IQ_CHALLENGE = parseIqImg("The Enterprise Document Challenge.jpg");

const PAIN_POINTS = [
  "Manual data entry and validation across systems",
  "Slow turnaround and operational bottlenecks",
  "High error rates in document handling and re-keying",
  "Complex PDFs and tables that defeat template-based OCR",
  "Inconsistent, unstructured document formats",
  "Time-consuming compliance, KYC, and verification workflows",
  "Limited scalability of back-office and shared-service operations",
];

const PARSE_INTRO =
  "Every enterprise runs on documents invoices, contracts, KYC forms, passports, claims, shipment paperwork, onboarding records, and operational PDFs. Yet despite digital transformation investments, most document workflows still remain manual, fragmented, and heavily dependent on human effort. Traditional OCR systems can extract text, but they fail to understand context, layouts, handwritten content, or complex multi-page documents. Teams spend countless hours validating fields, correcting extraction errors, re-entering data into ERP and CRM systems, and managing compliance-heavy verification processes manually The result is an operational bottleneck hidden inside back-office workflows: slower customer onboarding, delayed approvals, rising operational costs, compliance risks, and poor scalability. As document volumes grow, organizations are forced to scale teams instead of intelligence making automation expensive, inconsistent, and difficult to sustain";

export const ParseIQPage = () => {
  const capabilities = [
    {
      title: "Smart OCR System",
      icon: Scan,
      items: [
        "Handwritten text recognition",
        "Printed document extraction",
        "Multi-format document support",
        "Automated field detection",
        "Structured data conversion",
        "API-driven integrations",
      ],
    },
    {
      title: "AI-Powered Document Understanding",
      icon: Brain,
      items: [
        "Context-aware extraction",
        "Intelligent field mapping",
        "Document classification",
        "Semantic understanding",
        "Multi-layout interpretation",
        "Adaptive learning models",
      ],
    },
    {
      title: "LLM-Powered PDF Extraction",
      icon: FileSearch,
      items: [
        "Complex table extraction",
        "Contextual data interpretation",
        "Multi-page document understanding",
        "Structured output generation",
        "Custom extraction workflows",
        "AI-assisted compliance processing",
      ],
    },
    {
      title: "Passport & Identity Data Extraction",
      icon: ShieldCheck,
      items: [
        "MRZ extraction",
        "Passport and ID data parsing",
        "Identity verification support",
        "Authenticity validation",
        "KYC-ready integrations",
      ],
    },
    {
      title: "Automated Data Structuring",
      icon: Database,
      items: [
        "JSON, CSV, and API payload outputs",
        "Database-ready records",
        "ERP and CRM integration formats",
        "Schema-validated outputs",
        "Custom output templates",
      ],
    },
    {
      title: "Custom AI Model Training",
      icon: Cpu,
      items: [
        "Industry-specific templates",
        "Custom field extraction",
        "Domain-specific validation logic",
        "Enterprise compliance requirements",
        "Continuous model refinement",
      ],
    },
  ];

  const steps = [
    {
      title: "Ingestion",
      content: "Documents enter via API, watch-folder, email, or batch upload.",
      icon: Mail,
    },
    {
      title: "Smart OCR & Pre-Processing",
      content: "Image enhancement, deskewing, and OCR extraction.",
      icon: Scan,
    },
    {
      title: "AI Classification & Layout Understanding",
      content: "AI models identify document type, layout, and key regions.",
      icon: Brain,
    },
    {
      title: "LLM-Driven Contextual Extraction",
      content:
        "LLMs interpret context, extract complex tables, validate fields, and reason across multi-page documents.",
      icon: Cpu,
    },
    {
      title: "Structured Output & Delivery",
      content: "Clean JSON, CSV, or API payloads are delivered downstream.",
      icon: Share2,
    },
  ];

  const useCases = [
    {
      title: "KYC & Identity Verification Automation",
      subtitle:
        "AI-powered extraction and validation of identity documents for compliant customer onboarding.",
      crux: "ParseIQ automates the capture, classification, and validation of passports, national IDs, driver's licenses, and proof-of-address documents, cross-checking extracted fields against KYC rules and watchlists to accelerate onboarding while reducing compliance risk.",
      focusAreas:
        "Document Classification · Field Extraction · ID Validation · Address Verification · Compliance Checks",
      outcome: "Faster onboarding · Lower KYC operational cost · Reduced compliance risk",
    },
    {
      title: "Claims & Policy Document Processing",
      subtitle:
        "Automated insurance claims intake and structured data extraction across forms and supporting documents.",
      crux: "ParseIQ ingests claim forms, policy documents, medical bills, and supporting evidence, extracting key fields, line items, and entities into structured records that flow directly into core insurance systems for faster adjudication and settlement.",
      focusAreas:
        "Claims Intake · Policy Extraction · Line-Item Capture · Evidence Processing · Core System Integration",
      outcome: "Faster claim settlement · Reduced manual data entry · Improved adjudication accuracy",
    },
    {
      title: "Invoice & Vendor Document Automation",
      subtitle: "Touchless accounts payable processing across logistics, procurement, and operations.",
      crux: "ParseIQ automates invoice ingestion, line-item extraction, PO matching, and vendor document validation across multi-format inputs, eliminating manual AP entry and accelerating the procure-to-pay cycle for finance and operations teams.",
      focusAreas:
        "Invoice Capture · Line-Item Extraction · PO Matching · Vendor Validation · ERP Integration",
      outcome: "Lower AP processing cost · Faster payment cycles · Higher data accuracy",
    },
    {
      title: "Medical Records & Healthcare Forms Digitization",
      subtitle: "AI-driven conversion of paper-based patient records and clinical forms into structured digital data.",
      crux: "ParseIQ digitizes patient intake forms, prescriptions, lab reports, and handwritten clinical notes, extracting structured patient, diagnosis, and treatment data that integrates with EMR and hospital information systems to support clinical workflows.",
      focusAreas:
        "Patient Form Capture · Prescription Extraction · Lab Report Parsing · EMR Integration · Clinical Data Structuring",
      outcome: "Faster patient onboarding · Reduced clerical load · Improved record accuracy",
    },
    {
      title: "Government Citizen Document Processing",
      subtitle: "Automated citizen-facing application intake and verification for public-sector services.",
      crux: "ParseIQ processes citizen applications, identity proofs, and supporting documents across welfare, licensing, and registration workflows, extracting and validating data to accelerate service delivery while maintaining audit trails for compliance and transparency.",
      focusAreas:
        "Application Intake · Identity Verification · Document Validation · Workflow Routing · Audit Trail",
      outcome: "Faster citizen service delivery · Reduced backlog · Improved transparency",
    },
  ];

  return (
    <PageShell bare>
      <PageHero
        title="ParseIQ"
        tagline="AI-Powered Document Intelligence & Data Extraction Platform"
        description="Transform unstructured documents into structured, actionable intelligence. ParseIQ combines OCR, AI, and LLM-driven understanding to automate document processing at enterprise scale."
        imageSrc={PARSE_IQ_HERO}
      />

      <PainPointsSection
        intro={PARSE_INTRO}
        imageSrc={PARSE_IQ_CHALLENGE}
        imageAlt="The enterprise document challenge"
        items={PAIN_POINTS}
      />

      <CapabilityGridSection title="What ParseIQ Solves">
        {capabilities.map((it, idx) => (
          <PlatformCapabilityCard
            key={it.title}
            title={it.title}
            items={it.items}
            icon={it.icon}
            delay={idx * 0.1}
            reserveOutcomeSpace={false}
          />
        ))}
      </CapabilityGridSection>

      <ProcessStepsSection
        title="How ParseIQ Works"
        tagline="5-step architecture: ingest, understand, extract, validate, and integrate structured document intelligence."
        steps={steps}
      />

      <UseCasesSection
        description="Five domain-specific deployments where ParseIQ is replacing manual document handling with intelligent, automated extraction and validation."
        cases={useCases}
        staggerDelays
      />

      <PreFooterCTA />
    </PageShell>
  );
};
