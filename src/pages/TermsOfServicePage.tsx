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

const contactEmail = 'privacy@techknomatic.com';

export const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Techknomatic';
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
        title="Terms of Service"
        description="Techknomatic Services Pvt Ltd · Last Updated: 29 May 2026"
        titleAnimationDelay={0}
        descriptionAnimationDelay={0.1}
      />

      <article className="pt-10 md:pt-14 pb-14 md:pb-20 px-6 bg-white dark:bg-brand-950 transition-colors duration-500">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-14 text-left">
          <Section id="introduction" title="1. Introduction">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern the use of the website of Techknomatic
              Services Pvt Ltd (&quot;Techknomatic&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a
              company incorporated under the Companies Act, 2013, having its registered office at 3rd Floor,
              Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India, and the engagement of
              professional services offered by Techknomatic.
            </p>
            <p>
              By accessing this Website or entering into any engagement with Techknomatic for the provision
              of services, you (&quot;Client&quot; or &quot;you&quot;) agree to be bound by these Terms. If you
              are accessing this Website or engaging our services on behalf of a legal entity, you represent
              that you have the authority to bind that entity to these Terms.
            </p>
            <p>
              These Terms are intended for business entities and professionals. Our services are not
              directed at individual consumers.
            </p>
          </Section>

          <Section id="services" title="2. Services">
            <p>Techknomatic offers the following professional services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-brand-950 dark:text-slate-200">
                  Business Intelligence (BI):
                </strong>{' '}
                Design and implementation of dashboards, reporting systems, and data visualisation
                solutions.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Data Engineering:</strong>{' '}
                Architecture, development, and maintenance of data pipelines, data warehouses, and
                lakehouse environments.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Data &amp; AI Strategy:</strong>{' '}
                Advisory and consulting on data governance, AI readiness, and technology roadmap
                development.
              </li>
              <li>
                <strong className="text-brand-950 dark:text-slate-200">Geospatial Analytics:</strong>{' '}
                Spatial data processing, mapping, and location intelligence solutions.
              </li>
            </ul>
            <p>
              The specific scope, deliverables, timelines, and commercial terms for any engagement shall be
              set out in a separate Statement of Work (&quot;SOW&quot;), Master Services Agreement
              (&quot;MSA&quot;), or such other written agreement executed between the parties (&quot;Project
              Agreement&quot;). In the event of any conflict between these Terms and a Project Agreement, the
              Project Agreement shall prevail to the extent of the inconsistency.
            </p>
          </Section>

          <Section id="use-of-website" title="3. Use of the Website">
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.1 Permitted use
            </h3>
            <p>
              You may access and use this Website solely for lawful purposes and in accordance with these
              Terms.
            </p>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.2 Prohibited conduct
            </h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website in any manner that violates applicable law or regulation</li>
              <li>
                Attempt to gain unauthorised access to any part of the Website or its underlying systems
              </li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>
                Use automated tools (bots, scrapers, crawlers) to extract data from the Website without
                prior written consent from Techknomatic
              </li>
              <li>
                Reproduce, distribute, or commercially exploit any content from the Website without our
                express prior written permission
              </li>
            </ul>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              3.3 Access restrictions
            </h3>
            <p>
              Techknomatic reserves the right to suspend or restrict access to the Website at any time
              without prior notice.
            </p>
          </Section>

          <Section id="intellectual-property" title="4. Intellectual Property">
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">4.1 Website content</h3>
            <p>
              All content on this Website — including text, graphics, logos, icons, images, and software —
              is the property of Techknomatic Services Pvt Ltd or its licensors and is protected under
              applicable intellectual property laws in India.
            </p>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">
              4.2 Service deliverables
            </h3>
            <p>Unless expressly stated otherwise in a Project Agreement:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All pre-existing intellectual property brought by either party into an engagement remains
                the exclusive property of the originating party.
              </li>
              <li>
                Deliverables created specifically for a Client shall vest in the Client upon receipt of full
                payment of all applicable fees, as specified in the relevant Project Agreement.
              </li>
              <li>
                Techknomatic retains ownership of all methodologies, frameworks, tools, templates,
                processes, and accumulated know-how developed independently of any specific client
                engagement, including any improvements to the foregoing arising in the course of service
                delivery.
              </li>
            </ul>
            <h3 className="text-lg font-bold text-brand-950 dark:text-white pt-2">4.3 Trademarks</h3>
            <p>
              Nothing in these Terms grants you a licence to use Techknomatic&apos;s name, logo, or trademarks
              without prior written consent.
            </p>
          </Section>

          <Section id="confidentiality" title="5. Confidentiality">
            <p>
              5.1 Each party acknowledges that in the course of an engagement, it may receive
              confidential information of the other party, including but not limited to business plans,
              data, technical specifications, client lists, and pricing.
            </p>
            <p>5.2 Each party agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep all confidential information strictly confidential</li>
              <li>Use confidential information solely for the purposes of the engagement</li>
              <li>
                Disclose confidential information only to those employees or contractors who have a
                legitimate need to know and are bound by equivalent confidentiality obligations
              </li>
            </ul>
            <p>
              5.3 These obligations do not apply to information that: (a) is or becomes publicly available
              through no fault of the receiving party; (b) was already known to the receiving party prior to
              disclosure; (c) is independently developed by the receiving party without reference to the
              disclosing party&apos;s confidential information; or (d) is required to be disclosed by
              applicable law or regulatory order, provided that prior written notice is given to the
              disclosing party where legally permitted.
            </p>
            <p>
              5.4 Confidentiality obligations shall survive the termination or expiry of any engagement for a
              period of three (3) years, unless a longer period is specified in the applicable Project
              Agreement.
            </p>
          </Section>

          <Section id="data-protection" title="6. Data Protection">
            <p>
              6.1 Where Techknomatic processes personal data on behalf of a Client as part of a service
              engagement, the parties shall enter into a separate data processing agreement, as required
              under applicable law including the Digital Personal Data Protection Act, 2023.
            </p>
            <p>
              6.2 Each party is independently responsible for complying with applicable data protection and
              privacy laws in respect of personal data under its control or custody.
            </p>
            <p>
              6.3 Techknomatic&apos;s collection and use of personal data submitted through this Website is
              governed by our{' '}
              <Link to="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section id="fees-and-payment" title="7. Fees and Payment">
            <p>7.1 Fees for services are as agreed in the applicable Project Agreement.</p>
            <p>
              7.2 Invoices are issued in accordance with the milestone schedule or billing cycle set out in
              the Project Agreement and are payable within the period specified therein.
            </p>
            <p>
              7.3 Techknomatic reserves the right to suspend services in the event of non-payment of
              undisputed invoices beyond the agreed payment period, following written notice to the Client.
            </p>
            <p>
              7.4 All fees are exclusive of applicable taxes, including Goods and Services Tax (GST), which
              shall be charged additionally as required under applicable law.
            </p>
          </Section>

          <Section id="warranties" title="8. Warranties and Disclaimers">
            <p>
              8.1 Techknomatic warrants that it will perform services with reasonable skill, care, and
              diligence, in accordance with the specifications agreed in the applicable Project Agreement.
            </p>
            <p>
              8.2 This Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. To the maximum extent permitted by applicable law, Techknomatic makes no representations
              or warranties, express or implied, regarding the accuracy, completeness, reliability, or
              fitness for a particular purpose of any content on this Website.
            </p>
            <p>
              8.3 Techknomatic does not warrant that the Website will be uninterrupted, error-free, or free of
              viruses or other harmful components.
            </p>
          </Section>

          <Section id="limitation-of-liability" title="9. Limitation of Liability">
            <p>
              9.1 To the maximum extent permitted by applicable law, Techknomatic&apos;s total aggregate
              liability to you arising out of or in connection with these Terms or any Project Agreement
              shall not exceed the total fees paid by you to Techknomatic under the relevant Project
              Agreement in the twelve (12) months immediately preceding the event giving rise to the claim.
            </p>
            <p>
              9.2 Techknomatic shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits, loss of data, loss of goodwill,
              or business interruption, even if advised of the possibility of such damages.
            </p>
            <p>
              9.3 Nothing in these Terms limits or excludes liability for fraud, wilful misconduct, gross
              negligence, or any other liability that cannot be excluded or limited under applicable law.
            </p>
          </Section>

          <Section id="indemnification" title="10. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Techknomatic and its officers, directors,
              employees, and agents from and against any third-party claims, liabilities, damages, losses, and
              expenses (including reasonable legal fees) arising out of or related to: (a) your breach of these
              Terms; (b) your use of this Website in violation of applicable law; or (c) data, instructions,
              or materials you provided to Techknomatic in connection with a service engagement that infringe
              the rights of any third party or violate applicable law.
            </p>
          </Section>

          <Section id="force-majeure" title="11. Force Majeure">
            <p>
              Techknomatic shall not be liable for any delay or failure in performance of its obligations
              resulting from circumstances beyond its reasonable control, including but not limited to natural
              disasters, pandemics, power failures, cyberattacks, acts of government or regulatory authority,
              or internet service disruptions. Techknomatic will endeavour to notify you promptly of any such
              event and to resume performance as soon as reasonably practicable.
            </p>
          </Section>

          <Section id="termination" title="12. Termination">
            <p>
              12.1 Either party may terminate a Project Agreement in accordance with the termination
              provisions set out therein.
            </p>
            <p>
              12.2 Techknomatic reserves the right to immediately terminate or suspend access to the Website
              or any services in the event of a material breach of these Terms by you.
            </p>
            <p>
              12.3 On termination, provisions of these Terms that by their nature should survive (including
              but not limited to Clauses 4, 5, 9, 10, and 12) shall continue to apply.
            </p>
          </Section>

          <Section id="governing-law" title="13. Governing Law and Dispute Resolution">
            <p>
              13.1 These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <p>
              13.2 Any dispute arising out of or in connection with these Terms shall first be subject to
              good-faith negotiations between the parties. If the dispute is not resolved within thirty (30)
              days of written notice by either party, it shall be referred to arbitration.
            </p>
            <p>
              13.3 Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act,
              1996 (as amended). The seat and venue of arbitration shall be Pune, Maharashtra, India.
              Proceedings shall be conducted in English by a sole arbitrator mutually agreed upon by the
              parties.
            </p>
            <p>
              13.4 The courts at Pune, Maharashtra, India shall have exclusive jurisdiction over any matters
              not subject to arbitration under these Terms.
            </p>
          </Section>

          <Section id="modifications" title="14. Modifications to Terms">
            <p>
              Techknomatic reserves the right to update these Terms at any time. Changes will be posted on
              this Website with a revised &quot;Last Updated&quot; date. Your continued use of the Website
              after the effective date of any change constitutes acceptance of the updated Terms. For ongoing
              service engagements, material changes to Terms will be communicated directly to the relevant
              Client.
            </p>
          </Section>

          <Section id="severability" title="15. Severability">
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable under applicable
              law, that provision shall be modified to the minimum extent necessary to make it enforceable, or
              severed if modification is not possible, and the remaining provisions shall continue in full
              force and effect.
            </p>
          </Section>

          <Section id="entire-agreement" title="16. Entire Agreement">
            <p>
              These Terms, together with any applicable Project Agreement and the{' '}
              <Link to="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Techknomatic with respect to the subject
              matter herein and supersede all prior representations, discussions, and agreements.
            </p>
          </Section>

          <Section id="contact" title="17. Contact">
            <p>For any questions regarding these Terms, please contact:</p>
            <p className="font-semibold text-brand-950 dark:text-white">Techknomatic Services Pvt Ltd</p>
            <p>
              3rd Floor, Signet Corner, Balewadi Phata, Baner, Pune, Maharashtra 411045, India
              <br />
              Email:{' '}
              <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">
                {contactEmail}
              </a>
            </p>
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
