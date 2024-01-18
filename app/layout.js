import { Inter } from "next/font/google";
import "./globals.css";
import AmplitudeContextProvider from "@/context/AmplitudeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amplitude + Next.js 14 Example",
  description:
    "An example of using Amplitude with Next.js 14 for a medium blogpost.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplitudeContextProvider>{children}</AmplitudeContextProvider>
      </body>
    </html>
  );
}
