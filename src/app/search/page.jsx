import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link.js";
//import ListenButton from "../ListenButton.jsx";
import { redirect, useSearchParams } from "next/navigation.js";
import PlayListClient from "../playlist/[playlist_id]/PlayListClient";
import PlayListItem from "@/PlayListItem";
import { saveMessage } from "./actions";
import ListenButton from "@/ListenButton";



export default async function SearchPage({ searchParams }) {

    const name = searchParams != null ? (await searchParams).name : null;
    console.log("Search params:", name);
    let tracks = null;

    if (name != null) {

        const cookieStore = await cookies();
        const accessTokenCookie = cookieStore.get("IPM_AT");

        if (!accessTokenCookie) {
            console.error("Access token cookie not found");
            redirect("/login"); // Redirect to login page if no access token
        }

        console.error("Access token:", accessTokenCookie.value);

        const response = await fetch(`https://api.spotify.com/v1/search?q=track%3A${encodeURIComponent(name)}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessTokenCookie.value}`
            }
        });

        tracks = await response.json();

        console.log(tracks);
    }

    return (
        <div>
            <h1 className="mt-32 mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-900">
                Search Page
            </h1>

            <form
                action={saveMessage}
                className="mx-auto flex max-w-md items-center gap-3 rounded-2xl bg-white p-6 shadow-lg"
            >
                <input
                    name="message"
                    placeholder="Search for a track by title"
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                >
                    Search
                </button>
            </form>

            <div className="flex pb-30 items-center justify-center mt-10">
                <ul>
                    {tracks && tracks.tracks.items.map((track, index) => (
                        console.log("track:", track),
                        <PlayListItem
                            key={index}
                            track={track}

                        />
                    ))}
                </ul>
            </div>
            <ListenButton />
        </div>
    );
}