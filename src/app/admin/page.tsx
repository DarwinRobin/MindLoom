// src/app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
}

export default async function AdminPage() {
  // Fetch all courses (you can expand select as needed)
  const courses: Course[] = await prisma.course.findMany({
    select: { id: true, title: true, description: true },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Admin Dashboard</h1>
      <table className="w-full table-auto border-collapse bg-gray-800 text-white">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id} className="hover:bg-gray-700">
              <td className="border px-4 py-2">{c.title}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2 text-center">
                <Link
                  href={`/admin/courses/${c.id}`}
                  className="text-indigo-400 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <Link
          href="/admin/courses/new"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
        >
          + New Course
        </Link>
      </div>
    </div>
  );
}
