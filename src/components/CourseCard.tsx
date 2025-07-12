// src/components/CourseCard.tsx
import React from 'react'
import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  level: string
  duration: string
  lessons: number
}

interface CourseCardProps {
  course: Course
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-700 text-sm mb-3">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{course.level}</span>
          <span>{course.duration}</span>
          <span>{course.lessons} lessons</span>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
