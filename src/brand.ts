export const brand = {
  mode: 'light' as 'light' | 'dark',

  // Accent (configurable per project)
  accent: '#0F172A',
  accentLight: '#F1F5F9',
  accentText: '#FFFFFF',

  // Backgrounds
  bg: '#FFFFFF',
  bgSecondary: '#F8FAFC',
  surface: '#FFFFFF',

  // Borders
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',

  // Site info (override per project)
  siteName: 'Site Name',
  siteUrl: 'https://example.com',
}

export type Brand = typeof brand
