import Image from 'next/image'
import Link from 'next/link'

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
          
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/nestordaza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </Link>
            
            <Link
              href="https://github.com/extensa-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub
            </Link>
            
            <Link
              href="https://donate.doctorswithoutborders.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Donate to Doctors Without Borders
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}