export default function CoursesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 h-48 flex items-center justify-center text-white text-4xl font-bold">
              {i}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Course Title {i}</h3>
              <p className="text-gray-600 mb-4">Learn amazing skills with this comprehensive course</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
