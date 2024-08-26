import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar.jsx";
import BookingButton from "./ui/BookingButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add structured data here */}
      </head>
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <header className="sticky top-0 z-10">
          <NavBar />
        </header>
        <main className="flex flex-col ">{children}</main>
        <div className="fixed bottom-10 right-12 lg:top-auto lg:bottom-12">
        <BookingButton text="Booking" />
      </div>
        <footer className="h-[600px] sm:h-[300px] p-4 bg-creme">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
