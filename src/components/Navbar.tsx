'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../asstes/navbar/Vector.png'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image 
              src={logo} 
              alt="ByteSpace Logo" 
              width={40} 
              height={40}
              className="w-auto h-8"
            />
            <span className="text-xl font-bold">ByteSpace</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/home" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Courses
            </Link>
            <Link 
              href="/creators" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Creators
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/signin" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2"
            >
              Join Us
            </Link>
            <button 
              className="hover:opacity-80 transition-opacity"
              aria-label="Shopping cart"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-blue-700 rounded transition-colors"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
