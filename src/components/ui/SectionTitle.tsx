type SectionTitleProps = {
  dark: string
  accent: string
  invert?: boolean
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
  dark,
  accent,
  invert = false,
  className = '',
  as: Tag = 'h2',
}: SectionTitleProps) {
  return (
    <Tag
      className={[
        'font-heading text-[26px] font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl',
        className,
      ].join(' ')}
    >
      <span className={invert ? 'text-white' : 'text-navy'}>{dark}</span>{' '}
      <span className={invert ? 'text-accent' : 'text-accent'}>{accent}</span>
    </Tag>
  )
}
