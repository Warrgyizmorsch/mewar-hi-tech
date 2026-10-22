"use client";

import React, { useEffect, useState, forwardRef } from "react";
import Image from "next/image";

export interface ModelViewer3DProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "interaction" | "manual";
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  shadowIntensity?: string;
  interactionPrompt?: "auto" | "when-focused" | "none";
  autoRotateDelay?: string;
  cameraOrbit?: string;
  children?: React.ReactNode;
}

const ModelViewer3D = forwardRef<any, ModelViewer3DProps>(
  (
    {
      src,
      poster,
      alt = "3D Machinery Model",
      className = "w-full h-full",
      style = { width: "100%", height: "100%" },
      loading = "eager",
      reveal = "auto",
      autoRotate = true,
      cameraControls = true,
      ar = true,
      shadowIntensity = "1",
      interactionPrompt = "none",
      autoRotateDelay = "0",
      cameraOrbit,
      children,
      ...rest
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return (
        <div
          className={`relative overflow-hidden flex items-center justify-center bg-black/5 dark:bg-black/20 ${className}`}
          style={style}
        >
          {poster ? (
            <Image
              src={poster}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain opacity-70"
              priority
            />
          ) : (
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          )}
        </div>
      );
    }

    return (
      <model-viewer
        ref={ref}
        src={src}
        poster={poster}
        alt={alt}
        loading={loading}
        reveal={reveal}
        auto-rotate={autoRotate ? "" : undefined}
        camera-controls={cameraControls ? "" : undefined}
        ar={ar ? "" : undefined}
        shadow-intensity={shadowIntensity}
        interaction-prompt={interactionPrompt}
        auto-rotate-delay={autoRotateDelay}
        camera-orbit={cameraOrbit}
        suppressHydrationWarning
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </model-viewer>
    );
  }
);

ModelViewer3D.displayName = "ModelViewer3D";

export default ModelViewer3D;
