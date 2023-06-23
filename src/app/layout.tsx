"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { WorkoutProvider } from "./providers/WorkoutProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <WorkoutProvider>{children}</WorkoutProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
