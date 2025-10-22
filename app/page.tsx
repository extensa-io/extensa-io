import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaDatabase, FaNewspaper, FaBrain } from 'react-icons/fa'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Néstor Daza",
    "jobTitle": "Developer Advocate",
    "worksFor": {
      "@type": "Organization",
      "name": "MongoDB"
    },
    "description": "MongoDB Developer Advocate and Software Engineer helping developers build better applications. Speaker, writer, and expert in database design, AI applications, and developer tools.",
    "url": "https://extensa.io",
    "sameAs": [
      "https://www.linkedin.com/in/nestordaza/",
      "https://github.com/extensa-io",
      "https://medium.com/@nestordaza"
    ],
    "image": "https://extensa.io/headshot.png",
    "email": "nestor@extensa.io",
    "knowsAbout": [
      "MongoDB",
      "Database Design",
      "AI Applications",
      "Vector Search",
      "Software Engineering",
      "Developer Advocacy",
      "Technical Writing",
      "Public Speaking"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Various Universities"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Néstor Daza</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="https://donate.doctorswithoutborders.org/" target="_blank" className="text-gray-600 hover:text-gray-900">Support Médecins Sans Frontières</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" aria-label="Introduction">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Software Engineer & <span className="text-blue-600">Developer Advocate</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I'm a developer advocate and software engineer. I help developers get the most out of MongoDB, turning complex database challenges into simple, practical solutions that make their lives easier.</p>
             <p className="text-xl text-gray-600 mb-8">Often you'll find me in the kitchen or yelling at the TV during a fútbol match. Nothing like cooking and soccer to teach you patience, timing, improvisation and beauty.
             </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/headshot.png"
                alt="Professional headshot of Néstor Daza, MongoDB Developer Advocate and Software Engineer"
                width={300}
                height={300}
                className="rounded-full shadow-2xl object-cover aspect-square"
                priority
              />
            </div>
          </div>
        </div>
      </section>

        {/* MongoDB Section */}
        <section className="py-20 bg-white" aria-label="MongoDB Expertise">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MongoDB Advocacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a <a href="https://www.youtube.com/watch?v=RysveitV4eg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Developer Advocate at MongoDB</a>, I travel the world sharing knowledge and helping developers unlock the full potential of modern database solutions. 
              From conference stages to meetups, I'm passionate about making database technology accessible to developers everywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <FaDatabase className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Database Design</h3>
              <p className="text-gray-600">
                Schema modeling, indexing strategies, and performance optimization for MongoDB applications.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer Tools</h3>
              <p className="text-gray-600">
                Building tools and resources that make MongoDB development more accessible and productive.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <FaBrain className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Applications</h3>
              <p className="text-gray-600">
                Building intelligent applications with MongoDB's vector search, RAG apps, and AI Agents.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Articles Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white" aria-label="Published Articles">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FaNewspaper className="text-6xl mx-auto mb-6 text-blue-300" />
            <h2 className="text-5xl font-bold mb-6">My Articles</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Technical insights and practical knowledge I've shared
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="https://medium.com/mongodb/id-the-unsung-hero-of-mongodb-35ee44c54845"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">_id: The Unsung Hero of MongoDB</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dive deep into MongoDB's primary key field and discover how this seemingly simple field
                plays a crucial role in your database's performance and scalability.
              </p>
              <div className="mt-6 text-blue-300 font-semibold">Read on Medium →</div>
            </Link>

            <Link
              href="https://medium.com/mongodb/how-to-align-your-data-model-with-your-application-needs-when-migrating-from-rdbms-to-mongodb-abde87f2d96f"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Migrating from RDBMS to MongoDB</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Learn how to align your data model with your application needs when making the transition
                from relational databases to MongoDB's flexible document model.
              </p>
              <div className="mt-6 text-blue-300 font-semibold">Read on Medium →</div>
            </Link>

            <Link
              href="https://medium.com/mongodb/from-tables-to-mongodb-documents-a-journey-for-rdbms-professionals-6bff391b1854"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">From Tables to MongoDB Documents: A Journey for RDBMS Professionals</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive guide for relational database professionals transitioning to MongoDB's document model,
                covering key concepts and practical strategies for successful migration.
              </p>
              <div className="mt-6 text-blue-300 font-semibold">Read on Medium →</div>
            </Link>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50" aria-label="Contact Information">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Let's connect and discuss opportunities, projects, or just chat about technology
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <div className="space-y-6">
                <Link
                  href="https://www.linkedin.com/in/nestordaza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaLinkedin className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-sm text-gray-600">Connect professionally</p>
                  </div>
                </Link>
                
                <Link
                  href="https://github.com/extensa-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaGithub className="text-gray-800 text-2xl" />
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-gray-600">Check out my code</p>
                  </div>
                </Link>
                
                <a
                  href="mailto:nestor@extensa.io"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaEnvelope className="text-red-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-600">Send me a message</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold">Néstor Daza</h2>
              <p className="text-gray-400">Software Engineer & Developer Advocater</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href="https://donate.doctorswithoutborders.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support Médecins Sans Frontières
              </Link>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">© 2025 Néstor Daza</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}