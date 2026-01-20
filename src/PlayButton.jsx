import Image from "next/image";

export default function PlayButton() {
  return (
    <div className="relative w-[30px] h-[30px]">
      <Image
        src="/Ellipse9.png"
        alt="Play background"
        fill
        className="object-contain"
      />

      <Image  className="absolute inset-0 m-auto"
        src="/ionicons_svg_ios-play.png"
        alt="Play icon"
        width={8}
        height={10}
       
      />
    </div>
  );
}
