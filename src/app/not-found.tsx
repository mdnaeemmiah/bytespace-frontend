import Image from "next/image"
import Link from "next/link"
import err from "../asstes/navbar/404.png"
import logo from "../asstes/navbar/Vector.png"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent px-6 lg:px-16 py-4 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3">
            <Image src={logo} alt="ByteSpace" width={40} height={40} />
            <span className="text-white text-xl font-bold">ByteSpace</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/home" className="text-white/80 hover:text-white transition">
              Home
            </Link>
            <Link href="/courses" className="text-white/80 hover:text-white transition">
              Courses
            </Link>
            <Link href="/creators" className="text-white/80 hover:text-white transition">
              Creators
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/auth/signin" className="text-white/80 hover:text-white transition text-sm">
              Sign In
            </Link>
            <Link href="/auth/register" className="text-white/80 hover:text-white transition text-sm">
              Join Us
            </Link>
            <button className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden pt-20">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-4 py-16 text-center">
          {/* 404 Image/Text */}
          <div className="mb-8">
            <Image src={err} alt="404" width={600} height={300} className="mx-auto" />
          </div>

          {/* Error Message */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl leading-tight">
            The page you are looking<br />for doesn't exist
          </h1>

          <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <Link 
            href="/home"
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full transition duration-200 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Newsletter */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="ByteSpace" width={35} height={35} />
                <span className="text-gray-900 text-lg font-bold">ByteSpace</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                />
                <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-lg transition">
                  Search
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-3">
                By submitting you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Featured Categories */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Featured Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Business</Link></li>
                <li><Link href="#" className="hover:text-gray-900">IT</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Design</Link></li>
              </ul>
            </div>

            {/* Related Courses */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Related Courses</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Development</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Marketing</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Photography</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Finance</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Sport</Link></li>
              </ul>
            </div>

            {/* Become a Creator */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Become a Creator</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Affiliate Program</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Contact</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Help</Link></li>
                <li><Link href="#" className="hover:text-gray-900">About</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
              <Link href="#" className="hover:text-gray-900">Cookies Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
