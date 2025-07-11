// src/app/courses/page.tsx
import CourseCard from '@/components/courses/CourseCard';

export default function CoursesPage() {
  const courses = [
    {
      id: 'cognitive-psychology',
      title: 'Cognitive Psychology',
      description: 'Explore mental processes like memory, attention, and problem-solving',
      level: 'Intermediate',
      duration: '8 weeks',
      lessons: 12
    },
    // Add more courses
  ];

  return (
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Psychology Courses</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Deepen your understanding of the human mind with our expert-led courses
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}