// src/components/LessonPlayer.tsx
import React from 'react'

interface LessonPlayerProps {
  videoUrl: string
}

const LessonPlayer: React.FC<LessonPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="w-full aspect-video mb-6 rounded overflow-hidden border">
      <video controls className="w-full h-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LessonPlayer
