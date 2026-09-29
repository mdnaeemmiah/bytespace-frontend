import Image from 'next/image'
import img1 from "../../asstes/home/Frame 11.png"
import img2 from "../../asstes/home/Frame 12.png"

export default function Path() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(to right, #FFFBEA 0%, #FEF3C7 20%, #FEFCE8 35%, #F0FAFB 60%, #E0F2FE 80%, #DBEAFE 100%)'
    }}>
      <div className="container mx-auto px-6">
        
        {/* Top Section - Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-12">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">12K</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">70+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-gray-600">Creators</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={img1}
                alt="Professional Growth"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative yellow blob */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-80 -z-0">
              <svg viewBox="0 0 200 300" className="w-full h-full" fill="#C1FF39">
                <path d="M80,40 Q110,70 80,110 Q50,150 80,190 Q110,230 80,270" strokeWidth="0"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section - Create & Manage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <Image
                src={img2}
                alt="Create & Manage Courses"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative yellow blob */}
            <div className="absolute -left-20 bottom-20 w-64 h-80 -z-0">
              <svg viewBox="0 0 200 300" className="w-full h-full" fill="#C1FF39">
                <path d="M80,40 Q110,70 80,110 Q50,150 80,190 Q110,230 80,270" strokeWidth="0"/>
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              <span className="font-semibold text-gray-900">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 text-lg font-medium">Share Your Expertise</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 text-lg font-medium">Monetize Your Passion</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 text-lg font-medium">Flexibility and Autonomy</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 text-lg font-medium">Build a Community</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
