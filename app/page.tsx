import Link from "next/link";
import ReactDOM from 'react-dom'
import { Mail, FileText } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import profile from "../data/profile.json";
import Publication from "../data/publication.json";
import "../styles/globals.css";
import { HiOutlineDocumentText } from "react-icons/hi2";



export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-left text-lg font-semibold [color:var(--main-dark-color)]">
          <Link href="/">{profile.name}</Link>
        </h1>
        <div className="h-px w-full bg-gray-200 mt-2"></div>
      </header>
      {/* Top Section: Profile + Intro */}
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-12 mb-16">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <img
            src="/img/profile.jpeg"
            alt="Yumin Song"
            className="w-48 h-48 rounded-full object-cover mb-4 border border-gray-300 shadow-sm"
          />
          <h2 className="text-base font-medium mb-1 [color:var(--primary)]">{profile.position}</h2>
          <p className="text-sm [color:(var(--secondary)] mb-3">{profile.affiliation}</p>

          <div className="flex items-start space-x-3">
            <Link href={`mailto:${profile.socials.mail}`} aria-label="Email">
            <IoMdMail className="h-5 w-5 [color:var(--secondary)] hover:[color:var(--main-color)]" />
            </Link>
            <Link href={profile.socials.linkedin} aria-label="LinkedIn">
              <IoLogoLinkedin className="h-5 w-5 [color:var(--secondary)] hover:[color:var(--main-color)]" />
            </Link>
            <Link href={profile.socials.twitter} aria-label="Twitter">
              <FaSquareXTwitter className="h-5 w-5 [color:var(--secondary)] hover:[color:var(--main-color)]" />
            </Link>
            {/* <Link href="/cv.pdf" aria-label="CV">
                <span className="inline-flex h-5 w-5 text-[1rem] font-bold [color:var(--secondary)] hover:[color:var(--main-color)] leading-none" style={{ fontFamily: "inter" }}>
                  CV
                </span>
            </Link> */}
          </div>
        </div>

        {/* Intro Section */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 [color:var(--primary)]">{profile.name}</h1>
            <div className="mb-4 [color:var(--primary)] hover:prose-a:underline hover:prose-a:[color:var(--main-dark-color)]">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {profile.bio}
            </ReactMarkdown>
            </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <p className="text-sm text-gray-500 mb-2">
          {Publication.length} publications
        </p>
        {Publication.map((pub, i) => (
          <div key={i} className="flex gap-4 mb-8">
            {/* <div className="w-40 h-28 bg-gray-200 flex-shrink-0"> */}
            <div className="pub-teaser">
              {pub.teaser && (
                <img
                  src={pub.teaser}
                  alt={pub.title}
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
            <div>
              {pub.url ? (
                <h3 className="font-medium mb-1">
                  <Link href={pub.url} target="_blank" rel="noopener noreferrer" className="[color:var(--primary)] hover:underline hover:[color:var(--main-dark-color)]">
                    {pub.title}
                  </Link>
                </h3>
              ) : (
                <h3 className="font-medium mb-1">{pub.title}</h3>
              )}
                <div className="prose prose-blueStrong prose-sm text-sm mb-1 max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {pub.authors}
                  </ReactMarkdown>
                </div>
              <p className="text-sm mb-2 [color:var(--Gray3)]">{pub.venue}</p>
              {pub.pdf && (
            <Link
              className="button"
              href={pub.pdf}
            >
              <FileText className="h-4 w-4 mr-1" /> PDF
            </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
