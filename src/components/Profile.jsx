import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Profile() {
  return (
    <section id="profile">
      <div className="container">
        <Reveal>
          <h2 className="section-title text-accent">Quién soy</h2>
        </Reveal>
        <div className="row g-5 align-items-start">
          <Reveal delay={0.1} className="col-lg-7">
            <p className="lead text-muted-soft">{profile.intro}</p>
          </Reveal>
          <Reveal delay={0.2} className="col-lg-5">
            <div className="card-surface p-4 mb-4">
              <h3 className="h6 text-accent mb-3">Mis valores</h3>
              <div className="d-flex flex-wrap gap-2">
                {profile.values.map((value) => (
                  <span key={value} className="badge bg-accent">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-surface p-4">
              <h3 className="h6 text-accent mb-3">Intereses</h3>
              <div className="d-flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span key={interest} className="badge bg-accent">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
