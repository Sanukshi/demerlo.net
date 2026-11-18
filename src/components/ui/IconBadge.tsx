import { LucideIcon } from 'lucide-react'

type IconBadgeProps = {
  icon: LucideIcon
  className?: string
  size?: 'sm' | 'md'
  onDark?: boolean
}

export function IconBadge({
  icon: Icon,
  className = '',
  size = 'md',
  onDark = false,
}: IconBadgeProps) {
  const dim = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  const iconSize = size === 'sm' ? 16 : 18

  return (
    <span
      className={[
        'inline-flex items-center justify-center rounded-full',
        onDark ? 'bg-white/15 text-accent' : 'bg-pale text-strong',
        dim,
        className,
      ].join(' ')}
      aria-hidden="true"
    >
      <Icon size={iconSize} strokeWidth={1.8} />
    </span>
  )
}
