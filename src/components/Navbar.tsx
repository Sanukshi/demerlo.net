import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { hero, navLinks } from '../data/content'
import { Logo } from './ui/Logo'

const sectionIds = [
  'about',
  'challenges',
  'modules',
  'use-cases',
  'architecture',
  'plans',
  'contact',
] as const

function sectionFromHref(href: string) {
  if (href === '/home') return 'about'
  if (href.includes('#')) return href.split('#')[1]
  return ''
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const updateActive = () => {
      const y = window.scrollY
      setScrolled(y > 24)

      // Match fixed header + scroll-mt so the in-view section highlights
      const marker = 200
      let current: string = 'about'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= marker) current = id
      }

      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 80
      if (atBottom) current = sectionIds[sectionIds.length - 1]

      setActiveSection((prev) => {
        if (prev === current) return prev
        if (pathname === '/') {
          window.history.replaceState(
            null,
            '',
            current === 'about' ? '/' : `/#${current}`,
          )
        }
        return current
      })
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const handleAnchorClick = useCallback((e: MouseEvent<HTMLElement>) => {
    const anchor = (e.target as HTMLElement).closest('a')
    const href = anchor?.getAttribute('href')
    if (!anchor || !href) return

    if (href === '/home') {
      e.preventDefault()
      setActiveSection('about')
      if (pathname !== '/home') navigate('/home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setOpen(false)
      return
    }

    const nextHash = href.startsWith('/#') ? href.slice(1) : href.startsWith('#') ? href : ''
    if (!nextHash || nextHash.length < 2) return

    e.preventDefault()
    const id = nextHash.slice(1)
    setActiveSection(id)

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (pathname !== '/') {
      navigate({ pathname: '/', hash: nextHash })
      window.setTimeout(scroll, 50)
    } else {
      window.history.replaceState(null, '', nextHash)
      scroll()
    }
    setOpen(false)
  }, [navigate, pathname])

  const linkClass = scrolled
    ? 'nav-link text-navy/70 hover:!bg-navy/8 hover:!text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy'
    : 'nav-link text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

  const shellClass = scrolled
    ? 'nav-link-shell border-navy/8 bg-white/90 shadow-[0_8px_24px_rgba(31,42,55,0.08)] backdrop-blur-md'
    : 'nav-link-shell border-white/12 bg-white/[0.08] shadow-[0_10px_28px_rgba(14,26,40,0.22)] backdrop-blur-md'

  return (
    <header
      onClick={handleAnchorClick}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 py-3 shadow-[0_8px_24px_rgba(31,42,55,0.08)] backdrop-blur-md'
          : 'bg-[#17161B]/55 py-0 backdrop-blur-[2px]',
      ].join(' ')}
    >
      <div className="relative flex min-h-[72px] w-full items-center justify-between lg:min-h-[76px]">
        <div
          className={[
            'relative z-10 flex h-full items-center bg-white',
            scrolled
              ? 'ml-4 rounded-full px-4 py-2 md:ml-6'
              : 'rounded-br-[36px] px-5 py-4 md:px-7 md:py-5',
          ].join(' ')}
        >
          {!scrolled && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-9 left-0 hidden h-9 w-9 lg:block"
                style={{ background: 'radial-gradient(circle at bottom right, transparent 36px, #fff 36px)' }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-9 top-0 hidden h-9 w-9 lg:block"
                style={{ background: 'radial-gradient(circle at bottom right, transparent 36px, #fff 36px)' }}
              />
            </>
          )}
          <Logo href="/home" />
        </div>

        <nav
          aria-label="Primary"
          className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center lg:flex"
        >
          <ul className={['pointer-events-auto', shellClass].join(' ')}>
            {navLinks.map((link) => {
              const section = sectionFromHref(link.href)
              const isActive = activeSection === section

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={[
                      linkClass,
                      isActive
                        ? scrolled
                          ? 'is-active !bg-navy/10 !text-navy font-semibold'
                          : 'is-active font-semibold'
                        : '',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div
          className={[
            'relative z-10 hidden h-full items-center bg-white lg:flex',
            scrolled
              ? 'mr-4 rounded-full p-1.5 md:mr-6'
              : 'rounded-bl-[36px] px-5 py-4 md:px-7 md:py-5',
          ].join(' ')}
        >
          {!scrolled && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-9 right-0 h-9 w-9"
                style={{ background: 'radial-gradient(circle at bottom left, transparent 36px, #fff 36px)' }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-9 top-0 h-9 w-9"
                style={{ background: 'radial-gradient(circle at bottom left, transparent 36px, #fff 36px)' }}
              />
            </>
          )}
          <a
            href="#contact"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#111820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            {hero.primaryCta}
          </a>
        </div>

        <button
          type="button"
          className="mr-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:mr-6 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Primary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl bg-white shadow-card md:mx-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => {
                const section = sectionFromHref(link.href)
                const isActive = activeSection === section
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={[
                        'block rounded-lg px-3 py-3 text-base font-medium',
                        isActive ? 'bg-pale text-navy' : 'text-navy',
                      ].join(' ')}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="px-3 pt-2">
                <a href="#contact" className="block rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white">
                  {hero.primaryCta}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
