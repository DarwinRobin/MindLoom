'use client'

import { prisma } from '@/lib/prisma'
import CourseCard from '@/components/CourseCard'
import { Course } from '@prisma/client'

export default async function CoursesPage() {
  const courses: (Course & { lessons: { id: string }[] })[] = await prisma.course.findMany({
    include: {
      lessons: {
        select: { id: true },
      },
    },
  })

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={{
              id: course.id,
              title: course.title,
              description: course.description,
              level: course.level,
              duration: course.duration,
              lessons: course.lessons.length,
            }}
          />
        ))}
      </div>
    </div>
  )
}
