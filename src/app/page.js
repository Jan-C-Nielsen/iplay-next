import { cookies } from "next/headers";
import Image from "next/image";
import PlayListItem from "../PlayListItem.jsx";
import Link from "next/link.js";
import ListenButton from "../ListenButton.jsx";
import { redirect } from "next/navigation.js";

export default async function Home() {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("IPM_AT");

  if (!accessTokenCookie) {
    console.error("Access token cookie not found");
    redirect("/login"); // Redirect to login page if no access token
  }

  const PlayListResponse = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessTokenCookie.value}`
    }
  });

  let Playlists = {};
  if (PlayListResponse.headers.get("Content-Type")?.includes("application/json")) {

    Playlists = await PlayListResponse.json();

    console.log("Playlists:", Playlists);
  }
  else {
    return <div >Error: {PlayListResponse.statusText}</div>;
  }

  return <div className="w-[450px] mx-auto">
    <div className="relative w-full h-64">
      <div className="flex justify-center">
        <Image src="/sound-wave.svg" alt="Example image" width={450} height={272} />
      </div>
      <div className="absolute inset-0 flex items-center justify-left">
        <h1 className="text-white mt-[87px] ml-[26px] text-[36px] font-bold text-left">Playlists</h1>
      </div>
    </div>
    <div className=" flex mt-[70px] text-[20px] items-center justify-center">
      <ul >
        {Playlists.items.map((playlist, index) => (
          <li className="text-[20px] mt-[10px]" key={index}><Link href={`/playlist/${playlist.id}`}>
            <Image src={playlist.images[0].url} alt="Example image" width={playlist.images[2]?.width ?? 100} height={playlist.images[2]?.height ?? 100} />
            {playlist.name}</Link></li>
        ))}
      </ul>
    </div>
    
  </div>
    ;
}
