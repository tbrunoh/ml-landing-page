"use client";
import { useEffect, useState } from 'react';

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      setIsVisible(true);
    }
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow">
        <header className="py-12">
          <div className="flex justify-between items-center mb-12">
            <div></div>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#FF69B4] transition-colors duration-200 font-inter"
            >
              Contact Us
            </a>
          </div>
          <div className="text-center">
            <h1 className="mb-4 text-5xl md:text-6xl font-bold text-gray-900 font-playfair">
              Melanin Luxe AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-inter max-w-3xl mx-auto mb-8">
              Your Personalized Beauty Assistant for Melanin Rich Beauty
            </p>
            <button className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-inter px-8 py-4 rounded-md text-lg transition-all duration-200">
              Start Your Beauty Journey
            </button>
          </div>
        </header>
        <div className="flex flex-col md:flex-row items-center gap-12 py-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Transform Your Beauty Routine with AI
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Experience personalized skincare recommendations powered by
              advanced AI technology, specially designed for <em>your</em> skin
              tone.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-inter px-8 py-4 rounded-md text-lg transition-all duration-200">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-[300px] h-[600px] mx-auto">
              <div
                className="absolute inset-0 rounded-[40px] border-[8px] border-gray-900 overflow-hidden"
                style={{ animation: "phoneGlow 3s infinite" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[48px] bg-black z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[48px] bg-black z-10 flex justify-center items-center">
                  <div className="w-[120px] h-[4px] bg-gray-600 rounded-full"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF69B4]/20 to-transparent pointer-events-none z-20"></div>
                <img
                  src="/melanin-luxe-app-preview.webp"
                  alt="Discover Your Health"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/5"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-900 font-playfair mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16">
          <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-microscope text-4xl text-[#FF69B4] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI-Driven Skin Analysis
            </h3>
            <p className="text-gray-700">
              Upload a selfie for instant skin analysis and personalized
              recommendations
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-hand-holding-heart text-4xl text-[#FF69B4] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Personalized Products
            </h3>
            <p className="text-gray-700">
              Get tailored beauty product suggestions for your unique skin type
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-camera text-4xl text-[#FF69B4] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Virtual Try-On
            </h3>
            <p className="text-gray-700">
              Test different makeup looks virtually before purchasing
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-tasks text-4xl text-[#FF69B4] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Custom Routines
            </h3>
            <p className="text-gray-700">
              Receive personalized morning and night skincare routines
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-users text-4xl text-[#FF69B4] mb-4"></i>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Community Advisors
            </h3>
            <p className="text-gray-700">
              Access personalized advice from verified skincare consultants near
              you
            </p>
          </div>
        </div>

        <div className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5FA] via-white to-[#FFF0F7] pointer-events-none"></div>
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 font-playfair mb-6">
                LuxeAssist: AI + Expert Skincare, Instantly
              </h2>
              <h3 className="text-2xl text-gray-700 font-inter mb-8">
                AI-Powered Answers & Expert Connections, Anytime
              </h3>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
                LuxeAssist provides instant, AI-driven answers and connects you
                to our community of skincare experts. Get personalized guidance,
                product recommendations, and expert advice, all within the
                Melanin Luxe app.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <i className="fas fa-robot text-3xl text-[#FF69B4]"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-inter">
                      24/7 AI Assistance
                    </h4>
                    <p className="text-gray-600">
                      Get instant answers to your skincare questions anytime,
                      anywhere
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <i className="fas fa-comments text-3xl text-[#FF69B4]"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-inter">
                      Expert Chat
                    </h4>
                    <p className="text-gray-600">
                      Connect with licensed skincare professionals for
                      personalized advice
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF69B4]/20 to-transparent rounded-3xl"></div>
                  <img
                    src="/luxe-assist-preview.webp"
                    alt="African woman receiving personalized skincare advice through LuxeAssist AI chat interface"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center text-gray-900 font-playfair mb-12">
            Professional Solutions
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-microscope text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  For Dermatologists
                </h3>
                <p className="text-gray-700 font-inter">
                  Elevate Your Practice with AI-Powered Skin Analysis
                </p>
              </div>
              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-paint-brush text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  For Makeup Artists
                </h3>
                <p className="text-gray-700 font-inter">
                  Achieve Flawless Looks with Precision Shade Matching
                </p>
              </div>
              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-chart-line text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  For Skincare Consultants
                </h3>
                <p className="text-gray-700 font-inter">
                  Provide Personalized Skincare Guidance with Confidence
                </p>
              </div>
              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-spa text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  For Estheticians
                </h3>
                <p className="text-gray-700 font-inter">
                  Enhance Your Services with AI-Powered Skin Analysis and
                  Treatment Planning
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 italic text-sm font-inter max-w-3xl mx-auto px-4 mt-12">
            Note: Melanin Luxe is designed for cosmetic skincare analysis and
            should not replace professional medical advice.
          </p>
        </div>

        <div className="py-20">
          <div className="max-w-6xl mx-auto p-16 rounded-3xl bg-gradient-to-br from-white to-pink-50 border border-gray-100 shadow-xl">
            <div
              className="relative"
              style={{ animation: "slideInText 0.8s ease-out forwards" }}
            >
              <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-8 leading-tight">
                Discover Your Perfect Skincare Journey
              </h2>
              <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-4xl">
                Melanin Luxe is the AI-powered skincare app designed to empower
                you on your journey to healthy, glowing skin. We understand that
                skincare isn't one-size-fits-all, especially when it comes to
                the unique needs of melanin-rich skin. That's why we've
                developed a revolutionary app that combines cutting-edge AI with
                expert insights to provide you with personalized skincare
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-white border border-gray-200 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Ready to Start Your Beauty Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of users who have discovered their perfect skincare
              routine
            </p>
            <button className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-inter px-8 py-4 rounded-md text-lg transition-all duration-200 mb-12">
              Try Melanin Luxe AI Now
            </button>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="#"
                className="w-[200px] h-[60px] bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center px-4 py-2 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center">
                  <i className="fab fa-apple text-white text-3xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-white text-xs">Download on the</div>
                    <div className="text-white text-lg font-semibold">
                      App Store
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="w-[200px] h-[60px] bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center px-4 py-2 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center">
                  <i className="fab fa-google-play text-white text-2xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-white text-xs">Get it on</div>
                    <div className="text-white text-lg font-semibold">
                      Google Play
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gradient-to-br from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-6">
                License Our AI Technology
              </h2>
              <p className="text-xl text-gray-700 font-inter mb-8">
                Empower your business with our advanced melanin-focused AI
                skincare analysis technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-brain text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Proprietary AI Engine
                </h3>
                <p className="text-gray-700 font-inter">
                  Access our specialized AI algorithms trained on diverse skin
                  types and conditions
                </p>
              </div>

              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-code text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  White Label Solution
                </h3>
                <p className="text-gray-700 font-inter">
                  Integrate our technology into your existing products and
                  services under your brand
                </p>
              </div>

              <div className="w-full max-w-sm p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className="fas fa-handshake text-4xl text-[#FF69B4] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Partnership Support
                </h3>
                <p className="text-gray-700 font-inter">
                  Dedicated technical support and business integration
                  consulting
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-inter px-8 py-4 rounded-md text-lg transition-all duration-200">
                Explore Licensing Options
              </button>
              <p className="text-gray-600 mt-4 font-inter">
                Custom solutions available for enterprises and startups
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center">
            <a
              href="mailto:beauty@melaninluxe.ai"
              className="flex items-center text-gray-700 hover:text-[#FF69B4] transition-colors duration-200 font-inter"
            >
              <i className="fas fa-envelope text-2xl mr-2"></i>
              <span>beauty@melaninluxe.ai</span>
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .grid > div {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes phoneGlow {
          0% { 
            box-shadow: 0 0 25px rgba(255, 105, 180, 0.3),
                        inset 0 0 15px rgba(255, 105, 180, 0.2);
          }
          50% { 
            box-shadow: 0 0 35px rgba(255, 105, 180, 0.5),
                        inset 0 0 25px rgba(255, 105, 180, 0.3);
          }
          100% { 
            box-shadow: 0 0 25px rgba(255, 105, 180, 0.3),
                        inset 0 0 15px rgba(255, 105, 180, 0.2);
          }
        }

        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideInText {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}