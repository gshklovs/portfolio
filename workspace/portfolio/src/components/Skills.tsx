import { profile } from '../content/profile'

export default function Skills() {
  if (!profile.skills.length) return null
  return (
    <section id="skills" className="container py-16">
      <h2 className="section-title">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span key={skill} className="badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}