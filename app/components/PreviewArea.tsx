"use client";

import { useEffect, useState } from "react";

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
  const aspectClass =
    aspectRatio === "4:3"
      ? "aspect-[4/3]"
      : aspectRatio === "9:16"
      ? "aspect-[9/16]"
      : "aspect-video";

  const [size, setSize] = useState({ width: 300, height: 300 * 9 / 16 });

  useEffect(() => {
    const [w, h] = aspectRatio.split(":").map(Number);
    if (w > h) {
      const width = 300;
      const height = Math.round((300 * h) / w);
      setSize({ width, height });
    } else {
      const height = 300;
      const width = Math.round((300 * w) / h);
      setSize({ width, height });
    }
  }, [aspectRatio]);

  return (
    <div className="flex-1 p-4">
      <div
        className={`${aspectClass} bg-[#111] border border-[#333] rounded overflow-hidden flex items-center justify-center`}
        style={{ width: `${size.width}px`, height: `${size.height}px` }}
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
        </div>
      </div>
    </div>
  );
}
