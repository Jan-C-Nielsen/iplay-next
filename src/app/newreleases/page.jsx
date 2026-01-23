import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link.js";
import ListenButton from "../../ListenButton.jsx";
import { redirect } from "next/navigation.js";

export default async function NewReleases() {
    const cookieStore = await cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");

    if (!accessTokenCookie) {
        console.error("Access token cookie not found");
        redirect("/login"); // Redirect to login page if no access token
    }


    const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`
        }
    });

    const NewReleases = await response.json();
    console.log("NewReleases:", NewReleases);

    return (<div className="w-[450px] mx-auto">
        <h1 className=" mt-[8px] text-[27px] text-[#FF6A00] font-bold ">Albums</h1>

        <h2 className="text-black mt-[8px]  text-[15px] font-bold ">New Releases</h2>

        <div className=" flex mt-[7px] text-[20px] items-center justify-center">
            <ul >
                {NewReleases.albums?.items?.map((album, index) => (
                    <li className="flex text-[20px] mt-[10px]" key={index}>
                        <Image className="rounded-[4px]" src={album.images[0].url} alt="Album cover" width={50} height={50} />
                        <section className="ml-[10px]">
                            <div className="text-[15px] font-bold">{album.name}</div>
                            <div className="text-[10px] font-light">{album.artists.map(artist => artist.name).join(", ")}</div>

                        </section>
                        <div className="ml-auto text-right text-[12px] mt-[10px]">{album.total_tracks} Songs</div>
                    </li>
                ))}
            </ul>
        </div>

    </div>)
        ;
}
