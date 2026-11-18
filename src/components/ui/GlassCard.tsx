import { HTMLAttributes } from 'react'

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  padding?: 'sm' | 'md' | 'lg'
}

const paddings = {
  sm: 'p-3 md:p-4',
  md: 'p-4 md:p-5',
  lg: 'p-5 md:p-6',
}

export function GlassCard({
  className = '',
  padding = 'md',
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-card border border-white/80 bg-white/70 shadow-card backdrop-blur-[12px]',
        paddings[padding],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
