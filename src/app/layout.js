import Footer from "../footer";
import "./globals.css";


export const metadata = {
  title: "Iplayer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
