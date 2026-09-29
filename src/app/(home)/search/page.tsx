'use client'

import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import img1 from '../../../asstes/category/Frame (1).png'
import img2 from '../../../asstes/category/Frame (2).png'
import img3 from '../../../asstes/category/Frame (3).png'
import img4 from '../../../asstes/category/Frame (4).png'
import img5 from '../../../asstes/category/Frame (5).png'
import img6 from '../../../asstes/category/Frame.png'
import img7 from '../../../asstes/category/Auto Layout Horizontal.png'

const allCourses = [
  { id: 1, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25 },
  { id: 2, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.8, level: 'Intermediate', price: 35 },
  { id: 3, image: img3, title: 'The Power of Big Data', author: 'purplespot studio', rating: 4.6, level: 'Advanced', price: 45 },
  { id: 4, image: img4, title: 'Balancing Productivity and Life', author: 'purplespot studio', rating: 4.3, level: 'Beginner', price: 20 },
  { id: 5, image: img5, title: 'Mastering Money Management', author: 'purplespot studio', rating: 4.7, level: 'Intermediate', price: 30 },
  { id: 6, image: img6, title: 'From Idea to Startup Success', author: 'purplespot studio', rating: 4.9, level: 'Advanced', price: 55 },
  { id: 7, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25 },
  { id: 8, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.8, level: 'Intermediate', price: 35 },
  { id: 9, image: img3, title: 'The Power of Big Data', author: 'purplespot studio', rating: 4.6, level: 'Advanced', price: 45 },
  { id: 10, image: img4, title: 'Balancing Productivity and Life', author: 'purplespot studio', rating: 4.3, level: 'Beginner', price: 20 },
  { id: 11, image: img5, title: 'Mastering Money Management', author: 'purplespot studio', rating: 4.7, level: 'Intermediate', price: 30 },
  { id: 12, image: img6, title: 'From Idea to Startup Success', author: 'purplespot studio', rating: 4.9, level: 'Advanced', price: 55 },
  { id: 13, image: img1, title: 'Learn Figma from Basic', author: 'purplespot studio', rating: 4.5, level: 'Beginner', price: 25 },
  { id: 14, image: img2, title: 'Build Digital Asset', author: 'purplespot studio', rating: 4.8, level: 'Intermediate', price: 35 },
  { id: 15, image: img3, title: 'The Power of Big Data', author: 'purplespot studio', rating: 4.6, level: 'Advanced', price: 45 },
  { id: 16, image: img4, title: 'Balancing Productivity and Life', author: 'purplespot studio', rating: 4.3, level: 'Beginner', price: 20 },
  { id: 17, image: img5, title: 'Mastering Money Management', author: 'purplespot studio', rating: 4.7, level: 'Intermediate', price: 30 },
  { id: 18, image: img6, title: 'From Idea to Startup Success', author: 'purplespot studio', rating: 4.9, level: 'Advanced', price: 55 },
]

const filterTabs = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Graphic Design']

const COURSES_PER_PAGE = 9

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-3.5 h-3.5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function CourseCard({ course }: { course: typeof allCourses[0] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow p-4 cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative h-44 bg-gray-200 rounded-2xl overflow-hidden mb-4">
        <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-base font-bold text-gray-900 flex-1 line-clamp-2 leading-snug">{course.title}</h3>
          <div className="flex items-center gap-1 ml-2 shrink-0">
            <span className="text-gray-800 font-semibold text-sm">{course.rating}</span>
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <p className="text-xs text-blue-500 mb-3 font-medium">by {course.author}</p>

        <div className="flex items-center justify-between">
          <div className="bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-gray-700">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="font-medium">{course.level}</span>
          </div>
          <div className="relative h-8 w-28">
            <Image src={img7} alt="Students" fill className="object-contain" />
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-blue-600">${course.price}</span>
          <span className="text-sm text-gray-500">/course</span>
        </div>
      </div>
    </div>
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
    <div className="min-h-screen bg-white">
      {/* Search Hero Banner */}
      <div className="bg-blue-600 py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Find Your Next Course</h1>
          <form onSubmit={handleSearch} className="flex justify-center items-center gap-3 max-w-2xl mx-auto">
            <div className="w-full flex-1 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Course, topic, creator"
                className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-sm"
              />
            </div>
            <button type="submit" className="bg-[#C1FF39] text-gray-900 px-8 py-3 rounded-full hover:bg-[#b3f020] transition-colors font-semibold shadow-lg whitespace-nowrap">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-sm font-medium text-gray-500 shrink-0 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filter
            </span>
            {filterTabs.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1) }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === tab ? 'bg-[#C1FF39] text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M7 12h10M11 17h2" />
            </svg>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer"
            >
              <option>Most Relevant</option>
              <option>Highest Rated</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
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
