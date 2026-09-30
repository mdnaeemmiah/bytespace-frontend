'use client'

import Image from 'next/image'
import h from "../../asstes/home/h.png"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src={h}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-[1]"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="text-white text-base md:text-lg mb-10 max-w-2xl mx-auto drop-shadow-md">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center gap-3 max-w-2xl mx-auto flex-col sm:flex-row px-4">
            <div className="w-full sm:flex-1 bg-white rounded-full px-6 py-3.5 flex items-center gap-3 shadow-2xl">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
              />
            </div>
       <Link href="/search">
            <button className="bg-[#C1FF39] text-gray-900 px-10 py-3.5 rounded-full hover:bg-[#b3f020] transition-colors font-semibold shadow-2xl whitespace-nowrap">
              Search
            </button>
       </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
