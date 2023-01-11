import React from "react";
import PortofolioCard from "../components/PortofolioCard";

function PortfolioPage() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
      </div>
    </div>
  );
}

export default PortfolioPage;
