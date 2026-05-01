import { brand } from '@/brand'
import { hexToRgbTriplet } from '@/lib/utils'

export function brandCssVars(): string {
  const map: Record<string, string> = {
    '--brand-accent': brand.accent,
    '--brand-accent-light': brand.accentLight,
    '--brand-accent-text': brand.accentText,
    '--brand-bg': brand.bg,
    '--brand-bg-secondary': brand.bgSecondary,
    '--brand-surface': brand.surface,
    '--brand-border': brand.border,
    '--brand-border-strong': brand.borderStrong,
    '--brand-text-primary': brand.textPrimary,
    '--brand-text-secondary': brand.textSecondary,
    '--brand-text-muted': brand.textMuted,
  }
  const lines = Object.entries(map)
    .map(([key, hex]) => `${key}: ${hexToRgbTriplet(hex)};`)
    .join('\n  ')
  return `:root {\n  ${lines}\n}`
}
