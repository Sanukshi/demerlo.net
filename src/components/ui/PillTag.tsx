type PillTagProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'white' | 'strong'
}

const variants = {
  default: 'bg-pale text-strong',
  white: 'bg-white/90 text-navy',
  strong: 'bg-strong text-white',
}

export function PillTag({
  children,
  className = '',
  variant = 'default',
}: PillTagProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
