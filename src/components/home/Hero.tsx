'use client'

import Image from 'next/image'
import h from "../../asstes/home/h.png"
import yello from "../../asstes/home/Ellipse 7.png"
import yello1 from "../../asstes/Cone (1).png"
import yello2 from "../../asstes/Cone.png"
import yello3 from "../../asstes/Frame (13).png"
import yello8 from "../../asstes/Frame (14).png"
import man from "../../asstes/home/Image.png"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-blue-700 pt-20 pb-12">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>

      {/* Decorative Yellow/Lime Blobs - LEFT SIDE (yello1 - Cone 1) */}
      <div className="absolute top-20 md:top-32 -left-10 md:-left-20 w-[180px] md:w-[300px] h-[300px] md:h-[450px] z-[1]">
        <Image src={yello1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Yellow/Lime Blobs - RIGHT SIDE (yello2 - Cone) */}
      <div className="absolute top-10 md:top-20 -right-16 md:-right-32 w-[220px] md:w-[380px] h-[320px] md:h-[500px] z-[1]">
        <Image src={yello2} alt="" fill className="object-contain" />
      </div>

      {/* Large White Blob - LEFT BOTTOM (Frame 13) */}
      <div className="absolute bottom-0 md:bottom-10 -left-16 md:-left-24 w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-[1]">
        <Image src={yello3} alt="" fill className="object-contain" />
      </div>

      {/* White Decorative Squiggle - TOP CENTER for Mobile, TOP LEFT for Desktop (Frame 13) */}
      <div className="absolute top-32 left-16 md:left-24 w-24 md:w-32 h-16 md:h-24 z-[2]">
        <Image src={yello3} alt="" fill className="object-contain opacity-80" />
      </div>

      {/* White Decorative Squiggle - BOTTOM RIGHT (Frame 14) */}
      <div className="hidden md:block absolute bottom-32 right-16 w-32 h-24 z-[2]">
        <Image src={yello8} alt="" fill className="object-contain opacity-80" />
      </div>

      {/* White Decorative Shape - RIGHT (Frame 14) */}
      <div className="absolute top-1/2 right-6 md:right-12 w-24 md:w-40 h-24 md:h-40 z-[2]">
        <Image src={yello8} alt="" fill className="object-contain opacity-75" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 leading-tight px-2">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto px-4">
            <div className="w-full sm:flex-1 bg-white rounded-full px-5 md:px-6 py-3 md:py-3.5 flex items-center gap-3 shadow-2xl">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-sm"
              />
            </div>
            <Link href="/search" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#C1FF39] text-gray-900 px-8 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-[#b3f020] transition-colors font-semibold shadow-2xl whitespace-nowrap text-sm">
                Search
              </button>
            </Link>
          </div>
        </div>

        {/* Main Image Section with Cards */}
        <div className="relative max-w-6xl mx-auto h-[380px] sm:h-[420px] md:h-[520px]">
          {/* Large Yellow/Lime Background Blob - CENTER */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[700px] h-[350px] sm:h-[400px] md:h-[480px] z-[2]">
            <svg viewBox="0 0 700 480" className="w-full h-full">
              <ellipse cx="350" cy="240" rx="340" ry="230" fill="#C1FF39" opacity="0.95"/>
            </svg>
          </div>

          {/* Person with Laptop - Smaller on mobile */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[350px] md:w-[450px] h-[380px] sm:h-[420px] md:h-[520px] z-[3]">
            <Image 
              src={man} 
              alt="Student with laptop" 
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Floating Card: UI/UX Design - LEFT - Hidden on small mobile */}
          <div className="hidden sm:block absolute top-16 md:top-28 left-2 sm:left-4 lg:left-16 bg-white rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 min-w-[140px] md:min-w-[180px] z-[4] animate-float">
            <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-0.5">UI/UX Design</h3>
            <p className="text-[10px] md:text-xs text-gray-500">100 Courses • 500+ Students</p>
          </div>

          {/* Floating Card: Learning Progress - RIGHT - Hidden on small mobile */}
          <div className="hidden sm:block absolute top-12 md:top-20 right-2 sm:right-4 lg:right-16 bg-white rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-5 min-w-[120px] md:min-w-[160px] z-[4] animate-float-delay-1">
            <p className="text-[10px] md:text-xs text-gray-500 mb-1">Learning Progress</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">55%</h2>
          </div>

          {/* Floating Card: Happy Students - BOTTOM - Always visible */}
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-2 sm:left-4 lg:left-12 bg-white rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 pr-4 md:pr-5 z-[4] animate-float-delay-2">
            <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1 md:mb-2">Happy Students</h3>
            <div className="text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">4.5 rating</div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="flex -space-x-1.5 md:-space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-white ${
                    i === 1 ? 'bg-orange-400' : 
                    i === 2 ? 'bg-purple-400' : 
                    i === 3 ? 'bg-pink-400' : 
                    i === 4 ? 'bg-blue-400' : 
                    i === 5 ? 'bg-teal-400' : 'bg-red-400'
                  }`}></div>
                ))}
              </div>
              <span className="bg-[#C1FF39] text-gray-900 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold">20+</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  )
}
