// src/pages/services.js
import React from 'react';
import Card from '@/components/ServiceCard';

const ServicesPage = () => {
  const services: { title: string; description: string; buttonText: string; buttonLink: string; className?: string; }[] = [
    {
      title: "All-In-One (AIO) Service",
      description: "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
      buttonText: 'Learn More',
      buttonLink: '/web-development',
    },
    {
      title: "Project-Based Development",
      description: "Ideal for agencies with ready designs, our service focuses on bringing ...",
      buttonText: 'Explore Apps',
      buttonLink: '/mobile-app-development',
    },
    {
      title: "Scalable Dev Partnership",
      description: "Our partnership is designed for businesses needing consistent development support ...",
      buttonText: 'See Portfolio',
      buttonLink: '/ui-ux-design',
    },
    {
      title: "End-to-End Consulting",
      description: "Our partnership is designed for businesses needing consistent development support ...",
      buttonText: 'Get a Quote',
      buttonLink: '/contact',
    },
  ];

  return (
    <div className="custom-diag-bg flex flex-col items-center px-4 py-16">
      {/* Page Header */}
      <div className="w-full text-center mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-[#b3cfff] via-white to-[#b3cfff] bg-clip-text text-transparent leading-tight drop-shadow-lg mb-4">
          We are a full-service studio creating transformative digital experiences and solutions. specializing in websites and web applications.
        </h2>
      </div>
      {/* Centered Grid Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center"> {/* Fixed grid columns */}
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <Card

                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
                className={`flex flex-col justify-between w-full max-w-[360px] border ${index % 2 === 0
                  ? 'border-blue-500/20 hover:border-blue-500/40'
                  : 'border-purple-500/20 hover:border-purple-500/40'
                  } transition-all duration-300 ${service.className || ''}`}
                backgroundColor={
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[#1a2636]/50 to-[#10141a]/80'
                    : 'bg-gradient-to-br from-[#2a1a36]/50 to-[#10141a]/80'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
