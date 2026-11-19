type SectionTitleProps = {
  dark: string
  accent: string
  invert?: boolean
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  bar?: boolean
}

export function SectionTitle({
  dark,
  accent,
  invert = false,
  className = '',
  as: Tag = 'h2',
  bar = true,
}: SectionTitleProps) {
  return (
    <div className={className}>
      {bar ? (
        <span
          aria-hidden="true"
          className={['heading-bar', invert ? 'is-on-dark' : ''].join(' ')}
        />
      ) : null}
      <Tag className="font-heading text-[26px] font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
        <span className={invert ? 'text-white' : 'text-navy'}>{dark}</span>{' '}
        <span className={invert ? 'text-accent' : 'text-strong'}>{accent}</span>
      </Tag>
    </div>
  )
}
