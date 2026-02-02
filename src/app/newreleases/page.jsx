import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link.js";
import ListenButton from "../../ListenButton.jsx";
import { redirect } from "next/navigation.js";

export default async function NewReleases({ searchParams }) {
   const params = await searchParams;
    const nextUrl = params ?  params.next : null;

    const cookieStore = await cookies();
    const accessTokenCookie = cookieStore.get("IPM_AT");

    if (!accessTokenCookie) {
        console.error("Access token cookie not found");
        redirect("/login"); // Redirect to login page if no access token
    }

    const url = nextUrl ? decodeURIComponent(nextUrl) : "https://api.spotify.com/v1/browse/new-releases?limit=20";
    
    console.log("Fetching New Releases from URL:", url);

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`
        },
        cache: 'no-store'
    });

    const NewReleases = await response.json();
    console.log("NewReleases:", NewReleases);

    return (<div className="w-[450px] mt-[160px] mx-auto">
        <h1 className=" mt-[8px] text-[27px] text-[#FF6A00] font-bold ">Albums</h1>
        <div className="flex">
            <h2 className="text-black mt-[8px] text-[15px] font-bold ">New Releases</h2>
             {NewReleases.albums?.previous && (
                <Link
                    href={`/newreleases?next=${encodeURI(NewReleases.albums.previous)}`}
                    className="ml-auto text-[15px] text-pink font-light"
                >
                    View previous
                </Link>
            )}
            {NewReleases.albums?.next && (
                <Link
                    href={`/newreleases?next=${encodeURI(NewReleases.albums.next)}`}
                    className="ml-auto text-[15px] text-pink font-light"
                >
                    View next
                </Link>
            )}
        </div>
        <div className=" flex mt-[7px] text-[20px] items-center justify-center">
            <ul >
                {NewReleases.albums?.items?.map((album, index) => (
                    <Link href={`/albumdetail/${album.id}`} >
                        <li className="flex text-[20px] mt-[21px]" key={index}>

                            <Image className="rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.5)]" src={album.images[0].url} alt="Album cover" width={50} height={50} />
                            <section className="ml-[10px]">
                                <div className="text-[15px] font-bold">{album.name}</div>
                                <div className="text-[10px] font-light">{album.artists.map(artist => artist.name).join(", ")}</div>
                            </section>
                            <div className="ml-auto text-right text-[12px] mt-[10px]">{album.total_tracks} Songs</div>

                        </li>
                    </Link>
                ))}
            </ul>
        </div>

    </div>)
        ;
}
