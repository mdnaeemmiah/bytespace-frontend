export default function Sponsor() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Logo 1 - Layers/Stacked circles */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
                <ellipse cx="20" cy="12" rx="15" ry="4" opacity="0.7"/>
                <ellipse cx="20" cy="20" rx="15" ry="4" opacity="0.8"/>
                <ellipse cx="20" cy="28" rx="15" ry="4" opacity="0.9"/>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium">Logoipsum</span>
          </div>

          {/* Logo 2 - Sun/Star burst */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
                <circle cx="20" cy="20" r="6"/>
                <rect x="18" y="2" width="4" height="8" rx="2"/>
                <rect x="18" y="30" width="4" height="8" rx="2"/>
                <rect x="2" y="18" width="8" height="4" rx="2"/>
                <rect x="30" y="18" width="8" height="4" rx="2"/>
                <rect x="7" y="7" width="4" height="8" rx="2" transform="rotate(45 9 11)"/>
                <rect x="29" y="7" width="4" height="8" rx="2" transform="rotate(-45 31 11)"/>
                <rect x="7" y="29" width="4" height="8" rx="2" transform="rotate(-45 9 33)"/>
                <rect x="29" y="29" width="4" height="8" rx="2" transform="rotate(45 31 33)"/>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium">Logoipsum</span>
          </div>

          {/* Logo 3 - Lightning bolt in circle */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
                <circle cx="20" cy="20" r="18" opacity="0.3"/>
                <path d="M22 8 L14 22 L20 22 L18 32 L26 18 L20 18 Z"/>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium">Logoipsum</span>
          </div>

          {/* Logo 4 - Four circles/dots pattern */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
                <circle cx="20" cy="20" r="18" opacity="0.2"/>
                <circle cx="15" cy="15" r="3.5"/>
                <circle cx="25" cy="15" r="3.5"/>
                <circle cx="15" cy="25" r="3.5"/>
                <circle cx="25" cy="25" r="3.5"/>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium">Logoipsum</span>
          </div>

          {/* Logo 5 - Concentric circles */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="20" cy="20" r="16" opacity="0.4"/>
                <circle cx="20" cy="20" r="12" opacity="0.6"/>
                <circle cx="20" cy="20" r="8" opacity="0.8"/>
                <circle cx="20" cy="20" r="4" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium">Logoipsum</span>
          </div>

        </div>
      </div>
    </section>
  )
}
