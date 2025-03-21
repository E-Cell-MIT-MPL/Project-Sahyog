import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, ExternalLink, Mail, Phone } from "lucide-react"

export default function StartupScoopPortal() {
  return (
    <div className="app min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center py-1 px-2 md:px-4 bg-navy text-cream shadow-md backdrop-blur-md bg-opacity-95">
        <div className="logo ml-2 relative">
          <div className="absolute -inset-1 bg-coral rounded-full blur opacity-30"></div>
          <Link href="/" className="relative">
            <Image
              src="/placeholder.svg?height=25&width=100"
              alt="E-Cell Logo"
              width={100}
              height={25}
              className="relative"
            />
          </Link>
        </div>
        <nav className="navigation">
          <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-sm">
            <li>
              <Link href="/" className="font-medium text-cream hover:text-coral transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#marketplace"
                className="font-medium text-cream hover:text-coral transition-colors relative group"
              >
                Marketplace
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="#hiring" className="font-medium text-cream hover:text-coral transition-colors relative group">
                Hiring
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#resources"
                className="font-medium text-cream hover:text-coral transition-colors relative group"
              >
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="px-3 py-1 rounded-full border border-coral text-coral hover:bg-coral/10 transition-all duration-300 text-xs font-medium"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="px-3 py-1 rounded-full bg-coral text-navy hover:bg-coral/90 transition-all duration-300 text-xs font-medium flex items-center gap-1"
              >
                Register <ChevronRight className="w-3 h-3" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="landing-page w-full">
          {/* Hero Section */}
          <section className="relative py-32 px-4 md:px-8 text-center text-cream overflow-hidden">
            <div className="absolute inset-0 bg-navy z-0"></div>
            <div
              className="absolute inset-0 bg-cover bg-center z-[-1] opacity-20"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
            ></div>
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-coral rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

            <div className="relative z-1 max-w-3xl mx-auto">
              <div className="inline-block mb-2 px-3 py-1 bg-coral/20 text-coral rounded-full text-sm font-medium">
                Manipal University
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Startup Scoop Portal</h1>
              <p className="text-xl mb-8 text-cream/90 max-w-xl mx-auto">
                Empowering innovation and entrepreneurship at Manipal University
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="group px-6 py-3 rounded-full bg-coral text-navy hover:bg-coral/90 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg shadow-coral/20"
                >
                  Register Your Startup
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/marketplace"
                  className="px-6 py-3 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  Explore Startups
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-4 md:px-8 text-center bg-cream relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-navy/5 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-coral/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sand/30 rounded-full"></div>

            <div className="max-w-6xl mx-auto">
              <div className="inline-block mb-3 px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium">
                Our Services
              </div>
              <h2 className="text-3xl font-bold mb-3 text-navy">What We Offer</h2>
              <p className="text-navy/70 max-w-2xl mx-auto mb-12">
                Discover our comprehensive suite of services designed to support and accelerate your entrepreneurial
                journey
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Marketplace Feature Box */}
                <div id="marketplace" className="feature-box h-80 perspective-1000 group">
                  <div className="feature-box-inner relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-xl shadow-xl">
                    <div className="feature-box-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col justify-end bg-sand border border-sand/20">
                      <div className="relative w-full h-full">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Marketplace"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                        <div className="absolute bottom-0 w-full p-6 text-left">
                          <span className="bg-coral/90 text-navy text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block">
                            Connect & Discover
                          </span>
                          <h3 className="text-2xl font-bold text-cream mb-1">Marketplace</h3>
                          <p className="text-cream/80 text-sm">Discover innovative startups and their offerings</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-box-back absolute w-full h-full backface-hidden rounded-xl p-8 flex flex-col justify-between bg-gradient-to-br from-coral to-coral/90 text-navy rotate-y-180">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-left">Marketplace</h3>
                        <p className="mb-4 text-left">
                          Discover and connect with innovative startups from Manipal University. Browse through
                          products, services, and investment opportunities all in one place.
                        </p>
                        <ul className="text-left space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Connect with student entrepreneurs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Explore innovative products and services</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Find investment opportunities</span>
                          </li>
                        </ul>
                      </div>
                      <Link
                        href="/marketplace"
                        className="text-navy font-bold underline flex items-center gap-1 hover:gap-2 transition-all duration-300 self-start"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hiring Feature Box */}
                <div id="hiring" className="feature-box h-80 perspective-1000 group">
                  <div className="feature-box-inner relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-xl shadow-xl">
                    <div className="feature-box-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col justify-end bg-sand border border-sand/20">
                      <div className="relative w-full h-full">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Hiring"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                        <div className="absolute bottom-0 w-full p-6 text-left">
                          <span className="bg-coral/90 text-navy text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block">
                            Career Opportunities
                          </span>
                          <h3 className="text-2xl font-bold text-cream mb-1">Hiring</h3>
                          <p className="text-cream/80 text-sm">Find exciting roles at innovative startups</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-box-back absolute w-full h-full backface-hidden rounded-xl p-8 flex flex-col justify-between bg-gradient-to-br from-coral to-coral/90 text-navy rotate-y-180">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-left">Hiring</h3>
                        <p className="mb-4 text-left">
                          Find internships, part-time jobs, and full-time positions at startups. Great opportunity for
                          students to gain real-world experience and build their careers.
                        </p>
                        <ul className="text-left space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Internship opportunities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Part-time and full-time positions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Gain real-world startup experience</span>
                          </li>
                        </ul>
                      </div>
                      <Link
                        href="/hiring"
                        className="text-navy font-bold underline flex items-center gap-1 hover:gap-2 transition-all duration-300 self-start"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Resources Feature Box */}
                <div id="resources" className="feature-box h-80 perspective-1000 group">
                  <div className="feature-box-inner relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-xl shadow-xl">
                    <div className="feature-box-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col justify-end bg-sand border border-sand/20">
                      <div className="relative w-full h-full">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Resources"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                        <div className="absolute bottom-0 w-full p-6 text-left">
                          <span className="bg-coral/90 text-navy text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block">
                            Learning & Growth
                          </span>
                          <h3 className="text-2xl font-bold text-cream mb-1">Resources</h3>
                          <p className="text-cream/80 text-sm">Access tools and knowledge to succeed</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-box-back absolute w-full h-full backface-hidden rounded-xl p-8 flex flex-col justify-between bg-gradient-to-br from-coral to-coral/90 text-navy rotate-y-180">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-left">Resources</h3>
                        <p className="mb-4 text-left">
                          Access a wealth of resources including mentorship, funding opportunities, workshops, and
                          educational content for entrepreneurs at any stage.
                        </p>
                        <ul className="text-left space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Mentorship programs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Funding opportunities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Workshops and educational content</span>
                          </li>
                        </ul>
                      </div>
                      <Link
                        href="/resources"
                        className="text-navy font-bold underline flex items-center gap-1 hover:gap-2 transition-all duration-300 self-start"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 px-4 md:px-8 bg-sand relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cream/50 to-transparent"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-coral/5 rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-navy/5 rounded-full"></div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto relative">
              <div className="flex-1 min-w-[300px]">
                <div className="inline-block mb-3 px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium">
                  About Us
                </div>
                <h2 className="text-3xl font-bold mb-6 text-navy">About the Innovation Center</h2>
                <p className="mb-6 text-navy/80 leading-relaxed">
                  The Innovation Center at Manipal University is a hub for entrepreneurship and innovation. We foster a
                  culture of creativity and provide resources, mentorship, and infrastructure to help students and
                  faculty transform their ideas into successful ventures.
                </p>
                <p className="mb-6 text-navy/80 leading-relaxed">
                  Our mission is to bridge the gap between academia and industry by creating a sustainable ecosystem for
                  startups and encouraging entrepreneurial mindset among students.
                </p>
                <p className="text-navy/80 leading-relaxed">
                  Through the Startup Scoop Portal (SSP), we aim to connect startups with potential investors,
                  customers, and talent, thereby accelerating their growth and success.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-cream rounded-lg p-4 shadow-sm flex items-center gap-3 w-40">
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral">
                      50+
                    </div>
                    <div className="text-left">
                      <p className="text-navy font-semibold">Startups</p>
                      <p className="text-navy/60 text-xs">Incubated</p>
                    </div>
                  </div>
                  <div className="bg-cream rounded-lg p-4 shadow-sm flex items-center gap-3 w-40">
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral">
                      200+
                    </div>
                    <div className="text-left">
                      <p className="text-navy font-semibold">Students</p>
                      <p className="text-navy/60 text-xs">Engaged</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-[300px] flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 bg-coral rounded-xl blur opacity-30"></div>
                  <div className="relative h-[300px] w-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Innovation Center"
                      fill
                      className="rounded-xl shadow-xl relative z-10 object-cover"
                      style={{ position: "absolute" }}
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cream rounded-lg shadow-lg z-20 flex items-center justify-center p-2">
                      <div className="text-center">
                        <p className="text-navy font-bold text-xl">5+</p>
                        <p className="text-navy/70 text-xs">Years of Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 md:px-8 bg-navy text-cream text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sand/10 to-transparent"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-coral rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto relative">
              <div className="inline-block mb-3 px-3 py-1 bg-coral/20 text-coral rounded-full text-sm font-medium">
                Join Us Today
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Startup Ecosystem?</h2>
              <p className="text-xl mb-8 text-cream/80 max-w-2xl mx-auto">
                Register your startup or sign up as a student, mentor, or investor today and become part of our thriving
                community!
              </p>
              <Link
                href="/register"
                className="group inline-block px-8 py-4 rounded-full bg-coral text-navy hover:bg-coral/90 transition-all duration-300 font-medium shadow-lg shadow-coral/20 flex items-center gap-2 mx-auto"
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cream py-8 border-t border-sand relative">
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-navy/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto mb-6 px-4">
              <h3 className="text-lg font-semibold mb-4 text-navy">Innovation Center Team</h3>
              <ul className="space-y-4 text-navy/80">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-medium">JS</span>
                  </div>
                  <div>
                    <strong className="font-medium">Dr. Jane Smith</strong> - Director
                    <div className="flex items-center gap-1 mt-1 text-xs text-navy/70">
                      <Mail className="w-3 h-3" />
                      <a href="mailto:jane.smith@manipal.edu" className="hover:text-coral transition-colors">
                        jane.smith@manipal.edu
                      </a>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-navy/70">
                      <Phone className="w-3 h-3" />
                      <span>+91 9876543210</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-medium">RK</span>
                  </div>
                  <div>
                    <strong className="font-medium">Prof. Raj Kumar</strong> - Deputy Director
                    <div className="flex items-center gap-1 mt-1 text-xs text-navy/70">
                      <Mail className="w-3 h-3" />
                      <a href="mailto:raj.kumar@manipal.edu" className="hover:text-coral transition-colors">
                        raj.kumar@manipal.edu
                      </a>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-navy/70">
                      <Phone className="w-3 h-3" />
                      <span>+91 9876543211</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 px-4">
              <h3 className="text-lg font-semibold mb-4 text-navy">Quick Links</h3>
              <ul className="space-y-2 text-navy/80">
                <li>
                  <Link href="/" className="hover:text-coral transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" className="hover:text-coral transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#hiring" className="hover:text-coral transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Hiring
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="hover:text-coral transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-6 mt-6 border-t border-sand">
            <p className="text-navy/70 text-xs">© {new Date().getFullYear()} E-Cell SSP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

