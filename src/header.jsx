import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header>
            <div className="w-[450px] pt-4 pb-4 mx-auto flex bg-gradient-to-r from-[#EE0979] to-[#FF6A00]">

                <Image className="ml-12"
                    src="/_ionicons_svg_ios-arrow-back.svg"
                    alt="Background"
                    width={10}
                    height={10}

                />
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
