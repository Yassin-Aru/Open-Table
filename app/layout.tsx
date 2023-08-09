import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="bg-gray-100  w-full">
          <main className="max-w-full-2xl m-auto bg-white">
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
