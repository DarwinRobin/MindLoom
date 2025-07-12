// src/components/courses/LessonPlayerClient.tsx
'use client'

import React, { Dispatch, SetStateAction } from 'react'

interface Lesson {
  title: string
  type: 'text' | 'audio' | 'video'
  content: string
  description: string
  duration: string
}

interface LessonPlayerClientProps {
  lesson: Lesson
  isCompleted: boolean
  onToggleComplete: () => void
  onPrevious: () => void
  onNext: () => void
  notes: string
  onNotesChange: Dispatch<SetStateAction<string>>
  onSaveNotes: () => void
}

const LessonPlayerClient: React.FC<LessonPlayerClientProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
  onPrevious,
  onNext,
  notes,
  onNotesChange,
  onSaveNotes,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
      <p className="text-sm text-gray-600">{lesson.description}</p>
      <div className="mt-4">
        {lesson.type === 'video' && (
          <video controls className="w-full rounded-lg shadow">
            <source src={lesson.content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {lesson.type === 'audio' && (
          <audio controls className="w-full">
            <source src={lesson.content} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        )}
        {lesson.type === 'text' && <p className="text-gray-800">{lesson.content}</p>}
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={onPrevious} className="bg-gray-200 px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
        <button onClick={onToggleComplete} className="bg-green-500 text-white px-4 py-2 rounded">
          {isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Notes</h3>
        <textarea
          className="w-full border p-2 rounded mt-2"
          rows={5}
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
        />
        <button onClick={onSaveNotes} className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded">
          Save Notes
        </button>
      </div>
    </div>
  )
}

export default LessonPlayerClient
