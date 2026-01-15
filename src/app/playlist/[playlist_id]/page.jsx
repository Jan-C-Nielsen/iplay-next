import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
//import PlayListItem from "../PlayListItem.jsx";

export default async function Playlist({ params }) {
     const cookieStore = await cookies();// forkert siger AI
   // const cookieStore = cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");
    let Playlist = [{ id: '1', name: 'My Playlist 1' }, { id: '2', name: 'My Playlist 2' }, { id: '3', name: 'My Playlist 3' }];

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
                <h1 className="text-white mt-[87px] mr-[26px] text-[36px] text-left">Playlists</h1>
            </div>
        </div>
        <h2 className="mt-[59px] text-[20px] font-bold text-center">Top 50</h2>
        <h2 className="mb-30 text-[20px] font-bold text-center">Rock Ballads</h2>
        <div className=" flex items-center justify-center">
            <ul > {Playlist.tracks.items.map((track) => (
          <li><Link href={`/track/${track.track.id}`}> {track.track.name}</Link></li>
        ))}
            </ul>
        </div>
        <div className=" flex items-center justify-center">
            <button
                type="button"
                className="fixed bottom-8 left-1/2 -translate-x-1/2 border-4 border-red-500 rounded-full px-6 py-3 text-red-500"
            >
                LISTEN ALL
            </button>
        </div>
    </div>
        ;
}
