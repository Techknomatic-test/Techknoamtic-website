export const ACCELERATORS_SECTION_ID = 'accelerators';
export const ACCELERATORS_SECTION_QUERY = 'accelerators';

/** Navigate to Home and scroll to the accelerators section (HashRouter-safe). */
export const acceleratorsSectionLinkTo = {
  pathname: '/',
  search: `?${ACCELERATORS_SECTION_QUERY}=1`,
  state: { scrollTo: ACCELERATORS_SECTION_ID },
} as const;

export function shouldScrollToAccelerators(
  state: unknown,
  search: string,
): boolean {
  const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;
  if (scrollTo === ACCELERATORS_SECTION_ID) return true;
  return new URLSearchParams(search).get(ACCELERATORS_SECTION_QUERY) === '1';
}
