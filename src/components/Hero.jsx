import { motion, useReducedMotion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const POSITIONS = ['Desarrollador Web', 'Software Developer', 'Desarrollador Full Stack']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const typed = useTypewriter(POSITIONS)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', paddingTop: '6rem' }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-7"
            variants={containerVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-accent fw-semibold mb-2">
              Hola, soy
            </motion.p>
            <motion.h1 variants={itemVariants} className="display-4 fw-bold mb-2">
              Eduardo Lemus
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="h4 text-muted-soft mb-4"
              style={{ minHeight: '2rem' }}
            >
              {typed}
              <span className="text-accent">|</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="lead text-muted-soft mb-4">
              Desarrollador de Software Full Stack con más de 5 años de experiencia entre
              soporte técnico, análisis de TI y desarrollo web. Especializado en
              mantenimiento y evolución de sistemas ERP en producción, automatización de
              reportes e infraestructura en AWS/Linux. Enfocado en construir soluciones
              permanentes y escalables — no parches temporales.
            </motion.p>
            <motion.div variants={itemVariants} className="d-flex gap-3 flex-wrap">
              <a
                href="/file/CV-dev0103_compressed.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Descargar CV
              </a>
              <a
                href="https://wa.me/50251347064"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-lg"
              >
                Contactar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="col-lg-5 text-center"
            variants={photoVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            animate="visible"
          >
            <img
              src="/images/presentation.jpeg"
              alt="Foto de Eduardo Lemus"
              className="img-fluid rounded-4 card-surface"
              style={{ maxWidth: '320px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
