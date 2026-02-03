import Header from "@/header";
import Footer from "../footer";
import "./globals.css";


import Providers from "./providers";

export const metadata = {
  title: "Iplayer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex flex-col h-full dark:bg-gray-900 dark:text-white">
         <Providers>
        <Header />
        <main className="flex-1 overflow-auto -mt-16">
          {children}
        </main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
