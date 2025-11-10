"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <MeshGradient
        style={{ height: "100vh", width: "100vw" }}
        distortion={0.8}
        swirl={0.1}
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={[
          "hsl(216, 44%, 80%)", // Neutral blue - more neutral
          "hsl(220, 29%, 84%)", // Blue - more neutral, lighter
          "hsl(205, 49%, 89%)", // Sky blue - more neutral, lighter
          "hsl(211, 34%, 86%)", // Blue-gray - more neutral, lighter
        ]}
      />
    </div>
  );
}

