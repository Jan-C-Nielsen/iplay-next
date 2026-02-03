import ListenButton from "../../../ListenButton";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import PlayListItem from "../../../PlayListItem.jsx";

import { redirect } from "next/navigation";


export default async function AlbumDetail({ params }) {
    const cookieStore = await cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");

    if (!accessTokenCookie) {
        console.error("Access token cookie not found");
        redirect("/login"); // Redirect to home page if no access token
    }

    const album_id = (await params).album_id;
    console.log("params.album_id", album_id);

    //https://api.spotify.com/v1/albums/{album_id}
    const response = await fetch(`https://api.spotify.com/v1/albums/${album_id}`, {
        headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`
        }
    });

    const AlbumDetails = await response.json();

    console.log("AlbumDetails:", AlbumDetails);

    return <div className="w-[450px] mx-auto">
        <div className="relative w-full h-64">
            <div className="flex justify-center z-0">
                <Image src={AlbumDetails.images && AlbumDetails.images.length > 0 ? AlbumDetails.images[0].url : "/sound-wave.svg"} alt="Example image" width={450} height={272} />
            </div>
            <div className="absolute inset-0 flex items-center justify-left">
                <section>
                    <h1 className="text-white mt-[86px] ml-[26px] text-[36px] font-bold text-left">{AlbumDetails.name}</h1>
                    <p className="text-white mt-[13px] ml-[26px] text-[16px] font-normal text-left">{AlbumDetails.total_tracks} Songs</p>
                    <p className="text-white mt-[13px] ml-[26px] text-[16px] font-bold text-left">{AlbumDetails.artists && AlbumDetails.artists.length > 0 ? AlbumDetails.artists.map(artist => artist.name).join(", ") : "Unknown Artist"}</p>
                    <p className="text-white mt-[13px] ml-[26px] text-[16px] font-normal text-left">Release Date: {AlbumDetails.release_date}</p>
                </section>
            </div>
        </div>
        <div className="mt-[160px] pb-30">
            <h2 className="text-[20px] font-bold text-center">{AlbumDetails.name}</h2>
            <ul>
                {AlbumDetails.tracks.items.map((track, index) => (
                    <PlayListItem
                        key={index}
                        track={track}

                    />
                ))}
            </ul>
        </div>
        <ListenButton />
    </div>
        ;
}
