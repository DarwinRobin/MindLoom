// src/app/courses/page.tsx

import { prisma } from "@/lib/prisma"
import Link from "next/link"

type CourseWithCount = {
  id: string
  title: string
  description: string
  level: string
  duration: string
  lessons: { id: string }[]
}

export default async function CoursesPage() {
  const courses: CourseWithCount[] = await prisma.course.findMany({
    include: { lessons: { select: { id: true } } },
  })

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="block border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <span>{course.lessons.length} lessons</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
