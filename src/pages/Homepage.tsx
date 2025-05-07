const Homepage = () => {
  return (
    <div
      className="flex flex-col relative overflow-x-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home-bg.jpg')",
      }}
    >
      <main className="flex-grow flex flex-col items-center px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full max-w-4xl flex flex-col items-center text-center relative z-10 mt-8">
          {/* Glowing background */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] max-w-5xl rounded-full bg-gradient-to-b from-blue-600/40 via-blue-400/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#b3cfff] via-white to-[#b3cfff] bg-clip-text text-transparent leading-tight drop-shadow-lg">
            We Shape Your Ideas Into<br />
            <span className="text-white">Awesome Digital</span><br />
            <span className="text-white">Experience</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
          </p>
          <button className="mt-8 px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg shadow-lg transition">
            Book a call with us
          </button>
        </section>

        {/* Client Logos Row */}
        <section className="w-full max-w-3xl flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-14 mb-10 opacity-90">
          <img src="https://dummyimage.com/100x32/fff/aaa&text=Fix+MY+Phone" alt="Fix MY Phone" className="h-8 grayscale opacity-80" />
          <img src="https://dummyimage.com/100x32/fff/aaa&text=VERDANT" alt="Verdant" className="h-8 grayscale opacity-80" />
          <img src="https://dummyimage.com/80x32/fff/aaa&text=Duet" alt="Duet" className="h-8 grayscale opacity-80" />
          <img src="https://dummyimage.com/80x32/fff/aaa&text=Apex" alt="Apex" className="h-8 grayscale opacity-80" />
          <img src="https://dummyimage.com/120x32/fff/aaa&text=LINDHOLMS" alt="Lindholms" className="h-8 grayscale opacity-80" />
        </section>

        {/* Portfolio/Work Section */}
        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-[#181c23] border border-white/10">
            <img src="/images/phone.webp" alt="phone" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-[#181c23] border border-white/10">
            <img src="/images/knives.webp" alt="knives" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-[#181c23] border border-white/10">
            <img src="/images/dashboard.jpg" alt="dashboard" className="w-full h-48 object-cover" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage; 