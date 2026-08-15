export const GITHUB_URL = 'https://github.com/ChargePi/oecs'

// Set at build time via VITE_OECS_HUB_URL. Hub links are omitted entirely when unset.
export const OECS_HUB_URL = import.meta.env.VITE_OECS_HUB_URL || undefined

export const NAV_LINKS = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#schema', label: 'Schema' },
] as const

// Single, shared stagger sequence (200ms/step) for Reveal — every section indexes
// into this instead of inventing its own delays, so the cascade reads the same everywhere.
export const STAGGER_DELAYS = [0, 200, 400, 600] as const
