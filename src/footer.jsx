"use client";

import { redirect } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ToggleDarkmode from "./toggleDarkmode";

export default function Footer() {

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const onclick = () => {
        // Handle Playlists click
        console.log("Playlists clicked");

    }

    // Close menu when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                console.log("Clicked outside, closing menu");
                setOpen(false);
            }
            console.log("Clicked inside menu:", e.target.textContent);
            switch (e.target.textContent) {
                case "Playlists":
                    redirect("/");
                    break;
                case "Albums new releases":
                    redirect("/newreleases");
                    break;
                case "Search":
                    redirect("/search");
                    break;
                default:
                    break;
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);


    return (
        <footer className="mx-auto w-[480px] flex light:text-gray-300 light:bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] dark:bg-gray-800 dark:text-white">
            <div className="mx-auto max-w-7xl px-4 py-6 text-center">
                {/* Clickable image */}
                <button ref={menuRef} onClick={() => setOpen(!open)}>
                    <div className="relative inline-block">

                        {/* Background image */}
                        <Image
                            src="/Path3.png"
                            alt="Background"
                            width={45}
                            height={45}
                            className=""
                        />

                        {/* Overlay image */}
                        <Image
                            src="/_ionicons_svg_md-wifi.png"
                            alt="Overlay"
                            width={35}
                            height={35}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />

                    </div>
                </button>

                {/* Popup menu */}
                {open && (
                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2
                            bg-[#EE0979] text-white rounded-lg shadow-lg
                            w-40 py-2 z-50">
                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:text-blue-500">
                            Playlists
                        </button>
                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:text-blue-500">
                            Albums new releases
                        </button>
                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:text-blue-500">
                            Search
                        </button>
                    </div>
                )}
              
            </div>
  <ToggleDarkmode  />
            
        </footer>
    )
}
