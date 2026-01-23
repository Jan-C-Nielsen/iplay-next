import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link.js";
//import ListenButton from "../ListenButton.jsx";
import { redirect } from "next/navigation.js";

export async function saveMessage(formData) {
    "use server"
  const msg = formData.get("message");
  console.log("Besked modtaget:", msg);

const encodedMsg = encodeURIComponent(msg);

  redirect(`/search?name=${encodedMsg}`);
}
