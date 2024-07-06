import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import { Sparkles } from "@react-three/drei";

// custom components
import Particles from "./Particles.jsx";
import Objects from "./Objects.jsx";
import Html from "./Html.jsx";
import Overlay from "./Overlay.jsx";
import ScrollManager from "./ScrollManager.jsx";

const ScrollBasedAnimation = () => {
  const [section, setSection] = useState(0);

  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });
  return (
    <ScrollControls pages={4} horizontal={false}>
      <ScrollManager section={section} onSectionChange={setSection} />
      <Scroll>
        <Sparkles
          count={3000}
          size={10}
          speed={0.02}
          opacity={1}
          scale={60}
          color="#fff3b0"
        />
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
      <Scroll>
        <Overlay />
      </Scroll>
    </ScrollControls>
  );
};

export default ScrollBasedAnimation;
