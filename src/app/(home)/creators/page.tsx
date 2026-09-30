import Image from 'next/image'
import Link from 'next/link'
import authorAvatar from '../../../asstes/home/Image.png'
import courseImage from '../../../asstes/category/Frame (3).png'

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Blue Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 pt-24 pb-12">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-16">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0">
              <Image 
                src={authorAvatar} 
                alt="PurePearl Studio" 
                width={96} 
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">PurePearl Studio</h1>
                <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Creator
                </span>
              </div>
              <p className="text-white/80 text-base mb-6">
                Passionate UI/UX, Web designer
              </p>

              {/* Description */}
              <div className="text-white/90 text-sm leading-relaxed space-y-3 max-w-4xl mb-6">
                <p>
                  Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
                </p>
                <p>
                  I've into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                  3 Products
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                  12 Followers
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-8 py-3 rounded-full transition shrink-0">
              Follow
            </button>
          </div>
        </div>
      </section>

      {/* Filters and Courses Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
                Level
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Category
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
              </svg>
              Most relevant
            </button>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Learn Figma from Basic', lessons: 17, hours: '2 hours 18 mins', comments: 58 },
              { id: 2, title: 'Build Digital Asset', lessons: 17, hours: '2 hours 16 mins', comments: 69 },
              { id: 3, title: 'the Power of Big Data', lessons: 17, hours: '4 hours 38 mins', comments: 69 },
              { id: 4, title: 'Balancing Productivity an...', lessons: 17, hours: '2 hours 16 mins', comments: 69 },
              { id: 5, title: 'Mastering Money Manage...', lessons: 17, hours: '2 hours 16 mins', comments: 69 },
              { id: 6, title: 'From Idea to Startup Succ...', lessons: 17, hours: '2 hours 18 mins', comments: 69 },
            ].map((course) => (
              <Link 
                key={course.id} 
                href={`/course/${course.id}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
              >
                {/* Course Image */}
                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                  <Image 
                    src={courseImage} 
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {course.lessons} Lessons
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {course.hours}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {course.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">by purplespot studio</p>

                  {/* Level and Students */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      Beginner
                    </div>
                    <div className="flex items-center -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                      ))}
                      <div className="w-6 h-6 rounded-full bg-lime-400 border-2 border-white flex items-center justify-center text-xs font-bold">
                        2K+
                      </div>
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-bold">
                      <span className="text-2xl">$25</span>
                      <span className="text-sm text-gray-400">/lifetime</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-gray-900">4.5</span>
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
