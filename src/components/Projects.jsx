import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title text-accent">Proyectos</h2>
        </Reveal>
        <div className="row g-4">
          {projects.map((project, index) => (
            <Reveal delay={index * 0.08} className="col-md-6 col-lg-4" key={project.title}>
              <motion.div
                className="card-surface p-4 h-100 d-flex flex-column"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="h5">{project.title}</h3>
                <p className="text-muted-soft flex-grow-1">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge bg-accent">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent fw-semibold text-decoration-none"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
