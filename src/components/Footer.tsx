'use client'

import Image from 'next/image'
import footerLogo from '../asstes/navbar/Vector.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src={footerLogo} 
                alt="ByteSpace" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">ByteSpace</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
              />
              <button className="bg-lime-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-lime-500 transition-colors font-medium text-sm">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Featured Courses</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Featured Categories</a></li>
              <li><a href="#" className="hover:text-gray-900">Business</a></li>
              <li><a href="#" className="hover:text-gray-900">IT</a></li>
              <li><a href="#" className="hover:text-gray-900">Design</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Development</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Photography</a></li>
              <li><a href="#" className="hover:text-gray-900">Finance</a></li>
              <li><a href="#" className="hover:text-gray-900">Sport</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Become a Creator</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Help</a></li>
              <li><a href="#" className="hover:text-gray-900">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
