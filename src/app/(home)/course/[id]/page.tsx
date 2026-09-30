'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import heroBg from '../../../../asstes/home/h.png'

export default function CourseDetailPage() {
  const params = useParams()
  const id = params?.id
  const [activeTab, setActiveTab] = useState('About')

  return (
    <main className="min-h-screen bg-white">
      {/* ========== BLUE HERO ========== */}
      <section className="relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 z-0">
          <Image src={heroBg} alt="Background" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-blue-700/50 z-0" />

        <div className="relative z-10 container mx-auto px-6 pt-28 pb-10">
          {/* Title row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-white/70 text-base mb-4">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-white/80 text-sm mb-6">by purplespot studio</p>
            </div>
            <button className="bg-[#C1FF39] text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#b3f020] transition-colors shrink-0 ml-6 mt-2">
              Enroll
            </button>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-5 py-2 rounded-full bg-[#C1FF39] text-gray-900 font-semibold text-sm">60 Lessons</span>
            <span className="px-5 py-2 rounded-full bg-[#C1FF39] text-gray-900 font-semibold text-sm">4,612 minutes</span>
            <span className="px-5 py-2 rounded-full bg-[#C1FF39] text-gray-900 font-semibold text-sm">101 Students</span>
          </div>
        </div>
      </section>

      {/* ========== BLUE CONTENT: Video + Sidebar ========== */}
      <section className="relative bg-blue-600 pb-16">
        <div className="absolute inset-0 z-0">
          <Image src={heroBg} alt="Background" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-blue-700/50 z-0" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT: Video Thumbnail */}
            <div className="lg:w-2/3 relative rounded-2xl overflow-hidden aspect-video bg-blue-800 border-2 border-white/10 cursor-pointer group shadow-xl">
              <Image src={heroBg} alt="Course Preview" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-blue-600 border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Course Outline Sidebar */}
            <div className="lg:w-1/3 bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-3">10 Lessons (24 Hours)</h3>
              <ul className="space-y-3 mb-5">
                {[
                  { num: 1, title: 'Introduction to Digital...', time: '12 mins' },
                  { num: 2, title: 'Design Principles for...', time: '8 mins' },
                  { num: 3, title: 'Advanced Techniques in...', time: '15 mins' },
                  { num: 4, title: 'Digital Creation...', time: '10 mins' },
                ].map((lesson) => (
                  <li key={lesson.num} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <span className="text-sm text-gray-700">{lesson.title}</span>
                    </div>
                    <span className="text-xs text-gray-400 ml-3">{lesson.time}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 mb-4 text-center">
                Ready to Start? Enroll Now and Start<br />Learning from Experts!
              </p>

              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-900">$25</span>
                <span className="text-gray-400 text-sm">/course</span>
              </div>

              <button className="w-full py-3 rounded-full bg-[#C1FF39] text-gray-900 font-bold hover:bg-[#b3f020] transition-colors shadow-md">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THIS COURSE INCLUDE ========== */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <h3 className="text-base font-bold text-gray-900 mb-4">This course include</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-sm text-gray-600">Learning Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-sm text-gray-600">Flexible Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-sm text-gray-600">Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
              </div>
              <span className="text-sm text-gray-600">Private Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TABS SECTION ========== */}
      <section className="bg-white">
        <div className="container mx-auto px-6 pt-6">
          {/* Tab Headers */}
          <div className="flex items-center gap-8 border-b border-gray-200">
            {['About', 'Lessons', 'Reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold transition-colors relative ${
                  activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600 rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="container mx-auto px-6 py-10">
          {/* ===== ABOUT TAB ===== */}
          {activeTab === 'About' && (
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-10">
                  <p>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Asset: A Comprehensive Guide.&quot; This transformative learning experience is carefully crafted to give you the knowledge and skills needed to excel in building powerful digital creations. From laying the groundwork with essential fundamentals to mastering advanced techniques, this course is designed for ambitious learners at every level.
                  </p>
                  <p>
                    In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the fundamental concepts that form the backbone of digital asset creation. Understanding the building blocks of digital design enables you to confidently navigate the dynamic landscape of digital content and its evolving challenges.
                  </p>
                  <p>
                    As you progress through this course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles, typography, layout, color theory, composition, and layout strategies that elevate your digital assets to new heights. Engaging in hands-on activities that reinforce your understanding, allowing you to apply these principles in a practical setting.
                  </p>
                </div>

                {/* Sneak Peek */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">Sneak Peek</h3>
                <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
                  {['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500'].map((color, i) => (
                    <div key={i} className={`w-20 h-20 ${color} rounded-xl shrink-0`} />
                  ))}
                </div>

                {/* Key Points */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Points</h3>
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
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Sidebar — Author Card */}
              <div className="md:w-72 shrink-0">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm sticky top-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-purple-500" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">PurpleSpot Studio</h4>
                      <p className="text-xs text-gray-500">Freelance Creator</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Learn to Design UI, Create Visual Assets and Start Building Your Digital Career</p>
                  <a href="#" className="text-blue-600 font-semibold text-xs hover:underline">See Full Profile</a>
                </div>
              </div>
            </div>
          )}

          {/* ===== LESSONS TAB ===== */}
          {activeTab === 'Lessons' && (
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Explore the Modules</h3>
                <p className="text-sm text-gray-600 mb-8">
                  Welcome to the lessons section. Here you will find all the modules designed to enhance your digital creation skills comprehensively.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-5">Lesson List</h3>
                <div className="space-y-5 mb-10">
                  {[
                    { title: 'Introduction to Digital Arts and Fundamentals', desc: 'Explore the core principles behind Digital Arts and Fundamentals, and learn how they apply to real-world creative projects.' },
                    { title: 'Design Principles: Typography, Balance, and Visual Hierarchy', desc: 'Master the essential elements of typography, composition, and hierarchy to create cohesive and impactful designs.' },
                    { title: 'Color Theory and Application in Design', desc: 'A deep exploration of color schemes for creating harmonious, Power-balanced, and Integrating aesthetics in your work.' },
                    { title: 'Case Study: Design Strategies', desc: 'Practical analysis of design examples to boost your creative design thinking.' },
                    { title: 'Research Methods and Critique', desc: 'Learn your analytical toolkit by building critical thinking skills and proficiency in Creative Certification practices.' },
                    { title: 'Testing Digital Assets for Various Platforms', desc: 'Explore practical asset testing methodology to create effective, compatible, consistent experiences across all screens and platforms.' },
                    { title: 'Final Project and Portfolio Building', desc: 'Pull it all together through a comprehensive final project, applying everything you have learned throughout this curriculum.' },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{lesson.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{lesson.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">Lesson Content</h3>
                <p className="text-sm text-gray-600 mb-8">
                  Dive deep into the materials provided for each lesson. From video tutorials to interactive quizzes, we have curated a rich set of resources to ensure you grasp every concept fully.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Progress Tracking</h3>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Learning Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }} />
                  </div>
                  <span className="text-sm font-bold text-blue-600">55%</span>
                </div>
              </div>

              {/* Author sidebar */}
              <div className="md:w-72 shrink-0">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm sticky top-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-purple-500" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">PurpleSpot Studio</h4>
                      <p className="text-xs text-gray-500">Freelance Creator</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 font-semibold text-xs hover:underline">See Full Profile</a>
                </div>
              </div>
            </div>
          )}

          {/* ===== REVIEWS TAB ===== */}
          {activeTab === 'Reviews' && (
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What Learners are Saying</h3>
                <p className="text-sm text-gray-600 mb-8">
                  Discover how this course has impacted our students. Read their honest feedback and see how the skills they acquired have helped them grow.
                </p>

                {/* Rating Box */}
                <div className="bg-blue-50 p-6 rounded-xl flex items-center gap-5 mb-8">
                  <span className="text-5xl font-bold text-blue-900">4.7</span>
                  <div>
                    <div className="flex gap-0.5 text-yellow-400 text-lg mb-1">
                      {'★★★★★'}
                    </div>
                    <span className="text-gray-500 text-sm">rating</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-5">Individual Reviews</h3>
                <div className="space-y-5">
                  {[
                    { name: 'PurpleSpot Studio', time: '1 years ago', color: 'bg-purple-500', review: 'This course has been a real eye-opener! I completely transformed my approach towards digital creation. I went from being a complete beginner to confidently delivering high-quality digital assets for clients.' },
                    { name: 'Albert Flores', time: '2 years ago', color: 'bg-blue-500', review: 'Really loved this course. My approach to digital design. The combination of theory, hands-on exercises, and real-life application scenarios made it a truly enriching experience.' },
                    { name: 'Cody Fisher', time: '3 years ago', color: 'bg-green-500', review: 'The course structure and difficulty matched perfectly! with perfectly calibrated learning progression. I noticed real, tangible development in my creativity process.' },
                    { name: 'Brooklyn Simmons', time: '4 years ago', color: 'bg-orange-500', review: 'This course in combining digital assets to create websites is one I&apos;ve not found elsewhere. The practical approach to learning and helpful insights have exceeded my expectations.' },
                  ].map((review, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${review.color}`} />
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                            <p className="text-xs text-gray-400">{review.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 text-xs mb-2">★★★★★</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author sidebar */}
              <div className="md:w-72 shrink-0">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm sticky top-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-purple-500" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">PurpleSpot Studio</h4>
                      <p className="text-xs text-gray-500">Freelance Creator</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 font-semibold text-xs hover:underline">See Full Profile</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
 