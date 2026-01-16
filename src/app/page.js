import { cookies } from "next/headers";
import Image from "next/image";
import PlayListItem from "../PlayListItem.jsx";
import Link from "next/link.js";
import ListenButton from "../ListenButton.jsx";

export default async function Home() {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("IPM_AT");
  let Playlists = [{ id: '1', name: 'My Playlist 1' }, { id: '2', name: 'My Playlist 2' }, { id: '3', name: 'My Playlist 3' }];

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessTokenCookie.value}`
    }
  });

  console.log(await response);

  const PlayListResponse = await fetch(" https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessTokenCookie.value}`
    }
  });

  Playlists = await PlayListResponse.json();

  console.log("Playlists:", Playlists);

  return <div className="w-[450px] mx-auto">
    <div className="relative w-full h-64">
      <div className="flex justify-center">
        <Image src="/sound-wave.svg" alt="Example image" width={450} height={272} />
      </div>
      <div className="absolute inset-0 flex items-center justify-left">
        <h1 className="text-white mt-[87px] mr-[26px] text-[36px] text-left">Playlists</h1>
      </div>
    </div>
    <div className=" flex mt-[70px] text-[20px] items-center justify-center">
      <ul >
        {Playlists.items.map((playlist) => (
          <li className="text-[20px] mt-[10px]"><Link href={`/playlist/${playlist.id}`}>
             <Image src={playlist.images[0].url} alt="Example image" width={playlist.images[2]?.width ?? 100} height={playlist.images[2]?.height ?? 100} />
             {playlist.name}</Link></li>
        ))}
      </ul>
    </div>
   <ListenButton />
  </div>
    ;
}
