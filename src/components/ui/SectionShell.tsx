import { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  children: ReactNode
  className?: string
  panelClassName?: string
  bare?: boolean
}

export function SectionShell({
  id,
  children,
  className = '',
  panelClassName = '',
  bare = false,
}: SectionShellProps) {
  return (
    <section id={id} className={['scroll-mt-24 px-4 md:px-6 lg:px-8', className].join(' ')}>
      <div className="mx-auto max-w-site">
        {bare ? (
          children
        ) : (
          <div className={['section-panel', panelClassName].join(' ')}>{children}</div>
        )}
      </div>
    </section>
  )
}
