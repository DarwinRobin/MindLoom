import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  lessonCount?: number;
}

export default function CourseCard({ 
  id, 
  title, 
  description, 
  image,
  lessonCount = 0
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block group">
      <div className="bg-white/10 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-[1.02]">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="bg-gradient-to-r from-purple-900/70 to-indigo-900/70 w-full h-48 flex items-center justify-center">
            <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{title}</h3>
            {lessonCount > 0 && (
              <span className="bg-purple-900/50 text-purple-300 text-xs px-2.5 py-1 rounded-full">
                {lessonCount} lessons
              </span>
            )}
          </div>
          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
          <div className="text-purple-400 font-medium flex items-center group-hover:underline">
            Start Learning
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}