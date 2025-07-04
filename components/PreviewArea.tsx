"use client";

import { useState } from "react";

interface PreviewAreaProps {
  previewUrl: string | null;
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function PreviewArea({
  previewUrl,
  aspectRatio,
  setAspectRatio,
  isPlaying,
  togglePlay,
}: PreviewAreaProps) {
  const [size, setSize] = useState("medium");

  const aspectClass =
    aspectRatio === "4:3"
      ? "aspect-[4/3]"
      : aspectRatio === "9:16"
      ? "aspect-[9/16]"
      : "aspect-video";

  const sizeClass =
    size === "small"
      ? "max-w-xs max-h-[200px]"
      : size === "large"
      ? "max-w-lg max-h-[400px]"
      : "max-w-md max-h-[300px]";

  return (
    <div className="flex-1 p-4">
      <div
        className={`w-full ${sizeClass} ${aspectClass} bg-[#111] border border-[#333] rounded overflow-hidden flex items-center justify-center`}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="preview" className="max-h-full max-w-full" />
        ) : (
          "Video Preview"
        )}
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex justify-between items-center mt-2 gap-2">
          <button
            onClick={togglePlay}
            className="bg-blue-600 hover:bg-blue-500 text-xs px-3 py-1 rounded"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <select
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="bg-[#1a1a1a] border border-[#333] text-xs rounded px-2 py-1"
          >
            <option value="16:9">16:9</option>
            <option value="4:3">4:3</option>
            <option value="9:16">9:16</option>
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="bg-[#1a1a1a] border border-[#333] text-xs rounded px-2 py-1"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
}
