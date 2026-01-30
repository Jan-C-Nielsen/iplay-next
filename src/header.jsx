"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const pathname = usePathname();

    const blackfill = pathname.startsWith("/search") || pathname.startsWith("/newreleases");

    return (
        <header>
            <div className={`fixed relative z-10 w-[450px] pt-4 pb-4 mx-auto flex `}>
                <button className="ml-12 cursor-pointer " onClick={() => router.back()}>
                    <svg width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58512 7.49805L8.26071 1.82693C8.68046 1.40718 8.68046 0.728427 8.26071 0.313144C7.84095 -0.10661 7.16221 -0.102147 6.74246 0.313144L0.312221 6.73893C-0.0941362 7.14528 -0.103078 7.79724 0.280955 8.21698L6.73799 14.6874C6.94787 14.8973 7.22473 15 7.49713 15C7.76951 15 8.04637 14.8973 8.25625 14.6874C8.67599 14.2677 8.67599 13.5889 8.25625 13.1736L2.58512 7.49805Z" fill={blackfill ? "black" : "white"} />
                    </svg>

                </button>

                <Link href="/search" className="ml-auto mr-12">
                    <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8204 13.9143L10.6496 9.7045C11.4658 8.68133 11.9578 7.3848 11.9578 5.97501C11.9578 2.67508 9.28274 0 5.97891 0C2.67509 0 0 2.67899 0 5.97891C0 9.27883 2.67509 11.9539 5.97891 11.9539C7.40823 11.9539 8.71648 11.454 9.74747 10.6183L13.8909 14.8008C14.0159 14.9336 14.1877 15 14.3556 15C14.5158 15 14.6759 14.9414 14.7969 14.8243C15.0547 14.5782 15.0625 14.1721 14.8204 13.9143ZM5.97891 10.6691C4.72533 10.6691 3.54595 10.1809 2.65946 9.29445C1.77298 8.40797 1.28482 7.22858 1.28482 5.97891C1.28482 4.72533 1.77298 3.54595 2.65946 2.66337C3.54595 1.77688 4.72533 1.28873 5.97891 1.28873C7.23249 1.28873 8.41187 1.77688 9.29836 2.66337C10.1849 3.54986 10.673 4.72923 10.673 5.97891C10.673 7.23249 10.1849 8.41187 9.29836 9.29445C8.41187 10.1809 7.23249 10.6691 5.97891 10.6691Z" fill={blackfill ? "black" : "white"} />
                    </svg>
                </Link>
            </div>
        </header>
    )
}
