import Footer from "../footer";
import "./globals.css";


export const metadata = {
  title: "Iplayer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="h-full">
      <body className="flex flex-col h-full">
        <main className="flex-1 overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
