"use client";

import { useEffect, useState } from "react";
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
        exposure?: string;
        alt?: string;
        poster?: string;
        loading?: string;
        "interaction-prompt"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
      };
    }
  }
}

interface ModelViewerProps {
  src: string;
  alt: string;
  cameraOrbit?: string;
}

export function ModelViewer3D({ src, alt, cameraOrbit }: ModelViewerProps) {
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
      key={src}
      src={src}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1.2"
      interaction-prompt="auto"
      loading="eager"
      camera-orbit={cameraOrbit ?? "0deg 75deg 105%"}
      field-of-view="30deg"
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

export function ARViewerSection() {
  const [activeId, setActiveId] = useState(AR_MODELS[0].id);
  const active = AR_MODELS.find((m) => m.id === activeId) ?? AR_MODELS[0];

  return (
    <div className="space-y-6">
      <div className="aspect-square overflow-hidden rounded-xl border border-white/10 lg:aspect-[4/3]">
        <ModelViewer3D
          src={active.src}
          alt={active.description}
          cameraOrbit={active.cameraOrbit}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {AR_MODELS.map((model) => (
          <button
            key={model.id}
            onClick={() => setActiveId(model.id)}
            className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
              activeId === model.id
                ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6]"
                : "border-white/10 bg-[#111111] text-zinc-400 hover:text-white"
            }`}
          >
            {model.name}
          </button>
        ))}
      </div>
      <p className="text-sm text-zinc-500">{active.description}</p>
    </div>
  );
}
