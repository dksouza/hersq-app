import React, { useState, useEffect } from 'react';
import AuthGate from './components/AuthGate';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import ErogenousMap from './components/ErogenousMap';
import LibidoTracker from './components/LibidoTracker';
import HoneyProtocol from './components/HoneyProtocol';
import Testimonials from './components/Testimonials';
import VipOfferCta from './components/VipOfferCta';
import Footer from './components/Footer';

export default function App() {
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('user_session_email') || null;
  });

  const handleLogin = (email) => {
    localStorage.setItem('user_session_email', email);
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('user_session_email');
    setUserEmail(null);
  };

  if (!userEmail) {
    return <AuthGate onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Main Navigation */}
      <Navbar userEmail={userEmail} onLogout={handleLogout} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
        
        {/* Section B: Featured Video Masterclass */}
        <section id="masterclass">
          <VideoPlayer />
        </section>

        {/* Section C1: Interactive Module - Zones Érogènes Secrètes */}
        <section id="erogenous-map">
          <ErogenousMap />
        </section>

        {/* Section C2: Interactive Module - Tracker d'Horloge Biologique */}
        <section id="libido-tracker">
          <LibidoTracker />
        </section>

        {/* Section C3: Interactive Module - Protocole Miel & Bicarbonate */}
        <section id="honey-protocol">
          <HoneyProtocol />
        </section>

        {/* Section D: Social Proof & Testimonials */}
        <section id="testimonials">
          <Testimonials />
        </section>

      </main>

      {/* Footer & FAQ */}
      <Footer />
    </div>
  );
}
