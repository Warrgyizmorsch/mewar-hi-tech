"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Environment, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Loader from "@/components/3d/Loader";
import Showroom from "@/components/3d/Showroom";
import { ExperienceProvider } from "@/components/3d/ExperienceManager";

export default function ExperiencePage() {
  return (
    <ExperienceProvider>
      <div className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-hidden font-sans select-none flex flex-col">
        {/* Header Overlay */}
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-medium transition-colors backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              Back to Website
            </Link>
          </div>
          <div className="pointer-events-auto">
            <Image src="/logos/logo-dark.png" alt="Mewar Hi-Tech" width={200} height={40} className="h-10 w-auto object-contain opacity-80" />
          </div>
        </header>

        {/* 3D Canvas */}
        <main className="flex-grow w-full h-full relative cursor-grab active:cursor-grabbing">
          <Suspense fallback={<Loader />}>
            <Canvas
              shadows
              camera={{ position: [0, 30, 80], fov: 45 }}
              gl={{ antialias: true, preserveDrawingBuffer: true }}
            >
              <color attach="background" args={["#0a0a0a"]} />
              <fog attach="fog" args={["#0a0a0a", 50, 300]} />
              <Environment preset="night" />
              <ambientLight intensity={1.5} />
              <directionalLight 
                position={[100, 200, 100]} 
                intensity={2.5} 
                castShadow 
                shadow-mapSize={[2048, 2048]} 
              />
              <spotLight 
                position={[-100, 200, -100]} 
                angle={0.5} 
                penumbra={1} 
                intensity={3} 
                castShadow 
                color="#facc15" 
              />

              <Showroom />
              
              <OrbitControls 
                enablePan={true} 
                enableZoom={true} 
                maxPolarAngle={Math.PI / 2 - 0.05} // Prevent going below floor
                minDistance={20}
                maxDistance={250}
                autoRotate
                autoRotateSpeed={0.5}
                makeDefault
              />
              <Preload all />
            </Canvas>
          </Suspense>
        </main>
      </div>
    </ExperienceProvider>
  );
}
