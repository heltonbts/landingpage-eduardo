"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX, PlayCircle } from "lucide-react";

const VIMEO_URL = "https://vimeo.com/1112537491";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleThumbnailClick = () => {
    setShowVideo(true);
    setPlaying(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg relative">
      {!showVideo ? (
        <div
          className="w-full h-full cursor-pointer bg-black flex items-center justify-center"
          onClick={handleThumbnailClick}
        >

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/50">
            <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform group-hover:scale-110" />
          </div>
        </div>
      ) : (
        // Se o vídeo DEVE ser mostrado (após o clique), renderiza o ReactPlayer
        <>
          <ReactPlayer
            src={VIMEO_URL}
            playing={playing}
            muted={muted}
            width="100%"
            height="100%"
            controls={false} // Mantemos os controles customizados
            style={{ borderRadius: "16px", overflow: "hidden" }}
          />

          {/* Seus controles customizados originais */}
          <div className="absolute bottom-4 left-4 flex gap-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {/* Play / Pause */}
            <button onClick={() => setPlaying(!playing)}>
              {playing ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Mute / Unmute */}
            <button onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}