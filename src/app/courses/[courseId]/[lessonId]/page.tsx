// src/app/courses/[courseId]/[lessonId]/page.tsx
import { prisma } from '@/lib/prisma';
import LessonPlayerClient from '@/components/courses/LessonPlayerClient';
import { notFound } from 'next/navigation';

interface LessonParams {
  params: {
    courseId: string;
    lessonId: string;
  };
}

export default async function LessonPage({ params }: LessonParams) {
  const { courseId, lessonId } = params;

  const lesson = await prisma.lesson.findUnique({
    where: { id: Number(lessonId) },
  });

  if (!lesson) notFound();

  return <LessonPlayerClient lesson={lesson} courseId={courseId} />;
}
