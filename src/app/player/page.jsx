"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export default function SpotifyPlayer({ accessToken }: { accessToken: string }) {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "My Next.js Player",
        getOAuthToken: (cb: (token: string) => void) => {
          cb(accessToken);
        },
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }: any) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }: any) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, [accessToken]);

  return <div>Spotify Player Ready</div>;
}


async function transferPlayback(deviceId: string, token: string) {
  await fetch("https://api.spotify.com/v1/me/player", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      device_ids: [deviceId],
      play: false,
    }),
  });
}


async function playTrack(trackId: string, deviceId: string, token: string) {
  await fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: [`spotify:track:${trackId}`],
      }),
    }
  );
}

export async function PlayerPage({ accessToken }: { accessToken: string }) {
  return (
    <div>       
<SpotifyPlayer accessToken={accessToken} />

<button
  onClick={() => playTrack("TRACK_ID_HERE", deviceId!, accessToken)}
>
  ▶ Play
</button>
    </div>
  );
}
