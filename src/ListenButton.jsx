"use client";

import { useState } from "react";

export default function ListenButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    const audios = Array.from(document.querySelectorAll("audio"));
    if (!audios.length) return;

    // STOP
    if (isPlaying) {
      audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
      });
      setIsPlaying(false);
      return;
    }

    // PLAY
    audios.forEach((audio, i) => {
      audio.onended = () => {
        if (i + 1 < audios.length) {
          audios[i + 1].play();
        } else {
          setIsPlaying(false);
        }
      };
    });

    audios[0].play();
    setIsPlaying(true);
  }

  return (

    <div className=" flex  justify-center">
      <button onClick={handlePlay}
        type="button"
        className="absolute bottom-32 left-1/2 -translate-x-1/2 border-4 border-red-500 rounded-full px-6 py-3 text-red-500"
      >
         {isPlaying ? "STOP" : "LISTEN ALL"}
      </button>
    </div>)
}