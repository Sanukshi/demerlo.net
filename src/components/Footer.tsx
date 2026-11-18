import { Facebook, Linkedin, Twitter, Youtube, LucideIcon } from 'lucide-react'
import { footer, site } from '../data/content'
import { Logo } from './ui/Logo'

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  X: Twitter,
  Facebook,
  YouTube: Youtube,
}

export function Footer() {
  return (
    <footer className="mt-4 px-4 pb-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-site rounded-panel bg-navy p-8 text-white md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          <div className="max-w-md">
            <Logo inverted />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {footer.description}
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-3" aria-label="Social media">
              {footer.social.map((s) => {
                const Icon = socialIcons[s.label]
                if (!Icon) return null
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-strong hover:text-white"
                    >
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Demerlo. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
