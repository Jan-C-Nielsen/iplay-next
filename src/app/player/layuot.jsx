"use client";

import Script from "next/script";

export default function SpotifySDK() {
  return (
    <Script
      src="https://sdk.scdn.co/spotify-player.js"
      strategy="afterInteractive"
    />
  );
}
