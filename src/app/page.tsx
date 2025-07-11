import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Brain,
  Users,
  FileText,
  BookOpen,
  MessageCircle,
  Globe,
  Award
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: "Curated Psychology Courses",
      description: "Admin-managed courses by topic: clinical, cognitive, developmental, and more.",
      color: "bg-purple-500/10"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Discussion Forums",
      description: "Join communities, start threads, share ideas and get peer feedback.",
      color: "bg-green-500/10"
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Research Hub",
      description: "Submit and browse research papers, collaborate on projects.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Brain className="h-8 w-8 text-yellow-500" />,
      title: "Expert Articles",
      description: "Read in-depth write-ups, case studies and clinical insights.",
      color: "bg-yellow-500/10"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Global Community",
      description: "Connect with psychologists and students from around the world.",
      color: "bg-indigo-500/10"
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: "Certification Paths",
      description: "Earn badges and certificates as you complete courses and projects.",
      color: "bg-pink-500/10"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-[#0d1224] text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-indigo-400">MindLoom</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            A platform built by Darwin Robin. Explore psychology courses, join discussion forums, and contribute your research—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/courses"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              View Courses
            </Link>
            <Link
              href="/community"
              className="border border-white/50 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Join Community
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('/patterns/brain.svg')] bg-center bg-no-repeat"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0d1224] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What You Can Do on MindLoom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`${f.color} border border-white/10 rounded-2xl p-8 hover:shadow-lg transition`}
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & About */}
      <section className="py-16 bg-gradient-to-t from-[#0d1224] to-[#1a1f40] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Developed by Darwin Robin. Questions? Reach out:
          </p>
          <p className="mb-2"><strong>Phone:</strong> +254 715 904 047</p>
          <p><strong>Email:</strong> darwinrobin1485@gmail.com</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
