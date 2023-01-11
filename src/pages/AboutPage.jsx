import React from "react";
import AboutCard from "../components/AboutCard";
import { Canvas } from "@react-three/fiber";
import Char from "../components/Char";
import { OrbitControls } from "@react-three/drei";
import Hobby from "../components/Hobby";

function AboutPage() {
  return (
    <div className="relative">
      <AboutCard />
      <Canvas
        className="bg-blue-700 my-auto relative"
        style={{ height: "655px" }}
      >
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Char position={[0, -2.8, 0]} />
      </Canvas>
      <Hobby />
    </div>
  );
}

export default AboutPage;
