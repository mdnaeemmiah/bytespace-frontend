import Image from 'next/image';

export default function Review() {
  const reviews = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      image: "/api/placeholder/80/80",
      review: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      image: "/api/placeholder/80/80",
      review: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      image: "/api/placeholder/80/80",
      review: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 via-yellow-300 to-blue-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Section - Heading */}
          <div className="pt-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>

          {/* Right Section - Description */}
          <div className="bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-100 p-8 rounded-2xl shadow-sm">
            <p className="text-gray-700 text-sm leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Avatar */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 flex items-center justify-center overflow-hidden ring-2 ring-white shadow-md">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Role */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{review.role}</p>
              </div>

              {/* Review Text */}
              <p className="text-gray-500 text-sm leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
