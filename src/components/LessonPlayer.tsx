interface LessonPlayerProps {
  videoUrl: string
}

const LessonPlayer = ({ videoUrl }: LessonPlayerProps) => {
  return (
    <div className="aspect-video w-full">
      <iframe
        src={videoUrl}
        title="Lesson Video"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  )
}

export default LessonPlayer
