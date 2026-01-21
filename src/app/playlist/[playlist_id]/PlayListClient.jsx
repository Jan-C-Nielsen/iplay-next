"use client";

import { useEffect, useState } from "react";
import PlayListItem from "@/PlayListItem";
import ListenButton from "../../../ListenButton";
import Image from "next/image";


export default function PlayListClient({ tracks }) {

  const [isPlayHovered, setIsPlayHovered] = useState(false);
  //console.log("tracks in PlayListClient:", tracks);

  useEffect(() => {
    console.log("isPlayHovered in PlayListClient:", isPlayHovered);
  }, [isPlayHovered]);

  return (
    <>
      <div className="-mt-48 z-100 relative h-[155px]" >
        {isPlayHovered && (<Image className="mx-auto" src={isPlayHovered} alt="Example image" width={155} height={155} />)}
      </div>
      <div className="flex items-center justify-center mt-10">
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
