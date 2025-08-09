import Projects from '@/components/Projects'

export const metadata = {
  title: 'Projects – Greg Shklovski',
  description: 'Selected projects and demos by Greg Shklovski',
}

export const revalidate = 3600

export default function Page() {
  return <Projects />
}