"use client";
import { useEffect, useRef, useState } from "react";

export default function Playlist({ tracks }) {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrack = currentIndex !== null ? tracks[currentIndex] : null;

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);

        return () => {
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
        };
    }, []);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => {
            setCurrentIndex((i) => {
                if (i === null || i + 1 >= tracks.length) {
                    return null; // playlist finished
                }
                return i + 1;
            });
        };

        audio.addEventListener("ended", onEnded);
        return () => audio.removeEventListener("ended", onEnded);
    }, [tracks.length]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || currentIndex === null) return;

        audio.src = tracks[currentIndex].url;
        audio.play();
    }, [currentIndex, tracks]);

    const playAll = () => {
        setCurrentIndex(0);
    };

    <button onClick={playAll}>
        ▶ Play All
    </button>

    return (
        <div>
            <button onClick={playAll}>
                {isPlaying ? "Playing…" : "Play All"}
            </button>

            <ul>
                {tracks.map((track, i) => (
                    <li key={track.id}>
                        {i === currentIndex && isPlaying ? "▶ " : ""}
                        {track.title}
                    </li>
                ))}
            </ul>

            <audio ref={audioRef} />
        </div>
    );
}

