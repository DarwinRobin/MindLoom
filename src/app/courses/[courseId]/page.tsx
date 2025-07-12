// src/app/courses/[courseId]/page.tsx
import { prisma } from '@/lib/prisma' // ✅ fixed import
import { notFound } from 'next/navigation'

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = await prisma.course.findUnique({
    where: { id: params.courseId },
    include: { lessons: true }
  })

  if (!course) notFound()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <ul className="space-y-2">
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
