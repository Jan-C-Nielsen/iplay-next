"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

 const pathname = usePathname();

  const headerClass = (() => {
    if (pathname === "/") {
      return "bg-transparent text-white";
    }
    if (pathname.startsWith("/search")) {
      return "bg-white/80 backdrop-blur-md text-black";
    }
    if (pathname.startsWith("/profile")) {
      return "bg-black text-white";
    }
    return "bg-white text-black";
  })();

    return (
        <header>
            <div className={`fixed relative z-10 w-[450px] pt-4 pb-4 mx-auto flex ${headerClass} mix-blend-difference`}>
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
