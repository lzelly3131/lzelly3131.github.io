import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const POSITIONS = ['Desarrollador Web', 'Software Developer', 'Desarrollador Full Stack']

export default function Hero() {
  const typed = useTypewriter(POSITIONS)

  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', paddingTop: '6rem' }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-accent fw-semibold mb-2">Hola, soy</p>
            <h1 className="display-4 fw-bold mb-2">Eduardo Lemus</h1>
            <h2 className="h4 text-muted-soft mb-4" style={{ minHeight: '2rem' }}>
              {typed}
              <span className="text-accent">|</span>
            </h2>
            <p className="lead text-muted-soft mb-4">
              Desarrollador de Software Full Stack con más de 5 años de experiencia entre
              soporte técnico, análisis de TI y desarrollo web. Especializado en
              mantenimiento y evolución de sistemas ERP en producción, automatización de
              reportes e infraestructura en AWS/Linux. Enfocado en construir soluciones
              permanentes y escalables — no parches temporales.
            </p>
            <div className="d-flex gap-3 flex-wrap">
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
            </div>
          </motion.div>
          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
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
