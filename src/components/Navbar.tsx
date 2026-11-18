import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { hero, navLinks } from '../data/content'
import { Logo } from './ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      if (pathname !== '/home') navigate('/home')
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      setOpen(false)
      return
    }

    const hash = href.startsWith('/#') ? href.slice(1) : href.startsWith('#') ? href : ''
    if (!hash || hash.length < 2) return

    e.preventDefault()
    const id = hash.slice(1)
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (pathname !== '/') {
      navigate({ pathname: '/', hash })
      window.setTimeout(scroll, 0)
    } else {
      window.history.replaceState(null, '', hash)
      scroll()
    }
    setOpen(false)
  }, [navigate, pathname])

  const linkClass = scrolled
    ? 'text-sm font-medium text-navy/80 transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy'
    : 'text-sm font-medium text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

  return (
    <header
      onClick={handleAnchorClick}
      className={[
        'fixed inset-x-0 z-50 px-4 transition-all duration-300 md:px-6',
        scrolled ? 'top-0 bg-white/95 py-3 shadow-[0_8px_24px_rgba(31,42,55,0.08)] backdrop-blur-md' : 'top-6',
      ].join(' ')}
    >
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between">
        <div
          className={[
            'relative z-10 bg-white',
            scrolled ? 'rounded-full px-3 py-2' : 'rounded-br-[36px] px-4 pb-4 pt-3',
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
          <Logo href="#about" />
        </div>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={[
            'relative z-10 hidden items-center gap-2 bg-white lg:flex',
            scrolled ? 'rounded-full p-1' : 'rounded-bl-[36px] px-5 pb-5 pt-3',
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
            className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#111820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#contact"
            aria-label="Request a Demo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-[#111820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy lg:hidden"
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
            className="mx-auto mt-3 max-w-[1280px] overflow-hidden rounded-2xl bg-white shadow-card lg:hidden"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block rounded-lg px-3 py-3 text-base font-medium text-navy">
                    {link.label}
                  </a>
                </li>
              ))}
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
