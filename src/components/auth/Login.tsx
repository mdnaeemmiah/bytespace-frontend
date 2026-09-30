import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../asstes/navbar/Vector.png'
import img3 from '../../asstes/home/h.png'
import img2 from '../../asstes/navbar/Group 7.png'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center  px-6 md:px-8 lg:px-10 py-8 gap-4 lg:gap-8">
        {/* Left Section - Content */}
        <div className="hidden md:block md:w-1/2 lg:w-1/2 pr-4 lg:pl-20">
          {/* Logo */}
          <div className="mb-12 md:mb-16">
            <Image src={img1} alt="ByteSpace Logo" width={50} height={50} className="md:w-[60px] md:h-[60px]" />
          </div>

          {/* Text Content */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Sign in and dive in
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed">
              The login process is straightforward, uncomplicated, 
              and efficient, allowing users to sign in quickly, easily, and at 
              no cost
            </p>
          </div>

          {/* Course Cards Preview */}
          <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
            <Image 
              src={img2} 
              alt="Course Preview" 
              width={500} 
              height={450}
              className="rounded-2xl "
            />

          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-auto md:flex-shrink-0">
          <div className="w-full md:w-[400px] lg:w-[450px] bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-11">
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-sm text-blue-600 mb-3 font-medium">Login to Account</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to<br />
                ByteSpace
              </h1>
            </div>

            {/* Login Form */}
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="designer@example.com"
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400"
                />
              </div>

   <Link href='/'>
              <button
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3.5 rounded-full transition duration-200 shadow-lg shadow-lime-400/30 mt-6"
              >
                Continue
              </button>
   </Link>
            </form>

            {/* Footer Link */}
            <p className="text-center mt-8 text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-blue-600 hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
