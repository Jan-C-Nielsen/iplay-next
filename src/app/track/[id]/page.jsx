"use client"

import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function Track({track}) {

const playerRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

function toggleplayer(event) {  

    if(!isPlaying) {
        playerRef.current.play();
        setIsPlaying(true);
    }
    else {
        playerRef.current.pause();
        setIsPlaying(false);
    }


    return (
        <li>
            <button onClick={toggleplayer} className="flex flex-col items-center m-4">
                {isPlaying ? <FaPause></FaPause> : <FaPlay></FaPlay>}
            </button>
            <span>{track.track.name}</span>
            <span>{track.track.artists.map(artist => artist.name).join(", ")}</span>
            <audio ref={playerRef} src="/Zambolino - Heat Is On (freetouse.com).mp3" />

        </li>
    )
}}