type ToggleVariant = 'light' | 'dark' | 'strong'

type ToggleProps = {
  checked: boolean
  onChange?: (checked: boolean) => void
  label: string
  className?: string
  /**
   * light  – for white / pale / soft surfaces
   * dark   – for dark (charcoal / navy) surfaces
   * strong – for strong-blue or blue-gradient surfaces
   */
  variant?: ToggleVariant
}

const tracks: Record<ToggleVariant, { on: string; off: string; focus: string }> = {
  light: {
    on: 'bg-strong',
    off: 'bg-navy/20',
    focus: 'focus-visible:outline-strong',
  },
  dark: {
    on: 'bg-accent',
    off: 'bg-white/25',
    focus: 'focus-visible:outline-accent',
  },
  strong: {
    on: 'bg-white/90',
    off: 'bg-white/30',
    focus: 'focus-visible:outline-white',
  },
}

const knobs: Record<ToggleVariant, { on: string; off: string }> = {
  light: { on: 'bg-white', off: 'bg-white' },
  dark: { on: 'bg-white', off: 'bg-white' },
  strong: { on: 'bg-strong', off: 'bg-white' },
}

export function Toggle({
  checked,
  onChange,
  label,
  className = '',
  variant = 'light',
}: ToggleProps) {
  const track = tracks[variant]
  const knob = knobs[variant]

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange?.(!checked)}
      className={[
        'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        track.focus,
        checked ? track.on : track.off,
        className,
      ].join(' ')}
    >
      <span
        className={[
          'absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow transition-transform duration-200',
          checked ? `translate-x-5 ${knob.on}` : `translate-x-0 ${knob.off}`,
        ].join(' ')}
      />
    </button>
  )
}
