const blogPosts = [
  "How to Protect Your Identity While Traveling",
  "How to Protect Your Identity While Traveling",
  "How to Protect Your Identity While Traveling",
  "How to Protect Your Identity While Traveling",
  "How to Protect Your Identity While Traveling",
];

const Blog = () => {
  return (
    <div className="min-h-screen custom-diag-bg flex flex-col items-center px-4 py-16">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto text-center mb-16 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
          <div className="w-full h-48 bg-gradient-radial from-blue-700/30 to-transparent rounded-full blur-2xl" />
        </div>
        <h1 className="relative text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#b3cfff] via-white to-[#b3cfff] bg-clip-text text-transparent mb-4">
          Featured Insights
        </h1>
        <p className="relative text-white/70 text-lg">
          Lorem ipsum dolor sit amet dolor sit amet consectetur. Eget at, at
          nunc lorem.
        </p>
      </div>

      {/* Blog List */}
      <div className="w-full max-w-2xl flex flex-col gap-6 mb-12">
        {blogPosts.map((title, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gradient-to-r from-blue-900/40 via-black/60 to-black/0 rounded-xl px-6 py-4 shadow-lg"
          >
            <span className="font-semibold text-lg">
              <span className="text-blue-400 mr-2">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {title}
            </span>
            <span>
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 transition">
        View more
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
};

export default Blog;
