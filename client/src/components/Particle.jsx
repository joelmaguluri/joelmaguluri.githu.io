import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/ParticleConfig";

export default function ParticleBackground() {
  return (
    <div>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
  );
}
