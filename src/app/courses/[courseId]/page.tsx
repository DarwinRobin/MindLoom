import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function CoursePage({
  params: { courseId }
}: {
  params: { courseId: string }
}) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { lessons: true }
  })

  if (!course) return notFound()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <ul className="space-y-2">
        {course.lessons.map((l) => (
          <li key={l.id}>{l.title}</li>
        ))}
      </ul>
    </div>
  )
}
