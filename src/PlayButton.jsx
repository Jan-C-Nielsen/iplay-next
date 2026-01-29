import Image from "next/image";

export default function PlayButton({ isPlaying }) {
  return (
    <div id="play-button" className="relative w-[30px] h-[30px]">
      <Image
        src="/Ellipse9.png"
        alt="Play background"
        fill
        className="object-contain"
      />

      {!isPlaying ? (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="absolute inset-0 m-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="2,1 8,5 2,9" fill="white" />
        </svg>

      ) : (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="absolute inset-0 m-auto"
        >
          <rect width="10" height="10" fill="white" />
        </svg>
      )}
    </div>
  );
}

