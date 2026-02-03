"use client";

import Image from "next/image";
import PlayButton from "./PlayButton";

import { useEffect, useRef, useState } from 'react';


export default function PlayListItem({ track, onHoverChange }) {
    const item = { track }; // Wrap track in an object to match previous structure
    const title = item.name;
    const subtitle = item.track.name;
    const artistNames = item.track.artists.map(artist => artist.name).join(", ");
    const duration = item.track.duration_ms ? new Date(item.track.duration_ms).toISOString().substr(14, 5) : null;
    const thumbnailSrc = item.track.album?.images && item.track.album?.images.length > 0 ? item.track.album?.images[0].url : null;

    const isActive = false;
    const onMouseEnter = () => onHoverChange?.(thumbnailSrc); // 👈 send URL;
    const onMouseLeave = () => onHoverChange?.(null);

    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        const onPlay = (e) => {
            document.querySelectorAll("audio").forEach(audio => {
                if (audio !== e.target) {
                    audio.pause();
                }
            });
        };

        document.addEventListener("play", onPlay, true);
        return () => document.removeEventListener("play", onPlay, true);
    }, []);

    useEffect(() => {
        const audio = playerRef.current;
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

    function toggleplayer(event) {

        if (!isPlaying) {
            playerRef.current.play();
            setIsPlaying(true);
        }
        else {
            playerRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={toggleplayer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={[
                    "w-[450px] flex items-center mb-1 p-3 text-left",
                    "hover:bg-gray-400 hover:text-white",
                   
                ].join(" ")}
            >
                <div >
                    <PlayButton isPlaying={isPlaying} />
                </div>

                <div className="ml-5 min-w-0 flex-1">
                    <div className="truncate font-medium">{title}</div>
                    {subtitle ? (
                        <div className="truncate text-base light:text-gray-600  dark:text-white">{subtitle}</div>
                    ) : null}
                    {artistNames ? (
                        <div className=" truncate text-sm light:text-gray-600 dark:text-white">{artistNames}</div>
                    ) : null}
                </div>

                {duration ? (
                    <div className="shrink-0 text-sm light:text-gray-600 dark:text-white tabular-nums">
                        {duration}
                    </div>
                ) : null}
                <audio ref={playerRef} src="/Zambolino - Heat Is On (freetouse.com).mp3" />

            </button>
        </>
    );
}