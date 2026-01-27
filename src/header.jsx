"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header>
            <div className="fixed relative z-10 w-[450px] pt-4 pb-4 mx-auto flex bg-transparent mix-blend-difference">

                <button className="ml-12 cursor-pointer " onClick={() => router.back()}>
                    <Image
                        src="/_ionicons_svg_ios-arrow-back.svg"
                        alt="Back"
                        width={10} 
                        height={10}
                    />
                </button>

                <Link href="/search" className="ml-auto mr-12">
                    <Image
                        src="/_ionicons_svg_ios-search.svg"
                        alt="Overlay"
                        width={15}
                        height={15}

                    />
                </Link>
            </div>
        </header>
    )
}
