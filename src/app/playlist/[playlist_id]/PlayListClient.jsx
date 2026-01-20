"use client";

import { useEffect, useState } from "react";
import PlayListItem from "@/PlayListItem";
import ListenButton from "../../../ListenButton";


export default function PlayListClient({ tracks }) {
 
    const [isPlayHovered, setIsPlayHovered] = useState(false);
//console.log("tracks in PlayListClient:", tracks);

useEffect(() => {
 console.log("isPlayHovered in PlayListClient:", isPlayHovered);
}, [isPlayHovered]);
 
  return (
    <>
      <div className="flex items-center justify-center">
        <ul>
          {tracks.map((track, index) => (
            <PlayListItem
              key={index}
              track={track.track}
              onHoverChange={setIsPlayHovered}
            />
          ))}
        </ul>
      </div>

      <ListenButton />
    </>
  );
}
