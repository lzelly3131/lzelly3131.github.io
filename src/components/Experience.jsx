import { experience } from '../data/experience'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title text-accent">Experiencia</h2>
        </Reveal>
        <div className="row g-4">
          {experience.map((job, index) => (
            <Reveal delay={index * 0.1} className="col-12" key={job.company}>
              <div className="card-surface p-4">
                <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
                  <h3 className="h5 mb-0">{job.role}</h3>
                  <span className="text-accent small fw-semibold">{job.period}</span>
                </div>
                <p className="fw-semibold mb-3">
                  {job.company} <span className="text-muted-soft fw-normal">· {job.location}</span>
                </p>
                <ul className="mb-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-muted-soft mb-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="badge bg-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
