"use client";
import { useEffect, useState } from 'react';

export default function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>
          Melanin Luxe - AI-Powered Skincare for Melanin-Rich Skin |
          Personalized Beauty Assistant
        </title>
        <meta
          name="description"
          content="Transform your skincare routine with Melanin Luxe's AI-powered beauty assistant. Get personalized recommendations, virtual try-on, and expert advice designed specifically for melanin-rich skin tones."
        />
        <meta
          name="keywords"
          content="melanin luxe, AI skincare, melanin-rich skin, personalized beauty, virtual try-on, skin analysis, MELA AI, skincare app, beauty assistant, dermatology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Melanin Luxe" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melaninluxe.ai/" />
        <meta
          property="og:title"
          content="Melanin Luxe - AI-Powered Skincare for Melanin-Rich Skin"
        />
        <meta
          property="og:description"
          content="Transform your skincare routine with AI-powered personalized recommendations designed for melanin-rich skin."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/bae74b1d-170f-43db-803c-7e098e97dc70/-/format/auto/"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://melaninluxe.ai/" />
        <meta
          property="twitter:title"
          content="Melanin Luxe - AI-Powered Skincare for Melanin-Rich Skin"
        />
        <meta
          property="twitter:description"
          content="Transform your skincare routine with AI-powered personalized recommendations designed for melanin-rich skin."
        />
        <meta
          property="twitter:image"
          content="https://ucarecdn.com/bae74b1d-170f-43db-803c-7e098e97dc70/-/format/auto/"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Melanin Luxe",
            "description": "AI-powered skincare assistant designed for melanin-rich skin",
            "url": "https://melaninluxe.ai",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
          }
        `}</script>

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://ucarecdn.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>

      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex flex-col">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
          {/* Header Section */}
          <header className="py-16">
            <div className="flex justify-between items-center mb-16">
              <div></div>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#FF69B4] transition-all duration-300 font-inter font-medium tracking-wide text-sm uppercase"
                aria-label="Contact Melanin Luxe"
              >
                Contact Us
              </a>
            </div>
            <div className="text-center">
              <h1 className="mb-6 text-6xl md:text-7xl font-bold text-gray-900 font-playfair tracking-tight leading-none">
                Melanin Luxe
              </h1>
              <div
                className="w-24 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mx-auto mb-8"
                role="presentation"
              ></div>
              <p className="text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                Your Personalized Beauty Assistant, Designed for Your Skin Tone
              </p>
              <button
                className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] hover:from-[#FF1493] hover:to-[#DC143C] text-white font-inter px-12 py-5 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-medium tracking-wide mb-8"
                aria-label="Start your personalized beauty journey with Melanin Luxe"
              >
                Start Your Beauty Journey
              </button>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="#"
                  className="transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden"
                  aria-label="Download Melanin Luxe on Google Play Store"
                >
                  <img
                    src="https://ucarecdn.com/67dec217-0090-43ed-9582-b538519f5753/-/format/auto/"
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                    loading="lazy"
                    width="160"
                    height="56"
                  />
                </a>
                <a
                  href="#"
                  className="transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden"
                  aria-label="Download Melanin Luxe on App Store"
                >
                  <img
                    src="https://ucarecdn.com/15b61d93-81b8-4283-9fac-6c06ab31da22/-/format/auto/"
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                    loading="lazy"
                    width="160"
                    height="56"
                  />
                </a>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section
            className="flex flex-col md:flex-row items-center gap-16 py-20"
            aria-labelledby="hero-heading"
          >
            <div className="md:w-1/2">
              <h2
                id="hero-heading"
                className="text-5xl font-playfair font-bold text-gray-900 mb-8 leading-tight"
              >
                Transform Your Beauty Routine with AI
              </h2>
              <div
                className="w-16 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mb-8"
                role="presentation"
              ></div>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Experience personalized skincare recommendations powered by
                advanced AI technology, specially designed for{" "}
                <em className="font-medium text-gray-800">your</em> skin tone.
              </p>
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-inter px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-medium tracking-wide"
                aria-label="Learn more about Melanin Luxe AI technology"
              >
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-[320px] h-[640px] mx-auto">
                <div className="absolute inset-0 rounded-[50px] border-[10px] border-gray-900 overflow-hidden shadow-2xl phone-glow">
                  <div className="absolute top-0 left-0 right-0 h-[60px] bg-black z-10 rounded-t-[40px]"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-black z-10 flex justify-center items-center rounded-b-[40px]">
                    <div className="w-[140px] h-[5px] bg-gray-600 rounded-full"></div>
                  </div>
                  <img
                    src="https://ucarecdn.com/9fe0a9d3-ab1d-4c4e-b82c-dc04982c4694/-/format/auto/"
                    alt="Melanin Luxe app interface showing AI-powered skin analysis"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="300"
                    height="600"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24" aria-labelledby="features-heading">
            <h2
              id="features-heading"
              className="text-5xl font-bold text-center text-gray-900 font-playfair mb-4 tracking-tight"
            >
              Key Features
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mx-auto mb-20"
              role="presentation"
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <article className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i
                    className="fas fa-microscope text-2xl text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  AI-Driven Skin Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Upload a selfie for instant skin analysis and personalized
                  recommendations
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i
                    className="fas fa-hand-holding-heart text-2xl text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Personalized Products
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Get tailored beauty product suggestions for your unique skin
                  type
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i
                    className="fas fa-camera text-2xl text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Virtual Try-On
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Test different makeup looks virtually before purchasing
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i
                    className="fas fa-tasks text-2xl text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Custom Routines
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Receive personalized morning and night skincare routines
                </p>
              </article>
              <article className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i
                    className="fas fa-users text-2xl text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Community Advisors
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Access personalized advice from verified skincare consultants
                  near you
                </p>
              </article>
            </div>
          </section>

          {/* MELA Section */}
          <section
            className="py-32 relative overflow-hidden"
            aria-labelledby="mela-heading"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8FC] via-white to-[#FFF5FA] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF69B4]/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="text-center mb-20">
                <h2
                  id="mela-heading"
                  className="text-6xl font-bold text-gray-900 font-playfair mb-6 tracking-tight leading-tight"
                >
                  MELA: AI + Expert Skincare, Instantly
                </h2>
                <div
                  className="w-32 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mx-auto mb-8"
                  role="presentation"
                ></div>
                <h3 className="text-3xl text-gray-700 font-inter mb-10 font-light">
                  AI-Powered Answers & Expert Connections, Anytime
                </h3>
                <p className="text-xl text-gray-600 font-inter max-w-4xl mx-auto leading-relaxed font-light">
                  MELA provides instant, AI-driven answers and connects you to
                  our community of skincare experts. Get personalized guidance,
                  product recommendations, and expert advice, all within the
                  Melanin Luxe app.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <article className="flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <i
                        className="fas fa-robot text-xl text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                        24/7 AI Assistance
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-light text-lg">
                        Get instant answers to your skincare questions anytime,
                        anywhere
                      </p>
                    </div>
                  </article>
                  <article className="flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <i
                        className="fas fa-comments text-xl text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                        Expert Chat
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-light text-lg">
                        Connect with licensed skincare professionals for
                        personalized advice
                      </p>
                    </div>
                  </article>
                </div>
                <div className="relative">
                  <div className="relative w-full max-w-[450px] mx-auto">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FF69B4]/20 to-[#FF1493]/20 rounded-3xl blur-xl"></div>
                    <img
                      src="https://ucarecdn.com/bae74b1d-170f-43db-803c-7e098e97dc70/-/format/auto/"
                      alt="African woman using MELA app for AI-powered skin analysis"
                      className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
                      loading="lazy"
                      width="450"
                      height="600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Solutions */}
          <section
            className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl mx-4 shadow-inner"
            aria-labelledby="professional-heading"
          >
            <h2
              id="professional-heading"
              className="text-5xl font-bold text-center text-gray-900 font-playfair mb-4 tracking-tight"
            >
              Professional Solutions
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mx-auto mb-16"
              role="presentation"
            ></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                <article className="w-full max-w-sm p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <i
                      className="fas fa-microscope text-2xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                    For Dermatologists
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed font-light">
                    Elevate Your Practice with AI-Powered Skin Analysis
                  </p>
                </article>
                <article className="w-full max-w-sm p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <i
                      className="fas fa-paint-brush text-2xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                    For Makeup Artists
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed font-light">
                    Achieve Flawless Looks with Precision Shade Matching
                  </p>
                </article>
                <article className="w-full max-w-sm p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <i
                      className="fas fa-chart-line text-2xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                    For Skincare Consultants
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed font-light">
                    Provide Personalized Skincare Guidance with Confidence
                  </p>
                </article>
                <article className="w-full max-w-sm p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <i
                      className="fas fa-spa text-2xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                    For Estheticians
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed font-light">
                    Enhance Your Services with AI-Powered Skin Analysis and
                    Treatment Planning
                  </p>
                </article>
              </div>
            </div>
            <p className="text-center text-gray-500 italic text-sm font-inter max-w-3xl mx-auto px-4 mt-16 font-light">
              Note: Melanin Luxe is designed for cosmetic skincare analysis and
              should not replace professional medical advice.
            </p>
          </section>

          {/* About Section */}
          <section
            className="py-28 text-center"
            aria-labelledby="about-heading"
          >
            <div className="max-w-4xl mx-auto p-16 rounded-3xl bg-gradient-to-br from-white via-pink-50/30 to-white border border-gray-100 shadow-2xl backdrop-blur-sm">
              <div className="relative">
                <h2
                  id="about-heading"
                  className="text-5xl font-bold text-gray-900 font-playfair mb-6 leading-tight tracking-tight"
                >
                  Discover Your Perfect Skincare Journey
                </h2>
                <div
                  className="w-24 h-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] mx-auto mb-10"
                  role="presentation"
                ></div>
                <p className="text-xl text-gray-600 font-inter leading-relaxed max-w-4xl font-light">
                  Melanin Luxe is the AI-powered skincare app designed to
                  empower you on your journey to healthy, glowing skin. We
                  understand that skincare isn't one-size-fits-all, especially
                  when it comes to the unique needs of melanin-rich skin. That's
                  why we've developed a revolutionary app that combines
                  cutting-edge AI with expert insights to provide you with
                  personalized skincare solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            id="contact"
            className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-100 mt-24 shadow-inner"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex justify-center items-center">
                <a
                  href="mailto:beauty@melaninluxe.ai"
                  className="flex items-center text-gray-700 hover:text-[#FF69B4] transition-all duration-300 font-inter font-medium group"
                  aria-label="Contact Melanin Luxe via email"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <i
                      className="fas fa-envelope text-xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <span className="text-lg tracking-wide">
                    beauty@melaninluxe.ai
                  </span>
                </a>
              </div>
            </div>
          </footer>

          {/* Optimized CSS */}
          <style jsx global>{`
            .phone-glow {
              animation: phoneGlow 3s infinite;
            }
            
            @keyframes phoneGlow {
              0%, 100% { 
                box-shadow: 0 0 40px rgba(255, 105, 180, 0.4),
                            inset 0 0 20px rgba(255, 105, 180, 0.2),
                            0 20px 40px rgba(0, 0, 0, 0.1);
              }
              50% { 
                box-shadow: 0 0 60px rgba(255, 105, 180, 0.6),
                            inset 0 0 30px rgba(255, 105, 180, 0.3),
                            0 25px 50px rgba(0, 0, 0, 0.15);
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}



