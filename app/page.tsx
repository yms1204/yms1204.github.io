import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, FileText } from "lucide-react"
import { Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-center text-lg font-normal text-blue-600">
          <Link href="/">Yumin Song</Link>
        </h1>
        <div className="h-px w-full bg-gray-200 mt-2"></div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Yumin Song"
              className="rounded-full bg-gray-200"
              width={192}
              height={192}
              priority
            />
          </div>
          <h2 className="text-base font-medium">Master Student</h2>
          <p className="text-sm text-gray-600 mb-4">SNU, Korea</p>

          {/* Social Links */}
          <div className="flex space-x-3">
            <Link href="mailto:yumin@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-500 hover:text-blue-600" />
            </Link>
            <Link href="https://linkedin.com/in/yuminsong" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-600" />
            </Link>
            <Link href="https://twitter.com/yuminsong" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-500 hover:text-blue-600" />
            </Link>
            <Link href="/cv.pdf" aria-label="CV">
              <FileText className="h-5 w-5 text-gray-500 hover:text-blue-600" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          <div className="mb-12">
            <h1 className="text-2xl font-bold mb-4">Yumin Song</h1>
            <p className="mb-4">
              Hello! I&apos;m Yumin Song,
              <br />a Master&apos;s student at the Human-Computer Interaction Lab at
              <br />
              Seoul National University, advised by Professor Jinwook Seo.
            </p>
            <p>
              My research interests lie in Human-AI Interaction and interactive
              <br />
              system design, with a particular focus on supporting creative
              <br />
              practices through AI/ML technologies.
            </p>
          </div>

          {/* Publications Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Publications</h2>

            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 mb-8">
                <div className="relative w-36 h-28 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=112&width=144"
                    alt="Publication thumbnail"
                    className="bg-gray-200"
                    fill
                    sizes="144px"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    Automated Pipeline for Detecting and Analyzing Misleading Visual Elements
                  </h3>
                  <p className="text-sm mb-1">
                    Min Hyeong Kim, <span className="font-medium">Yumin Song</span>, Yungun Kim, Aeri Cho, Soohyun Lee,
                    Hyeon Jeon, and Jinwook Seo
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    In Proceedings of the 18th IEEE Pacific Visualization Conference (PacificVis &apos;25), Taipei,
                    Taiwan
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm text-blue-600 border border-blue-200 rounded px-2 py-1"
                  >
                    <FileText className="h-4 w-4 mr-1" /> PDF
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
