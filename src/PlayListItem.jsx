"use client";
import Image from "next/image";
import PlayButton from "./PlayButton";

export default function PlayListItem({ track, onHoverChange }) {
    const item = { track }; // Wrap track in an object to match previous structure
    const  title = item.name;
    const subtitle = item.track.name ;
    const artistNames = item.track.artists.map(artist => artist.name).join(", ");
    const duration = item.track.duration_ms ? new Date(item.track.duration_ms).toISOString().substr(14, 5) : null;
    const thumbnailSrc = item.track.album.images && item.track.album.images.length > 0 ? item.track.album.images[0].url : null;

    const isActive = false;
    const onClick = () => {};
    const onMouseEnter = () => onHoverChange?.(true);
    const onMouseLeave = () => onHoverChange?.(false);
    return (
        <>
                 
       
        <button
            type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={[
                "w-full flex items-center gap-3 p-3 rounded-md text-left",
                "hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                isActive ? "bg-gray-100" : "bg-transparent",
            ].join(" ")}
            aria-current={isActive ? "true" : undefined}
        >
            <div >
              <PlayButton />
            </div>

            <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{title}</div>
                {subtitle ? (
                    <div className="truncate text-base text-gray-600">{subtitle}</div>
                ) : null}
                {artistNames ? (
                    <div className=" truncate text-sm text-gray-600">{artistNames}</div>
                ) : null}
            </div>

            {duration ? (
                <div className="shrink-0 text-sm text-gray-600 tabular-nums">
                    {duration}
                </div>
            ) : null}
        </button>
        </>
    );
}