"use client";

import React, { Suspense, useEffect, useState, use } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Environment } from "@react-three/drei";
import Link from "next/link";
import { ArrowLeft, Maximize2, Download, MessageSquare } from "lucide-react";
import Loader from "@/components/3d/Loader";
import ProductViewer from "@/components/3d/ProductViewer";
import { ExperienceProvider, useExperience } from "@/components/3d/ExperienceManager";
import { PRODUCTS_3D_DATA } from "@/data/3d-products-data";
import Toolbar from "@/components/3d/UIOverlay/Toolbar";
import InfoPanel from "@/components/3d/UIOverlay/InfoPanel";
import { useRouter } from "next/navigation";

function ProductViewerContent({ id }: { id: string }) {
  const { setActiveProduct, activeProduct } = useExperience();
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const product = PRODUCTS_3D_DATA.find(p => p.id === id);
    if (product) {
      setActiveProduct(product);
    } else {
      router.push("/3d-experience");
    }
  }, [id, setActiveProduct, router]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!activeProduct) return <Loader />;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-hidden font-sans select-none flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-6 pointer-events-auto">
          <Link href="/3d-experience">
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors text-white">
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Showroom</span>
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase font-oswald">
              {activeProduct.name}
            </h1>
            <span className="px-2 py-0.5 bg-primary/20 border border-primary text-primary text-xs font-bold uppercase rounded">
              3D Interactive
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-medium transition-colors backdrop-blur-md">
            <Download size={16} />
            Brochure
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-bold transition-colors shadow-lg shadow-primary/20">
            <MessageSquare size={16} />
            Enquiry
          </button>
          <button 
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors backdrop-blur-md"
            title="Toggle Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </header>

      {/* Main 3D Canvas */}
      <main className="flex-grow w-full h-full relative cursor-grab active:cursor-grabbing">
        <Suspense fallback={<Loader />}>
          <Canvas
            shadows
            camera={{ position: [10, 5, 10], fov: 45 }}
            gl={{ antialias: true, preserveDrawingBuffer: true, logarithmicDepthBuffer: true }}
          >
            {/* Dark studio environment */}
            <color attach="background" args={["#0a0a0a"]} />
            <fog attach="fog" args={["#0a0a0a", 50, 300]} />
            
            <Environment preset="night" />
            
            <ambientLight intensity={1.5} />
            <spotLight 
              position={[100, 200, 100]} 
              angle={0.5} 
              penumbra={1} 
              intensity={3} 
              castShadow 
              shadow-mapSize={[2048, 2048]} 
            />
            {/* Accent rim light */}
            <directionalLight 
              position={[-100, 50, -100]} 
              intensity={2} 
              color="#facc15" 
            />

            <ProductViewer />
            
            <Preload all />
          </Canvas>
        </Suspense>

        {/* UI Overlays */}
        <InfoPanel />
        <Toolbar />
      </main>
    </div>
  );
}

export default function ProductViewerPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  return (
    <ExperienceProvider>
      <ProductViewerContent id={params.id} />
    </ExperienceProvider>
  );
}
