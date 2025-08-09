import type { Metadata } from 'next'
import { profile } from '@/content/profile'
import Link from 'next/link'

export const revalidate = 3600

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: slugify(p.title) }))
}

export function generateMetadata(props: any): Metadata { const params = (props as any).params as { slug: string }
  const project = profile.projects.find((p) => slugify(p.title) === params.slug)
  const title = project ? `${project.title} – Greg Shklovski` : 'Project – Greg Shklovski'
  const description = project?.description || 'Project detail'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: project?.link ? { canonical: project.link } : undefined,
  }
}

export default function Page(props: any) { const params = (props as any).params as { slug: string }
  const project = profile.projects.find((p) => slugify(p.title) === params.slug)
  if (!project) {
    return (
      <div className="container py-16">
        <h1 className="section-title">Project not found</h1>
        <p className="mt-2 text-neutral-400">The project you are looking for does not exist.</p>
        <Link href="/projects" className="mt-6 inline-block text-primary-400 hover:text-primary-300">← Back to projects</Link>
      </div>
    )
  }
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white">{project.title}</h1>
      <p className="mt-3 max-w-prose text-neutral-300">{project.description}</p>
      {project.year && (
        <div className="mt-2 text-sm text-neutral-400">{project.year}</div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-500">View external page</a>
      )}
      <div className="mt-10">
        <Link href="/projects" className="text-primary-400 hover:text-primary-300">← Back to projects</Link>
      </div>
    </div>
  )
}