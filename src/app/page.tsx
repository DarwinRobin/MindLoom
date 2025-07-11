import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  BookOpen, 
  FileText, 
  Users, 
  Brain, 
  Lightbulb, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: "Comprehensive Courses",
      description: "Dive into specialized psychology courses designed by leading researchers and practitioners in the field.",
      color: "bg-purple-500/10"
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Academic Resources",
      description: "Access exclusive journals, research papers, and learning materials curated for psychology scholars.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Collaborative Research",
      description: "Connect with peers and mentors to collaborate on groundbreaking psychological research projects.",
      color: "bg-green-500/10"
    },
    {
      icon: <Brain className="h-8 w-8 text-yellow-500" />,
      title: "Mind Mapping Tools",
      description: "Visualize complex psychological concepts with our advanced cognitive mapping technology.",
      color: "bg-yellow-500/10"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Idea Incubation",
      description: "Develop and refine your psychological theories in a supportive, intellectually stimulating environment.",
      color: "bg-orange-500/10"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-pink-500" />,
      title: "Supportive Community",
      description: "Join thoughtful discussions and receive mentorship from psychology experts worldwide.",
      color: "bg-pink-500/10"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0d1224] to-[#1a1f40] overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Explore the <span className="text-purple-400">MindLoom</span> Experience
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                A platform designed by psychologists, for psychologists. Discover tools and resources that illuminate the complexities of the human mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/courses" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/register" 
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-lg w-full">
                <div className="aspect-video bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg flex items-center justify-center">
                  <div className="bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32" />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg text-gray-300">"MindLoom transformed how I approach psychological research and collaboration."</p>
                  <p className="mt-4 text-purple-400 font-medium">— Dr. Elena Rodriguez, Clinical Psychologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d1224]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Designed for <span className="text-purple-400">Psychological Excellence</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to advance your understanding of the human mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} border border-white/10 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-purple-500/10`}
              >
                <div className="mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-[#0d1224] to-[#1a1f40]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How <span className="text-purple-400">MindLoom</span> Works</h2>
            <p className="text-xl text-gray-400">
              A seamless journey from learning to discovery to collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/10 rounded-2xl">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Explore Courses</h3>
              <p className="text-gray-400">
                Browse our extensive catalog of psychology courses curated by experts
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-2xl">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Join Research Groups</h3>
              <p className="text-gray-400">
                Connect with peers working on similar psychological inquiries
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-white/10 rounded-2xl">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Contribute & Grow</h3>
              <p className="text-gray-400">
                Share findings, develop theories, and advance psychological science
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0d1224]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our <span className="text-purple-400">Community</span> Says</h2>
            <p className="text-xl text-gray-400">
              Join thousands of psychologists, researchers, and students advancing our understanding of the mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-2xl border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-gray-700 border-2 border-dashed rounded-full w-16 h-16 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                  <p className="text-gray-400">Cognitive Psychologist</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"MindLoom's cognitive mapping tools have revolutionized how I visualize complex psychological concepts for my research."</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-gray-700 border-2 border-dashed rounded-full w-16 h-16 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-gray-400">Research Student</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"The collaborative environment helped me connect with mentors who guided me through my thesis on developmental psychology."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#121a37] to-[#1a2248] border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join our community of psychology professionals and enthusiasts today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/register" 
                className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
              >
                Get Started Free
              </Link>
              <Link 
                href="/courses" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}