import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/profile-pic.webp"
              alt="Néstor Daza"
              width={288}
              height={300}
              className="rounded-full"
              priority
            />
          </div>
          
          <h1 className="text-4xl font-normal mb-4 text-gray-900">Néstor Daza</h1>
          
          <p className="text-xl text-gray-700 mb-8">Kitchen - Fútbol - Software</p>
          
          <div className="flex gap-8 items-center">
            <Link
              href="https://www.linkedin.com/in/nestordaza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </Link>
            
            <Link
              href="https://github.com/extensa-io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </Link>
            
            <Link
              href="https://donate.doctorswithoutborders.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
            >
              <FaHeart size={18} />
              <span>Donate to Doctors Without Borders</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}