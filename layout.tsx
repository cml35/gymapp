"use client";

import { SessionProvider } from "next-auth/react";
import { WorkoutProvider } from "./providers/WorkoutProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <WorkoutProvider>{children}</WorkoutProvider>
    </SessionProvider>
  );
}
