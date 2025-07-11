// src/components/courses/LessonPlayerClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LessonPlayer from './LessonPlayer';

interface LessonClientProps {
  lesson: {
    id: number;
    title: string;
    type: string;
    contentUrl: string;
    description: string;
    duration: string;
  };
  courseId: string;
}

export default function LessonPlayerClient({ lesson, courseId }: LessonClientProps) {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');

  // Fetch progress and existing note on mount
  useEffect(() => {
    // 1️⃣ Progress
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, lessonId: lesson.id, completed: false }),
    })
      .then(res => res.json())
      .then(data => setIsCompleted(data.completed));

    // 2️⃣ Notes (simple GET via POST hack — adjust to real GET later)
    fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, lessonId: lesson.id, content: '' }),
    })
      .then(res => res.json())
      .then(data => setNotes(data.content || ''));
  }, [lesson.id]);

  // Toggle completion
  const toggleComplete = () => {
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, lessonId: lesson.id, completed: !isCompleted }),
    })
      .then(res => res.json())
      .then(data => setIsCompleted(data.completed));
  };

  // Save notes
  const saveNotes = () => {
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'note-id': '0', // for upsert header; 0 means “create new”
      },
      body: JSON.stringify({ userId: 1, lessonId: lesson.id, content: notes }),
    })
      .then(res => res.json())
      .then(data => {
        // you could store returned note.id in state and use for updates
        console.log('Notes saved:', data);
      });
  };

  const currentId = lesson.id;
  const prevId = String(currentId - 1);
  const nextId = String(currentId + 1);

  return (
    <LessonPlayer
      lesson={{
        title: lesson.title,
        type: lesson.type as 'video' | 'audio' | 'text',
        content: lesson.contentUrl,
        description: lesson.description,
        duration: lesson.duration,
      }}
      isCompleted={isCompleted}
      onToggleComplete={toggleComplete}
      onPrevious={() => {
        if (currentId > 1) router.push(`/courses/${courseId}/${prevId}`);
      }}
      onNext={() => {
        router.push(`/courses/${courseId}/${nextId}`);
      }}
      // Pass down notes UI handlers
      notes={notes}
      onNotesChange={setNotes}
      onSaveNotes={saveNotes}
    />
  );
}
