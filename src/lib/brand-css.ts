import { brand } from '@/brand'
import { hexToRgbTriplet } from '@/lib/utils'

export function brandCssVars(): string {
  const map: Record<string, string> = {
    '--brand-accent': brand.accent,
    '--brand-accent-light': brand.accentLight,
    '--brand-accent-text': brand.accentText,
    '--brand-accent-dark': brand.accentDark,
    '--brand-accent-deep': brand.accentDeep,
    '--brand-accent-border': brand.accentBorder,
    '--brand-coral': brand.coral,
    '--brand-coral-light': brand.coralLight,
    '--brand-coral-dark': brand.coralDark,
    '--brand-leaf': brand.leaf,
    '--brand-leaf-light': brand.leafLight,
    '--brand-leaf-dark': brand.leafDark,
    '--brand-leaf-text': brand.leafText,
    '--brand-leaf-border': brand.leafBorder,
    '--brand-bg': brand.bg,
    '--brand-bg-secondary': brand.bgSecondary,
    '--brand-surface': brand.surface,
    '--brand-surface-dark': brand.surfaceDark,
    '--brand-surface-darker': brand.surfaceDarker,
    '--brand-border': brand.border,
    '--brand-border-strong': brand.borderStrong,
    '--brand-text-primary': brand.textPrimary,
    '--brand-text-secondary': brand.textSecondary,
    '--brand-text-muted': brand.textMuted,
    '--brand-text-on-dark': brand.textOnDark,
  }
  const lines = Object.entries(map)
    .map(([key, hex]) => `${key}: ${hexToRgbTriplet(hex)};`)
    .join('\n  ')
  return `:root {\n  ${lines}\n}`
}
