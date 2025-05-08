// src/components/WorkSection.tsx
const WorkSection = () => {
  const projects = [
    // Top row (wide cards)
    {
      title: "Alcohol Tracker",
      description: "All-In-One (AIO) Service",
      image: "/images/alcohol.webp",
      className: "w-full h-full object-cover object-bottom",
      wide: true,
    },
    {
      title: "RELY",
      description: "All-In-One (AIO) Service",
      image: "/images/rely.jpg",
      className: "w-full h-full object-cover object-middle scale-125 transform origin-center",
      wide: true,
    },
    // Bottom row (regular cards)
    {
      title: "Alcohol Tracker",
      description: "All-In-One (AIO) Service",
      image: "/images/phone2.webp",
      className: "w-full h-full object-cover object-bottom",
      wide: false,
    },
    {
      title: "Finance Website",
      description: "All-In-One (AIO) Service",
      image: "/images/finance.jpg",
      className: "w-full h-full object-cover object-bottom",
      wide: false,
    },
    {
      title: "Alcohol Tracker",
      description: "All-In-One (AIO) Service",
      image: "/images/bus.jpg",
      className: "w-full h-full object-cover object-top",
      wide: false,
    },
  ];

  return (
    <section className=" custom-diag-bg py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#b3cfff] via-white to-[#b3cfff] bg-clip-text text-transparent leading-tight drop-shadow-lg mb-4">
          Our Most Recent Works
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur. Eget at, at rune, lorem.
        </p>
      </div>

      {/* Top row: two wide cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 max-w-7xl mx-auto">
        {projects
          .filter((p) => p.wide)
          .map((project, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/2 bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image container with constrained height */}
              <div className="relative aspect-[3/2] max-h-64 md:max-h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.className} // Added object-top
                />
              </div>
              {/* Text container with flex-1 to maintain consistent height */}
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom row: three regular cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((p) => !p.wide)
          .map((project, idx) => (
            <div
              key={idx}
              className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-12">
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
    </section>
  );
};

export default WorkSection;
