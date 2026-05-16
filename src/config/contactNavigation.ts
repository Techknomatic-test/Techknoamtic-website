export const CONTACT_FORM_SECTION_ID = 'requirement-form';
export const CONTACT_FORM_QUERY = 'form';

/** Navigate to Contact and scroll to the requirement form (HashRouter-safe). */
export const contactFormLinkTo = {
  pathname: '/contact',
  search: `?${CONTACT_FORM_QUERY}=1`,
  state: { scrollTo: CONTACT_FORM_SECTION_ID },
} as const;

export function shouldOpenContactForm(
  state: unknown,
  search: string,
): boolean {
  const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;
  if (scrollTo === CONTACT_FORM_SECTION_ID) return true;
  return new URLSearchParams(search).get(CONTACT_FORM_QUERY) === '1';
}
