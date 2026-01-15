import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
//import PlayListItem from "../PlayListItem.jsx";

export default async function Playlist({ params }) {
     const cookieStore = await cookies();// forkert siger AI
   // const cookieStore = cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");
   
    const id = (await params).id; 
    console.log("id", id);

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`
        }
    });

    const Track = await response.json();

    console.log("Track:", Track);

await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
  method: "PUT",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    uris: [`spotify:track:${id}`]
  })
});


    return null
        ;
}
