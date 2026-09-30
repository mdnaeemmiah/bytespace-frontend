'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import heroBg from '../../../../asstes/home/h.png'
import authorAvatar from '../../../../asstes/home/Frame (12).png'

export default function CourseDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('About')

  return (
    <main className="min-h-screen bg-white">
      {/* ========== BLUE HERO SECTION ========== */}
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
          {/* Title and Enroll Button */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-white/80 text-base mb-2">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-white/70 text-sm">by purplespot studio</p>
            </div>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 rounded-full transition shrink-0 ml-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
          </div>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="mr-2">👥</span> 60 Lessons
            </span>
            <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="mr-2">⭐</span> 4,612 minutes
            </span>
            <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="mr-2">📚</span> 101 Students
            </span>
          </div>

          {/* Video Player and Sidebar */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Video Player */}
            <div className="lg:w-2/3">
              <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image 
                  src={authorAvatar} 
                  alt="Course Preview" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Course Outline Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-5">112 Lessons (24 hours)</h3>

                {/* Lesson List */}
                <ul className="space-y-4 mb-6">
                  {[
                    { num: '01', title: 'Introduction to Digital Assets', time: '12 mins', color: 'text-blue-500' },
                    { num: '02', title: 'Design Principles for Impacts', time: '21 mins', color: 'text-blue-500' },
                    { num: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins', color: 'text-blue-500' },
                  ].map((lesson) => (
                    <li key={lesson.num} className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-gray-400 font-semibold text-sm">{lesson.num}</span>
                        <span className="text-sm text-gray-700 leading-relaxed">{lesson.title}</span>
                      </div>
                      <span className={`text-sm ${lesson.color} font-medium ml-3`}>{lesson.time}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-400 mb-6">99 more videos</p>

                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-blue-600">$25</span>
                  <span className="text-gray-400 text-sm">/lifetime</span>
                </div>

                <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3.5 rounded-full transition shadow-lg mb-6">
                  Enroll Now
                </button>

                {/* Author Card - At the bottom */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 overflow-hidden shrink-0">
                      <Image src={authorAvatar} alt="Author" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">PurePearl Studio</h4>
                      <p className="text-xs text-gray-500">Professional Creator</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>
                  <button className="w-full border border-gray-200 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-50 transition text-sm">
                    See Full Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THIS COURSE INCLUDES ========== */}
      <section className="bg-white py-8 border-y">
        <div className="container mx-auto px-6 lg:px-16">
          <h3 className="text-lg font-bold text-gray-900 mb-6">This course include</h3>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">Learning Resources</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">Flexible Schedules</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">Private Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TABS SECTION ========== */}
      <section className="bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Tab Navigation */}
          <div className="flex gap-8 border-b border-gray-200 pt-6">
            {['About', 'Lessons', 'Reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-2 text-sm font-semibold transition-colors relative ${
                  activeTab === tab 
                    ? 'text-gray-900 border-b-2 border-lime-400' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-10">
            {activeTab === 'About' && (
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-10">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive 
                      course, &quot;Build Digital Asset: A Comprehensive Guide.&quot; This transformative learning experience is 
                      carefully crafted to give you the knowledge and skills needed to excel in building powerful digital 
                      creations. From laying the groundwork with essential fundamentals to mastering advanced techniques, 
                      this course is designed for ambitious learners at every level.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the fundamental 
                      concepts that form the backbone of digital asset creation. Understanding the building blocks of digital 
                      design enables you to confidently navigate the dynamic landscape of digital content and its evolving 
                      challenges.
                    </p>
                    <p>
                      As you progress through this course, you&apos;ll ascend to higher levels of expertise, delving into the 
                      nuances of design principles, typography, layout, color theory, composition, and layout strategies 
                      that elevate your digital assets to new heights.
                    </p>
                  </div>

                  {/* Sneak Peek */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sneak Peek</h3>
                  <div className="flex gap-4 mb-10 overflow-x-auto">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-32 h-32 rounded-xl bg-gray-200 shrink-0 relative overflow-hidden">
                        <Image src={heroBg} alt={`Preview ${i}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Key Points */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Points</h3>
                  <ul className="space-y-3">
                    {[
                      'Fundamental Concepts',
                      'Design Principles Mastery',
                      'Advanced Techniques in Digital Creation',
                      'Color Harmony and Design',
                      'Coding for Visual Platforms',
                      'Front-end Development Best Practices',
                      'Art Direction Strategies',
                      'Creative Project: Building Your Portfolio',
                    ].map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar - Author Card */}
                <div className="lg:w-80 shrink-0">
                  <div className="bg-white rounded-2xl p-6 border shadow-sm sticky top-24">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500 overflow-hidden shrink-0">
                        <Image src={authorAvatar} alt="Author" width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">PurpleSpot Studio</h4>
                        <p className="text-xs text-gray-500">Freelance Creator</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn to Design UI, Create Visual Assets and Start Building Your Digital Career
                    </p>
                    <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                      See Full Profile
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Lessons' && (
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Explore the Modules */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Explore the Modules</h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, 
                    providing practical insights and hands-on experiences.
                  </p>

                  {/* Lesson List */}
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Lesson List</h3>
                  <div className="space-y-4 mb-10">
                    {[
                      {
                        title: 'Module 1: Introduction to Digital Assets',
                        desc: 'Lay the groundwork with lessons like Understanding Digital Elements and Navigating Design Software Tools. Dive into the essentials of digital asset creation.',
                      },
                      {
                        title: 'Module 2: Design Principles for Impact',
                        desc: 'Dive into principles that drive impactful design. Explore lessons such as Color Theory in Digital Design and Typography Essentials. Elevate your visual communication skills.',
                      },
                      {
                        title: 'Module 4: User-Centric Design Strategies',
                        desc: 'Understand Design Thinking in Digital Context and delve into User Experience (UX) Essentials. Create designs that resonate with your audience in a user-centric design.',
                      },
                      {
                        title: 'Module 5: Interactive Media and Engagement',
                        desc: 'Engage your audience with lessons like Creating Interactive Presentations and Navigating Interactive Elements. Master the art of creating immersive digital experiences.',
                      },
                      {
                        title: 'Module 6: Project Showcase and Critique',
                        desc: 'Perfect your presentation skills with Effective Presentation Techniques and embrace Constructive Peer Critique and Collaboration. Showcase your work with confidence.',
                      },
                      {
                        title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                        desc: 'Adapt your digital creations for Mobile Platforms and optimize for Social Media. Create consistent, recognizable and recognized across diverse digital landscapes.',
                      },
                    ].map((module, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base mb-2">{module.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{module.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lesson Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lesson Content</h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    Engage with each lesson through captivating video content, detailed tutorial walkthroughs, and 
                    interactive elements. Download resources, complete assignments, and test your understanding with 
                    quizzes to solidify your knowledge.
                  </p>

                  {/* Lesson Progress Tracking */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lesson Progress Tracking</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you 
                    through your learning journey.
                  </p>

                  <div className="bg-white border rounded-xl p-6">
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Learning Progress</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-lime-400 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Author Card */}
                <div className="lg:w-80 shrink-0">
                  <div className="bg-white rounded-2xl p-6 border shadow-sm sticky top-24">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500 overflow-hidden shrink-0">
                        <Image src={authorAvatar} alt="Author" width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">PurpleSpot Studio</h4>
                        <p className="text-xs text-gray-500">Freelance Creator</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn to Design UI, Create Visual Assets and Start Building Your Digital Career
                    </p>
                    <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                      See Full Profile
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Content */}
                <div className="flex-1">
                  {/* What Learners are Saying */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What Learners are Saying</h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    Discover how this course has impacted our students. Read their honest feedback and see how the 
                    skills they acquired have helped them grow. Each review is an opportunity to understand the value 
                    and transformation learners are experiencing.
                  </p>

                  {/* Rating Overview */}
                  <div className="bg-white border rounded-2xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Large Rating */}
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-lime-400 rounded-2xl flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-900">4.7</span>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-2">Course Rating</div>
                          <div className="flex text-yellow-400 text-2xl mb-1">★★★★★</div>
                        </div>
                      </div>

                      {/* Rating Breakdown */}
                      <div className="flex-1">
                        {[
                          { stars: 5, count: 205, percentage: 85 },
                          { stars: 4, count: 48, percentage: 60 },
                          { stars: 3, count: 12, percentage: 30 },
                          { stars: 2, count: 5, percentage: 15 },
                          { stars: 1, count: 2, percentage: 5 },
                        ].map((rating) => (
                          <div key={rating.stars} className="flex items-center gap-3 mb-2">
                            <div className="flex text-yellow-400 text-sm">
                              {'★'.repeat(rating.stars)}{'☆'.repeat(5 - rating.stars)}
                            </div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-lime-400 rounded-full" 
                                style={{ width: `${rating.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 w-8">{rating.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews Header */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Individual Reviews</h3>

                  {/* Filter Buttons */}
                  <div className="flex gap-2 mb-6">
                    <button className="px-4 py-2 rounded-full bg-lime-400 text-gray-900 font-semibold text-sm">
                      All Reviews
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                      ⭐ 5
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                      ⭐ 4
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                      ⭐ 3
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                      ⭐ 2
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                      ⭐ 1
                    </button>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {[
                      {
                        name: 'PurpleSpot Studio',
                        time: '2 year ago',
                        avatar: 'bg-purple-500',
                        review: 'This course has been a real eye-opener! It completely transformed my approach towards digital asset creation. The lessons were well-structured, informative, and incredibly applicable to my work. Highly recommend it!',
                      },
                      {
                        name: 'Albert Flores',
                        time: '1 year ago',
                        avatar: 'bg-blue-500',
                        review: 'This course has truly elevated the standard in digital design. The combination of theory, hands-on exercises, and real-life application scenarios made it a truly enriching experience. Everyone what they learned.',
                      },
                      {
                        name: 'Cody Fisher',
                        time: '2 year ago',
                        avatar: 'bg-green-500',
                        review: 'The course structure and difficulty matched perfectly! with perfectly calibrated learning progression. I noticed real, tangible development in my creativity process, and gained valuable insight into each chapter and skill, which I can now integrate into my upcoming design.',
                      },
                      {
                        name: 'Brooklyn Simmons',
                        time: '4 year ago',
                        avatar: 'bg-orange-500',
                        review: 'This course on combining digital assets to create websites is one I\'ve not found elsewhere. The practical approach to learning and helpful insights exceeded my expectations. It has equipped me with practical and engaging skills that I am eager to utilize.',
                      },
                    ].map((review, idx) => (
                      <div key={idx} className="bg-white border rounded-xl p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full ${review.avatar} shrink-0`}></div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                              <p className="text-xs text-gray-400">{review.time}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar - Author Card */}
                <div className="lg:w-80 shrink-0">
                  <div className="bg-white rounded-2xl p-6 border shadow-sm sticky top-24">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500 overflow-hidden shrink-0">
                        <Image src={authorAvatar} alt="Author" width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">PurpleSpot Studio</h4>
                        <p className="text-xs text-gray-500">Freelance Creator</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn to Design UI, Create Visual Assets and Start Building Your Digital Career
                    </p>
                    <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                      See Full Profile
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
 