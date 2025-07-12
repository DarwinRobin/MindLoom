// src/components/LessonPlayer.tsx
'use client'

import React from 'react'
import { Lesson } from '@prisma/client'

interface LessonPlayerProps {
  lesson: Lesson
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({ lesson }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{lesson.title}</h2>
      <video
        controls
        className="w-full rounded-lg shadow-md"
        src={lesson.videoUrl || ''}
      />
      <p className="text-gray-700">{lesson.description}</p>
    </div>
  )
}
