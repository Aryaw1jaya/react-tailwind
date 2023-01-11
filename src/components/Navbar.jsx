import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import PortofolioPage from "../pages/PortfolioPage";

function navbar() {
  return (
    <>
      <nav className="bg-slate-400 h-14">
        <ul className="flex flex-row gap-4 justify-center">
          <Link to={"/"} className="hover:border-b-4 text-slate-50">
            <li className="px-2 py-1 rounded">Home</li>
          </Link>
          <Link to={"/about"} className="hover:border-b-4 text-slate-50">
            <li className="px-2 py-1 rounded">About</li>
          </Link>
          <Link to={"/skills"} className="hover:border-b-4 text-slate-50">
            <li className="px-2 py-1 rounded">Skills</li>
          </Link>
          <Link to={"/portofolio"} className="hover:border-b-4 text-slate-50">
            <li className="px-2 py-1 rounded">Portofolio</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
      </Routes>
    </>
  );
}

export default navbar;
