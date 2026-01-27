import { NextResponse } from "next/server";

export default function proxy(request) {
  const targetUrl = request.url.replace('/proxy/', 'https://api.spotify.com/v1/');
  const cookies = request.cookies;

   if (!cookies.has('IPM_AT') && cookies.has('IPM_RT')) {
    return NextResponse.redirect(new URL('/api/auth/refresh', request.url));
  }
    
    if (!cookies.has('IPM_AT')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
    matcher:["/"]
};
