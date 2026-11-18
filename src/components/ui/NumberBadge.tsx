type NumberBadgeProps = {
  value: string
  className?: string
  onDark?: boolean
}

export function NumberBadge({
  value,
  className = '',
  onDark = false,
}: NumberBadgeProps) {
  return (
    <span
      className={[
        'absolute right-4 top-4 font-heading text-sm font-semibold tracking-wide',
        onDark ? 'text-white/45' : 'text-accent/80',
        className,
      ].join(' ')}
      aria-hidden="true"
    >
      {value}
    </span>
  )
}
