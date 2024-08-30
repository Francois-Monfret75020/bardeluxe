import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar.jsx";
import BookingButton from "./ui/BookingButton";

import { Montserrat, Oswald } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-montserrat",
  });
  
  export const oswald = Oswald({
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-oswald",
  });



export const metadata: Metadata = {
  title: "Bar événementiel mariage",
  description:
    "Nous sommes une entreprise de bar événementiel pour mariage, anniversaire, soirée d'entreprise, etc. Nous sommes basés à Paris et nous nous déplaçons dans toute la France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        {/* Add structured data here */}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${oswald.variable}`}
      >
        <header className="sticky top-0 z-10">
          <NavBar />
        </header>
        <main className="flex flex-col ">{children}</main>
        <div className="fixed bottom-4 right-4 z-50  opacity-80 lg:top-auto lg:bottom-6">
          <BookingButton text="Booking" />
        </div>
        <footer className="h-[600px] sm:h-[300px] p-4 bg-creme">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
