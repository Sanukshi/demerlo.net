import { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  children: ReactNode
  className?: string
  panelClassName?: string
  bare?: boolean
  /** white | soft | tint — only applied when not bare */
  surface?: 'white' | 'soft' | 'tint'
}

export function SectionShell({
  id,
  children,
  className = '',
  panelClassName = '',
  bare = false,
  surface = 'white',
}: SectionShellProps) {
  const surfaceClass =
    surface === 'soft' ? 'is-soft' : surface === 'tint' ? 'is-tint' : ''

  return (
    <section id={id} className={['scroll-mt-28 px-4 md:px-6 lg:px-8', className].join(' ')}>
      <div className="mx-auto max-w-site">
        {bare ? (
          children
        ) : (
          <div
            className={['section-panel relative', surfaceClass, panelClassName].join(' ')}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
