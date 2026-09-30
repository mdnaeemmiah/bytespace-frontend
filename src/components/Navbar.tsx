'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import logo from '../asstes/navbar/Vector.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
      scrolled ? 'bg-blue-600 shadow-lg' : 'bg-blue-600/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image 
              src={logo} 
              alt="ByteSpace Logo" 
              width={40} 
              height={40}
              className="w-auto h-7 md:h-8"
            />
            <span className="text-lg md:text-xl font-bold">ByteSpace</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/home" 
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/" 
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

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 md:gap-4">
            <Link 
              href="/auth/signin" 
              className="hover:text-blue-200 transition-colors font-medium text-sm md:text-base"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/register" 
              className="bg-white text-blue-600 px-4 md:px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm md:text-base"
            >
              Join Us
            </Link>
            <button 
              className="hover:opacity-80 transition-opacity p-1"
              aria-label="Shopping cart"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6" 
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

          {/* Mobile Right Side - Cart & Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              className="hover:opacity-80 transition-opacity p-1"
              aria-label="Shopping cart"
            >
              <svg 
                className="w-5 h-5" 
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

            {/* Mobile Menu Button (Hamburger) */}
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {/* Navigation Links */}
              <Link 
                href="/home" 
                className="hover:text-blue-200 transition-colors font-medium py-2 px-2 hover:bg-white/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="hover:text-blue-200 transition-colors font-medium py-2 px-2 hover:bg-white/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/creators" 
                className="hover:text-blue-200 transition-colors font-medium py-2 px-2 hover:bg-white/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Creators
              </Link>
              <Link 
                href="/search" 
                className="hover:text-blue-200 transition-colors font-medium py-2 px-2 hover:bg-white/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Search
              </Link>

              {/* Auth Links */}
              <div className="border-t border-white/20 pt-4 mt-2 flex flex-col gap-3">
                <Link 
                  href="/auth/signin" 
                  className="hover:text-blue-200 transition-colors font-medium py-2 px-2 hover:bg-white/10 rounded text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="bg-white text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}
