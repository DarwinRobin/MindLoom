// src/lib/sampleData.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  lessons: number;
}

export const courses: Course[] = [
  {
    id: "cognitive-psychology",
    title: "Cognitive Psychology",
    description: "Explore mental processes like memory, attention, and problem-solving",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 12,
  },
  // ← add more course objects here
];
