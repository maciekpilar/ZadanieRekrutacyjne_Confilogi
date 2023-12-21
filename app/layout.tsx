import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Footer, Navbar } from "./components";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "./globals.scss";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Confilogi - Zadanie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
