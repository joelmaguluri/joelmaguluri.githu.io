import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/ParticleConfig";

export default function ParticleBackground() {
  return (
    <div style={{ position: "absolute" }}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
  );
}
