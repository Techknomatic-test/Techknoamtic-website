import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PageShell } from '../components/PageShell';

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-xl md:text-2xl font-bold text-brand-950 dark:text-white tracking-tight mb-4">
      {title}
    </h2>
    <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
      {children}
    </div>
  </section>
);

const DataTable = ({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: [string, string][];
}) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 my-6">
    <table className="w-full min-w-[320px] text-left text-sm">
      <thead>
        <tr className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
          <th className="px-4 py-3 font-bold text-brand-950 dark:text-white">{headers[0]}</th>
          <th className="px-4 py-3 font-bold text-brand-950 dark:text-white">{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([col1, col2]) => (
          <tr
            key={col1}
            className="border-b border-slate-100 dark:border-white/5 last:border-0"
          >
            <td className="px-4 py-3 align-top text-brand-950 dark:text-slate-200 font-semibold">
              {col1}
            </td>
            <td className="px-4 py-3 align-top">{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const privacyEmail = 'privacy@techknomatic.com';

export const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Techknomatic';
  }, []);

  return (
    <PageShell>
      <PageHero
        variant="solid"
        size="compact"
        contentMaxWidth="4xl"
        title="Privacy Policy"
        description="Techknomatic Services Pvt Ltd · Last Updated: 29 May 2026"
        titleAnimationDelay={0}
        descriptionAnimationDelay={0.1}
      />

      <article className="pt-10 md:pt-14 pb-14 md:pb-20 px-6 bg-white dark:bg-brand-950 transition-colors duration-500">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-14 text-left">
          <Section id="introduction" title="1. Introduction">
            <p>
              Techknomatic Services Pvt Ltd (&quot;Techknomatic&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;), a company incorporated under the Companies Act, 2013, is committed to
              protecting the personal data of individuals who interact with our website and services.
              This Privacy Policy explains how we collect, use, store, share, and protect personal data
              in connection with our website and our services in Business Intelligence, Data Engineering,
              Data &amp; AI Strategy, and Geospatial Analytics.
            </p>
            <p>
              This Policy is published in compliance with the Digital Personal Data Protection Act, 2023
              (&quot;DPDP Act&quot;), the Information Technology Act, 2000, and the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information)
              Rules, 2011 (&quot;SPDI Rules&quot;).
            </p>
            <p>
              By accessing our website or engaging with our services, you acknowledge that you have read
              and understood this Policy.
            </p>
          </Section>

          <Section id="about-us" title="2. About Us">
            <p className="font-semibold text-brand-950 dark:text-white">Techknomatic Services Pvt Ltd</p>
            <p>
              3rd Floor, Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              <br />
              Email:{' '}
              <a
                href={`mailto:${privacyEmail}`}
                className="text-accent hover:underline"
              >
                {privacyEmail}
              </a>
            </p>
          </Section>

          <Section id="personal-data" title="3. Personal Data We Collect">
            <p>
              We collect personal data only to the extent necessary for legitimate business purposes.
            </p>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Business email address</li>
              <li>Phone number</li>
              <li>Company name, designation, and industry</li>
            </ul>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.2 Information Collected Automatically
            </h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referring URLs</li>
            </ul>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.3 Location and Geospatial Data
            </h3>
            <p>
              In the course of delivering Geospatial Analytics services, we may process location-related
              data provided by or on behalf of our clients. Such data is processed solely for service
              delivery purposes under the terms of the applicable client agreement.
            </p>
          </Section>

          <Section id="how-we-use" title="4. How We Use Your Personal Data">
            <p>We process personal data for the following purposes:</p>
            <DataTable
              headers={['Purpose', 'Legal Basis']}
              rows={[
                [
                  'Responding to enquiries submitted through contact forms',
                  'Legitimate interest / Consent',
                ],
                [
                  'Communicating service proposals, updates, and relevant information',
                  'Legitimate interest / Consent',
                ],
                [
                  'Delivering contracted BI, Data Engineering, AI Strategy, and Geospatial Analytics services',
                  'Contractual necessity',
                ],
                [
                  'Improving website functionality and user experience through analytics',
                  'Legitimate interest',
                ],
                ['Complying with legal and regulatory obligations', 'Legal obligation'],
                ['Maintaining internal records and business administration', 'Legitimate interest'],
              ]}
            />
            <p>
              We do not use your personal data for automated decision-making or profiling that produces
              legal or similarly significant effects.
            </p>
          </Section>

          <Section id="retention" title="5. Data Retention">
            <p>
              We retain personal data only for as long as necessary for the purpose for which it was
              collected, and in accordance with applicable law:
            </p>
            <DataTable
              headers={['Category', 'Retention Period']}
              rows={[
                ['Prospect and enquiry data', '3 years from the date of last contact'],
                ['Client and project data', 'Duration of the contract plus 5 years'],
                [
                  'Website analytics data',
                  '2 years, after which it is deleted or anonymised',
                ],
              ]}
            />
            <p>
              Upon expiry of the applicable retention period, personal data is securely deleted or
              anonymised so that it can no longer be associated with an identifiable individual.
            </p>
          </Section>

          <Section id="sharing" title="6. Sharing of Personal Data">
            <p>
              Techknomatic does not sell, rent, or trade personal data. We may share personal data only
              in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-brand-950 dark:text-slate-200">
                  Service providers and technology partners:
                </strong>{' '}
                Third-party vendors who assist us in operating our website, IT infrastructure, and
                business systems (e.g. cloud hosting, email platforms). Such parties are contractually
                bound to process data only on our instructions and to maintain appropriate security
                standards.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">
                  Legal and regulatory requirements:
                </strong>{' '}
                Where required by applicable law, court order, or competent regulatory authority.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Business transfers:</strong> In
                the event of a merger, acquisition, or restructuring of Techknomatic, personal data may
                be transferred as part of the business assets, subject to equivalent privacy protections.
              </li>
            </ul>
            <p>
              Where we engage specific third-party service providers that process personal data, we will
              update this Policy to reflect the relevant categories of recipients.
            </p>
          </Section>

          <Section id="security" title="7. Data Security">
            <p>
              We implement reasonable and appropriate technical and organisational security measures to
              protect personal data against unauthorised access, disclosure, alteration, or destruction.
              These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access controls and role-based permissions</li>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Periodic security reviews and assessments</li>
            </ul>
            <p>
              While we take all reasonable steps to protect your data, no method of electronic storage or
              transmission is entirely secure. We encourage you to notify us immediately at{' '}
              <a href={`mailto:${privacyEmail}`} className="text-accent hover:underline">
                {privacyEmail}
              </a>{' '}
              if you suspect any unauthorised use of your personal data.
            </p>
          </Section>

          <Section id="rights" title="8. Your Rights">
            <p>As a Data Principal under the DPDP Act, 2023, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Access:</strong> Obtain a summary
                of the personal data we hold about you and the purposes for which it is processed.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Correction:</strong> Request
                correction of inaccurate or incomplete personal data.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Erasure:</strong> Request deletion
                of personal data where it is no longer necessary for the purpose it was collected, subject
                to applicable legal retention obligations.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Grievance Redressal:</strong> File
                a complaint or grievance with our Grievance Officer (see Section 10).
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Nomination:</strong> Nominate an
                individual to exercise these rights on your behalf in the event of your incapacity or
                death, as permitted under the DPDP Act.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please write to us at{' '}
              <a href={`mailto:${privacyEmail}`} className="text-accent hover:underline">
                {privacyEmail}
              </a>
              . We will acknowledge and respond within the timelines prescribed under applicable law.
            </p>
          </Section>

          <Section id="cookies" title="9. Cookies">
            <p>
              We use cookies and similar tracking technologies on our website to enhance your browsing
              experience and to understand how visitors interact with our site. For detailed information
              on the types of cookies we use and how you can manage them, please refer to our{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="grievance-officer" title="10. Grievance Officer">
            <p>
              In accordance with the Information Technology Act, 2000, and the DPDP Act, 2023,
              Techknomatic has appointed a Grievance Officer to address data-related concerns:
            </p>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 space-y-2 not-prose">
              <p>
                <strong className="text-brand-950 dark:text-white">Name:</strong> Prakash Pawar
              </p>
              <p>
                <strong className="text-brand-950 dark:text-white">Designation:</strong> Director –
                Operations
              </p>
              <p>
                <strong className="text-brand-950 dark:text-white">Organisation:</strong> Techknomatic
                Services Pvt Ltd
              </p>
              <p>
                <strong className="text-brand-950 dark:text-white">Email:</strong>{' '}
                <a href={`mailto:${privacyEmail}`} className="text-accent hover:underline">
                  {privacyEmail}
                </a>
              </p>
              <p>
                <strong className="text-brand-950 dark:text-white">Address:</strong> 3rd Floor, Signet
                Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              </p>
            </div>
            <p>
              All grievances will be acknowledged and addressed within the timelines prescribed under
              applicable law.
            </p>
          </Section>

          <Section id="children" title="11. Children's Data">
            <p>
              Our website and services are directed exclusively at businesses and professionals. We do
              not knowingly collect or process personal data of individuals below the age of 18. If we
              become aware that such data has been collected inadvertently, we will take prompt steps to
              delete it.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              services, or applicable law. The revised Policy will be posted on our website with an
              updated &quot;Last Updated&quot; date. We encourage you to review this Policy periodically.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>
              For any questions, requests, or concerns related to this Privacy Policy or the handling of
              your personal data, please contact:
            </p>
            <p className="font-semibold text-brand-950 dark:text-white">Techknomatic Services Pvt Ltd</p>
            <p>
              3rd Floor, Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              <br />
              Email:{' '}
              <a href={`mailto:${privacyEmail}`} className="text-accent hover:underline">
                {privacyEmail}
              </a>
            </p>
          </Section>

          <p className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-500">
            Return to{' '}
            <Link to="/" className="text-accent hover:underline font-semibold">
              Home
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="text-accent hover:underline font-semibold">
              Contact Us
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
};
