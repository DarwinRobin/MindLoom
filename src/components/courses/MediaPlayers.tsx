// src/components/courses/MediaPlayers.tsx

import ReactMarkdown from 'react-markdown';

export function VideoPlayer({ src }: { src: string }) {
  return (
    <video controls className="w-full h-full rounded-lg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export function AudioPlayer({ src }: { src: string }) {
  return (
    <audio controls className="w-full">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export function TextContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none text-sm leading-relaxed p-4 overflow-y-auto max-h-[400px]">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
