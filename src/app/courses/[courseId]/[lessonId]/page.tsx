// src/app/courses/[courseId]/[lessonId]/page.tsx

import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import LessonPlayer from "@/components/LessonPlayer"

interface LessonPageProps {
  params: { courseId: string; lessonId: string }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
  })

  if (!lesson) return notFound()

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <LessonPlayer videoUrl={lesson.videoUrl ?? ""} />
      <p className="text-gray-700 mt-4">{lesson.content}</p>
    </div>
  )
}
