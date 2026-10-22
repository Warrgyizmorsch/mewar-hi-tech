"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ModelViewerScript() {
  const pathname = usePathname();
  const [alreadyDefined, setAlreadyDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.customElements && window.customElements.get("model-viewer")) {
      setAlreadyDefined(true);
    }
  }, []);

  // Do not load on 3D Experience routes to avoid WebGL context conflicts with React Three Fiber
  if (pathname?.startsWith("/3d-experience") || alreadyDefined) {
    return null;
  }

  return (
    <Script 
      id="model-viewer-script"
      type="module" 
      src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" 
      strategy="afterInteractive" 
    />
  );
}
