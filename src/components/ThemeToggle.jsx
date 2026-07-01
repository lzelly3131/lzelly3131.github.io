import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <div className="theme-toggle-fixed">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
        style={{ width: '2.5rem', height: '2.5rem' }}
        onClick={onToggle}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        title={isDark ? 'Modo claro' : 'Modo oscuro'}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="d-flex"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
