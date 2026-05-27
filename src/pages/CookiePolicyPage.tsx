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

const CookieTable = ({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: [string, string, string][];
}) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 my-6">
    <table className="w-full min-w-[480px] text-left text-sm">
      <thead>
        <tr className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
          {headers.map((header) => (
            <th
              key={header}
              className="px-4 py-3 font-bold text-brand-950 dark:text-white"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row[0]}
            className="border-b border-slate-100 dark:border-white/5 last:border-0"
          >
            {row.map((cell, i) => (
              <td
                key={i}
                className={`px-4 py-3 align-top ${
                  i === 0
                    ? 'text-brand-950 dark:text-slate-200 font-semibold'
                    : ''
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const contactEmail = 'privacy@techknomatic.com';

const browserCookieGuides = [
  {
    name: 'Google Chrome',
    href: 'https://support.google.com/chrome/answer/95647',
  },
  {
    name: 'Mozilla Firefox',
    href: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
  },
  {
    name: 'Microsoft Edge',
    href: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
  },
  {
    name: 'Safari',
    href: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac',
  },
] as const;

export const CookiePolicyPage = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | Techknomatic';
  }, []);

  return (
    <PageShell>
      <PageHero
        variant="solid"
        size="compact"
        contentMaxWidth="4xl"
        sectionClassName="bg-brand-950"
        solidColor="#020617"
        solidGradient="from-brand-950 via-brand-950 to-brand-950"
        title="Cookie Policy"
        description="Techknomatic Services Pvt Ltd · Last Updated: 29 May 2026"
        titleAnimationDelay={0}
        descriptionAnimationDelay={0.1}
      />

      <article className="pt-10 md:pt-14 pb-14 md:pb-20 px-6 bg-white dark:bg-brand-950 transition-colors duration-500">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-14 text-left">
          <Section id="what-are-cookies" title="1. What Are Cookies?">
            <p>
              Cookies are small text files that are placed on your device (computer, tablet, or smartphone)
              when you visit a website. They help websites function correctly, remember your preferences, and
              provide the website owner with information about how visitors interact with the site.
            </p>
            <p>
              In addition to cookies, we may use similar tracking technologies such as web beacons, pixel
              tags, and local storage objects. This Policy refers to all such technologies collectively as
              &quot;cookies&quot;.
            </p>
          </Section>

          <Section id="who-we-are" title="2. Who We Are">
            <p>
              This Cookie Policy applies to the website of Techknomatic Services Pvt Ltd
              (&quot;Techknomatic&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company
              providing Business Intelligence, Data Engineering, Data &amp; AI Strategy, and Geospatial
              Analytics services to businesses.
            </p>
            <p className="font-semibold text-brand-950 dark:text-white">Registered Address:</p>
            <p>
              3rd Floor, Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              <br />
              Contact:{' '}
              <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">
                {contactEmail}
              </a>
            </p>
          </Section>

          <Section id="cookies-we-use" title="3. Cookies We Use">
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.1 Strictly Necessary Cookies
            </h3>
            <p>
              These cookies are essential for the Website to operate and cannot be disabled without affecting
              core functionality. They do not collect personally identifiable information and are not used for
              marketing purposes. Your consent is not required for these cookies.
            </p>
            <CookieTable
              headers={['Cookie Type', 'Purpose', 'Duration']}
              rows={[
                [
                  'Session cookies',
                  'Maintain your browsing session as you navigate the Website',
                  'Session (deleted on browser close)',
                ],
                [
                  'Security cookies',
                  'Protect against cross-site request forgery and similar threats',
                  'Session',
                ],
              ]}
            />

            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.2 Analytics and Performance Cookies
            </h3>
            <p>
              These cookies help us understand how visitors interact with our Website by collecting
              information such as pages visited, time spent on each page, and errors encountered. This
              information is used in aggregate form to improve the Website experience.
            </p>
            <p>
              <strong className="text-brand-950 dark:text-slate-200">Note:</strong> We are currently in the
              process of finalising our analytics tooling. The specific cookies used under this category will
              be identified here once third-party integrations are confirmed and this Policy is updated
              accordingly. Your consent will be sought before any analytics cookies are placed on your
              device.
            </p>
            <p>
              Website analytics data collected via cookies is retained for a maximum of 2 years, after which
              it is deleted or anonymised.
            </p>

            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.3 Functional Cookies
            </h3>
            <p>
              These cookies allow the Website to remember choices you make — such as display preferences — to
              provide a more consistent and personalised experience.
            </p>
            <CookieTable
              headers={['Cookie Type', 'Purpose', 'Duration']}
              rows={[
                [
                  'Preference cookies',
                  'Remember UI or display settings between visits',
                  'Up to 1 year',
                ],
              ]}
            />

            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.4 Marketing and Targeting Cookies
            </h3>
            <p>
              We do not currently use any marketing or targeting cookies on this Website. If we introduce such
              cookies in the future, this Policy will be updated and your prior consent will be obtained where
              required under applicable law.
            </p>
          </Section>

          <Section id="third-party-cookies" title="4. Third-Party Cookies">
            <p>
              We may in the future integrate third-party services — such as analytics platforms, CRM tools, or
              communication services — that set their own cookies on your device. When such integrations are
              introduced, this Policy will be updated to identify the relevant third parties and link to their
              respective privacy and cookie policies.
            </p>
            <p>
              At the time of this Policy&apos;s publication, no third-party cookies are knowingly deployed on
              this Website.
            </p>
          </Section>

          <Section id="your-choices" title="5. Your Cookie Choices">
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              5.1 Cookie Consent Banner
            </h3>
            <p>
              On your first visit to our Website, you will be presented with a cookie consent notice that
              allows you to accept or decline non-essential cookies (analytics and functional). Strictly
              necessary cookies are placed without requiring consent as they are essential for the Website to
              function.
            </p>
            <p>
              You may withdraw or change your consent at any time by adjusting your preferences via the cookie
              settings link available on the Website.
            </p>

            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              5.2 Browser Settings
            </h3>
            <p>You can also control cookies directly through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View cookies currently stored on your device</li>
              <li>Block cookies from specific or all websites</li>
              <li>Block third-party cookies selectively</li>
              <li>Clear all cookies when you close the browser</li>
            </ul>
            <p>Guidance on managing cookies in common browsers:</p>
            <ul className="list-disc pl-6 space-y-2">
              {browserCookieGuides.map((guide) => (
                <li key={guide.name}>
                  <a
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {guide.name}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Please note that disabling or restricting certain cookies may affect the functionality of this
              Website.
            </p>

            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              5.3 Opt-Out of Analytics
            </h3>
            <p>
              Once analytics tools are integrated, we will provide a direct link to any available opt-out
              mechanism. This section will be updated at that time.
            </p>
          </Section>

          <Section id="data-collected" title="6. Data Collected via Cookies">
            <p>Information collected through analytics and performance cookies may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address (anonymised where technically feasible)</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or traffic source</li>
            </ul>
            <p>
              This information is collected and used in aggregate form to improve website performance. It is
              not used to identify you personally, and it is not shared with third parties for marketing or
              advertising purposes.
            </p>
          </Section>

          <Section id="changes" title="7. Changes to This Cookie Policy">
            <p>
              We will update this Cookie Policy as and when we introduce new tools, integrations, or cookie
              types on this Website, or when required by changes in applicable law. The revised Policy will
              be posted with an updated &quot;Last Updated&quot; date. We recommend reviewing this page
              periodically.
            </p>
          </Section>

          <Section id="contact" title="8. Contact and Grievance">
            <p>
              If you have any questions about our use of cookies or this Policy, or wish to raise a grievance,
              please contact:
            </p>
            <p className="font-semibold text-brand-950 dark:text-white">Techknomatic Services Pvt Ltd</p>
            <p>
              3rd Floor, Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              <br />
              Email:{' '}
              <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">
                {contactEmail}
              </a>
            </p>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 space-y-2 not-prose">
              <p>
                <strong className="text-brand-950 dark:text-white">Grievance Officer:</strong> Prakash Pawar,
                Director – Operations
              </p>
              <p>
                <strong className="text-brand-950 dark:text-white">Email:</strong>{' '}
                <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">
                  {contactEmail}
                </a>
              </p>
            </div>
          </Section>

          <p className="pt-4 border-t border-slate-200 dark:border-white/10 text-sm text-slate-500">
            Return to{' '}
            <Link to="/" className="text-accent hover:underline font-semibold">
              Home
            </Link>
            ,{' '}
            <Link to="/privacy-policy" className="text-accent hover:underline font-semibold">
              Privacy Policy
            </Link>
            , or{' '}
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
