import ListenButton from "../../../ListenButton";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import PlayListItem from "@/PlayListItem.jsx";

import PlayListClient from "./PlayListClient";

export default async function Playlist({ params }) {
     const cookieStore = await cookies();// forkert siger AI
   // const cookieStore = cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");
    let Playlist = [];

    const playlist_id = (await params).playlist_id;
    console.log("params.playlist_id", playlist_id);

    //https://api.spotify.com/v1/playlists/{playlist_id}
    const PlayListResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`
        }
    });

    Playlist = await PlayListResponse.json();

    console.log("Playlist:", Playlist);

    return <div className="w-[450px] mx-auto">
        <div className="relative w-full h-64">
            <div className="flex justify-center">
                <Image src="/sound-wave.svg" alt="Example image" width={450} height={272} />
            </div>
            <div className="absolute inset-0 flex items-center justify-left">
                <h1 className="text-white mt-[100px] mr-[26px] text-[36px] text-left">Playlists</h1>
            </div>
        </div>
        <h2 className="mt-[70px] text-[20px] font-bold text-center">{Playlist.name}</h2>
        {/* Client component */}
      <PlayListClient tracks={Playlist.tracks.items} /></div>
        ;
}
