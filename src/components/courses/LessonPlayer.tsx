// src/components/courses/LessonPlayer.tsx
import { VideoPlayer, AudioPlayer, TextContent } from '@/components/courses/MediaPlayers';

export default function LessonPlayer({ lesson }: { lesson: any }) {
  return (
    <div className="bg-gradient-to-br from-[#1a2139] to-[#151a30] rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      
      <div className="aspect-video bg-black rounded-xl mb-6 flex items-center justify-center">
        {lesson.type === 'video' && <VideoPlayer src={lesson.content} />}
        {lesson.type === 'audio' && <AudioPlayer src={lesson.content} />}
        {lesson.type === 'text' && <TextContent content={lesson.content} />}
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold mb-1">Lesson Overview</h3>
          <p className="text-gray-400">{lesson.description}</p>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-400">{lesson.duration}</span>
        </div>
      </div>
    </div>
  );
}