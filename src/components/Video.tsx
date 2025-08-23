"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg relative">
      {/* Player */}
      <ReactPlayer
        src="https://vimeo.com/1112537491"
        playing={playing}
        muted={muted}
        width="100%"
        height="100%"
        style={{ borderRadius: "16px", overflow: "hidden" }}
      />

      {/* Controles customizados */}
      <div className="absolute bottom-4 left-4 flex gap-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {/* Play / Pause */}
        {playing ? (
          <button onClick={() => setPlaying(false)}>
            <Pause className="w-6 h-6 text-white" />
          </button>
        ) : (
          <button onClick={() => setPlaying(true)}>
            <Play className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Mute / Unmute */}
        {muted ? (
          <button onClick={() => setMuted(false)}>
            <VolumeX className="w-6 h-6 text-white" />
          </button>
        ) : (
          <button onClick={() => setMuted(true)}>
            <Volume2 className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
