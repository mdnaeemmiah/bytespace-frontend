'use client'

import Image from 'next/image'
import { useState } from 'react'
import img1 from "../../asstes/category/Frame (1).png"
import img2 from "../../asstes/category/Frame (2).png"
import img3 from "../../asstes/category/Frame (3).png"
import img4 from "../../asstes/category/Frame (4).png"
import img5 from "../../asstes/category/Frame (5).png"
import img6 from "../../asstes/category/Frame.png"
import img7 from "../../asstes/category/Auto Layout Horizontal.png"


export default function Category() {
  const [activeCategory, setActiveCategory] = useState('Featured')

  const categories = [
    'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 
    'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration',
    'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design',
    'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'
  ]

  const courses = [
    {
      id: 1,
      image: img1,
      title: 'Learn Figma from Basic',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    },
    {
      id: 2,
      image: img2,
      title: 'Build Digital Asset',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    },
    {
      id: 3,
      image: img3,
      title: 'the Power of Big Data',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    },
    {
      id: 4,
      image: img4,
      title: 'Balancing Productivity an...',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    },
    {
      id: 5,
      image: img5,
      title: 'Mastering Money Manage...',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    },
    {
      id: 6,
      image: img6,
      title: 'From Idea to Startup Succ...',
      author: 'purplespot studio',
      rating: 4.5,
      lessons: 17,
      duration: '2 hours 10 mins',
      comments: 99,
      level: 'Beginner',
      price: 25,
      students: 5
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.slice(0, 18).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#C1FF39] text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
          <button className="px-6 py-2.5 rounded-full text-sm font-medium text-blue-600 hover:text-blue-700">
            + More
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow p-4"
            >
              {/* Course Image */}
              <div className="relative h-56 bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="px-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 ml-3">
                    <span className="text-gray-900 font-semibold text-lg">{course.rating}</span>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-blue-500 mb-5 font-medium">
                  by {course.author}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="font-medium">{course.level}</span>
                    </div>

                    <div className="relative h-10 w-36">
                      <Image
                        src={img7}
                        alt="Students"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-blue-600">${course.price}</span>
                    <span className="text-base text-gray-500">/course</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
