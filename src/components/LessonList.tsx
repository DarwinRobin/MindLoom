import Link from 'next/link';

export default function LessonList({ lessons }: { lessons: any[] }) {
  return (
    <div className="space-y-3">
      {lessons.map((lesson, index) => (
        <Link 
          key={lesson.id}
          href={`/lessons/${lesson.id}`}
          className="flex items-center bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors border border-white/10 group"
        >
          <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <span className="font-bold">{index + 1}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{lesson.title}</h3>
          </div>
          <svg className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}