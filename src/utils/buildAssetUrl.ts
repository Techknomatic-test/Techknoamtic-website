/** Build a public asset URL with BASE_URL and per-segment encoding (for paths with spaces). */
export function buildAssetUrl(folder: string, file: string): string {
  const segments = [...folder.split('/'), file].map(encodeURIComponent);
  return `${import.meta.env.BASE_URL}${segments.join('/')}`;
}
