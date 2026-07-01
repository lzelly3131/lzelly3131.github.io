import { education } from '../data/education'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <h2 className="section-title text-accent">Educación</h2>
        </Reveal>
        <div className="row g-4">
          {education.map((item, index) => (
            <Reveal delay={index * 0.1} className="col-md-4" key={item.title}>
              <div className="card-surface p-4 h-100">
                <span className="text-accent small fw-semibold">{item.period}</span>
                <h3 className="h6 mt-2">{item.title}</h3>
                <p className="fw-semibold text-muted-soft mb-2">{item.institution}</p>
                {item.description && (
                  <p className="text-muted-soft small mb-0">{item.description}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
