// src/app/courses/[courseId]/page.tsx

import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import LessonList from '@/components/LessonList';
import EnrollButton from '@/components/EnrollButton';

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.courseId },
    include: {
      lessons: true,
      enrollments: true,
    },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            ) : (
              <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
            )}

            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <div className="flex items-center mb-6">
              <span className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full mr-3">
                {course.lessons.length} lessons
              </span>
              <span className="text-gray-400 text-sm">
                {course.enrollments.length} students enrolled
              </span>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">{course.description}</p>

            <EnrollButton courseId={course.id} />
          </div>

          {/* Lessons */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <LessonList lessons={course.lessons} />
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm sticky top-24">
            <h3 className="font-bold text-lg mb-4">What You'll Learn</h3>
            <ul className="space-y-3">
              {[
                'Foundational psychological concepts',
                'Research methodology skills',
                'Clinical assessment techniques',
                'Cognitive behavioral approaches',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-bold text-lg mb-4">Course Details</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="text-white">8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="text-white">Beginner to Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="text-white">Self-paced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
