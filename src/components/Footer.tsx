const Footer = () => {
  return (
    <footer className="bg-[#10141a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Have a project in mind?
            </h2>
            <div className="group">
              <a
                href="mailto:hey@pixll.com"
                className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all hover:opacity-80"
              >
                Let&apos;s Talk
              </a>
              <p className="mt-2 text-white/80">hey@pixll.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-row md:flex-col gap-4">
            {["LinkedIn", "GitHub", "Facebook", "Instagram", "Twitter"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {platform}
                </a>
              )
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-white/60 text-sm">
          <div className="mb-4 md:mb-0">
            <span className="mr-4">Photos: Tomas</span>
          </div>
          <div>© 2017 - 2025 Pixll. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
