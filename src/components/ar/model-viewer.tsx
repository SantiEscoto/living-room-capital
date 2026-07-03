"use client";

import { useEffect, useRef, useState } from "react";
import { AR_MODELS } from "@/lib/constants";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        exposure?: string;
        alt?: string;
        poster?: string;
        loading?: string;
        "interaction-prompt"?: string;
      };
    }
  }
}

interface ModelViewerProps {
  src: string;
  alt: string;
}

export function ModelViewer3D({ src, alt }: ModelViewerProps) {
  const ref = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-[#111111]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3B82F6] border-t-transparent" />
      </div>
    );
  }

  return (
    <model-viewer
      ref={ref}
      src={src}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1"
      interaction-prompt="auto"
      loading="eager"
      className="h-full w-full rounded-xl"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        backgroundColor: "#111111",
      } as React.CSSProperties}
    />
  );
}

interface ARViewerSectionProps {
  selectedModel?: string;
}

export function ARViewerSection({
  selectedModel = AR_MODELS[0].src,
}: ARViewerSectionProps) {
  const [activeModel, setActiveModel] = useState(selectedModel);

  return (
    <div className="space-y-6">
      <div className="aspect-square overflow-hidden rounded-xl border border-white/10 lg:aspect-[4/3]">
        <ModelViewer3D
          src={activeModel}
          alt="Modelo 3D de mueble para visualización AR"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {AR_MODELS.map((model) => (
          <button
            key={model.id}
            onClick={() => setActiveModel(model.src)}
            className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
              activeModel === model.src
                ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6]"
                : "border-white/10 bg-[#111111] text-zinc-400 hover:text-white"
            }`}
          >
            {model.name}
          </button>
        ))}
      </div>
    </div>
  );
}
