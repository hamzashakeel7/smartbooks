import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SmartBooks - Digital Bookkeeping Services",
  description:
    "Affordable bookkeeping solutions for small businesses and freelancers in Pakistan",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-playfair: ${playfair.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
