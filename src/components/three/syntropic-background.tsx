"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLanguage } from "@/context/language-context";

export function SyntropicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useLanguage();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080a12, 0.045);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Neural Constellation Particle Field (BufferGeometry)
    const particleCount = 240;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x35e6a1), // Veridian Emerald
      new THREE.Color(0x9b7bff), // Electric Purple
      new THREE.Color(0x4d8dff), // Tech Blue
      new THREE.Color(0xf5f7ff), // Crisp Off-White
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 34;
      positions[i3 + 1] = (Math.random() - 0.5) * 28;
      positions[i3 + 2] = (Math.random() - 0.5) * 18 - 2;

      const c = palette[i % palette.length];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 2. Wireframe Architectural Geodesic Rings
    const group = new THREE.Group();
    scene.add(group);

    const icoGeo = new THREE.IcosahedronGeometry(4.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x35e6a1,
      wireframe: true,
      transparent: true,
      opacity: 0.055,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(6.5, 1.5, -4);
    group.add(icoMesh);

    const octGeo = new THREE.OctahedronGeometry(3.4, 1);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x9b7bff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(-7.2, -2.5, -5);
    group.add(octMesh);

    const torusGeo = new THREE.TorusGeometry(6.2, 0.02, 12, 90);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x4d8dff,
      transparent: true,
      opacity: 0.11,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 2.6;
    torusMesh.rotation.y = -0.3;
    group.add(torusMesh);

    // Pointer & Scroll state for gentle counter-motion parallax
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const handlePointerMove = (e: PointerEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      const elapsed = clock.getElapsedTime();

      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      particleSystem.rotation.y = elapsed * 0.025 + pointer.x * 0.12;
      particleSystem.rotation.x = -scrollY * 0.00018 + pointer.y * 0.08;

      icoMesh.rotation.x = elapsed * 0.08;
      icoMesh.rotation.y = elapsed * 0.11;

      octMesh.rotation.x = -elapsed * 0.07;
      octMesh.rotation.z = elapsed * 0.09;

      torusMesh.rotation.z = elapsed * 0.04;

      group.position.y = scrollY * 0.0022;
      group.rotation.y = pointer.x * 0.15;
      group.rotation.x = -pointer.y * 0.1;

      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      particlesGeo.dispose();
      particlesMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
