import React, { useState, useEffect } from "react";
import { Tour, Page } from "./types";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { HomePage } from "./components/HomePage";
import { ToursPage } from "./components/ToursPage";
import { AboutPage } from "./components/AboutPage";
import { TourDetailPage } from "./components/TourDetailPage";

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedTour]);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setCurrentPage("tour-detail");
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        {currentPage === "home" && <HomePage setPage={setCurrentPage} onTourSelect={handleTourSelect} />}
        {currentPage === "tours" && <ToursPage onTourSelect={handleTourSelect} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "tour-detail" && selectedTour && (
          <TourDetailPage tour={selectedTour} setPage={setCurrentPage} />
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
