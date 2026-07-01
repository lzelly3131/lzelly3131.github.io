import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'Acerca de mí' },
  { href: '#technologies', label: 'Tecnologías' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Educación' },
  { href: '#projects', label: 'Proyectos' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`site-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        <a className="fs-4 fw-bold text-accent text-decoration-none" href="#about">
          Eduardo Lemus
        </a>
        <button
          type="button"
          className="navbar-toggler d-lg-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className={`w-100 w-lg-auto ${menuOpen ? 'd-block' : 'd-none'} d-lg-flex`}>
          <ul className="nav flex-column flex-lg-row gap-lg-4 py-3 py-lg-0 mb-0">
            {LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link fw-semibold" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </motion.header>
  )
}
