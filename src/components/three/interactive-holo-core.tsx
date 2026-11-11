"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { Cpu, TrendingUp, Camera, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type HoloMode = "neural" | "dca" | "media";

export function InteractiveHoloCore() {
  const { lang, reducedMotion } = useLanguage();
  const isTh = lang === "th";
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<HoloMode>("neural");
  const modeRef = useRef<HoloMode>("neural");
  const sceneObjectsRef = useRef<{
    coreGroup?: THREE.Group;
    neuralMesh?: THREE.Mesh;
    dcaMesh?: THREE.Mesh;
    mediaMesh?: THREE.Mesh;
    ring1?: THREE.Mesh;
    ring2?: THREE.Mesh;
  }>({});

  useEffect(() => {
    modeRef.current = mode;
    const objs = sceneObjectsRef.current;
    if (!objs.coreGroup || reducedMotion) return;

    // GSAP transition when switching modes
    gsap.fromTo(
      objs.coreGroup.scale,
      { x: 0.72, y: 0.72, z: 0.72 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.55,
        ease: "back.out(1.7)",
      }
    );
    gsap.to(objs.coreGroup.rotation, {
      y: objs.coreGroup.rotation.y + Math.PI * 0.65,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [mode, reducedMotion]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 220;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

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
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f7ff, 0.7);
    const pointLight1 = new THREE.PointLight(0x35e6a1, 4, 15);
    pointLight1.position.set(3, 3, 4);
    const pointLight2 = new THREE.PointLight(0x9b7bff, 3.5, 15);
    pointLight2.position.set(-3, -2, 3);
    scene.add(ambientLight, pointLight1, pointLight2);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Neural AI Icosahedron
    const neuralGeo = new THREE.IcosahedronGeometry(1.25, 1);
    const neuralMat = new THREE.MeshStandardMaterial({
      color: 0x35e6a1,
      emissive: 0x0f5238,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const neuralMesh = new THREE.Mesh(neuralGeo, neuralMat);
    coreGroup.add(neuralMesh);

    // Inner solid crystal
    const innerGeo = new THREE.OctahedronGeometry(0.68, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x35e6a1,
      emissive: 0x186a49,
      roughness: 0.15,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. DCA TorusKnot Mathematical Manifold
    const dcaGeo = new THREE.TorusKnotGeometry(0.92, 0.24, 96, 16, 2, 3);
    const dcaMat = new THREE.MeshStandardMaterial({
      color: 0x4d8dff,
      emissive: 0x102a5c,
      wireframe: true,
      roughness: 0.25,
      metalness: 0.85,
    });
    const dcaMesh = new THREE.Mesh(dcaGeo, dcaMat);
    dcaMesh.visible = false;
    coreGroup.add(dcaMesh);

    // 3. Media Visual Storytelling Dodecahedron Aperture
    const mediaGeo = new THREE.DodecahedronGeometry(1.2, 1);
    const mediaMat = new THREE.MeshStandardMaterial({
      color: 0x9b7bff,
      emissive: 0x2a1664,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
    });
    const mediaMesh = new THREE.Mesh(mediaGeo, mediaMat);
    mediaMesh.visible = false;
    coreGroup.add(mediaMesh);

    // Orbital Gyro Rings
    const ring1Geo = new THREE.TorusGeometry(1.75, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x35e6a1,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.02, 0.014, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9b7bff,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    sceneObjectsRef.current = {
      coreGroup,
      neuralMesh,
      dcaMesh,
      mediaMesh,
      ring1,
      ring2,
    };

    // Interactive pointer tracking
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    };

    renderer.domElement.addEventListener("pointermove", handlePointerMove);
    renderer.domElement.addEventListener("pointerleave", handlePointerLeave);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 220;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      const t = clock.getElapsedTime();
      const activeMode = modeRef.current;

      neuralMesh.visible = activeMode === "neural";
      dcaMesh.visible = activeMode === "dca";
      mediaMesh.visible = activeMode === "media";

      if (activeMode === "neural") {
        innerMat.color.setHex(0x35e6a1);
        ring1Mat.color.setHex(0x35e6a1);
      } else if (activeMode === "dca") {
        innerMat.color.setHex(0x4d8dff);
        ring1Mat.color.setHex(0x4d8dff);
      } else {
        innerMat.color.setHex(0x9b7bff);
        ring1Mat.color.setHex(0x9b7bff);
      }

      if (!reducedMotion) {
        pointer.x += (pointer.targetX - pointer.x) * 0.08;
        pointer.y += (pointer.targetY - pointer.y) * 0.08;

        neuralMesh.rotation.y = t * 0.35 + pointer.x * 0.7;
        neuralMesh.rotation.x = t * 0.22 - pointer.y * 0.7;

        dcaMesh.rotation.y = t * 0.4 + pointer.x * 0.7;
        dcaMesh.rotation.x = t * 0.25 - pointer.y * 0.7;

        mediaMesh.rotation.y = t * 0.3 + pointer.x * 0.7;
        mediaMesh.rotation.z = t * 0.2 - pointer.y * 0.7;

        innerMesh.rotation.y = -t * 0.6;
        innerMesh.rotation.z = t * 0.4;
        const pulse = 1 + Math.sin(t * 2.5) * 0.06;
        innerMesh.scale.set(pulse, pulse, pulse);

        ring1.rotation.z = t * 0.25;
        ring1.rotation.x = Math.PI / 3 + pointer.y * 0.3;
        ring2.rotation.x = -t * 0.2;
        ring2.rotation.y = Math.PI / 4 + pointer.x * 0.3;
      }

      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      renderer.domElement.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);

      neuralGeo.dispose();
      neuralMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      dcaGeo.dispose();
      dcaMat.dispose();
      mediaGeo.dispose();
      mediaMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  const modes: {
    id: HoloMode;
    labelTh: string;
    labelEn: string;
    subTh: string;
    subEn: string;
    icon: React.ElementType;
    accent: string;
  }[] = [
    {
      id: "neural",
      labelTh: "AI & Digital UX",
      labelEn: "AI & Digital UX",
      subTh: "Neural Core • ม.ศิลปากร ICT",
      subEn: "Neural Core • Silpakorn ICT",
      icon: Cpu,
      accent: "text-emerald border-emerald/40 bg-emerald/15",
    },
    {
      id: "dca",
      labelTh: "DCA Compounding",
      labelEn: "DCA Compounding",
      subTh: "Geometric Series • 4.60/5.00",
      subEn: "Geometric Series • 4.60/5.00",
      icon: TrendingUp,
      accent: "text-techblue border-techblue/40 bg-techblue/15",
    },
    {
      id: "media",
      labelTh: "Visual Storytelling",
      labelEn: "Visual Storytelling",
      subTh: "สภากาชาดไทย • Sk-Top STAR",
      subEn: "Red Cross Award • Sk-Top STAR",
      icon: Camera,
      accent: "text-purple border-purple/40 bg-purple/15",
    },
  ];

  const activeInfo = modes.find((m) => m.id === mode) || modes[0];

  return (
    <div className="relative rounded-2xl bg-void/85 border border-white/10 p-3.5 sm:p-4 overflow-hidden">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>3D INTERACTIVE CORE</span>
        </div>
        <span className="text-[10px] font-mono text-ink-muted">
          {isTh ? "แตะหรือเลื่อนเพื่อหมุน 3D" : "Touch or hover to rotate 3D"}
        </span>
      </div>

      {/* Three.js Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-36 sm:h-44 rounded-xl bg-gradient-to-b from-surface/70 to-void/90 border border-white/5 cursor-grab active:cursor-grabbing relative touch-pan-y"
      />

      {/* Mode Selector Pills — Responsive 1-col on narrow phones, 3-col on sm+ */}
      <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1.5">
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`px-3 py-2 sm:px-2.5 sm:py-1.5 rounded-xl border text-left transition-all duration-200 flex sm:block items-center justify-between gap-2 ${
                isActive
                  ? m.accent
                  : "border-white/10 bg-surface/60 text-ink-secondary hover:text-ink hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs sm:text-[11px] font-bold min-w-0">
                <Icon className="w-3.5 h-3.5 sm:w-3 sm:h-3 shrink-0" />
                <span className="truncate">{isTh ? m.labelTh : m.labelEn}</span>
              </div>
              <div className="text-[10px] sm:text-[9px] font-mono opacity-85 truncate sm:mt-0.5 shrink-0 sm:shrink">
                {isTh ? m.subTh : m.subEn}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-ink-secondary px-1">
        <span>MODE: {activeInfo.id.toUpperCase()}</span>
        <span className="text-emerald">WEBGL 2.0 • 60FPS</span>
      </div>
    </div>
  );
}
