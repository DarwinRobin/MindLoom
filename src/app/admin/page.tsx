// src/app/admin/page.tsx
import { prisma } from '@/lib/prisma'

export default async function AdminPage() {
  const courses = await prisma.course.findMany()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  )
}
