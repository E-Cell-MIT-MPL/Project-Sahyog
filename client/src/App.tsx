import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6" />
          <span className="text-sm font-medium">Student Startup Portal</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Marketplace</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-1 bg-white text-black rounded text-sm font-medium"
        >
          Register
        </motion.button>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative">
        <motion.div 
          className="absolute inset-0 flex items-center px-4 md:px-20"
          style={{ opacity, y }}
        >
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold tracking-tight"
            >
              Empowering
              <br />
              Entrepreneurs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-md"
            >
              Connect, collaborate, and grow your startup with resources, mentorship, and a community of like-minded innovators.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-black rounded-md font-medium"
              >
                Get Started →
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 pt-8"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-medium">50+</span> startups already registered
              </div>
            </motion.div>
          </div>
          <div className="hidden md:block w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-lg blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Platform Preview"
                className="rounded-lg border border-white/10"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Innovation Centre Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="text-center mb-2">
          <div className="text-xs text-gray-400">NSF Innovation Ranking #1 (Q3 Sept 2023)</div>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Innovation Centre at MAHE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-sm mb-16"
        >
          Established in 2007 by MAHE's Student Affairs, fostering innovation and entrepreneurship among students, faculty, alumni, and the local community.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">A Supportive Ecosystem</h3>
            <p className="text-gray-400 text-sm mb-8">
              The Innovation Centre provides a comprehensive ecosystem that nurtures creativity and innovation. Access resources, connect with mentors, and accelerate your solutions.
            </p>
            <div className="space-y-4">
              {[
                { color: 'bg-blue-500', text: 'Expert guidance from industry professionals and academic leaders' },
                { color: 'bg-green-500', text: 'Access to seed funding and connections to potential investors' },
                { color: 'bg-orange-500', text: 'State-of-the-art facilities and resources for prototype development' },
                { color: 'bg-purple-500', text: 'Network with like-minded innovators, students, and faculty' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <p className="text-sm text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&q=80"
                alt="Innovation Centre"
                className="rounded-lg mb-4"
              />
              <div className="space-y-4">
                <h4 className="font-medium">Innovation Centre at MAHE</h4>
                <p className="text-sm text-gray-400">
                  The Innovation Centre at MAHE is dedicated to fostering a culture of innovation and entrepreneurship. It serves as a bridge between academic research and commercial development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portal Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-lg p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Student Startup Portal & Innovation Centre</h3>
                <p className="text-gray-400 text-sm">
                  The Student Startup Portal works in close collaboration with the Innovation Centre at MAHE to provide a seamless journey from idea to startup. Register your startup to access all the resources offered by the Innovation Centre.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-white text-black rounded-md font-medium text-center"
                >
                  Register Your Startup
                </motion.button>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-400">Already registered? </span>
              <a href="#" className="text-sm text-white underline">Login here</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 md:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Start Your Entrepreneurial Journey
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '🔍', color: 'from-red-500/20', text: 'You have an idea but need guidance to shape it' },
            { icon: '💡', color: 'from-green-500/20', text: "You've developed a prototype or unique solution" },
            { icon: '🚀', color: 'from-blue-500/20', text: "You're actively integrating your product/service into the market" },
            { icon: '📈', color: 'from-purple-500/20', text: "You're seeking funding or scaling your startup" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
              <div className="relative bg-white/5 rounded-lg p-6 border border-white/10 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-sm text-gray-300">{item.text}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 text-sm text-white/80 hover:text-white"
                >
                  Explore Resources →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 px-4 md:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Marketplace
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Discover innovative startups from fellow students
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { tag: 'Sustainable', title: 'Sustainable technology for campus waste management' },
            { tag: 'AI', title: 'AI-powered study assistant for personalized learning' },
            { tag: 'EdTech', title: 'Exam delivery platform exclusively for campus students' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-4" />
              <div className="space-y-4">
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  item.tag === 'Sustainable' ? 'bg-green-500/20 text-green-400' :
                  item.tag === 'AI' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.tag}
                </span>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-xs text-gray-400">contact@startupexample.com</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 px-4 md:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Latest Announcements
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Stay updated with the latest opportunities and events
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Present your startup idea to a panel of investors and industry experts for a chance to win seed funding and mentorship opportunities.',
              date: '📅 Date: 25th July',
              location: '📍 Virtual Innovation Centre, MAHE'
            },
            {
              title: 'A week-long workshop covering business planning, marketing strategies, financial modeling, and fundraising. Facilitated by industry experts.',
              date: '📅 Date: 1st Aug',
              location: '📍 Virtual Innovation Centre, MAHE'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div className="space-y-4">
                <p className="text-sm">{item.title}</p>
                <div className="text-sm text-gray-400">
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm text-white/80 hover:text-white"
                >
                  Register Now →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            <span className="text-sm">Empowering the next generation of student entrepreneurs</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;