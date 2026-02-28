import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StatsModal from "../components/StatsModal";
import { useState } from "react";
import LanguageToggle from "../components/LanguageToggle";

export default function Layout() {
  const [statsOpen, setStatsOpen] = useState(false);

  return (
    <div
      className="flex flex-col h-screen w-screen overflow-hidden bg-[#0a0a0a] text-[#f0ece4]"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <Navbar onStatsOpen={() => setStatsOpen(true)} />
      <main className="flex-1 overflow-hidden w-full">
        <Outlet />
        {statsOpen && <StatsModal onClose={() => setStatsOpen(false)} />}
      </main>
      <Footer />
      <LanguageToggle />
      <style>{`
      @keyframes pulse { 0%, 100% { opacity: 0.3 } 50% { opacity: 0.8 } }
      html { scroll-behavior: smooth; }
    `}</style>
    </div>
  );
}
