import { technologies } from '../data/technologies'
import Reveal from './Reveal'

export default function TechCarousel() {
  const doubled = [...technologies, ...technologies]

  return (
    <section id="technologies" aria-label="Tecnologías">
      <div className="container">
        <Reveal>
          <h2 className="section-title text-accent">Tecnologías</h2>
        </Reveal>
      </div>
      <div className="tech-marquee mt-4">
        <div className="tech-marquee-track">
          {doubled.map(({ name, Icon }, index) => (
            <div className="tech-chip" key={`${name}-${index}`}>
              <Icon aria-hidden="true" />
              <span className="small">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
