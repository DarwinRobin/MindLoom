// src/app/courses/[courseId]/[lessonId]/page.tsx
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { LessonPlayer } from '@/components/LessonPlayer'

interface LessonPageProps {
  params: {
    courseId: string
    lessonId: string
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { courseId, lessonId } = params

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId }, // ✅ removed Number()
  })

  if (!lesson) notFound()

  return (
    <div className="p-6">
      <LessonPlayer lesson={lesson} />
    </div>
  )
}
