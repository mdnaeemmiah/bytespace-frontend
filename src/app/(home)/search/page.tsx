'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import img1 from '../../../asstes/category/Frame (1).png'
import img2 from '../../../asstes/category/Frame (2).png'
import img3 from '../../../asstes/category/Frame (3).png'
import img4 from '../../../asstes/category/Frame (4).png'
import img5 from '../../../asstes/category/Frame (5).png'
import img6 from '../../../asstes/category/Frame.png'
import img7 from '../../../asstes/category/Auto Layout Horizontal.png'
import heroBg from '../../../asstes/home/h.png'

const allCourses = [
  { id: 1, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 2, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.5, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 3, image: img3, title: 'the Power of Big Data', author: 'purplespot studio', rating: 4.5, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 4, image: img4, title: 'Balancing Productivity an...', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 5, image: img5, title: 'Mastering Money Manage...', author: 'purplespot studio', rating: 4.5, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 6, image: img6, title: 'From Idea to Startup Succ...', author: 'purplespot studio', rating: 4.5, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 7, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 8, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.5, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 9, image: img3, title: 'the Power of Big Data', author: 'purplespot studio', rating: 4.5, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 10, image: img4, title: 'Balancing Productivity an...', author: 'purplespot studio', rating: 4.3, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 11, image: img5, title: 'Mastering Money Manage...', author: 'purplespot studio', rating: 4.7, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 12, image: img6, title: 'From Idea to Startup Succ...', author: 'purplespot studio', rating: 4.9, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 13, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 14, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.8, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 15, image: img3, title: 'the Power of Big Data', author: 'purplespot studio', rating: 4.6, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 16, image: img4, title: 'Balancing Productivity an...', author: 'purplespot studio', rating: 4.3, level: 'Beginner', price: 25, lessons: 17, duration: '2 hours 10 mins', comments: 59 },
  { id: 17, image: img5, title: 'Mastering Money Manage...', author: 'purplespot studio', rating: 4.7, level: 'Intermediate', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
  { id: 18, image: img6, title: 'From Idea to Startup Succ...', author: 'purplespot studio', rating: 4.9, level: 'Advanced', price: 25, lessons: 17, duration: '2 hours 16 mins', comments: 59 },
]

const filterTabs = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Graphic Design', 'Cooking']

const COURSES_PER_PAGE = 9

function CourseCard({ course }: { course: typeof allCourses[0] }) {
  return (
    <Link href={`/course/${course.id}`} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group p-4 block">
      {/* Thumbnail with overlay badges */}
      <div className="relative h-52 bg-gray-100 rounded-2xl overflow-hidden mb-5">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Bottom overlay badges — frosted glass style */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
          <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            {course.lessons} Lessons
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {course.duration}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="px-1">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-lg font-bold text-gray-900 flex-1 leading-snug">{course.title}</h3>
          <div className="flex items-center gap-1 ml-3 shrink-0">
            <span className="text-gray-800 font-semibold text-sm">{course.rating}</span>
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <p className="text-xs text-blue-500 mb-5 font-medium">by {course.author}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Level badge */}
            <div className="bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-gray-700">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">{course.level}</span>
            </div>

            {/* Student avatars */}
            <div className="flex items-center -space-x-2">
              <div className="w-7 h-7 rounded-full bg-orange-400 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-pink-400 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-purple-400 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-[#C1FF39] border-2 border-white flex items-center justify-center text-[9px] font-bold text-gray-800">26+</div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-blue-600">${course.price}</span>
          <span className="text-sm text-gray-400">/course</span>
        </div>
      </div>
    </Link>
  )
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''

  const [searchInput, setSearchInput] = useState(initialQuery)
  const [activeTab, setActiveTab] = useState('Featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('Most Relevant')

  // Filter courses by query
  const filtered = allCourses.filter(c =>
    !initialQuery || c.title.toLowerCase().includes(initialQuery.toLowerCase()) || c.author.toLowerCase().includes(initialQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / COURSES_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * COURSES_PER_PAGE, currentPage * COURSES_PER_PAGE)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`)
    } else {
      router.push('/search')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Search Hero Banner */}
      <div className="relative py-14 px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/60" />

        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Find Your Next Course</h1>
          <form onSubmit={handleSearch} className="flex justify-center items-center gap-3 max-w-xl mx-auto">
            <div className="w-full flex-1 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search"
                className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-sm"
              />
            </div>
            <button type="submit" className="bg-[#C1FF39] text-gray-900 px-6 py-3 rounded-full hover:bg-[#b3f020] transition-colors font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5 text-sm">
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-100">
        {/* Row 1: Filter / Level / Category buttons + Most relevant */}
        <div className="container mx-auto px-6 pt-4 pb-2 flex items-center justify-between gap-4">
          {/* Left: Filter / Level / Category pill buttons */}
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filter
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Level
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Category
            </button>
          </div>

          {/* Right: Most relevant */}
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M7 12h10M11 17h2" />
            </svg>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-gray-600 text-sm appearance-none pr-1"
            >
              <option>Most Relevant</option>
              <option>Highest Rated</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Row 2: Category chips */}
        <div className="container mx-auto px-6 pb-3 pt-1">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {filterTabs.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1) }}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all shrink-0 ${
                  activeTab === tab
                    ? 'bg-[#C1FF39] text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-800 font-medium'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6 py-10">
        {/* Result count */}
        {initialQuery && (
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> results for &quot;<span className="font-semibold text-blue-600">{initialQuery}</span>&quot;
          </p>
        )}

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-400">Try a different keyword or browse all courses.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-500 disabled:opacity-30 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow'
                    : 'border border-gray-200 text-gray-600 hover:border-blue-500'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-500 disabled:opacity-30 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
