// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-16">
      <div className="max-w-5xl mx-auto text-center px-6 py-8">
        <p className="text-sm">
          Built & maintained by{" "}
          <a
            href="mailto:darwinrobin1485@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            Darwin Robin
          </a>
        </p>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} MindLoom</p>
      </div>
    </footer>
  );
}
