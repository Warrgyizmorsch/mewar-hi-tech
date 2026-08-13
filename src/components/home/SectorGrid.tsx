"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  RotateCcw,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Box,
  ZoomIn,
  ZoomOut,
  MapPin,
  Camera,
} from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";
import SelectionDropdown from "@/components/ui/SelectionDropdown";
import Container from "../ui/Container";

const SectorGrid: React.FC = () => {
  const [application, setApplication] = useState("Quarry");
  const [material, setMaterial] = useState("Hard Rock");
  const [capacity, setCapacity] = useState("150 - 300 TPH");
  const [power, setPower] = useState("Electric");

  const viewerRef = React.useRef<any>(null);

  const handleZoomIn = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(1);
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(-1);
    }
  };

  const handleReset = () => {
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = "0deg 75deg auto";
      viewerRef.current.fieldOfView = "auto";
    }
  };

  return (
    <section className="section-padding bg-background text-foreground select-none text-left">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-16 items-center">
          
          {/* Left Form Panel */}
          <div className="lg:col-span-5  bg-background flex flex-col justify-center h-full text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">
                FIND YOUR PERFECT MACHINE
              </span>
            </div>
            <h2 className="heading-primary text-[#0A1A3B] dark:text-white leading-tight mb-3">
              SMART TOOLS.<br /><span className="text-primary">SMARTER CHOICE.</span> 
            </h2>
            <p className="text-sm text-muted-foreground mb-8 font-medium leading-relaxed max-w-md">
              Select your application and material to discover the ideal machine for maximum performance.
            </p>
            <form className="space-y-6 font-bold text-xs bg-card p-6 rounded-2xl border border-border shadow-sm">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 uppercase tracking-wider">Application</label>
                  <div className="relative">
                    <SelectionDropdown
                      value={application}
                      onChange={setApplication}
                      options={["Quarry", "Mining", "Recycling"]}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 uppercase tracking-wider">Material</label>
                  <div className="relative">
                    <SelectionDropdown
                      value={material}
                      onChange={setMaterial}
                      options={["Hard Rock", "Gravel", "Concrete"]}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 uppercase tracking-wider">Output Capacity</label>
                  <div className="relative">
                    <SelectionDropdown
                      value={capacity}
                      onChange={setCapacity}
                      options={["150 - 300 TPH", "300 - 500 TPH", "500+ TPH"]}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-muted-foreground mb-2 uppercase tracking-wider">Power Source</label>
                  <div className="relative">
                    <SelectionDropdown
                      value={power}
                      onChange={setPower}
                      options={["Electric", "Diesel", "Hybrid"]}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <BlobButton
                  variant="primary"
                  type="button"
                  className="w-full !px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2 rounded-xl"
                >
                  <span>Find My Machine</span>
                  <ArrowRight size={14} />
                </BlobButton>
              </div>
            </form>
          </div>

          {/* Right 3D Experience Panel */}
          <div className="lg:col-span-7 py-4 bg-background flex flex-col justify-start gap-4">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-widest mb-6 text-center w-full">
                Interactive 3D Experience
              </h2>
              
              <div className="flex flex-col items-center w-full max-w-3xl">
                
                {/* 3D Viewer model-viewer */}
                <div className="flex flex-col items-center relative w-full overflow-hidden">
                  
                  <div className="relative w-full aspect-square sm:aspect-[16/9] max-w-xl flex items-center justify-center p-2">
                    <model-viewer
                      ref={viewerRef}
                      src="/3dmodel/Meshy_AI_Kingson_Cone_Crusher_0704110926_texture.glb"
                      poster="/images/robust_crusher_design.webp"
                      alt="3D Kingson Cone Crusher Model"
                      auto-rotate
                      camera-controls
                      ar
                      shadow-intensity="1"
                      interaction-prompt="none"
                      auto-rotate-delay="0"
                      className="w-full h-full rounded-xl"
                      style={{ width: "100%", height: "100%", minHeight: "350px" }}
                    >
                      {/* Hotspots */}
                      <button
                        slot="hotspot-1"
                        data-position="-0.2m 0.5m 0.3m"
                        className="w-6 h-6 bg-primary rounded-none flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform text-primary-foreground font-bold text-xs"
                      >
                        +
                      </button>
                      <button
                        slot="hotspot-2"
                        data-position="0.2m 0.6m -0.1m"
                        className="w-6 h-6 bg-primary rounded-none flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform text-primary-foreground font-bold text-xs"
                      >
                        +
                      </button>
                    </model-viewer>
                  </div>

                  {/* Floating White View Control Bar */}
                  <div className="flex items-center bg-card rounded-md shadow-md border border-border px-5 py-2.5 gap-4 z-20 mt-4">
                    <button 
                      onClick={handleReset}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                    >
                      <span>360°</span>
                      <RotateCcw size={12} strokeWidth={2.5} />
                    </button>
                    <div className="w-[1px] h-3.5 bg-border" />
                    <button 
                      onClick={handleZoomOut}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ZoomOut size={14} strokeWidth={2.5} />
                    </button>
                    <button 
                      onClick={handleZoomIn}
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ZoomIn size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* Feature Lists (Below the 3D model) */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 px-4 justify-items-center border-t border-border/20 pt-8">
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <RotateCcw size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-tight">
                      360° Machine View
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <MapPin size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-tight">
                      Interactive Hotspots
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <Camera size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-tight">
                      Detailed Specs
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <div className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                      <MapPin size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs lg:text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-tight">
                      Real Insights
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SectorGrid;
