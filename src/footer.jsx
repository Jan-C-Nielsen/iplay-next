import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-auto w-full  text-gray-300 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
            <div className="mx-auto max-w-7xl px-4 py-6 text-center">
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
            </div>
        </footer>
    )
}
