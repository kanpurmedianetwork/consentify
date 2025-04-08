import React, { useState } from 'react';
import { Shield, Video, FileSignature, Brain, ChevronRight, Instagram, Twitter, Mail } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#013ddf]/20 to-gray-900/20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="flex justify-center mb-8">
            <svg className="w-32 h-32" viewBox="0 0 375 374.999991" xmlns="http://www.w3.org/2000/svg">
              <path fill="#013ddf" d="M 79.433594 37.5 L 295.566406 37.5 L 295.566406 305.128906 L 79.433594 305.128906 Z M 79.433594 37.5 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 50.796875 -58.421875 C 45.710938 -58.421875 41.335938 -56.539062 37.671875 -52.78125 C 34.015625 -49.019531 32.1875 -44.492188 32.1875 -39.203125 C 32.1875 -33.816406 34.015625 -29.238281 37.671875 -25.46875 C 41.335938 -21.707031 45.710938 -19.828125 50.796875 -19.828125 C 53.234375 -19.828125 55.546875 -20.128906 57.734375 -20.734375 C 59.921875 -21.347656 61.523438 -21.960938 62.546875 -22.578125 L 63.921875 -23.5 L 73.0625 -4.734375 C 72.351562 -4.222656 71.363281 -3.582031 70.09375 -2.8125 C 68.820312 -2.050781 65.921875 -1.015625 61.390625 0.296875 C 56.867188 1.617188 52.015625 2.28125 46.828125 2.28125 C 35.335938 2.28125 25.242188 -1.757812 16.546875 -9.84375 C 7.859375 -17.925781 3.515625 -27.613281 3.515625 -38.90625 C 3.515625 -50.289062 7.859375 -60.078125 16.546875 -68.265625 C 25.242188 -76.453125 35.335938 -80.546875 46.828125 -80.546875 C 52.015625 -80.546875 56.796875 -79.9375 61.171875 -78.71875 C 65.546875 -77.5 68.648438 -76.273438 70.484375 -75.046875 L 73.0625 -73.21875 L 63.921875 -54.765625 C 60.566406 -57.203125 56.191406 -58.421875 50.796875 -58.421875 Z M 50.796875 -58.421875" transform="translate(132.134482, 272.295807)"/>
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-center mb-4">
            Consentify
          </h1>
          <p className="text-3xl text-center text-[#013ddf] font-semibold mb-4">
            Consent is Power. Secure It.
          </p>
          <p className="text-xl text-center text-gray-300 mb-8">
            The future of digital identity protection is here.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#013ddf] hover:bg-[#013ddf]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Request Early Access
            </button>
          </div>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">The Growing Threat</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg border border-[#013ddf]/20">
              <h3 className="text-xl font-semibold mb-4">Rising Digital Fraud</h3>
              <p className="text-gray-300">
                With the surge in digital transactions, identity theft and fraudulent activities have reached unprecedented levels.
                Your personal information is more vulnerable than ever.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg border border-[#013ddf]/20">
              <h3 className="text-xl font-semibold mb-4">Consent Vulnerability</h3>
              <p className="text-gray-300">
                Traditional verification methods lack robust consent mechanisms, leaving individuals exposed to unauthorized use of their identity documents like PAN cards for GST fraud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
              <Video className="w-12 h-12 mx-auto mb-4 text-[#013ddf]" />
              <h3 className="text-xl font-semibold mb-2">Verified Video Consent</h3>
              <p className="text-gray-300">Record tamper-proof video consent for important transactions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
              <Brain className="w-12 h-12 mx-auto mb-4 text-[#013ddf]" />
              <h3 className="text-xl font-semibold mb-2">AI Identity Check</h3>
              <p className="text-gray-300">Advanced AI-powered facial and voice recognition</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
              <FileSignature className="w-12 h-12 mx-auto mb-4 text-[#013ddf]" />
              <h3 className="text-xl font-semibold mb-2">Digital Signature</h3>
              <p className="text-gray-300">Secure digital signatures with blockchain verification</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#013ddf]" />
              <h3 className="text-xl font-semibold mb-2">Multi-Factor Security</h3>
              <p className="text-gray-300">Layered security approach for maximum protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
                <div className="text-4xl font-bold text-[#013ddf] mb-4">1</div>
                <h3 className="text-xl font-semibold mb-4">Record Consent</h3>
                <p className="text-gray-300">Record a short video following our secure verification process</p>
              </div>
              <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#013ddf]" />
            </div>
            <div className="relative">
              <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
                <div className="text-4xl font-bold text-[#013ddf] mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Verify Identity</h3>
                <p className="text-gray-300">AI-powered verification of your face, voice, and actions</p>
              </div>
              <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#013ddf]" />
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all border border-[#013ddf]/20">
              <div className="text-4xl font-bold text-[#013ddf] mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Secure with Signature</h3>
              <p className="text-gray-300">Complete the process with your digital signature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-[#013ddf]/20">
              <p className="text-lg italic mb-4">"My GST was misused — Consentify gave me back control."</p>
              <p className="text-gray-400">- Rahul M., Business Owner</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-[#013ddf]/20">
              <p className="text-lg italic mb-4">"Finally, a solution that verifies consent before misuse happens."</p>
              <p className="text-gray-400">- Priya S., Chartered Accountant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#013ddf] to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Be the First to Experience the Future of Consent</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#013ddf]"
                required
              />
              <button
                type="submit"
                className="bg-[#013ddf] hover:bg-[#013ddf]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About RedSide India</h3>
              <p className="text-gray-400">
                Pioneering digital security solutions for a safer tomorrow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <a href="mailto:entrepreneuronroad@gmail.com" className="text-gray-400 hover:text-[#013ddf] flex items-center gap-2">
                <Mail className="w-5 h-5" />
                entrepreneuronroad@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/theredsideindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#013ddf]"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/theredsideindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#013ddf]"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Consentify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;