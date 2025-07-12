import React from 'react'
import Link from 'next/link'

export interface CourseCardProps {
  id: string
  title: string
  description: string
  level: string
  duration: string
  lessons: number
}

const CourseCard: React.FC<{ course: CourseCardProps }> = ({ course }) => (
  <Link href={`/courses/${course.id}`}>
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-700 text-sm mb-3">{course.description}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{course.level}</span>
        <span>{course.duration}</span>
        <span>{course.lessons} lessons</span>
      </div>
    </div>
  </Link>
)

export default CourseCard
