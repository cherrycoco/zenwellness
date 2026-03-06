'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/massage', label: 'Massage' },
  { href: '/acupuncture', label: 'Acupuncture' },
  { href: '/foot-reflexology', label: 'Reflexology' },
  { href: '/koru', label: 'KORU Herbs' },
  { href: '/rates', label: 'Rates' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    document.body.style.overflow = !mobileOpen ? 'hidden' : ''
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/90 backdrop-blur-xl border-b border-cream-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="font-display text-2xl md:text-[1.65rem] font-light tracking-wide text-stone-900 transition-colors duration-500">
              Zen
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover-line ${
                  pathname === link.href
                    ? 'text-stone-900'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-[13px] font-medium tracking-wider uppercase px-6 py-2.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-cream-50 transition-all duration-500"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobile}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-px w-6 bg-stone-900 transition-all duration-500 ${
              mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`} />
            <span className={`block h-px w-6 bg-stone-900 transition-all duration-500 ${
              mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Nav */}
      <div className={`fixed inset-0 z-40 bg-cream-50 transition-all duration-700 lg:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="h-full flex flex-col justify-center px-10" aria-label="Mobile navigation">
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 font-display text-3xl font-light transition-all duration-500 ${
                  mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${pathname === link.href ? 'text-stone-900' : 'text-stone-400 hover:text-stone-900'}`}
                style={{ transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-cream-200">
            <a href="tel:604-428-0896" className="block text-stone-500 text-sm tracking-wider mb-2">(604) 428-0896</a>
            <a href="mailto:zenwellness@outlook.com" className="block text-stone-500 text-sm tracking-wider">zenwellness@outlook.com</a>
          </div>
        </nav>
      </div>
    </>
  )
}
