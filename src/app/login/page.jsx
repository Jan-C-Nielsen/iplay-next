const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

import Image from "next/image";
import Link from "next/link";


export default function LoginPage() {
	return (
        <>
         <div className="flex flex-col items-center text-center gap-6">
        {/* Image */}
        <Image
          src="/music-logo-solid.png"
          alt="Example image"
          width={300}
          height={300}
          className="rounded-lg"
        />

        {/* Headline */}
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to iplayer
        </h1>

		<a 
      className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            
        href={`https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&show_dialog=true&scope=playlist-read-private&scope=streaming&scope=user-read-playback-state&scope=user-modify-playback-state`}>Log on Spotify</a>
       
      </div>
      	</>
    );
}