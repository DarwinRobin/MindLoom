// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <section className="text-center py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-indigo-400">MindLoom</span>
        </h1>
        <p className="text-lg mb-8">
          A platform built by <strong>Darwin Robin</strong>. Explore psychology
          courses, join discussion forums, and contribute your research—all in
          one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/courses"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
          >
            View Courses
          </a>
          <a
            href="/community"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition"
          >
            Join Community
          </a>
        </div>
      </section>
    </main>
  );
}
